import React from 'react';
import { useLocation, Link } from 'react-router-dom';
const Header = () => {
  const location = useLocation();
  return <header className="bg-white border-b border-border sticky top-0 z-50 card-shadow">
      <div className="container mx-auto px-4 py-4 bg-slate-50">
        <div className="flex items-center justify-between bg-slate-50">
          <div className="flex items-center space-x-8 rtl:space-x-reverse">
            <Link to="/videos" className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors">
              המלכה נעמה
            </Link>
            <nav className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
              <Link to="/videos" className={`px-3 py-2 rounded-lg transition-colors font-medium ${location.pathname === '/videos' ? 'bg-primary text-primary-foreground' : 'text-foreground hover:text-primary hover:bg-accent'}`}>
                סרטונים
              </Link>
              <Link to="/images" className={`px-3 py-2 rounded-lg transition-colors font-medium ${location.pathname === '/images' ? 'bg-primary text-primary-foreground' : 'text-foreground hover:text-primary hover:bg-accent'}`}>
                תמונות
              </Link>
            </nav>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <nav className="md:hidden mt-4 flex space-x-4 rtl:space-x-reverse">
          <Link to="/videos" className={`flex-1 px-3 py-2 rounded-lg text-center transition-colors font-medium ${location.pathname === '/videos' ? 'bg-primary text-primary-foreground' : 'text-foreground hover:text-primary hover:bg-accent'}`}>
            סרטונים
          </Link>
          <Link to="/images" className={`flex-1 px-3 py-2 rounded-lg text-center transition-colors font-medium ${location.pathname === '/images' ? 'bg-primary text-primary-foreground' : 'text-foreground hover:text-primary hover:bg-accent'}`}>
            תמונות
          </Link>
        </nav>
      </div>
    </header>;
};
export default Header;