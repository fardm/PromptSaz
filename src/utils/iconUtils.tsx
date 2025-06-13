import React from 'react';
import {
  Lightbulb,
  Palette,
  Heart,
  Paintbrush,
  Image,
  PenTool,
  User,
  Layout,
  Eye,
  Camera,
  Square,
  Aperture,
  Circle,
  Triangle,
  Layers,
  Brush,
} from 'lucide-react';

export const getIcon = (iconName: string) => {
  const icons: { [key: string]: React.ComponentType<any> } = {
    lightbulb: Lightbulb,
    palette: Palette,
    heart: Heart,
    brush: Brush,
    paintbrush: Paintbrush,
    image: Image,
    'pen-tool': PenTool,
    user: User,
    layout: Layout,
    eye: Eye,
    camera: Camera,
    frame: Square,
    aperture: Aperture,
    circle: Circle,
    triangle: Triangle,
    layers: Layers,
  };

  return icons[iconName] || Lightbulb;
};