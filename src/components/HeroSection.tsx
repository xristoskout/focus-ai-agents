
import { ArrowRight, Bot, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              <span>{t('hero.badge')}</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {t('hero.title')}
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-600 mb-8 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                {t('hero.cta.primary')}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg">
                {t('hero.cta.secondary')}
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">FOCUS AI Agent</h3>
                  <p className="text-sm text-gray-500">{t('hero.demo.status')}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700">{t('hero.demo.message1')}</p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 ml-8">
                  <p className="text-sm text-blue-700">{t('hero.demo.message2')}</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700">{t('hero.demo.message3')}</p>
                </div>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl transform rotate-3 scale-105 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
