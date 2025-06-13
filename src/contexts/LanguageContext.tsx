
import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'el' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  el: {
    'nav.features': 'Χαρακτηριστικά',
    'nav.benefits': 'Οφέλη',
    'nav.contact': 'Επικοινωνία',
    'hero.badge': 'Νέα Τεχνολογία AI',
    'hero.title': 'Ψηφιακοί Βοηθοί AI για την Επιχείρησή σας',
    'hero.subtitle': 'Δημιουργούμε εξατομικευμένους AI agents που αλληλεπιδρούν με τους πελάτες σας 24/7 μέσω chat, τηλεφώνου και προσαρμοσμένων λύσεων.',
    'hero.cta.primary': 'Ξεκινήστε Τώρα',
    'hero.cta.secondary': 'Δείτε Demo',
    'hero.demo.status': 'Διαθέσιμος τώρα',
    'hero.demo.message1': 'Γεια σας! Πώς μπορώ να σας βοηθήσω σήμερα;',
    'hero.demo.message2': 'Θα ήθελα πληροφορίες για τα προϊόντα σας.',
    'hero.demo.message3': 'Φυσικά! Θα σας στείλω όλες τις πληροφορίες αμέσως.',
    'features.title': 'Οι Υπηρεσίες μας',
    'features.chat.title': 'Chat Widgets',
    'features.chat.description': 'Έξυπνα chat widgets που ενσωματώνονται στην ιστοσελίδα σας και παρέχουν άμεση υποστήριξη στους πελάτες.',
    'features.phone.title': 'Τηλεφωνική Υποστήριξη',
    'features.phone.description': 'AI agents που χειρίζονται τηλεφωνικές κλήσεις με φυσική φωνή και παρέχουν πλήρη υποστήριξη πελατών.',
    'features.custom.title': 'Προσαρμοσμένες Λύσεις',
    'features.custom.description': 'Εξατομικευμένοι AI βοηθοί που προσαρμόζονται στις ανάγκες και το brand της επιχείρησής σας.',
    'benefits.title': 'Γιατί να Επιλέξετε FOCUS AI',
    'benefits.subtitle': 'Τα αποτελέσματα που θα δείτε με τους AI agents μας',
    'benefits.24x7.title': 'Διαθεσιμότητα',
    'benefits.24x7.description': 'Οι AI agents μας είναι πάντα διαθέσιμοι για τους πελάτες σας',
    'benefits.efficiency.title': 'Αποδοτικότητα',
    'benefits.efficiency.description': 'Αύξηση της αποδοτικότητας της εξυπηρέτησης πελατών',
    'benefits.satisfaction.title': 'Ικανοποίηση',
    'benefits.satisfaction.description': 'Υψηλή ικανοποίηση πελατών με άμεσες απαντήσεις',
    'benefits.security.title': 'Ασφάλεια',
    'benefits.security.description': 'Πλήρης ασφάλεια και προστασία δεδομένων',
    'contact.title': 'Ελάτε σε Επικοινωνία',
    'contact.subtitle': 'Είμαστε εδώ να σας βοηθήσουμε να δημιουργήσετε τον τέλειο AI βοηθό για την επιχείρησή σας.',
    'contact.info.title': 'Στοιχεία Επικοινωνίας',
    'contact.info.phone': 'Τηλέφωνο',
    'contact.info.address': 'Διεύθυνση',
    'contact.form.name': 'Όνομα',
    'contact.form.namePlaceholder': 'Το όνομά σας',
    'contact.form.email': 'Email',
    'contact.form.emailPlaceholder': 'your@email.com',
    'contact.form.company': 'Εταιρεία',
    'contact.form.companyPlaceholder': 'Η εταιρεία σας',
    'contact.form.message': 'Μήνυμα',
    'contact.form.messagePlaceholder': 'Πείτε μας πώς μπορούμε να σας βοηθήσουμε...',
    'contact.form.send': 'Αποστολή Μηνύματος',
    'footer.description': 'Δημιουργούμε προηγμένους AI agents που βελτιώνουν την εξυπηρέτηση πελατών και αυξάνουν την αποδοτικότητα της επιχείρησής σας.',
    'footer.services.title': 'Υπηρεσίες',
    'footer.services.chatbots': 'Chat Widgets',
    'footer.services.voice': 'Φωνητική Υποστήριξη',
    'footer.services.custom': 'Προσαρμοσμένες Λύσεις',
    'footer.services.integration': 'Ενσωμάτωση Συστημάτων',
    'footer.company.title': 'Εταιρεία',
    'footer.company.about': 'Σχετικά με εμάς',
    'footer.company.contact': 'Επικοινωνία',
    'footer.company.privacy': 'Πολιτική Απορρήτου',
    'footer.company.terms': 'Όροι Χρήσης',
    'footer.rights': 'Όλα τα δικαιώματα προστατεύονται.'
  },
  en: {
    'nav.features': 'Features',
    'nav.benefits': 'Benefits',
    'nav.contact': 'Contact',
    'hero.badge': 'New AI Technology',
    'hero.title': 'AI Digital Assistants for Your Business',
    'hero.subtitle': 'We create customized AI agents that interact with your customers 24/7 through chat, phone, and custom solutions.',
    'hero.cta.primary': 'Get Started',
    'hero.cta.secondary': 'View Demo',
    'hero.demo.status': 'Available now',
    'hero.demo.message1': 'Hello! How can I help you today?',
    'hero.demo.message2': 'I would like information about your products.',
    'hero.demo.message3': 'Of course! I will send you all the information immediately.',
    'features.title': 'Our Services',
    'features.chat.title': 'Chat Widgets',
    'features.chat.description': 'Smart chat widgets that integrate into your website and provide instant customer support.',
    'features.phone.title': 'Phone Support',
    'features.phone.description': 'AI agents that handle phone calls with natural voice and provide complete customer support.',
    'features.custom.title': 'Custom Solutions',
    'features.custom.description': 'Personalized AI assistants that adapt to your business needs and brand.',
    'benefits.title': 'Why Choose FOCUS AI',
    'benefits.subtitle': 'The results you will see with our AI agents',
    'benefits.24x7.title': 'Availability',
    'benefits.24x7.description': 'Our AI agents are always available for your customers',
    'benefits.efficiency.title': 'Efficiency',
    'benefits.efficiency.description': 'Increase customer service efficiency',
    'benefits.satisfaction.title': 'Satisfaction',
    'benefits.satisfaction.description': 'High customer satisfaction with instant responses',
    'benefits.security.title': 'Security',
    'benefits.security.description': 'Complete security and data protection',
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'We are here to help you create the perfect AI assistant for your business.',
    'contact.info.title': 'Contact Information',
    'contact.info.phone': 'Phone',
    'contact.info.address': 'Address',
    'contact.form.name': 'Name',
    'contact.form.namePlaceholder': 'Your name',
    'contact.form.email': 'Email',
    'contact.form.emailPlaceholder': 'your@email.com',
    'contact.form.company': 'Company',
    'contact.form.companyPlaceholder': 'Your company',
    'contact.form.message': 'Message',
    'contact.form.messagePlaceholder': 'Tell us how we can help you...',
    'contact.form.send': 'Send Message',
    'footer.description': 'We create advanced AI agents that improve customer service and increase your business efficiency.',
    'footer.services.title': 'Services',
    'footer.services.chatbots': 'Chat Widgets',
    'footer.services.voice': 'Voice Support',
    'footer.services.custom': 'Custom Solutions',
    'footer.services.integration': 'System Integration',
    'footer.company.title': 'Company',
    'footer.company.about': 'About Us',
    'footer.company.contact': 'Contact',
    'footer.company.privacy': 'Privacy Policy',
    'footer.company.terms': 'Terms of Use',
    'footer.rights': 'All rights reserved.'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('el');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'el' ? 'en' : 'el');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['el']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
