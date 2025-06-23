import React, { useState } from 'react';
import { Copy, Trash2, FileText, Code } from 'lucide-react';
import { PromptOutput as PromptOutputType } from '../types';

interface PromptOutputProps {
  promptOutput: PromptOutputType;
  onClear: () => void;
}

const PromptOutput: React.FC<PromptOutputProps> = ({ promptOutput, onClear }) => {
  const [activeTab, setActiveTab] = useState<'text' | 'json'>('text');
  const [copied, setCopied] = useState(false);

  const generateTextPrompt = (): string => {
    const parts: string[] = [];
    
    if (promptOutput.prompt) parts.push(promptOutput.prompt);
    // if (promptOutput.lighting) parts.push(promptOutput.lighting);
    if (promptOutput.lighting) {
      Object.values(promptOutput.lighting).forEach(value => {
        if (value) parts.push(value);
      });
    }
    if (promptOutput.color_palette) parts.push(promptOutput.color_palette);
    if (promptOutput.mood) parts.push(promptOutput.mood);
    
    if (promptOutput.style) {
      Object.values(promptOutput.style).forEach(value => {
        if (value) parts.push(value);
      });
    }
    
    if (promptOutput.composition) {
      Object.values(promptOutput.composition).forEach(value => {
        if (value) parts.push(value);
      });
    }
    
    if (promptOutput.texture) parts.push(promptOutput.texture);
    if (promptOutput.details) parts.push(promptOutput.details);

    return parts.join(', ');
  };

  const generateJSONPrompt = (): string => {
    return JSON.stringify(promptOutput, null, 2);
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const textPrompt = generateTextPrompt();
  const jsonPrompt = generateJSONPrompt();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 h-full flex flex-col">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Prompt Output</h2>
          <button
            onClick={onClear}
            className="flex items-center space-x-1 text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 text-sm font-medium transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            <span>Clear</span>
          </button>
        </div>
        
        <div className="flex space-x-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
          <button
            onClick={() => setActiveTab('text')}
            className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'text'
                ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Text Format</span>
          </button>
          <button
            onClick={() => setActiveTab('json')}
            className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'json'
                ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            <Code className="w-4 h-4" />
            <span>JSON Format</span>
          </button>
        </div>
      </div>

      <div className="flex-1 p-4">
        <div className="relative">
          <button
            onClick={() => copyToClipboard(activeTab === 'text' ? textPrompt : jsonPrompt)}
            className="absolute top-2 right-2 p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 bg-white dark:bg-gray-700 rounded border border-gray-200 dark:border-gray-600 shadow-sm transition-colors"
          >
            <Copy className="w-4 h-4" />
          </button>
          
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 min-h-[200px] overflow-auto">
            {activeTab === 'text' ? (
              <div className="whitespace-pre-wrap text-sm text-gray-800 dark:text-gray-200 font-mono">
                {textPrompt || 'Select keywords to generate your prompt...'}
              </div>
            ) : (
              <pre className="text-sm text-gray-800 dark:text-gray-200 overflow-auto">
                {jsonPrompt}
              </pre>
            )}
          </div>
        </div>
        
        {copied && (
          <div className="mt-2 text-sm text-green-600 dark:text-green-400 font-medium">
            ✓ Copied to clipboard!
          </div>
        )}
      </div>
    </div>
  );
};

export default PromptOutput;