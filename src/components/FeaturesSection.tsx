
import { MessageCircle, Phone, Settings } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: MessageCircle,
      title: t('features.chat.title'),
      description: t('features.chat.description'),
      gradient: 'from-ai-blue to-ai-cyan'
    },
    {
      icon: Phone,
      title: t('features.phone.title'),
      description: t('features.phone.description'),
      gradient: 'from-ai-purple to-ai-indigo'
    },
    {
      icon: Settings,
      title: t('features.custom.title'),
      description: t('features.custom.description'),
      gradient: 'from-ai-cyan to-ai-blue'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('features.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
