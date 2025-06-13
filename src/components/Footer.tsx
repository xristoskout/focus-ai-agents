
import { Bot, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">{t('footer.company')}</span>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-ai-cyan" />
                <span className="text-gray-300">info@focus-ai.gr</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-ai-cyan" />
                <span className="text-gray-300">+30 210 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-ai-cyan" />
                <span className="text-gray-300">Αθήνα, Ελλάδα</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Γρήγοροι Σύνδεσμοι</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-ai-cyan transition-colors">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-300 hover:text-ai-cyan transition-colors">
                  {t('nav.services')}
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-300 hover:text-ai-cyan transition-colors">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-ai-cyan transition-colors">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Υπηρεσίες</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">AI Chat Widgets</li>
              <li className="text-gray-300">Voice AI Agents</li>
              <li className="text-gray-300">Custom Solutions</li>
              <li className="text-gray-300">24/7 Support</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 FOCUS AI. {t('footer.rights')}
          </p>
          
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a 
              href="https://github.com" 
              className="text-gray-400 hover:text-white transition-colors flex items-center space-x-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-sm">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
