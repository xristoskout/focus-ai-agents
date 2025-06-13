
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('contact.title')}
            </h2>
            
            <p className="text-xl text-white/90 mb-8">
              {t('contact.description')}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <span className="text-white/90">info@focus-ai.gr</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <span className="text-white/90">+30 210 123 4567</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="text-white/90">Αθήνα, Ελλάδα</span>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-white text-ai-blue hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
            >
              {t('contact.cta')}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    AI Demo Preview
                  </h3>
                  <p className="text-white/80 text-sm">
                    Δείτε πώς λειτουργεί ο AI agent σας
                  </p>
                </div>
                
                <div className="bg-white/20 rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white/90 text-sm">AI Online</span>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="bg-white/30 rounded p-2 text-white/90 text-sm">
                      "Καλησπέρα! Πώς μπορώ να σας βοηθήσω σήμερα;"
                    </div>
                    <div className="bg-white/20 rounded p-2 text-white/80 text-sm">
                      Άμεση απάντηση σε κάθε ερώτηση
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-white/80 text-xs">Διαθεσιμότητα</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-2xl font-bold text-white">&lt;1s</div>
                    <div className="text-white/80 text-xs">Χρόνος Απόκρισης</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
