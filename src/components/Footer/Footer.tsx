import { useLanguage } from '../../contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="w-full border-t hairline">
      <div className="mx-auto max-w-6xl px-4 py-10 text-center sm:px-6">
        <p className="text-xs text-muted-foreground">© {t.footer.copyright}</p>
      </div>
    </footer>
  );
};
