'use client';

import React, { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

// Dynamically import the Editor to disable SSR
const Editor = dynamic(() => import('@toast-ui/react-editor').then((mod) => mod.Editor), { ssr: false });

interface props{
  aiOutput:string;
}

const OutputSection = ({aiOutput}:props) => {
  const editorRef:any = useRef();

 
  useEffect(() => {
    if (editorRef.current) {
      const instance = editorRef.current.getInstance();
      instance.setMarkdown(aiOutput);
    }
  }, [aiOutput]);

  const handleOnChange = () => {
    
    if (editorRef.current) {
      const markdown = editorRef.current.getInstance().getMarkdown();  // Corrected method call
      console.log(markdown);
    }
  };

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex items-center text-center p-5 justify-between">
        <h2 className='font-medium text-lg '>Result</h2>
        <Button className='flex gap-2 items-center'>
          <Copy height={4} width={4} /> Copy
        </Button>
      </div>

      {/* Toast UI Editor */}
      <Editor
        ref={editorRef}
        initialValue="Your Result will Appear here"
        initialEditType="wysiwyg"
        height="600px"
        useCommandShortcut={true}
        onChange={handleOnChange}  // Using the function to handle onChange event
      />
    </div>
  );
};

export default OutputSection;
