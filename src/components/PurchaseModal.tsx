
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: any;
  type: 'video' | 'bundle';
}

const PurchaseModal = ({ isOpen, onClose, item, type }: PurchaseModalProps) => {
  const [formData, setFormData] = useState({
    idNumber: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    tip: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate email sending - in a real app, this would call an API
      const orderData = {
        item: item,
        type: type,
        customer: formData,
        totalPrice: item.price + (parseFloat(formData.tip) || 0),
        orderDate: new Date().toISOString()
      };

      console.log('Sending order email:', orderData);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "ההזמנה נשלחה בהצלחה!",
        description: "פרטי ההזמנה נשלחו למייל yaelshtein11@gmail.com",
      });

      onClose();
      setFormData({ 
        idNumber: '', 
        cardNumber: '', 
        expirationDate: '', 
        cvv: '', 
        tip: ''
      });
      
    } catch (error) {
      toast({
        title: "שגיאה בשליחת ההזמנה",
        description: "אנא נסה שוב או צור קשר ישירות",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpirationDate = (value: string) => {
    const v = value.replace(/\D/g, '');
    if (v.length >= 3) {
      return v.slice(0, 2) + '/' + v.slice(2, 4);
    }
    return v;
  };

  const totalPrice = item?.price + (parseFloat(formData.tip) || 0);

  if (!item) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-right text-xl font-bold">
            השלמת רכישה
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Item Summary */}
          <div className="bg-accent p-4 rounded-lg">
            <h3 className="font-semibold mb-2">
              {type === 'video' ? item.title : item.name}
            </h3>
            <div className="flex justify-between items-center text-lg">
              <span>מחיר:</span>
              <span className="font-bold text-primary">₪{item.price}</span>
            </div>
            {formData.tip && (
              <div className="flex justify-between items-center text-sm mt-1">
                <span>טיפ:</span>
                <span>₪{parseFloat(formData.tip)}</span>
              </div>
            )}
            <hr className="my-2" />
            <div className="flex justify-between items-center text-xl font-bold">
              <span>סה"כ:</span>
              <span className="text-primary">₪{totalPrice}</span>
            </div>
          </div>

          {/* Purchase Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="idNumber" className="text-right block mb-1">
                תעודת זהות *
              </Label>
              <Input
                id="idNumber"
                type="text"
                value={formData.idNumber}
                onChange={(e) => setFormData(prev => ({ ...prev, idNumber: e.target.value }))}
                required
                className="text-right ltr"
                placeholder="123456789"
              />
            </div>

            {/* Credit Card Section */}
            <div className="border-t pt-4">
              <h4 className="text-right font-semibold mb-3 text-primary">פרטי כרטיס אשראי (סימולציה)</h4>
              
              <div className="space-y-3">
                <div>
                  <Label htmlFor="cardNumber" className="text-right block mb-1">
                    מספר כרטיס *
                  </Label>
                  <Input
                    id="cardNumber"
                    type="text"
                    value={formData.cardNumber}
                    onChange={(e) => setFormData(prev => ({ ...prev, cardNumber: formatCardNumber(e.target.value) }))}
                    required
                    className="text-left ltr font-mono"
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="expirationDate" className="text-right block mb-1">
                      תאריך תפוגה *
                    </Label>
                    <Input
                      id="expirationDate"
                      type="text"
                      value={formData.expirationDate}
                      onChange={(e) => setFormData(prev => ({ ...prev, expirationDate: formatExpirationDate(e.target.value) }))}
                      required
                      className="text-left ltr font-mono"
                      placeholder="MM/YY"
                      maxLength={5}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="cvv" className="text-right block mb-1">
                      CVV *
                    </Label>
                    <Input
                      id="cvv"
                      type="text"
                      value={formData.cvv}
                      onChange={(e) => setFormData(prev => ({ ...prev, cvv: e.target.value.replace(/\D/g, '') }))}
                      required
                      className="text-left ltr font-mono"
                      placeholder="123"
                      maxLength={4}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="tip" className="text-right block mb-1">
                טיפ (אופציונלי)
              </Label>
              <Input
                id="tip"
                type="number"
                min="0"
                step="0.01"
                value={formData.tip}
                onChange={(e) => setFormData(prev => ({ ...prev, tip: e.target.value }))}
                className="text-right ltr"
                placeholder="0"
              />
            </div>

            <div className="flex space-x-3 rtl:space-x-reverse pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
                disabled={isSubmitting}
              >
                ביטול
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-primary hover:bg-primary/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'מעבד תשלום...' : 'אשר תשלום'}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PurchaseModal;
