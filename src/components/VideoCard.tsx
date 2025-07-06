
import React from 'react';
import { Button } from '@/components/ui/button';
import { Video } from 'lucide-react';
interface VideoCardProps {
  video: {
    id: number;
    title: string;
    duration: string;
    price: number;
    thumbnail: string;
  };
  onPurchase: (video: any) => void;
}
const VideoCard = ({
  video,
  onPurchase
}: VideoCardProps) => {
  // Generate a random blurred image from Unsplash
  const getRandomBlurredImage = (seed: number) => {
    const imageIds = ['photo-1649972904349-6e44c42644a7', 'photo-1488590528505-98d2b5aba04b', 'photo-1518770660439-4636190af475', 'photo-1461749280684-dccba630e2f6', 'photo-1486312338219-ce68d2c6f44d', 'photo-1581091226825-a6a2a5aee158', 'photo-1485827404703-89b55fcc595e', 'photo-1526374965328-7f61d4dc18c5', 'photo-1531297484001-80022131f5a1', 'photo-1487058792275-0ad4aaf24ca7'];
    const imageId = imageIds[seed % imageIds.length];
    return `https://images.unsplash.com/${imageId}?w=400&h=225&fit=crop`;
  };
  return <div className="bg-card rounded-xl card-shadow hover:card-shadow-hover transition-all duration-300 overflow-hidden group">
      <div className="relative aspect-video overflow-hidden">
        <img src={getRandomBlurredImage(video.id)} alt={video.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 blur-[8px]" loading="lazy" />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Video className="w-12 h-12 text-white" />
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm font-medium">
          {video.duration}
        </div>
      </div>
      
      <div className="p-4 bg-red-100">
        <h3 className="font-semibold text-card-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {video.title}
        </h3>
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold my-0 text-red-800">
            ₪{video.price}
          </span>
          
          <Button onClick={() => onPurchase(video)} className="px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 text-slate-50 bg-red-900 hover:bg-red-800">
            קנה עכשיו
          </Button>
        </div>
      </div>
    </div>;
};
export default VideoCard;
