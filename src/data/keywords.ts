import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'lighting',
    title: 'Lighting',
    titlePersian: 'نورپردازی',
    icon: 'lightbulb',
    keywords: [],
    subcategories: [

      {
        id: 'light-sources',
        title: 'Light Sources',
        titlePersian: 'منبع نور',
        icon: 'lamp-ceiling',
        keywords: [
          { id: 'soft-box', english: 'Soft box lighting', persian: 'نورسافت باکس', image: new URL('../assets/images/soft-box.webp', import.meta.url).href },
          { id: 'volumetric-lighting', english: 'volumetric-lighting', persian: 'نورپردازی حجمی', image: new URL('../assets/images/volumetric-lighting.webp', import.meta.url).href },
          { id: 'global-illumination', english: 'global illumination', persian: 'نورپردازی سراسری', image: new URL('../assets/images/global-illumination.webp', import.meta.url).href },
          { id: 'ambient-light', english: 'ambient light', persian: 'نور محیطی', image: new URL('../assets/images/ambient-light.webp', import.meta.url).href },
          { id: 'diffuse-lighting', english: 'Diffuse lighting', persian: 'نور پراکنده', image: new URL('../assets/images/diffuse-lighting.webp', import.meta.url).href },
          
          { id: 'sunlight', english: 'Sunlight', persian: 'نور خورشید', image: new URL('../assets/images/sunlight.webp', import.meta.url).href },
          { id: 'sunset', english: 'Sunset', persian: 'غروب آفتاب', image: new URL('../assets/images/sunset.webp', import.meta.url).href },
          { id: 'radiant', english: 'Radiant light rays', persian: 'پرتوهای نور شعاعی', image: new URL('../assets/images/radiant.webp', import.meta.url).href },
          { id: 'god-rays', english: 'God rays', persian: 'اشعه خدا', image: new URL('../assets/images/god-rays.webp', import.meta.url).href },
          { id: 'golden-hour', english: 'Golden hour', persian: 'ساعت طلایی', image: new URL('../assets/images/golden-hour.webp', import.meta.url).href },
          { id: 'natural', english: 'Natural lighting', persian: 'نور طبیعی', image: new URL('../assets/images/natural.webp', import.meta.url).href },
          { id: 'overcast', english: 'Overcast lighting', persian: 'نور آسمان ابری', image: new URL('../assets/images/overcast.webp', import.meta.url).href },
          { id: 'twilight', english: 'Twilight', persian: 'گرگ و میش', image: new URL('../assets/images/twilight.webp', import.meta.url).href },
          { id: 'blue-hour', english: 'Blue hour', persian: 'ساعات آبی (شفق صبحگاهی)', image: new URL('../assets/images/blue-hour.webp', import.meta.url).href },
          { id: 'moonlight', english: 'Moonlight', persian: 'مهتاب', image: new URL('../assets/images/moonlight.webp', import.meta.url).href },

        ]
      },

      {
        id: 'light-intensity',
        title: 'Light Intensity',
        titlePersian: 'شدت نور',
        icon: 'activity',
        keywords: [
          { id: 'hard-lighting', english: 'hard lighting', persian: 'نور سخت', image: new URL('../assets/images/hard-lighting.webp', import.meta.url).href },
          { id: 'hard-shadows', english: 'hard shadows', persian: 'سایه‌های سخت', image: new URL('../assets/images/hard-shadows.webp', import.meta.url).href },
          { id: 'high-contrast', english: 'high-contrast lighting', persian: 'کنتراست بالا', image: new URL('../assets/images/high-contrast.webp', import.meta.url).href },
          { id: 'low-contrast', english: 'low-contrast lighting', persian: 'کنتراست پایین', image: new URL('../assets/images/low-contrast.webp', import.meta.url).href },
        ]
      },

      {
        id: 'lighting-direction',
        title: 'Lighting Direction',
        titlePersian: 'جهت نور',
        icon: 'move-down-right',
        keywords: [
          { id: 'backlight', english: 'backlight', persian: 'نور پشت', image: new URL('../assets/images/backlight.webp', import.meta.url).href },
          { id: 'silhouette', english: 'Silhouetting', persian: 'سایه‌نما (سیلوئت)', image: new URL('../assets/images/silhouette.webp', import.meta.url).href },
          { id: 'rim-lighting', english: 'Rim lighting', persian: 'نور لبه', image: new URL('../assets/images/rim-lighting.webp', import.meta.url).href },

        ]
      },

      {
        id: 'lighting-styles',
        title: 'Lighting Styles',
        titlePersian: 'سبک نورپردازی',
        icon: 'blend',
        keywords: [
          { id: 'studio-lighting', english: 'Studio lighting', persian: 'نورپردازی استودیویی', image: new URL('../assets/images/studio-lighting.webp', import.meta.url).href },
          { id: 'dark-studio', english: 'Dark studio', persian: 'استودیوی تاریک', image: new URL('../assets/images/dark-studio.webp', import.meta.url).href },
          { id: 'cinematic-lighting', english: 'Cinematic lighting', persian: 'نورپردازی سینمایی', image: new URL('../assets/images/cinematic-lighting.webp', import.meta.url).href },
          { id: 'dramatic-lighting', english: 'Dramatic lighting', persian: 'نورپردازی دراماتیک', image: new URL('../assets/images/dramatic-lighting.webp', import.meta.url).href },
          { id: 'dimly-lit', english: 'Dimly lit', persian: 'کم نور', image: new URL('../assets/images/dimly-lit.webp', import.meta.url).href },
          { id: 'dappled-light', english: 'dappled-light', persian: 'نور تکه تکه', image: new URL('../assets/images/dappled-light.webp', import.meta.url).href },
          { id: 'glowing-lights', english: 'glowing lights', persian: 'نورهای درخشان', image: new URL('../assets/images/glowing-lights.webp', import.meta.url).href },
          { id: 'neon-light', english: 'Neon light', persian: 'نئون', image: new URL('../assets/images/neon-light.webp', import.meta.url).href },

        ]
      },
    ]
  },
  {
    id: 'color-palette',
    title: 'Color Palette',
    titlePersian: 'رنگ بندی',
    icon: 'palette',
    keywords: [
      { id: 'vivid', english: 'Vivid Colors', persian: 'رنگ های زنده', image: new URL('../assets/images/vivid-colors.webp', import.meta.url).href },
      { id: 'muted', english: 'Muted colors', persian: 'رنگ های مرده', image: new URL('../assets/images/muted-colors.webp', import.meta.url).href },
      { id: 'vibrant', english: 'Vibrant Colors', persian: 'رنگ‌های پر شور و حرارت', image: new URL('../assets/images/vibrant-colors.webp', import.meta.url).href },
      { id: 'subdued', english: 'Subdued neutrals', persian: 'خنثی', image: new URL('../assets/images/subdued-neutrals.webp', import.meta.url).href },
      { id: 'pale-dusty', english: 'Pale and dusty colors', persian: 'کم‌رنگ و غبارآلود', image: new URL('../assets/images/pale-dusty.webp', import.meta.url).href },
      { id: 'bright-sunny', english: 'Bright and sunny colors', persian: 'روشن و آفتابی', image: new URL('../assets/images/bright-sunny.webp', import.meta.url).href },
      { id: 'cool', english: 'Cool tones', persian: 'رنگ‌های سرد', image: new URL('../assets/images/cool tones.webp', import.meta.url).href },
      { id: 'warm', english: 'Warm tones', persian: 'رنگ‌های گرم', image: new URL('../assets/images/warm-tones.webp', import.meta.url).href },
      { id: 'high-saturation', english: 'High saturation colors', persian: 'اشباع زیاد', image: new URL('../assets/images/high-saturation.webp', import.meta.url).href },
      { id: 'low-saturation', english: 'low saturation colors', persian: 'اشباع کم', image: new URL('../assets/images/low-saturation.webp', import.meta.url).href },


      { id: 'black-white', english: 'Black and White', persian: 'سیاه سفید', image: new URL('../assets/images/black-and-white.webp', import.meta.url).href },
      { id: 'neon-colors', english: 'neon colors', persian: 'نئون', image: new URL('../assets/images/neon-colors.webp', import.meta.url).href },
      { id: 'pastel', english: 'Pastel Palette', persian: 'پالت پاستلی', image: new URL('../assets/images/pastel-palette.webp', import.meta.url).href },
      { id: 'earth', english: 'Earth tones', persian: 'رنگ‌های زمینی', image: new URL('../assets/images/earth-tones.webp', import.meta.url).href },
      { id: 'rainbow', english: 'rainbow colors', persian: 'رنگین کمانی', image: new URL('../assets/images/rainbow.webp', import.meta.url).href },
      { id: 'oceanic', english: 'Oceanic colors', persian: 'رنگ‌های اقیانوسی', image: new URL('../assets/images/Oceanic.webp', import.meta.url).href },
      { id: 'scandinavian-inspired', english: 'Scandinavian-inspired colors', persian: 'اسکاندیناوری', image: new URL('../assets/images/scandinavian-inspired.webp', import.meta.url).href },
      { id: 'sepia-toned', english: 'Sepia-toned', persian: '(قرمز قهوه‌ای) سپیا', image: new URL('../assets/images/sepia-toned.webp', import.meta.url).href },
      { id: 'jewel', english: 'Jewel tones', persian: 'رنگ‌های جواهری', image: new URL('../assets/images/jewel-tones.webp', import.meta.url).href },
      { id: 'vintage-colors', english: 'Vintage', persian: 'قدیمی', image: new URL('../assets/images/vintage.webp', import.meta.url).href },
      { id: 'muted-vintage', english: 'Muted vintage colors', persian: 'رنگ‌های ملایم قدیمی', image: new URL('../assets/images/muted-vintage.webp', import.meta.url).href },
      { id: 'cinematic-grading', english: 'Cinematic color grading', persian: 'تنظیم رنگ سینمایی', image: new URL('../assets/images/cinematic-color.webp', import.meta.url).href },
      // { id: 'soft-dreamy', english: 'Soft and dreamy hues', persian: 'نرم و رویایی', image: new URL('../assets/images/soft-dreamy.webp', import.meta.url).href },
      // { id: 'retro-inspired', english: 'Retro-inspired colors', persian: 'الهام گرفته از رترو', image: new URL('../assets/images/retro-inspired.webp', import.meta.url).href },
    ]
  },
  {
    id: 'mood',
    title: 'Mood',
    titlePersian: 'حس و حال',
    icon: 'heart',
    keywords: [
      { id: 'moody', english: 'Moody', persian: 'تاریک و احساسی', image: new URL('../assets/images/moody.webp', import.meta.url).href },
      { id: 'cheerful', english: 'Cheerful', persian: 'شاد و پرانرژی', image: new URL('../assets/images/cheerful.webp', import.meta.url).href },
      { id: 'dreamy', english: 'Dreamy', persian: 'رویایی و خیال‌انگیز', image: new URL('../assets/images/dreamy.webp', import.meta.url).href },
      { id: 'dramatic-mood', english: 'Dramatic', persian: 'دراماتیک و تاثیرگذار', image: new URL('../assets/images/dramatic.webp', import.meta.url).href },
      { id: 'serene', english: 'Serene', persian: 'آرام و دلنشین', image: new URL('../assets/images/serene.webp', import.meta.url).href },
      { id: 'mysterious', english: 'Mysterious', persian: 'مرموز و اسرارآمیز', image: new URL('../assets/images/mysterious.webp', import.meta.url).href },
      { id: 'romantic', english: 'Romantic', persian: 'عاشقانه و لطیف', image: new URL('../assets/images/romantic.webp', import.meta.url).href },
      { id: 'epic', english: 'Epic', persian: 'حماسی و باشکوه', image: new URL('../assets/images/epic.webp', import.meta.url).href },
    ]
  },
  {
    id: 'style',
    title: 'Style',
    titlePersian: 'سبک',
    icon: 'brush',
    keywords: [],
    subcategories: [
      // {
      //   id: 'rendering-style',
      //   title: 'Rendering Style',
      //   titlePersian: 'تکنیک تصویری',
      //   icon: 'paintbrush',
      //   keywords: [
      //   ]
      // },
      {
        id: 'art-style',
        title: 'Art Style',
        titlePersian: 'سبک‌های هنری',
        icon: 'image',
        keywords: [
          { id: 'realistic', english: 'realistic', persian: 'واقع‌گرایی', image: new URL('../assets/images/realistic.webp', import.meta.url).href },
          { id: 'hyperrealistic', english: 'hyperrealistic', persian: 'فرا واقع‌گرایی', image: new URL('../assets/images/hyperrealistic.webp', import.meta.url).href },
          { id: 'surreal', english: 'surreal', persian: 'سورئال', image: new URL('../assets/images/surreal.webp', import.meta.url).href },
          { id: 'sci-fi', english: 'sci-fi', persian: 'علمی تخیلی', image: new URL('../assets/images/sci-fi.webp', import.meta.url).href },
          { id: 'pop-art', english: 'pop-art style', persian: 'پاپ آرت', image: new URL('../assets/images/pop-art.webp', import.meta.url).href },
          { id: 'cubist', english: 'cubist style', persian: 'کوبیسم', image: new URL('../assets/images/cubist.webp', import.meta.url).href },
          { id: 'abstract', english: 'abstract art style', persian: 'هنر انتزاعی', image: new URL('../assets/images/abstract.webp', import.meta.url).href },
        ]
      },
      {
        id: 'illustration-style',
        title: 'Illustration Style',
        titlePersian: 'سبک‌های تصویرسازی',
        icon: 'pen-tool',
        keywords: [
          { id: 'drawing', english: 'drawing', persian: 'طراحی', image: new URL('../assets/images/drawing.webp', import.meta.url).href },
          { id: 'sketch', english: 'Sketch', persian: 'اسکچ', image: new URL('../assets/images/sketch.webp', import.meta.url).href },
          // { id: 'chiaroscuro', english: 'chiaroscuro', persian: 'سیاه قلم', image: new URL('../assets/images/chiaroscuro.webp', import.meta.url).href },
          { id: 'line-art', english: 'Line art', persian: 'لاین آرت', image: new URL('../assets/images/line-art.webp', import.meta.url).href },
          // { id: 'doodle', english: 'Doodle', persian: 'دودل', image: new URL('../assets/images/doodle.webp', import.meta.url).href },
          { id: '3d-illustration', english: '3D illustration', persian: 'تصویر سه‌بعدی', image: new URL('../assets/images/3d-illustration.webp', import.meta.url).href },
          { id: 'flat-illustration', english: 'Flat illustration', persian: 'تصویر فلت', image: new URL('../assets/images/flat-illustration.webp', import.meta.url).href },
          { id: 'vector', english: 'Vector', persian: 'وکتور', image: new URL('../assets/images/vector.webp', import.meta.url).href },
          { id: 'pixel-art', english: 'Pixel art', persian: 'پیکسل آرت', image: new URL('../assets/images/pixel-art.webp', import.meta.url).href },
          { id: 'digital-paint', english: 'Digital paint', persian: 'نقاشی دیجیتال', image: new URL('../assets/images/digital-paint.webp', import.meta.url).href },
          { id: 'painting', english: 'painting', persian: 'نقاشی', image: new URL('../assets/images/painting.webp', import.meta.url).href },
          { id: 'oil-painting', english: 'oil painting', persian: 'نقاشی رنگ روغن', image: new URL('../assets/images/oil-painting.webp', import.meta.url).href },
          { id: 'watercolor', english: 'Watercolor', persian: 'آبرنگ', image: new URL('../assets/images/watercolor.webp', import.meta.url).href },
          { id: 'graffiti', english: 'Graffiti', persian: 'گرافیتی', image: new URL('../assets/images/graffiti.webp', import.meta.url).href },
          { id: 'concept-art', english: 'Concept art', persian: 'کانسپت آرت', image: new URL('../assets/images/concept-art.webp', import.meta.url).href },
          { id: 'holographic', english: 'Holographic', persian: 'هولوگرافیک', image: new URL('../assets/images/holographic.webp', import.meta.url).href },
          { id: 'comics', english: 'Comics', persian: 'کمیک', image: new URL('../assets/images/comics.webp', import.meta.url).href },
          { id: 'cartoon', english: 'Cartoon', persian: 'کارتون', image: new URL('../assets/images/cartoon.webp', import.meta.url).href },
          { id: 'anime', english: 'Anime style', persian: 'انیمه', image: new URL('../assets/images/anime.webp', import.meta.url).href },
          { id: 'caricature', english: 'Caricature', persian: 'کاریکاتور', image: new URL('../assets/images/caricature.webp', import.meta.url).href },
          { id: 'pixar', english: 'Pixar animation style', persian: 'پیکسار', image: new URL('../assets/images/pixar.webp', import.meta.url).href },
          { id: 'sticker-illustration', english: 'Sticker illustration', persian: 'استیکر', image: new URL('../assets/images/Sticker-illustration.webp', import.meta.url).href },
          { id: 'stencil', english: 'Stencil', persian: 'شابلون', image: new URL('../assets/images/stencil.webp', import.meta.url).href },
          { id: 'collage', english: 'Collage', persian: 'کلاژ', image: new URL('../assets/images/collage.webp', import.meta.url).href },
          { id: 'papercraft', english: 'Papercraft', persian: 'کاردستی کاغذی', image: new URL('../assets/images/papercraft.webp', import.meta.url).href },

        ]
      },
      {
        id: 'artist-reference',
        title: 'Artist Reference',
        titlePersian: 'سبک‌های هنرمندان',
        icon: 'user',
        keywords: [
          { id: 'magritte', english: 'René Magritte', persian: 'رنه ماگریت', image: new URL('../assets/images/magritte.webp', import.meta.url).href },
          { id: 'picasso', english: 'Pablo Picasso', persian: 'پابلو پیکاسو', image: new URL('../assets/images/picasso.webp', import.meta.url).href },
          { id: 'dali', english: 'Salvador Dalí', persian: 'سالوادور دالی', image: new URL('../assets/images/dali.webp', import.meta.url).href },
          { id: 'van-gogh', english: 'Vincent van Gogh', persian: 'ونسان ون گوگ', image: new URL('../assets/images/van-gogh.webp', import.meta.url).href },
        ]
      }
    ]
  },
  {
    id: 'composition',
    title: 'Composition',
    titlePersian: 'ترکیب بندی',
    icon: 'layout',
    keywords: [],
    subcategories: [
      {
        id: 'subject-view',
        title: 'Subject View',
        titlePersian: 'نمای سوژه',
        icon: 'rotate-3d',
        keywords: [
          { id: 'front-view', english: 'Front view', persian: 'رو به رو', image: new URL('../assets/images/front-view.webp', import.meta.url).href },
          { id: 'side-view', english: 'Side view', persian: 'نیم رخ', image: new URL('../assets/images/side-view.webp', import.meta.url).href },
          { id: 'back-view', english: 'Back view', persian: 'از پشت', image: new URL('../assets/images/back-view.webp', import.meta.url).href },
          { id: 'selfie', english: 'Selfie', persian: 'سلفی', image: new URL('../assets/images/selfie.webp', import.meta.url).href },
          { id: 'first-person', english: 'First-Person view', persian: 'نمای اول شخص', image: new URL('../assets/images/first-person.webp', import.meta.url).href },
          { id: 'third-person', english: 'Third-Person View', persian: 'نمای سوم شخص', image: new URL('../assets/images/third-person.webp', import.meta.url).href },
        ]
      },
      {
        id: 'camera-angle',
        title: 'Camera Angle',
        titlePersian: 'زاویه دوربین',
        icon: 'cctv',
        keywords: [
          { id: 'eye-level', english: 'Eye level shot', persian: 'هم‌سطح چشم', image: new URL('../assets/images/eye-level.webp', import.meta.url).href },
          { id: 'low-angle', english: 'Low angle shot', persian: 'از پایین', image: new URL('../assets/images/low-angle.webp', import.meta.url).href },
          { id: 'high-angle', english: 'High angle shot', persian: 'از بالا', image: new URL('../assets/images/high-angle.webp', import.meta.url).href },
          { id: 'overhead', english: 'Overhead view', persian: 'بالای سر', image: new URL('../assets/images/overhead-view.webp', import.meta.url).href },
          { id: 'worms-eye', english: "Worm's eye view", persian: 'نمای دید کرم', image: new URL('../assets/images/Worms-eye.webp', import.meta.url).href },
          { id: 'birds-eye', english: "Bird's eye view", persian: 'نمای دید پرنده', image: new URL('../assets/images/birds-eye.webp', import.meta.url).href },
          { id: 'drone-shot', english: 'Drone shot', persian: 'نمای پهباد', image: new URL('../assets/images/drone-shot.webp', import.meta.url).href },
          { id: 'top-down', english: 'Top-down view', persian: 'بالا به پایین', image: new URL('../assets/images/top-down-view.webp', import.meta.url).href },
          { id: 'aerial-view', english: 'Aerial View', persian: 'نمای هوایی', image: new URL('../assets/images/aerial-view.webp', import.meta.url).href },
        ]
      },
      {
        id: 'framing',
        title: 'Framing',
        titlePersian: 'قاب‌بندی',
        icon: 'frame',
        keywords: [
          { id: 'extreme-close-up', english: 'Extreme Close-up', persian: 'نمای خیلی نزدیک', image: new URL('../assets/images/extreme-close-up.webp', import.meta.url).href },
          { id: 'close-up', english: 'Close-up', persian: 'نمای بسته', image: new URL('../assets/images/close-up.webp', import.meta.url).href },
          { id: 'medium-close-up', english: 'Medium Close-up', persian: 'نمای نیمه‌بسته', image: new URL('../assets/images/medium-close-up.webp', import.meta.url).href },
          { id: 'medium-shot', english: 'Medium Shot', persian: 'نمای متوسط', image: new URL('../assets/images/medium-shot.webp', import.meta.url).href },
          { id: 'long-shot', english: 'Long Shot', persian: 'نمای دور', image: new URL('../assets/images/long-shot.webp', import.meta.url).href },
          { id: 'full-body-shot', english: 'Full Body Shot', persian: 'نمای تمام‌قد', image: new URL('../assets/images/full-body-shot.webp', import.meta.url).href },
          { id: 'wide-shot', english: 'Wide Shot', persian: 'نمای باز', image: new URL('../assets/images/wide-shot.webp', import.meta.url).href },
          { id: 'negative-space-framing', english: 'Negative Space Framing', persian: 'قاب‌بندی با فضای منفی', image: new URL('../assets/images/negative-space-framing.webp', import.meta.url).href },
        ]
      },
      {
        id: 'depth-of-field',
        title: 'Depth of Field',
        titlePersian: 'عمق میدان',
        icon: 'aperture',
        keywords: [
          { id: 'shallow-depth', english: 'shallow depth of field', persian: 'عمق میدان کم', image: new URL('../assets/images/shallow-depth.webp', import.meta.url).href },
          { id: 'blurred-bg', english: 'blurred background', persian: 'پس‌زمینه تار(محو)', image: new URL('../assets/images/blurred-bg.webp', import.meta.url).href },
          { id: 'deep-depth', english: 'Deep depth of field', persian: 'عمق میدان زیاد', image: new URL('../assets/images/deep-depth.webp', import.meta.url).href },
          { id: 'everything-focus', english: 'everything in focus', persian: 'همه چیز در فوکوس', image: new URL('../assets/images/everything-focus.webp', import.meta.url).href },
          { id: 'bokeh', english: 'bokeh Effect', persian: 'بوکه', image: new URL('../assets/images/bokeh.webp', import.meta.url).href },
        ]
      },
      {
        id: 'photo-type',
        title: 'Photo Type',
        titlePersian: 'نوع عکس',
        icon: 'image',
        keywords: [
          { id: 'panorama', english: 'Panorama', persian: 'پانوراما', image: new URL('../assets/images/panorama.webp', import.meta.url).href },
          { id: 'portrait', english: 'Portrait', persian: 'پرتره', image: new URL('../assets/images/portrait.webp', import.meta.url).href },
          { id: 'modeling', english: 'Modeling photography', persian: 'مدلینگ', image: new URL('../assets/images/modeling.webp', import.meta.url).href },
          { id: 'landscape', english: 'Landscape photography', persian: 'منظره', image: new URL('../assets/images/landscape.webp', import.meta.url).href },
          { id: 'product', english: 'Product photography', persian: 'عکاسی محصول', image: new URL('../assets/images/product.webp', import.meta.url).href },
          { id: 'minimalist', english: ' Minimalist Photography', persian: 'عکاسی مینیمالیستی', image: new URL('../assets/images/minimalist.webp', import.meta.url).href },
        ]
      },
      {
        id: 'lens-type',
        title: 'Lens Type',
        titlePersian: 'لنز',
        icon: 'camera',
        keywords: [
          { id: 'wide-lens', english: 'Wide Lens', persian: 'واید', image: new URL('../assets/images/wide-lens.webp', import.meta.url).href },
          { id: 'ultrawide', english: 'Ultra wide angle', persian: 'الترا واید', image: new URL('../assets/images/ultrawide.webp', import.meta.url).href },
          { id: 'telephoto', english: 'Telephoto Lens', persian: 'تله', image: new URL('../assets/images/telephoto.webp', import.meta.url).href },
          { id: 'prime', english: 'Prime Lens', persian: 'لنز پرایم', image: new URL('../assets/images/prime.webp', import.meta.url).href },
          { id: 'zoom', english: 'Zoom Lens', persian: 'لنز زوم', image: new URL('../assets/images/zoom.webp', import.meta.url).href },
          { id: 'fish-eye', english: 'Fish-eye lens', persian: 'لنز فیش‌آی', image: new URL('../assets/images/fish-eye.webp', import.meta.url).href },
          { id: '360', english: '360 Angle', persian: '360 درجه', image: new URL('../assets/images/360.webp', import.meta.url).href },
          { id: 'macro', english: 'Macro Lens', persian: 'ماکرو', image: new URL('../assets/images/macro.webp', import.meta.url).href },
          { id: 'microscopic', english: 'Microscopic perspective', persian: 'نمای میکروسکوپی', image: new URL('../assets/images/microscopic.webp', import.meta.url).href },
        ]
      },
      {
        id: 'perspective',
        title: 'Perspective',
        titlePersian: 'پرسپکتیو',
        icon: 'triangle',
        keywords: [
          { id: 'one-point', english: 'One-point perspective', persian: 'یک نقطه‌ای', image: new URL('../assets/images/one-point.webp', import.meta.url).href },
          { id: 'two-point', english: 'Two-point perspective', persian: 'دو نقطه‌ای', image: new URL('../assets/images/two-point.webp', import.meta.url).href },
          { id: 'three-point', english: 'Three-point perspective', persian: 'سه نقطه‌ای', image: new URL('../assets/images/three-point.webp', import.meta.url).href },
          { id: 'isometric', english: 'Isometric', persian: 'ایزومتریک', image: new URL('../assets/images/isometric.webp', import.meta.url).href },
          { id: 'atmospheric', english: 'Atmospheric perspective', persian: 'پرسپکتیو اتمسفری', image: new URL('../assets/images/atmospheric.webp', import.meta.url).href },
          { id: 'infinite-perspective', english: 'Infinite perspective', persian: 'پرسپکتیو نامحدود', image: new URL('../assets/images/infinite-perspective.webp', import.meta.url).href },

        ]
      }
    ]
  },
  {
    id: 'gaze-direction',
    title: 'Gaze Direction',
    titlePersian: 'جهت نگاه',
    icon: 'eye',
    keywords: [
      { id: 'looking-at-viewer', english: 'Looking at viewer', persian: 'نگاه به بیننده', image: new URL('../assets/images/looking-at-viewer.webp', import.meta.url).href },
      { id: 'slightly-away', english: 'slightly away from camera', persian: 'کمی دور از دوربین', image: new URL('../assets/images/slightly-away.webp', import.meta.url).href },

    ]
  },
  {
    id: 'texture',
    title: 'Texture',
    titlePersian: 'بافت',
    icon: 'layers',
    keywords: [
      { id: 'matte', english: 'Matte', persian: 'مات', image: new URL('../assets/images/matte.webp', import.meta.url).href },
      { id: 'shiny', english: 'Shiny', persian: 'براق', image: new URL('../assets/images/shiny.webp', import.meta.url).href },
      { id: 'polished', english: 'Polished', persian: 'صیقلی', image: new URL('../assets/images/polished.webp', import.meta.url).href },
      { id: 'glossy', english: 'Glossy', persian: 'درخشان', image: new URL('../assets/images/glossy.webp', import.meta.url).href },
      { id: 'transparent', english: 'Transparent', persian: 'شفاف', image: new URL('../assets/images/transparent.webp', import.meta.url).href },
      { id: 'opaque', english: 'Opaque', persian: 'کدر', image: new URL('../assets/images/opaque.webp', import.meta.url).href },
      { id: 'fuzzy', english: 'Fuzzy', persian: 'پرزدار', image: new URL('../assets/images/fuzzy.webp', import.meta.url).href },
      { id: 'grainy', english: 'Grainy', persian: 'دانه‌دار', image: new URL('../assets/images/grainy.webp', import.meta.url).href },
      { id: 'wavy', english: 'Wavy', persian: 'موج‌دار', image: new URL('../assets/images/wavy.webp', import.meta.url).href },
    ]
  },
  {
    id: 'details',
    title: 'Details',
    titlePersian: 'جزئیات',
    icon: 'layout-list',
    keywords: [
      { id: 'highly-detailed', english: 'highly detailed', persian: 'جزئیات بالا', image: new URL('../assets/images/highly-detailed.webp', import.meta.url).href },
    ]
  }
];