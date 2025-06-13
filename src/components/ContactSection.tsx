
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              {t('contact.info.title')}
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Email</p>
                  <p className="text-gray-600">info@focusai.gr</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">{t('contact.info.phone')}</p>
                  <p className="text-gray-600">+30 210 123 4567</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">{t('contact.info.address')}</p>
                  <p className="text-gray-600">Αθήνα, Ελλάδα</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.name')}
                </label>
                <Input placeholder={t('contact.form.namePlaceholder')} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contact.form.email')}
                </label>
                <Input type="email" placeholder={t('contact.form.emailPlaceholder')} />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('contact.form.company')}
              </label>
              <Input placeholder={t('contact.form.companyPlaceholder')} />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('contact.form.message')}
              </label>
              <Textarea 
                placeholder={t('contact.form.messagePlaceholder')} 
                rows={5}
              />
            </div>
            
            <Button type="submit" size="lg" className="w-full">
              <Send className="mr-2 w-5 h-5" />
              {t('contact.form.send')}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
