import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Category } from '../types';
import KeywordCard from './KeywordCard';
import { getIcon } from '../utils/iconUtils';

interface CategorySectionProps {
  category: Category;
  selectedKeywords: Set<string>;
  onKeywordToggle: (keywordId: string) => void;
  showTranslation: boolean;
  level?: number;
}

const CategorySection: React.FC<CategorySectionProps> = ({
  category,
  selectedKeywords,
  onKeywordToggle,
  showTranslation,
  level = 0,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const selectedCount = category.keywords?.filter(k => selectedKeywords.has(k.id)).length || 0;
  const subcategorySelectedCount = category.subcategories?.reduce((total, sub) => {
    return total + (sub.keywords?.filter(k => selectedKeywords.has(k.id)).length || 0);
  }, 0) || 0;

  const totalSelected = selectedCount + subcategorySelectedCount;
  const IconComponent = getIcon(category.icon);

  return (
    <div className={`border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 shadow-sm ${level > 0 ? 'ml-4 mt-4' : 'mb-4'}`}>
      <div
        className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 rounded-t-lg transition-colors"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center space-x-3">
          <IconComponent className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          <div>
            <h3 className="font-medium text-gray-900 dark:text-white">
              {category.title}
            </h3>
            {showTranslation && (
              <p className="text-sm text-gray-500 dark:text-gray-400">{category.titlePersian}</p>
            )}
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {totalSelected > 0 && (
            <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium px-2.5 py-0.5 rounded-full">
              {totalSelected} selected
            </span>
          )}
          {isExpanded ? (
            <ChevronDown className="w-5 h-5 text-gray-400 dark:text-gray-500" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-400 dark:text-gray-500" />
          )}
        </div>
      </div>

      {isExpanded && (
        <div className="px-4 pb-4">
          {category.keywords && category.keywords.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-4">
              {category.keywords.map((keyword) => (
                <KeywordCard
                  key={keyword.id}
                  keyword={keyword}
                  isSelected={selectedKeywords.has(keyword.id)}
                  onToggle={onKeywordToggle}
                  showTranslation={showTranslation}
                />
              ))}
            </div>
          )}

          {category.subcategories && category.subcategories.map((subcategory) => (
            <CategorySection
              key={subcategory.id}
              category={subcategory}
              selectedKeywords={selectedKeywords}
              onKeywordToggle={onKeywordToggle}
              showTranslation={showTranslation}
              level={level + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CategorySection;