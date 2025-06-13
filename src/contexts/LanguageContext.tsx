
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'el' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  el: {
    // Navigation
    'nav.home': 'Αρχική',
    'nav.services': 'Υπηρεσίες',
    'nav.about': 'Σχετικά',
    'nav.contact': 'Επικοινωνία',
    
    // Hero Section
    'hero.title': 'Ψηφιακοί Βοηθοί AI',
    'hero.subtitle': 'για την Επιχείρησή σας',
    'hero.description': 'Δημιουργούμε εξατομικευμένους AI agents που αλληλεπιδρούν με τους πελάτες σας 24/7 μέσω chat, τηλεφώνου και προσαρμοσμένων λύσεων.',
    'hero.cta': 'Ξεκινήστε Τώρα',
    'hero.demo': 'Δείτε Demo',
    
    // Features
    'features.title': 'Γιατί να Επιλέξετε τους AI Agents μας;',
    'features.chat.title': 'Chat Widget',
    'features.chat.description': 'Ενσωματωμένο chat για άμεση επικοινωνία με τους επισκέπτες της ιστοσελίδας σας',
    'features.phone.title': 'Τηλεφωνική Υποστήριξη',
    'features.phone.description': 'Η τεχνητή νοημοσύνη μπορεί να απαντήσει σε τηλεφωνικές κλήσεις και να παρέχει υποστήριξη',
    'features.custom.title': 'Προσαρμοστικότητα',
    'features.custom.description': 'Κάθε AI agent προσαρμόζεται στις ανάγκες και τη φωνή της επιχείρησής σας',
    
    // Benefits
    'benefits.title': 'Οφέλη για την Επιχείρησή σας',
    'benefits.available.title': '24/7 Διαθεσιμότητα',
    'benefits.available.description': 'Οι AI agents δεν κοιμούνται ποτέ',
    'benefits.cost.title': 'Μείωση Κόστους',
    'benefits.cost.description': 'Λιγότερο προσωπικό, περισσότερη αποδοτικότητα',
    'benefits.satisfaction.title': 'Ικανοποίηση Πελατών',
    'benefits.satisfaction.description': 'Άμεσες απαντήσεις, ευχαριστημένοι πελάτες',
    
    // Contact
    'contact.title': 'Έτοιμοι να Ξεκινήσετε;',
    'contact.description': 'Επικοινωνήστε μαζί μας για να δημιουργήσουμε τον ιδανικό AI agent για την επιχείρησή σας',
    'contact.cta': 'Επικοινωνήστε Μαζί μας',
    
    // Footer
    'footer.company': 'FOCUS AI',
    'footer.description': 'Δημιουργούμε ψηφιακούς βοηθούς AI που μεταμορφώνουν την εξυπηρέτηση πελατών.',
    'footer.rights': 'Όλα τα δικαιώματα διατηρούνται.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'AI Digital Assistants',
    'hero.subtitle': 'for Your Business',
    'hero.description': 'We create customized AI agents that interact with your customers 24/7 through chat, phone, and tailored solutions.',
    'hero.cta': 'Get Started',
    'hero.demo': 'View Demo',
    
    // Features
    'features.title': 'Why Choose Our AI Agents?',
    'features.chat.title': 'Chat Widget',
    'features.chat.description': 'Integrated chat for instant communication with your website visitors',
    'features.phone.title': 'Phone Support',
    'features.phone.description': 'AI can answer phone calls and provide support to your customers',
    'features.custom.title': 'Customization',
    'features.custom.description': 'Each AI agent is tailored to your business needs and voice',
    
    // Benefits
    'benefits.title': 'Benefits for Your Business',
    'benefits.available.title': '24/7 Availability',
    'benefits.available.description': 'AI agents never sleep',
    'benefits.cost.title': 'Cost Reduction',
    'benefits.cost.description': 'Less staff, more efficiency',
    'benefits.satisfaction.title': 'Customer Satisfaction',
    'benefits.satisfaction.description': 'Instant answers, happy customers',
    
    // Contact
    'contact.title': 'Ready to Get Started?',
    'contact.description': 'Contact us to create the perfect AI agent for your business',
    'contact.cta': 'Contact Us',
    
    // Footer
    'footer.company': 'FOCUS AI',
    'footer.description': 'We create AI digital assistants that transform customer service.',
    'footer.rights': 'All rights reserved.',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('el');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['el']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
