"use client";

import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import React from 'react';
import { Button } from '@/components/ui/button'; 
import Templates from '@/app/(data)/Templates';

async function HistoryPage() {

    
    const historyData = await db.select().from(AIOutput);

    
    const getTemplateDetails = (slug: string) => {
        return Templates.find(template => template.slug === slug);
    };

    return (
        <div className="max-w-4xl mx-auto p-6  rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold mb-6 text-center">History</h1>
            
            <div className="overflow-x-auto">
                <table className="w-full h-screen rounded-md shadow-md">
                    <thead className="bg-gray-50 border-b border-gray-300">
                        <tr>
                            <th className="p-3 text-left">Template</th>
                            <th className="p-3 text-left">AI Response</th>
                            <th className="p-3 text-left">Date</th>
                            <th className="p-3 text-left">Words</th>
                            <th className="p-3 text-left">Copy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {historyData.map((entry: any, index) => {
                            const formData = JSON.parse(entry.formData);
                            const wordCount = entry.aiResponse.split(' ').length;
                            const templateDetails = getTemplateDetails(entry.templateSlug || '');

                            return (
                                <tr key={index} className="border-b border-gray-300">
                                    <td className="p-4 flex items-center space-x-4">
                                        {templateDetails?.icon ? (
                                            <img src={templateDetails.icon} alt={templateDetails.name} className="w-12 h-12 object-cover rounded-md" />
                                        ) : (
                                            <div className="w-12 h-12 bg-gray-200 rounded-md flex items-center justify-center">
                                                <span className="text-gray-500">No Image</span>
                                            </div>
                                        )}
                                        <span>{templateDetails?.name || 'No Name'}</span>
                                    </td>
                                    <td className="p-4 truncate max-w-xs">{entry.aiResponse}</td>
                                    <td className="p-4">{entry.createdAt}</td>
                                    <td className="p-4 text-center">{wordCount}</td>
                                    <td className="p-4 text-center">
                                        <Button
                                            onClick={() => navigator.clipboard.writeText(entry.aiResponse)}
                                            className="bg-blue-500 text-white hover:bg-blue-600"
                                        >
                                            Copy
                                        </Button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default HistoryPage;