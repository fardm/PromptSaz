import React, { useState, useEffect } from 'react';
import { Languages, Wand2, Sun, Moon } from 'lucide-react';
import { categories } from './data/keywords';
import CategorySection from './components/CategorySection';
import PromptOutput from './components/PromptOutput';
import { usePromptBuilder } from './hooks/usePromptBuilder';

function App() {
  const [showTranslation, setShowTranslation] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const {
    selectedKeywords,
    mainSubject,
    setMainSubject,
    toggleKeyword,
    clearAll,
    promptOutput,
  } = usePromptBuilder();

  // Apply dark mode class to document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-2 rounded-lg">
                <Wand2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">AI Prompt Builder</h1>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setShowTranslation(!showTranslation)}
                className={`flex items-center justify-center w-10 h-10 rounded-lg font-medium transition-colors ${
                  showTranslation
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <Languages className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Prompt Configuration
                {showTranslation && (
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-normal ml-2">تنظیمات پرومپت</span>
                )}
              </h2>
              
              <div className="mb-6">
                <label htmlFor="main-subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Main Subject/Scene
                  {showTranslation && (
                    <span className="text-gray-500 dark:text-gray-400 ml-2">(موضوع اصلی/صحنه)</span>
                  )}
                </label>
                <textarea
                  id="main-subject"
                  value={mainSubject}
                  onChange={(e) => setMainSubject(e.target.value)}
                  placeholder="Describe your main subject or scene..."
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  rows={3}
                />
              </div>
            </div>

            <div className="space-y-4">
              {categories.map((category) => (
                <CategorySection
                  key={category.id}
                  category={category}
                  selectedKeywords={selectedKeywords}
                  onKeywordToggle={toggleKeyword}
                  showTranslation={showTranslation}
                />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <PromptOutput
                promptOutput={promptOutput}
                onClear={clearAll}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;