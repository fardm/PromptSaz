import { useState, useMemo } from 'react';
import { categories } from '../data/keywords';
import { PromptOutput } from '../types';

export const usePromptBuilder = () => {
  const [selectedKeywords, setSelectedKeywords] = useState<Set<string>>(new Set());
  const [mainSubject, setMainSubject] = useState('');

  const toggleKeyword = (keywordId: string) => {
    setSelectedKeywords(prev => {
      const newSet = new Set(prev);
      if (newSet.has(keywordId)) {
        newSet.delete(keywordId);
      } else {
        newSet.add(keywordId);
      }
      return newSet;
    });
  };

  const clearAll = () => {
    setSelectedKeywords(new Set());
    setMainSubject('');
  };

  const promptOutput: PromptOutput = useMemo(() => {
    const output: PromptOutput = {
      prompt: mainSubject,
    };

    // Helper function to find keyword by id
    const findKeyword = (id: string) => {
      for (const category of categories) {
        const keyword = category.keywords?.find(k => k.id === id);
        if (keyword) return { keyword, categoryId: category.id };
        
        if (category.subcategories) {
          for (const sub of category.subcategories) {
            const subKeyword = sub.keywords?.find(k => k.id === id);
            if (subKeyword) return { keyword: subKeyword, categoryId: category.id, subcategoryId: sub.id };
          }
        }
      }
      return null;
    };

    // Process selected keywords - now supporting multiple selections per category
    selectedKeywords.forEach(keywordId => {
      const result = findKeyword(keywordId);
      if (!result) return;

      const { keyword, categoryId, subcategoryId } = result;

      switch (categoryId) {
        case 'lighting':
          if (!output.lighting) {
            output.lighting = keyword.english;
          } else {
            output.lighting += `, ${keyword.english}`;
          }
          break;
        case 'color-palette':
          if (!output.color_palette) {
            output.color_palette = keyword.english;
          } else {
            output.color_palette += `, ${keyword.english}`;
          }
          break;
        case 'mood':
          if (!output.mood) {
            output.mood = keyword.english;
          } else {
            output.mood += `, ${keyword.english}`;
          }
          break;
        case 'style':
          if (!output.style) output.style = {};
          switch (subcategoryId) {
            case 'rendering-style':
              if (!output.style.rendering_style) {
                output.style.rendering_style = keyword.english;
              } else {
                output.style.rendering_style += `, ${keyword.english}`;
              }
              break;
            case 'art-style':
              if (!output.style.art_style) {
                output.style.art_style = keyword.english;
              } else {
                output.style.art_style += `, ${keyword.english}`;
              }
              break;
            case 'illustration-style':
              if (!output.style.illustration_style) {
                output.style.illustration_style = keyword.english;
              } else {
                output.style.illustration_style += `, ${keyword.english}`;
              }
              break;
            case 'artist-reference':
              if (!output.style.artist_reference) {
                output.style.artist_reference = keyword.english;
              } else {
                output.style.artist_reference += `, ${keyword.english}`;
              }
              break;
          }
          break;
        case 'composition':
          if (!output.composition) output.composition = {};
          switch (subcategoryId) {
            case 'subject-view':
              if (!output.composition.subject_view) {
                output.composition.subject_view = keyword.english;
              } else {
                output.composition.subject_view += `, ${keyword.english}`;
              }
              break;
            case 'camera-angle':
              if (!output.composition.camera_angle) {
                output.composition.camera_angle = keyword.english;
              } else {
                output.composition.camera_angle += `, ${keyword.english}`;
              }
              break;
            case 'framing':
              if (!output.composition.framing) {
                output.composition.framing = keyword.english;
              } else {
                output.composition.framing += `, ${keyword.english}`;
              }
              break;
            case 'depth-of-field':
              if (!output.composition.depth_of_field) {
                output.composition.depth_of_field = keyword.english;
              } else {
                output.composition.depth_of_field += `, ${keyword.english}`;
              }
              break;
            case 'photo-type':
              if (!output.composition.photo_type) {
                output.composition.photo_type = keyword.english;
              } else {
                output.composition.photo_type += `, ${keyword.english}`;
              }
              break;
            case 'lens-type':
              if (!output.composition.lens_type) {
                output.composition.lens_type = keyword.english;
              } else {
                output.composition.lens_type += `, ${keyword.english}`;
              }
              break;
            case 'perspective':
              if (!output.composition.perspective) {
                output.composition.perspective = keyword.english;
              } else {
                output.composition.perspective += `, ${keyword.english}`;
              }
              break;
          }
          break;
        case 'texture':
          if (!output.texture) {
            output.texture = keyword.english;
          } else {
            output.texture += `, ${keyword.english}`;
          }
          break;
        case 'details':
          if (!output.details) {
            output.details = keyword.english;
          } else {
            output.details += `, ${keyword.english}`;
          }
          break;
      }
    });

    return output;
  }, [selectedKeywords, mainSubject]);

  return {
    selectedKeywords,
    mainSubject,
    setMainSubject,
    toggleKeyword,
    clearAll,
    promptOutput,
  };
};