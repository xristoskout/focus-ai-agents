
import { Clock, TrendingUp, Users, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const BenefitsSection = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: Clock,
      title: t('benefits.24x7.title'),
      description: t('benefits.24x7.description'),
      metric: '24/7'
    },
    {
      icon: TrendingUp,
      title: t('benefits.efficiency.title'),
      description: t('benefits.efficiency.description'),
      metric: '+70%'
    },
    {
      icon: Users,
      title: t('benefits.satisfaction.title'),
      description: t('benefits.satisfaction.description'),
      metric: '95%'
    },
    {
      icon: Shield,
      title: t('benefits.security.title'),
      description: t('benefits.security.description'),
      metric: '100%'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('benefits.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('benefits.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {benefit.metric}
              </div>
              
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
