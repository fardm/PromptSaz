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
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">PromptSaz</h1>
                <label for="main-subject" class="block text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">AI Image Prompt Builder</label>
                {/* <p class="text-sm text-gray-500 dark:text-gray-400">AI Image Prompt Builder</p> */}
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
                {/* {showTranslation && (
                  <span className="text-sm text-gray-500 dark:text-gray-400 font-normal ml-2">تنظیمات پرامپت</span>
                )} */}
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
{/* Footer */}
<footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} PromptSaz.
            </p>
            <div className="flex space-x-4 mt-4 sm:mt-0">
              <a href="https://github.com/fardm" target="_blank"></a>
              <a href="https://t.me/ifard_ir/" target="_blank" ></a>
              <a href="https://x.com/ifard_ir/" target="_blank"></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;