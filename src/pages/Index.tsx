
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Video, Image } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <Header />
      
      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center py-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            ברוכים הבאים ל
            <span className="text-primary block mt-2">דיגיטל מדיה</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            הפלטפורמה המובילה לתוכן דיגיטלי איכותי - סרטונים וחבילות תמונות במחירים מיוחדים
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
            {/* Videos Section */}
            <div className="bg-card p-8 rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-300 group">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Video className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">
                סרטונים דיגיטליים
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                אوסף מקצועי של 20 סרטונים דיגיטליים איכותיים במגוון נושאים ומחירים מיוחדים
              </p>
              <Link to="/videos">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-medium transition-all duration-200 hover:scale-105">
                  עיון בסרטונים
                </Button>
              </Link>
            </div>

            {/* Images Section */}
            <div className="bg-card p-8 rounded-2xl card-shadow hover:card-shadow-hover transition-all duration-300 group">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Image className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">
                חבילות תמונות
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                חבילות תמונות דיגיטליות באיכות גבוהה עם הנחות מיוחדות לרכישות כמות
              </p>
              <Link to="/images">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-medium transition-all duration-200 hover:scale-105">
                  עיון בחבילות
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              למה לבחור בנו?
            </h2>
            <p className="text-muted-foreground text-lg">
              הפלטפורמה המובילה לתוכן דיגיטלי איכותי בישראל
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">איכות גבוהה</h3>
              <p className="text-muted-foreground">כל התכנים עוברים בדיקת איכות קפדנית</p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">הורדה מיידית</h3>
              <p className="text-muted-foreground">קבל את התכנים שלך מיד לאחר הרכישה</p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">₪</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">מחירים מיוחדים</h3>
              <p className="text-muted-foreground">מחירים תחרותיים עם הנחות לכמויות</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 דיגיטל מדיא - כל הזכויות שמורות
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
