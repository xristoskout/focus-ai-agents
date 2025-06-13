
import { useState } from 'react';
import { Menu, X, Bot, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'el' ? 'en' : 'el');
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold gradient-text">FOCUS AI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-ai-blue transition-colors">
              {t('nav.home')}
            </a>
            <a href="#features" className="text-gray-700 hover:text-ai-blue transition-colors">
              {t('nav.services')}
            </a>
            <a href="#benefits" className="text-gray-700 hover:text-ai-blue transition-colors">
              {t('nav.about')}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-ai-blue transition-colors">
              {t('nav.contact')}
            </a>
          </nav>

          {/* Language Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-1"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'el' ? 'EN' : 'ΕΛ'}</span>
            </Button>
            <Button className="bg-gradient-hero text-white hover:opacity-90">
              {t('contact.cta')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
            >
              <Globe className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-gray-700 hover:text-ai-blue transition-colors">
                {t('nav.home')}
              </a>
              <a href="#features" className="text-gray-700 hover:text-ai-blue transition-colors">
                {t('nav.services')}
              </a>
              <a href="#benefits" className="text-gray-700 hover:text-ai-blue transition-colors">
                {t('nav.about')}
              </a>
              <a href="#contact" className="text-gray-700 hover:text-ai-blue transition-colors">
                {t('nav.contact')}
              </a>
              <Button className="bg-gradient-hero text-white hover:opacity-90 w-full mt-4">
                {t('contact.cta')}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
