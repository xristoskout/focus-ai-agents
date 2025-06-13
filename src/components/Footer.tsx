
import { Bot, Mail, Phone, MapPin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">FOCUS AI</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">info@focusai.gr</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">+30 210 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-gray-400">Αθήνα, Ελλάδα</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.services.title')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li>{t('footer.services.chatbots')}</li>
              <li>{t('footer.services.voice')}</li>
              <li>{t('footer.services.custom')}</li>
              <li>{t('footer.services.integration')}</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.company.title')}</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.company.about')}</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">{t('footer.company.contact')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.company.privacy')}</a></li>
              <li><a href="#" className="hover:text-white transition-colors">{t('footer.company.terms')}</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 FOCUS AI. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
