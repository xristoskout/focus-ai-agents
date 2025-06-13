
import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <span className="text-xl font-bold text-gray-800">FOCUS AI</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
              {t('nav.features')}
            </a>
            <a href="#benefits" className="text-gray-600 hover:text-blue-600 transition-colors">
              {t('nav.benefits')}
            </a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              {t('nav.contact')}
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-1"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'el' ? 'EN' : 'EL'}</span>
            </Button>

            <Button className="hidden md:inline-flex">
              {t('nav.contact')}
            </Button>

            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">
                {t('nav.features')}
              </a>
              <a href="#benefits" className="text-gray-600 hover:text-blue-600 transition-colors">
                {t('nav.benefits')}
              </a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                {t('nav.contact')}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
