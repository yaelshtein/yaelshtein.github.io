import React, { useState } from 'react';
import Header from '@/components/Header';
import VideoCard from '@/components/VideoCard';
import PurchaseModal from '@/components/PurchaseModal';
const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);

  // Mock data for 20 videos
  const videos = Array.from({
    length: 20
  }, (_, i) => ({
    id: i + 1,
    title: `סרטון מקצועי מספר ${i + 1} - תוכן דיגיטלי איכותי`,
    duration: `${Math.floor(Math.random() * 10) + 1}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`,
    price: Math.floor(Math.random() * 50) + 20,
    thumbnail: `video-${i + 1}.jpg`
  }));
  const handlePurchase = (video: any) => {
    setSelectedVideo(video);
    setIsPurchaseModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsPurchaseModalOpen(false);
    setSelectedVideo(null);
  };
  return <div className="min-h-screen gradient-bg">
      <Header />
      
      <main className="container mx-auto px-4 py-8 bg-white">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-red-800">סרטונים סקסים שלי 3&gt;</h1>
          <p className="text-xl max-w-2xl mx-auto text-red-950">אל תשכחו לעדכן כשגמרתם ;)</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map(video => <VideoCard key={video.id} video={video} onPurchase={handlePurchase} />)}
        </div>
      </main>

      <PurchaseModal isOpen={isPurchaseModalOpen} onClose={handleCloseModal} item={selectedVideo} type="video" />
    </div>;
};
export default Videos;