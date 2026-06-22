"use client"

import React, { useEffect, useRef, useState } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy, Check, Download, Trash2, Sparkles, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface props {
  aiOutput: string;
  onClear?: () => void;
}

function OutputSection({ aiOutput, onClear }: props) {
  const editorRef: any = useRef();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (editorRef.current && aiOutput) {
      const editorInstance = editorRef.current.getInstance();
      editorInstance.setMarkdown(aiOutput);
    }
  }, [aiOutput]);

  const handleCopy = () => {
    if (!editorRef.current) return;
    const text = editorRef.current.getInstance().getMarkdown();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    if (!editorRef.current) return;
    const text = editorRef.current.getInstance().getMarkdown();
    const element = document.createElement("a");
    const file = new Blob([text], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = "ai-generation.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear this draft?")) {
      if (editorRef.current) {
        editorRef.current.getInstance().setMarkdown('');
      }
      if (onClear) {
        onClear();
      }
    }
  };

  // Calculate word count
  const getWordCount = () => {
    if (!editorRef.current && !aiOutput) return 0;
    try {
      const text = editorRef.current ? editorRef.current.getInstance().getMarkdown() : aiOutput;
      return text.trim().split(/\s+/).filter(Boolean).length;
    } catch {
      return 0;
    }
  };

  const wordCount = getWordCount();
  const isEmpty = !aiOutput || aiOutput.trim() === '';

  return (
    <div className='bg-[#0B1120] text-slate-100 border border-white/[0.08] rounded-[24px] shadow-2xl overflow-hidden min-h-[500px] flex flex-col justify-between group hover:border-purple-500/20 transition-all duration-300 relative'>
      
      {/* Toast UI Editor Custom Dark Theme Injection */}
      <style>{`
        .toastui-editor-defaultUI {
          border: none !important;
          background-color: #0B1120 !important;
        }
        .toastui-editor-toolbar {
          background-color: #0e1628 !important;
          border-bottom: 1px solid rgba(255,255,255,0.06) !important;
          border-radius: 20px 20px 0 0 !important;
          padding: 8px 16px !important;
        }
        .toastui-editor-toolbar * {
          color: #cbd5e1 !important;
        }
        .toastui-editor-toolbar .toastui-editor-button:hover {
          background-color: rgba(255,255,255,0.05) !important;
          border-color: rgba(255,255,255,0.1) !important;
        }
        .toastui-editor-editor {
          background-color: #0B1120 !important;
        }
        .toastui-editor-contents {
          background-color: #0B1120 !important;
          color: #f1f5f9 !important;
          font-family: 'Inter', sans-serif !important;
          font-size: 16px !important;
          line-height: 1.8 !important;
        }
        .toastui-editor-contents * {
          color: #f1f5f9 !important;
        }
        .toastui-editor-contents p, .toastui-editor-contents li {
          font-size: 16px !important;
          line-height: 1.85 !important;
          color: #cbd5e1 !important;
        }
        .toastui-editor-contents h1, .toastui-editor-contents h2, .toastui-editor-contents h3 {
          color: #f8fafc !important;
          font-weight: 700 !important;
          margin-top: 1.5em !important;
        }
        .toastui-editor-ww-container {
          background-color: #0B1120 !important;
        }
        .toastui-editor-ww-container .toastui-editor-contents {
          background-color: #0B1120 !important;
          color: #cbd5e1 !important;
          padding: 24px !important;
          font-family: 'Inter', sans-serif !important;
        }
        .toastui-editor-mode-switch {
          display: none !important;
        }
      `}</style>

      {/* Result Header */}
      <div className='flex flex-col sm:flex-row justify-between sm:items-center gap-3 p-5 border-b border-white/[0.06] bg-[#0c1324] z-10'>
        <div className="flex items-center gap-2">
          <BookOpen className="h-4.5 w-4.5 text-purple-400" />
          <h2 className='font-bold text-[15px] text-slate-200 uppercase tracking-wider'>Generated Result</h2>
          {!isEmpty && (
            <span className="text-[10px] bg-slate-900 border border-slate-800 text-slate-400 font-bold px-2 py-0.5 rounded-lg ml-2">
              {wordCount} words
            </span>
          )}
        </div>

        {/* Action button triggers */}
        {!isEmpty && (
          <div className="flex items-center gap-2">
            {/* Copy button */}
            <Button 
              onClick={handleCopy}
              className='flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 rounded-xl px-3 py-1.5 h-8.5 text-xs font-semibold transition-all'
            >
              {copied ? (
                <>
                  <Check className='w-3.5 h-3.5 text-green-400' />
                  <span className="text-green-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className='w-3.5 h-3.5' />
                  <span>Copy</span>
                </>
              )}
            </Button>

            {/* Download button */}
            <Button 
              onClick={handleDownload}
              className='flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 rounded-xl px-3 py-1.5 h-8.5 text-xs font-semibold transition-all'
              title="Download text file"
            >
              <Download className='w-3.5 h-3.5' />
              <span>Download</span>
            </Button>

            {/* Clear button */}
            <Button 
              onClick={handleClear}
              className='flex items-center justify-center bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 border border-red-500/15 rounded-xl h-8.5 w-8.5 transition-all'
              title="Clear content editor"
            >
              <Trash2 className='w-3.5 h-3.5' />
            </Button>
          </div>
        )}
      </div>

      {/* Editor Body or Empty State */}
      <div className="flex-1 relative bg-[#0B1120]">
        <AnimatePresence mode="wait">
          {isEmpty ? (
            /* Sparkling Empty State */
            <motion.div 
              key="empty-state"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-[#0B1120] min-h-[450px]"
            >
              {/* Pulsing Sparkles graphic */}
              <motion.div 
                animate={{ scale: [1, 1.05, 1], rotate: [0, 5, -5, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="p-5 bg-gradient-to-tr from-purple-500/10 to-cyan-500/5 rounded-full border border-purple-500/20 shadow-2xl mb-5 flex items-center justify-center relative group"
              >
                <div className="absolute inset-0 bg-purple-500/5 rounded-full blur-xl group-hover:bg-purple-500/10 transition-all duration-300" />
                <Sparkles className="h-10 w-10 text-purple-400 fill-purple-400/10" />
              </motion.div>

              <h3 className="font-extrabold text-lg text-slate-200">✨ Your AI content will appear here</h3>
              <p className="text-xs text-slate-500 max-w-sm leading-relaxed mt-2">
                Describe your topic in the left-hand input panel and click "Generate Draft" to create content.
              </p>
            </motion.div>
          ) : (
            /* Active Editor Canvas */
            <motion.div
              key="editor-state"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="h-full w-full"
            >
              <Editor
                ref={editorRef}
                initialValue="Your content will appear here"
                height="480px"
                initialEditType="wysiwyg"
                useCommandShortcut={true}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}

export default OutputSection;
