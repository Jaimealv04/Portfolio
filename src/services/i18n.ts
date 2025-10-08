import { Language, Translations } from '../types/translations';
import { en, es } from './translations';

const translations: Record<Language, Translations> = {
  en,
  es,
};

export class I18nService {
  private static instance: I18nService;
  private currentLanguage: Language;

  private constructor() {
    this.currentLanguage = this.getStoredLanguage();
  }

  static getInstance(): I18nService {
    if (!I18nService.instance) {
      I18nService.instance = new I18nService();
    }
    return I18nService.instance;
  }

  private getStoredLanguage(): Language {
    const stored = localStorage.getItem('language') as Language;
    return stored || 'en';
  }

  getCurrentLanguage(): Language {
    return this.currentLanguage;
  }

  setLanguage(language: Language): void {
    this.currentLanguage = language;
    localStorage.setItem('language', language);
  }

  getTranslations(): Translations {
    return translations[this.currentLanguage];
  }

  translate(key: string): string {
    const keys = key.split('.');
    let value: Translations | string | Record<string, unknown> = this.getTranslations();
    
    for (const k of keys) {
      if (typeof value === 'string') return value;
      value = (value as Record<string, unknown>)[k] as Translations | string | Record<string, unknown>;
      if (value === undefined) return key;
    }
    
    return typeof value === 'string' ? value : key;
  }
}

export const i18n = I18nService.getInstance();
