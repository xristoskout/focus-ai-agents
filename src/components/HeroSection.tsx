
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50 min-h-screen flex items-center">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="gradient-text">{t('hero.title')}</span>
              <br />
              <span className="text-gray-800">{t('hero.subtitle')}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-hero text-white hover:opacity-90 transform hover:scale-105 transition-all duration-200"
              >
                {t('hero.cta')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-ai-blue text-ai-blue hover:bg-ai-blue hover:text-white transition-all duration-200"
              >
                <Play className="mr-2 w-5 h-5" />
                {t('hero.demo')}
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative animate-fade-in">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 ai-glow">
              {/* Chat Interface Mockup */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 pb-4 border-b">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-sm text-gray-600">AI Assistant</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-end">
                    <div className="bg-ai-blue text-white px-4 py-2 rounded-lg max-w-xs">
                      Γεια σας! Χρειάζομαι βοήθεια.
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg max-w-xs">
                      Καλησπέρα! Είμαι ο AI βοηθός σας. Πώς μπορώ να σας εξυπηρετήσω;
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <div className="bg-ai-blue text-white px-4 py-2 rounded-lg max-w-xs">
                      Θέλω πληροφορίες για τα προϊόντα σας.
                    </div>
                  </div>
                  
                  <div className="flex justify-start">
                    <div className="bg-gradient-to-r from-ai-purple to-ai-cyan text-white px-4 py-2 rounded-lg max-w-xs animate-pulse-glow">
                      Με χαρά! Έχουμε εξαιρετικές λύσεις για εσάς...
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-ai-blue to-ai-purple rounded-full opacity-20 animate-float"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-ai-cyan to-ai-indigo rounded-full opacity-20 animate-float" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
