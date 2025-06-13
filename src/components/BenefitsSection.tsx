
import { Clock, TrendingDown, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const BenefitsSection = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Clock,
      title: t('benefits.available.title'),
      description: t('benefits.available.description'),
      stat: '24/7'
    },
    {
      icon: TrendingDown,
      title: t('benefits.cost.title'),
      description: t('benefits.cost.description'),
      stat: '-60%'
    },
    {
      icon: Heart,
      title: t('benefits.satisfaction.title'),
      description: t('benefits.satisfaction.description'),
      stat: '+95%'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('benefits.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="relative group"
            >
              <div className="text-center p-8 rounded-2xl bg-white border border-gray-200 hover:border-ai-blue/50 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                {/* Large Stat Number */}
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-4">
                  {benefit.stat}
                </div>
                
                <div className="w-12 h-12 bg-gradient-to-r from-ai-blue to-ai-purple rounded-xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
              
              {/* Decorative element */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-ai-cyan to-ai-purple rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
