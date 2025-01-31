"use client"

import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { LoaderCircleIcon, Zap } from 'lucide-react';

interface PROPS {
    selectedTemplate?: TEMPLATE;
    userFormInput:any,
    loading:boolean
}

function FormSection({ selectedTemplate , userFormInput, loading}: PROPS) {

    const [formData, setFormData] = useState<any>();

    const handleInputChange = (event: any) => {
        const {name,value}=event.target;
        setFormData({...formData,[name]:value})

    }

    const onSubmit = (e: any) => {
        e.preventDefault();
        userFormInput(formData)
    }

    return (
        <div className='p-5 shadow-md border rounded-lg'>
            {/* @ts-ignore */}
            <Image src={selectedTemplate?.icon} alt='logo' width={70} height={70} />
            <h2 className='font-bold text-2xl mb-2 text-primary'>{selectedTemplate?.name}</h2>
            <p className='text-gray-300 text-sm'>{selectedTemplate?.desc}</p>

            <form className='mt-6' onSubmit={onSubmit}>
                {selectedTemplate?.form?.map((item, index) => (
                    <div key={index} className='my-2 flex flex-col gap-2 mb-4'>
                        <label className='font-semibold'>{item.label}</label>
                        {item.field == 'input' ?
                            <Input name={item.name} required={item?.required}
                                onChange={handleInputChange} />

                            : item.field == 'textarea' ?

                                <Textarea name={item.name} required={item?.required}
                                    onChange={handleInputChange} /> : null}
                    </div>
                ))}
                <Button type='submit' className='gap-2 font-semibold bg-purple-600 hover:bg-purple-600'
                disabled={loading}>
                    {loading&&<LoaderCircleIcon className='animate-spin'/>}
                    Generate <Zap size={20} /> 
                    </Button>
            </form>
        </div>
    )
}

export default FormSection
