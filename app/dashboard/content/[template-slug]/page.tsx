"use client"

import React, { useContext, useState } from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Templates from '@/app/(data)/Templates'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Sparkles, Zap } from 'lucide-react'
import Link from 'next/link'
import { chatSession } from '@/utils/AiModal'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import moment from 'moment'
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext'
import { useRouter } from 'next/navigation'
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext'

interface PROPS {
    params: {
        'template-slug': string
    }
}

function CreateNewContent(props: PROPS) {
    const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => item.slug == props.params['template-slug'])
    const [loading, setLoading] = useState(false);
    const [aiOutput, setAiOutput] = useState<string>('');

    const { user } = useUser();
    const router = useRouter()
    const { totalUsage, setTotalUsage } = useContext(TotalUsageContext)
    const { setUpdateCreditUsage } = useContext(UpdateCreditUsageContext)

    const GenerateAIContent = async (formData: any) => {
        if (Number(totalUsage) >= 13000) {
            alert("Credit limit reached. Please upgrade your plan.")
            router.push('/dashboard/billing')
            return;
        }
        setLoading(true)
        const SelectedPrompt = selectedTemplate?.aiprompt;
        const FinalAIPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;

        try {
            const result = await chatSession.sendMessage(FinalAIPrompt)
            const textResponse = result?.response.text()
            
            setAiOutput(textResponse);
            await SaveInDb(formData, selectedTemplate?.slug, textResponse)
        } catch (error) {
            console.error("AI Generation failed:", error)
        } finally {
            setLoading(false);
            if (setUpdateCreditUsage) {
                setUpdateCreditUsage(Date.now())
            }
        }
    }

    const SaveInDb = async (formData: any, slug: string | undefined, aiResp: string | undefined) => {
        if (!user?.primaryEmailAddress?.emailAddress || !slug || !aiResp) {
            console.error("Missing required fields for DB insert");
            return;
        }
    
        try {
            await db.insert(AIOutput).values({
                formData: JSON.stringify(formData), 
                templateSlug: slug,
                aiResponse: aiResp,
                createdBy: user.primaryEmailAddress.emailAddress, 
                createdAt: moment().format('DD/MM/yyyy'),
            });
        } catch (error) {
            console.error("Failed to save generation log to database:", error)
        }
    };

    return (
        <div className='w-full space-y-6 text-slate-100 pb-10'>
            
            {/* Header Toolbar Actions */}
            <div className="flex items-center">
                <Link href={"/dashboard"}>
                    <Button className='bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 rounded-xl px-4 py-2 flex items-center gap-1.5 text-xs font-semibold h-9'> 
                        <ArrowLeft className="h-4 w-4" /> Back to Dashboard
                    </Button>
                </Link>
            </div>

            {/* Premium Workspace Tool Header Card */}
            <div className="p-5 md:p-6 rounded-2xl bg-slate-900/30 border border-slate-800/60 backdrop-blur-md flex flex-col md:flex-row md:items-center justify-between gap-4 relative overflow-hidden">
                {/* Visual Glow */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/[0.02] rounded-full blur-3xl pointer-events-none" />
                
                <div className="flex items-center gap-4 z-10">
                    <div className="h-14 w-14 bg-slate-950 p-2.5 rounded-2xl border border-slate-800 flex items-center justify-center flex-shrink-0">
                        {selectedTemplate?.icon ? (
                            <img src={selectedTemplate.icon} alt={selectedTemplate.name} className="w-full h-full object-contain" />
                        ) : (
                            <Sparkles className="h-6 w-6 text-purple-400" />
                        )}
                    </div>
                    <div>
                        <h1 className="text-lg md:text-xl font-bold text-slate-200 flex items-center gap-2">
                            {selectedTemplate?.name || 'AI Workspace'}
                        </h1>
                        <p className="text-slate-400 text-xs mt-1 leading-relaxed max-w-2xl">{selectedTemplate?.desc}</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 px-3 py-1.5 rounded-xl text-purple-400 text-xs font-bold w-fit z-10 flex-shrink-0">
                    <Zap className="h-3.5 w-3.5 fill-purple-400 text-purple-400" />
                    <span>Credits Cost: 10</span>
                </div>
            </div>

            {/* Responsive Workspace Grid layout */}
            <div className='flex flex-col md:flex-row gap-6 items-stretch w-full'>
                
                {/* Input Panel (35% width on desktop) */}
                <div className='w-full md:w-[40%] lg:w-[35%] flex-shrink-0'>
                    <FormSection 
                        selectedTemplate={selectedTemplate}
                        userFormInput={(v: any) => GenerateAIContent(v)}
                        loading={loading}
                    />
                </div>

                {/* Result Panel / Editor canvas (65% width on desktop) */}
                <div className="w-full md:w-[60%] lg:w-[65%] flex-grow">
                    <OutputSection 
                        aiOutput={aiOutput} 
                        onClear={() => setAiOutput('')}
                    />
                </div>
                
            </div>

        </div>
    )
}

export default CreateNewContent
