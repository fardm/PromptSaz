import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'lighting',
    title: 'Lighting',
    titlePersian: 'نورپردازی',
    icon: 'lightbulb',
    keywords: [
      { id: 'soft-box', english: 'Soft box lighting', persian: 'نورسافت باکس', image: new URL('../assets/images/soft-box-lighting.webp', import.meta.url).href },
      { id: 'studio', english: 'Studio lighting', persian: 'نورپردازی استودیویی', image: new URL('../assets/images/studio-lighting.webp', import.meta.url).href },
      { id: 'dark-studio', english: 'Dark studio', persian: 'استودیوی تاریک', image: new URL('../assets/images/dark-studio.webp', import.meta.url).href },
      { id: 'cinematic', english: 'Cinematic lighting', persian: 'نورپردازی سینمایی', image: new URL('../assets/images/cinematic-lighting.webp', import.meta.url).href },
      { id: 'dramatic', english: 'Dramatic lighting', persian: 'نورپردازی دراماتیک', image: new URL('../assets/images/dramatic-lighting.webp', import.meta.url).href },
      { id: 'diffuse', english: 'Diffuse lighting', persian: 'نور پراکنده', image: new URL('../assets/images/diffuse-lighting.webp', import.meta.url).href },
      { id: 'dimly', english: 'Dimly lit', persian: 'کم نور', image: new URL('../assets/images/dimly-lit.webp', import.meta.url).href },
      { id: 'radiant', english: 'Radiant light rays', persian: 'پرتوهای نور شعاعی', image: new URL('../assets/images/radiant-light-rays.webp', import.meta.url).href },
      { id: 'god-rays', english: 'God rays', persian: 'اشعه خدا', image: new URL('../assets/images/god-rays.webp', import.meta.url).href },
      { id: 'rim', english: 'Rim lighting', persian: 'نور لبه', image: new URL('../assets/images/rim-lighting.webp', import.meta.url).href },
      { id: 'neon', english: 'Neon light', persian: 'نئون', image: new URL('../assets/images/neon-light.webp', import.meta.url).href },
      { id: 'silhouette', english: 'Silhouetting', persian: 'سایه‌نما (سیلوئت)', image: new URL('../assets/images/silhouette.webp', import.meta.url).href },
      { id: 'bokeh', english: 'Bokeh Effect', persian: 'بوکه', image: new URL('../assets/images/bokeh.webp', import.meta.url).href },
      { id: 'natural', english: 'Natural lighting', persian: 'نور طبیعی', image: new URL('../assets/images/natural-lighting.webp', import.meta.url).href },
      { id: 'overcast', english: 'Overcast lighting', persian: 'نور آسمان ابری', image: new URL('../assets/images/overcast-lighting.webp', import.meta.url).href },
      { id: 'sunlight', english: 'Sunlight', persian: 'نور خورشید', image: new URL('../assets/images/sunlight.webp', import.meta.url).href },
      { id: 'sunset', english: 'Sunset', persian: 'غروب آفتاب', image: new URL('../assets/images/sunset.webp', import.meta.url).href },
      { id: 'golden-hour', english: 'Golden hour', persian: 'ساعت طلایی', image: new URL('../assets/images/golden-hour.webp', import.meta.url).href },
      { id: 'twilight', english: 'Twilight', persian: 'گرگ و میش', image: new URL('../assets/images/twilight.webp', import.meta.url).href },
      { id: 'blue-hour', english: 'Blue hour', persian: 'ساعات آبی (شفق صبحگاهی)', image: new URL('../assets/images/blue-hour.webp', import.meta.url).href },
      { id: 'moonlight', english: 'Moonlight', persian: 'مهتاب', image: new URL('../assets/images/moonlight.webp', import.meta.url).href },
    ]
  },
  {
    id: 'color-palette',
    title: 'Color Palette',
    titlePersian: 'رنگ بندی',
    icon: 'palette',
    keywords: [
      { id: 'monochrome', english: 'Monochrome', persian: 'تک رنگ', image: '/images/monochrome.webp' },
      { id: 'duotone', english: 'Duotone', persian: 'دو رنگ', image: '/images/duotone.webp' },
      { id: 'black-white', english: 'Black and White', persian: 'سیاه سفید', image: '/images/black-white.webp' },
      { id: 'subdued', english: 'Subdued neutrals', persian: 'خنثی', image: '/images/subdued-neutrals.webp' },
      { id: 'muted', english: 'Muted colors', persian: 'رنگ های مرده', image: '/images/muted-colors.webp' },
      { id: 'vivid', english: 'Vivid Colors', persian: 'رنگ های زنده', image: '/images/vivid-colors.webp' },
      { id: 'vibrant', english: 'Vibrant Colors', persian: 'رنگ های پر جنب‌و‌جوش', image: '/images/vibrant-colors.webp' },
      { id: 'warm', english: 'Warm tones', persian: 'رنگ‌های گرم', image: '/images/warm-tones.webp' },
      { id: 'cool', english: 'Cool tones', persian: 'رنگ‌های سرد', image: '/images/cool-tones.webp' },
      { id: 'pastel', english: 'Pastel Palette', persian: 'پالت پاستلی', image: '/images/pastel-palette.webp' },
      { id: 'earth', english: 'Earth tones', persian: 'رنگ‌های زمینی', image: '/images/earth-tones.webp' },
      { id: 'jewel', english: 'Jewel tones', persian: 'رنگ‌های جواهری', image: '/images/jewel-tones.webp' },
      { id: 'vintage-colors', english: 'Vintage', persian: 'قدیمی', image: '/images/vintage.webp' },
      { id: 'muted-vintage', english: 'Muted vintage colors', persian: 'رنگ‌های ملایم قدیمی', image: '/images/muted-vintage.webp' },
      { id: 'cinematic-grading', english: 'Cinematic color grading', persian: 'تنظیم رنگ سینمایی', image: '/images/cinematic-grading.webp' },
    ]
  },
  {
    id: 'mood',
    title: 'Mood',
    titlePersian: 'حس و حال',
    icon: 'heart',
    keywords: [
      { id: 'moody', english: 'Moody', persian: 'حال‌وهوای تاریک و احساسی', image: '/images/moody.webp' },
      { id: 'cheerful', english: 'Cheerful', persian: 'شاد و پرانرژی', image: '/images/cheerful.webp' },
      { id: 'dreamy', english: 'Dreamy', persian: 'رویایی و خیال‌انگیز', image: '/images/dreamy.webp' },
      { id: 'dramatic-mood', english: 'Dramatic', persian: 'پرتنش و تاثیرگذار', image: '/images/dramatic-mood.webp' },
      { id: 'serene', english: 'Serene', persian: 'آرام و دلنشین', image: '/images/serene.webp' },
      { id: 'mysterious', english: 'Mysterious', persian: 'مرموز و اسرارآمیز', image: '/images/mysterious.webp' },
      { id: 'romantic', english: 'Romantic', persian: 'عاشقانه و لطیف', image: '/images/romantic.webp' },
      { id: 'epic', english: 'Epic', persian: 'حماسی و باشکوه', image: '/images/epic.webp' },
    ]
  },
  {
    id: 'style',
    title: 'Style',
    titlePersian: 'سبک',
    icon: 'brush',
    subcategories: [
      {
        id: 'rendering-style',
        title: 'Rendering Style',
        titlePersian: 'تکنیک تصویری',
        icon: 'paintbrush',
        keywords: [
          { id: 'watercolor', english: 'Watercolor', persian: 'آبرنگ', image: '/images/watercolor.webp' },
          { id: 'digital-paint', english: 'Digital paint', persian: 'نقاشی دیجیتال', image: '/images/digital-paint.webp' },
          { id: 'holographic', english: 'Holographic', persian: 'هولوگرافیک', image: '/images/holographic.webp' },
          { id: 'graffiti', english: 'Graffiti', persian: 'گرافیتی', image: '/images/graffiti.webp' },
          { id: 'stencil', english: 'Stencil', persian: 'شابلون', image: '/images/stencil.webp' },
          { id: 'collage', english: 'Collage', persian: 'کلاژ', image: '/images/collage.webp' },
          { id: 'papercraft', english: 'Papercraft', persian: 'کاردستی کاغذی', image: '/images/papercraft.webp' },
        ]
      },
      {
        id: 'art-style',
        title: 'Art Style',
        titlePersian: 'سبک‌های هنری',
        icon: 'image',
        keywords: [
          { id: 'realistic', english: 'Realistic', persian: 'واقع‌گرایی', image: '/images/realistic.webp' },
          { id: 'hyperrealism', english: 'Hyperrealism', persian: 'فرا واقع‌گرایی', image: '/images/hyperrealism.webp' },
          { id: 'surrealist', english: 'Surrealist', persian: 'سورئال', image: '/images/surrealist.webp' },
          { id: 'pop-art', english: 'Pop-art', persian: 'پاپ آرت', image: '/images/pop-art.webp' },
          { id: 'cubism', english: 'Cubism', persian: 'کوبیسم', image: '/images/cubism.webp' },
          { id: 'abstract', english: 'Abstract art', persian: 'هنر انتزاعی', image: '/images/abstract.webp' },
          { id: 'fantasy', english: 'Fantasy', persian: 'فانتزی', image: '/images/fantasy.webp' },
          { id: 'fine-art', english: 'Fine art', persian: 'هنرهای زیبا', image: '/images/fine-art.webp' },
          { id: 'pixar', english: 'Pixar style', persian: 'پیکسار', image: new URL('../assets/images/pixar.webp', import.meta.url).href },
        ]
      },
      {
        id: 'illustration-style',
        title: 'Illustration Style',
        titlePersian: 'سبک‌های تصویرسازی',
        icon: 'pen-tool',
        keywords: [
          { id: 'flat-illustration', english: 'Flat illustration', persian: 'تصویر فلت', image: '/images/flat-illustration.webp' },
          { id: '3d-illustration', english: '3D illustration', persian: 'تصویر سه‌بعدی', image: '/images/3d-illustration.webp' },
          { id: 'vector', english: 'Vector', persian: 'وکتور', image: '/images/vector.webp' },
          { id: 'line-art', english: 'Line art', persian: 'لاین آرت', image: '/images/line-art.webp' },
          { id: 'sketch', english: 'Sketch', persian: 'اسکچ', image: '/images/sketch.webp' },
          { id: 'pixel-art', english: 'Pixel art', persian: 'پیکسل آرت', image: new URL('../assets/images/pixel.webp', import.meta.url).href },
          { id: 'concept-art', english: 'Concept art', persian: 'کانسپت آرت', image: '/images/concept-art.webp' },
          { id: 'comics', english: 'Comics', persian: 'کمیک', image: '/images/comics.webp' },
          { id: 'cartoon', english: 'Cartoon', persian: 'کارتون', image: '/images/cartoon.webp' },
          { id: 'anime', english: 'Anime', persian: 'انیمه', image: '/images/anime.webp' },
          { id: 'caricature', english: 'Caricature', persian: 'کاریکاتور', image: '/images/caricature.webp' },
        ]
      },
      {
        id: 'artist-reference',
        title: 'Artist Reference',
        titlePersian: 'سبک‌های هنرمندان',
        icon: 'user',
        keywords: [
          { id: 'magritte', english: 'René Magritte', persian: 'رنه ماگریت', image: '/images/magritte.webp' },
          { id: 'picasso', english: 'Pablo Picasso', persian: 'پابلو پیکاسو', image: '/images/picasso.webp' },
          { id: 'dali', english: 'Salvador Dalí', persian: 'سالوادور دالی', image: '/images/dali.webp' },
          { id: 'van-gogh', english: 'Vincent van Gogh', persian: 'ونسان ون گوگ', image: '/images/van-gogh.webp' },
        ]
      }
    ]
  },
  {
    id: 'composition',
    title: 'Composition',
    titlePersian: 'ترکیب بندی',
    icon: 'layout',
    subcategories: [
      {
        id: 'subject-view',
        title: 'Subject View',
        titlePersian: 'نمای سوژه',
        icon: 'eye',
        keywords: [
          { id: 'front-view', english: 'Front view', persian: 'رو به رو', image: new URL('../assets/images/front-view.webp', import.meta.url).href },
          { id: 'side-view', english: 'Side view', persian: 'نیم رخ', image: new URL('../assets/images/side-view.webp', import.meta.url).href },
          { id: 'back-view', english: 'Back view', persian: 'از پشت', image: new URL('../assets/images/back-view.webp', import.meta.url).href },
          { id: 'selfie', english: 'Selfie', persian: 'سلفی', image: new URL('../assets/images/selfie.webp', import.meta.url).href },
        ]
      },
      {
        id: 'camera-angle',
        title: 'Camera Angle',
        titlePersian: 'زاویه دوربین',
        icon: 'camera',
        keywords: [
          { id: 'eye-level', english: 'Eye level shot', persian: 'هم‌سطح چشم', image: new URL('../assets/images/eye-level.webp', import.meta.url).href },
          { id: 'low-angle', english: 'Low angle shot', persian: 'از پایین', image: new URL('../assets/images/low-angle.webp', import.meta.url).href },
          { id: 'high-angle', english: 'High angle shot', persian: 'از بالا', image: new URL('../assets/images/high-angle.webp', import.meta.url).href },
          { id: 'overhead', english: 'Overhead view', persian: 'بالای سر', image: new URL('../assets/images/overhead-view.webp', import.meta.url).href },
          { id: 'worms-eye', english: "Worm's eye view", persian: 'نمای دید کرم', image: new URL('../assets/images/Worms-eye.webp', import.meta.url).href },
          { id: 'birds-eye', english: "Bird's eye view", persian: 'نمای دید پرنده', image: new URL('../assets/images/birds-eye.webp', import.meta.url).href },
          { id: 'drone-shot', english: 'Drone shot', persian: 'نمای پهباد', image: new URL('../assets/images/drone-shot.webp', import.meta.url).href },
          { id: 'top-down', english: 'Top-down view', persian: 'بالا به پایین', image: new URL('../assets/images/top-down-view.webp', import.meta.url).href },
        ]
      },
      {
        id: 'framing',
        title: 'Framing',
        titlePersian: 'قاب‌بندی',
        icon: 'frame',
        keywords: [
          { id: 'close-up', english: 'Close-up', persian: 'نمای بسته', image: new URL('../assets/images/close-up.webp', import.meta.url).href },
          { id: 'medium-shot', english: 'Medium shot', persian: 'نمای متوسط', image: new URL('../assets/images/medium-shot.webp', import.meta.url).href },
          { id: 'long-shot', english: 'Long shot', persian: 'نمای باز', image: new URL('../assets/images/long-shot.webp', import.meta.url).href },
        ]
      },
      {
        id: 'depth-of-field',
        title: 'Depth of Field',
        titlePersian: 'عمق میدان',
        icon: 'aperture',
        keywords: [
          { id: 'blurred-bg', english: 'Blurred Background', persian: 'پس‌زمینه تار (محو)', image: '/images/blurred-bg.webp' },
          { id: 'sharp-bg', english: 'Sharp Background', persian: 'پس‌زمینه واضح', image: '/images/sharp-bg.webp' },
          { id: 'sharp-focus', english: 'Sharp focus', persian: 'فوکوس واضح', image: '/images/sharp-focus.webp' },
          { id: 'soft-focus', english: 'Soft focus', persian: 'فوکوس نرم', image: '/images/soft-focus.webp' },
        ]
      },
      {
        id: 'photo-type',
        title: 'Photo Type',
        titlePersian: 'نوع عکس',
        icon: 'image',
        keywords: [
          { id: 'panorama', english: 'Panorama', persian: 'پانوراما', image: '/images/panorama.webp' },
          { id: 'portrait', english: 'Portrait', persian: 'پرتره', image: '/images/portrait.webp' },
          { id: 'modeling', english: 'Modeling photography', persian: 'مدلینگ', image: '/images/modeling.webp' },
          { id: 'landscape', english: 'Landscape photography', persian: 'منظره', image: '/images/landscape.webp' },
        ]
      },
      {
        id: 'lens-type',
        title: 'Lens Type',
        titlePersian: 'لنز',
        icon: 'circle',
        keywords: [
          { id: 'wide-lens', english: 'Wide Lens', persian: 'واید', image: '/images/wide-lens.webp' },
          { id: 'telephoto', english: 'Telephoto Lens', persian: 'تله', image: '/images/telephoto.webp' },
          { id: 'macro', english: 'Macro Lens', persian: 'ماکرو', image: '/images/macro.webp' },
          { id: 'microscopic', english: 'Microscopic perspective', persian: 'نمای میکروسکوپی', image: new URL('../assets/images/microscopic.webp', import.meta.url).href },
          { id: 'prime', english: 'Prime Lens', persian: 'لنز پرایم', image: '/images/prime.webp' },
          { id: 'zoom', english: 'Zoom Lens', persian: 'لنز زوم', image: '/images/zoom.webp' },
          { id: 'fish-eye', english: 'Fish-eye lens', persian: 'لنز فیش‌آی', image: '/images/fish-eye.webp' },
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
        ]
      }
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
      { id: 'polished', english: 'Polished', persian: 'صیقلی', image: '/images/polished.webp' },
      { id: 'glossy', english: 'Glossy', persian: 'درخشان', image: '/images/glossy.webp' },
      { id: 'transparent', english: 'Transparent', persian: 'شفاف', image: '/images/transparent.webp' },
      { id: 'opaque', english: 'Opaque', persian: 'کدر', image: '/images/opaque.webp' },
      { id: 'fuzzy', english: 'Fuzzy', persian: 'پرزدار', image: new URL('../assets/images/fuzzy.webp', import.meta.url).href },
      { id: 'grainy', english: 'Grainy', persian: 'دانه‌دار', image: '/images/grainy.webp' },
      { id: 'wavy', english: 'Wavy', persian: 'موج‌دار', image: '/images/wavy.webp' },
      { id: 'embossed', english: 'Embossed', persian: 'برجسته', image: '/images/embossed.webp' },
    ]
  }
];