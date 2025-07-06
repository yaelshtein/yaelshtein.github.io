

import React from 'react';
import { Button } from '@/components/ui/button';
import { Image } from 'lucide-react';

interface ImageBundleCardProps {
  bundle: {
    id: number;
    name: string;
    count: number;
    price: number;
    originalPrice?: number;
    description: string;
    popular?: boolean;
  };
  onPurchase: (bundle: any) => void;
}

const ImageBundleCard = ({ bundle, onPurchase }: ImageBundleCardProps) => {
  // Generate a random blurred image from Unsplash
  const getRandomBlurredImage = (seed: number) => {
    const imageIds = [
      'photo-1649972904349-6e44c42644a7',
      'photo-1488590528505-98d2b5aba04b',
      'photo-1518770660439-4636190af475',
      'photo-1461749280684-dccba630e2f6',
      'photo-1486312338219-ce68d2c6f44d',
      'photo-1581091226825-a6a2a5aee158',
      'photo-1485827404703-89b55fcc595e',
      'photo-1526374965328-7f61d4dc18c5',
      'photo-1531297484001-80022131f5a1',
      'photo-1487058792275-0ad4aaf24ca7'
    ];
    const imageId = imageIds[seed % imageIds.length];
    return `https://images.unsplash.com/${imageId}?w=400&h=400&fit=crop`;
  };

  return (
    <div className={`bg-card rounded-xl card-shadow hover:card-shadow-hover transition-all duration-300 overflow-hidden group relative ${
      bundle.popular ? 'ring-2 ring-primary ring-opacity-50' : ''
    }`}>
      {bundle.popular && (
        <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 rounded-bl-lg text-sm font-medium z-10">
          פופולרי
        </div>
      )}
      
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={getRandomBlurredImage(bundle.id + 100)}
          alt={bundle.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 blur-[8px]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/80 to-purple-100/80 flex items-center justify-center">
          <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse bg-white/90 rounded-full px-4 py-2">
            <Image className="w-8 h-8 text-primary" />
            <span className="text-3xl font-bold text-primary">
              {bundle.count}
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="text-center mb-4">
          <h3 className="text-xl font-bold text-card-foreground mb-1 group-hover:text-primary transition-colors">
            {bundle.name}
          </h3>
          <p className="text-muted-foreground text-sm">
            {bundle.description}
          </p>
        </div>
        
        <div className="text-center mb-4">
          <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse">
            <span className="text-3xl font-bold text-primary">
              ₪{bundle.price}
            </span>
            {bundle.originalPrice && (
              <span className="text-lg text-muted-foreground line-through">
                ₪{bundle.originalPrice}
              </span>
            )}
          </div>
          {bundle.originalPrice && (
            <div className="text-sm text-green-600 font-medium mt-1">
              חסכת ₪{bundle.originalPrice - bundle.price}
            </div>
          )}
        </div>
        
        <Button 
          onClick={() => onPurchase(bundle)}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105"
        >
          קנה עכשיו
        </Button>
      </div>
    </div>
  );
};

export default ImageBundleCard;

