
import React, { useState } from 'react';
import Header from '@/components/Header';
import ImageBundleCard from '@/components/ImageBundleCard';
import PurchaseModal from '@/components/PurchaseModal';

const Images = () => {
  const [selectedBundle, setSelectedBundle] = useState(null);
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);

  const imageBundles = [
    {
      id: 1,
      name: 'חבילת תמונה יחידה',
      count: 1,
      price: 15,
      description: 'תמונה דיגיטלית איכותית אחת'
    },
    {
      id: 2,
      name: 'חבילת 3 תמונות',
      count: 3,
      price: 35,
      originalPrice: 45,
      description: 'שלוש תמונות דיגיטליות איכותיות'
    },
    {
      id: 3,
      name: 'חבילת 5 תמונות',
      count: 5,
      price: 55,
      originalPrice: 75,
      description: 'חמש תמונות דיגיטליות איכותיות',
      popular: true
    },
    {
      id: 4,
      name: 'חבילת 10 תמונות',
      count: 10,
      price: 95,
      originalPrice: 150,
      description: 'עשר תמונות דיגיטליות איכותיות'
    },
    {
      id: 5,
      name: 'חבילת 20 תמונות',
      count: 20,
      price: 165,
      originalPrice: 300,
      description: 'עשרים תמונות דיגיטליות איכותיות - המבצע הטוב ביותר!'
    }
  ];

  const handlePurchase = (bundle: any) => {
    setSelectedBundle(bundle);
    setIsPurchaseModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsPurchaseModalOpen(false);
    setSelectedBundle(null);
  };

  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            תמונות דיגיטליות
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            חבילות תמונות דיגיטליות איכותיות במחירים מיוחדים. ככל שתקנה יותר - כך תחסוך יותר!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {imageBundles.map((bundle) => (
            <ImageBundleCard
              key={bundle.id}
              bundle={bundle}
              onPurchase={handlePurchase}
            />
          ))}
        </div>
      </main>

      <PurchaseModal
        isOpen={isPurchaseModalOpen}
        onClose={handleCloseModal}
        item={selectedBundle}
        type="bundle"
      />
    </div>
  );
};

export default Images;
