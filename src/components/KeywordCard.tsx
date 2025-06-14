import React from 'react';
import { Keyword } from '../types';

interface KeywordCardProps {
  keyword: Keyword;
  isSelected: boolean;
  onToggle: (keywordId: string) => void;
  showTranslation: boolean;
}

const KeywordCard: React.FC<KeywordCardProps> = ({
  keyword,
  isSelected,
  onToggle,
  showTranslation,
}) => {
  return (
    <div
      className={`
        relative cursor-pointer rounded-lg border-2 transition-all duration-200 hover:scale-105
        ${isSelected 
          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-400 shadow-md' 
          : 'border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500 hover:shadow-sm'
        }
      `}
      onClick={() => onToggle(keyword.id)}
    >
      <div className="p-3">
        <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-100 dark:bg-gray-600 mb-2">
          <img
            src={keyword.image}
            alt={keyword.english}
            className="h-full w-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = `https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop`;
            }}
          />
        </div>
        <div className="text-center">
          <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
            {keyword.english}
          </p>
          {showTranslation && (
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {keyword.persian}
            </p>
          )}
        </div>
      </div>
      {isSelected && (
        <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default KeywordCard;