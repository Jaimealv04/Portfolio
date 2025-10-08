import { createContext, useContext, useState, ReactNode } from 'react';
import { Language, Translations } from '../types/translations';
import { i18n } from '../services/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>(i18n.getCurrentLanguage());
  const [translations, setTranslations] = useState<Translations>(i18n.getTranslations());

  const setLanguage = (lang: Language) => {
    i18n.setLanguage(lang);
    setLanguageState(lang);
    setTranslations(i18n.getTranslations());
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations }}>
      {children}
    </LanguageContext.Provider>
  );
};
