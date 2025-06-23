export interface Keyword {
  id: string;
  english: string;
  persian: string;
  image: string;
}

export interface Category {
  id: string;
  title: string;
  titlePersian: string;
  icon: string;
  keywords: Keyword[];
  subcategories?: Category[];
}

export interface PromptOutput {
  prompt: string;
  lighting?: {
    light_sources?: string;
    light_intensity?: string;
    lighting_direction?: string;
    lighting_styles?: string;
  };
  color_palette?: string;
  mood?: string;
  style?: {
    rendering_style?: string;
    art_style?: string;
    illustration_style?: string;
    artist_reference?: string;
  };
  composition?: {
    subject_view?: string;
    camera_angle?: string;
    framing?: string;
    depth_of_field?: string;
    photo_type?: string;
    lens_type?: string;
    perspective?: string;
  };
  gaze_direction?: string;
  texture?: string;
  details?: string;

}
