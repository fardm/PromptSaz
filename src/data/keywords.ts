import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'lighting',
    title: 'Lighting',
    titlePersian: 'نورپردازی',
    icon: 'lightbulb',
    keywords: [
      { id: 'soft-box', english: 'Soft box lighting', persian: 'نورسافت باکس', image: '/images/soft-box-lighting.webp' },
      { id: 'studio', english: 'Studio lighting', persian: 'نورپردازی استودیویی', image: '/images/studio-lighting.webp' },
      { id: 'dark-studio', english: 'Dark studio', persian: 'استودیوی تاریک', image: '/images/dark-studio.webp' },
      { id: 'cinematic', english: 'Cinematic lighting', persian: 'نورپردازی سینمایی', image: '/images/cinematic-lighting.webp' },
      { id: 'dramatic', english: 'Dramatic lighting', persian: 'نورپردازی دراماتیک', image: '/images/dramatic-lighting.webp' },
      { id: 'diffuse', english: 'Diffuse lighting', persian: 'نور پراکنده', image: '/images/diffuse-lighting.webp' },
      { id: 'dimly', english: 'Dimly lit', persian: 'کم نور', image: '/images/dimly-lit.webp' },
      { id: 'radiant', english: 'Radiant light rays', persian: 'پرتوهای نور شعاعی', image: '/images/radiant-light-rays.webp' },
      { id: 'god-rays', english: 'God rays', persian: 'اشعه خدا', image: '/images/god-rays.jpg' },
      { id: 'rim', english: 'Rim lighting', persian: 'نور لبه', image: '/images/rim-lighting.webp' },
      { id: 'neon', english: 'Neon light', persian: 'نئون', image: '/images/neon-light.webp' },
      { id: 'silhouette', english: 'Silhouetting', persian: 'سایه‌نما (سیلوئت)', image: '/images/silhouette.webp' },
      { id: 'bokeh', english: 'Bokeh Effect', persian: 'بوکه', image: '/images/bokeh.webp' },
      { id: 'natural', english: 'Natural lighting', persian: 'نور طبیعی', image: '/images/natural-lighting.jpg' },
      { id: 'overcast', english: 'Overcast lighting', persian: 'نور آسمان ابری', image: '/images/overcast-lighting.jpg' },
      { id: 'sunlight', english: 'Sunlight', persian: 'نور خورشید', image: '/images/sunlight.jpg' },
      { id: 'sunset', english: 'Sunset', persian: 'غروب آفتاب', image: '/images/sunset.jpg' },
      { id: 'golden-hour', english: 'Golden hour', persian: 'ساعت طلایی', image: '/images/golden-hour.webp' },
      { id: 'twilight', english: 'Twilight', persian: 'گرگ و میش', image: '/images/twilight.jpg' },
      { id: 'blue-hour', english: 'Blue hour', persian: 'ساعات آبی (شفق صبحگاهی)', image: '/images/blue-hour.webp' },
      { id: 'moonlight', english: 'Moonlight', persian: 'مهتاب', image: '/images/moonlight.webp' },
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
          { id: 'pixar', english: 'Pixar style', persian: 'پیکسار', image: '/images/pixar-style.jpg' },
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
          { id: 'pixel-art', english: 'Pixel art', persian: 'پیکسل آرت', image: '/images/pixel-art.webp' },
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
          { id: 'front-view', english: 'Front view', persian: 'رو به رو', image: '/images/front-view.webp' },
          { id: 'side-view', english: 'Side view', persian: 'نیم رخ', image: '/images/side-view.webp' },
          { id: 'back-view', english: 'Back view', persian: 'از پشت', image: '/images/back-view.webp' },
          { id: 'selfie', english: 'Selfie', persian: 'سلفی', image: '/images/selfie.webp' },
        ]
      },
      {
        id: 'camera-angle',
        title: 'Camera Angle',
        titlePersian: 'زاویه دوربین',
        icon: 'camera',
        keywords: [
          { id: 'eye-level', english: 'Eye level shot', persian: 'هم‌سطح چشم', image: '/images/eye-level.jpg' },
          { id: 'low-angle', english: 'Low angle shot', persian: 'از پایین', image: '/images/low-angle.jpg' },
          { id: 'high-angle', english: 'High angle shot', persian: 'از بالا', image: '/images/high-angle.jpg' },
          { id: 'overhead', english: 'Overhead view', persian: 'بالای سر', image: '/images/overhead-view.webp' },
          { id: 'worms-eye', english: "Worm's eye view", persian: 'نمای دید کرم', image: '/images/worms-eye.webp' },
          { id: 'birds-eye', english: "Bird's eye view", persian: 'نمای دید پرنده', image: '/images/birds-eye.webp' },
          { id: 'drone-shot', english: 'Drone shot', persian: 'نمای پهباد', image: '/images/drone-shot.webp' },
          { id: 'top-down', english: 'Top-down view', persian: 'بالا به پایین', image: '/images/top-down.webp' },
        ]
      },
      {
        id: 'framing',
        title: 'Framing',
        titlePersian: 'قاب‌بندی',
        icon: 'frame',
        keywords: [
          { id: 'close-up', english: 'Close-up', persian: 'نمای بسته', image: '/images/close-up.webp' },
          { id: 'medium-shot', english: 'Medium shot', persian: 'نمای متوسط', image: '/images/medium-shot.webp' },
          { id: 'long-shot', english: 'Long shot', persian: 'نمای باز', image: '/images/long-shot.webp' },
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
          { id: 'microscopic', english: 'Microscopic perspective', persian: 'نمای میکروسکوپی', image: '/images/microscopic.webp' },
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
          { id: 'one-point', english: 'One-point perspective', persian: 'یک نقطه‌ای', image: '/images/one-point.webp' },
          { id: 'two-point', english: 'Two-point perspective', persian: 'دو نقطه‌ای', image: '/images/two-point.webp' },
          { id: 'three-point', english: 'Three-point perspective', persian: 'سه نقطه‌ای', image: '/images/three-point.webp' },
          { id: 'isometric', english: 'Isometric', persian: 'ایزومتریک', image: '/images/isometric.webp' },
          { id: 'atmospheric', english: 'Atmospheric perspective', persian: 'پرسپکتیو اتمسفری', image: '/images/atmospheric.webp' },
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
      { id: 'matte', english: 'Matte', persian: 'مات', image: '/images/matte.webp' },
      { id: 'shiny', english: 'Shiny', persian: 'براق', image: '/images/shiny.webp' },
      { id: 'polished', english: 'Polished', persian: 'صیقلی', image: '/images/polished.webp' },
      { id: 'glossy', english: 'Glossy', persian: 'درخشان', image: '/images/glossy.webp' },
      { id: 'transparent', english: 'Transparent', persian: 'شفاف', image: '/images/transparent.webp' },
      { id: 'opaque', english: 'Opaque', persian: 'کدر', image: '/images/opaque.webp' },
      { id: 'fuzzy', english: 'Fuzzy', persian: 'پرزدار', image: '/images/fuzzy.webp' },
      { id: 'grainy', english: 'Grainy', persian: 'دانه‌دار', image: '/images/grainy.webp' },
      { id: 'wavy', english: 'Wavy', persian: 'موج‌دار', image: '/images/wavy.webp' },
      { id: 'embossed', english: 'Embossed', persian: 'برجسته', image: '/images/embossed.webp' },
    ]
  }
];