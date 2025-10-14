import { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { i18n } from '../../services/i18n';

export const FloatingActions = () => {
  const { language } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);
  const [showCVOptions, setShowCVOptions] = useState(false);
  const [showInitialTooltip, setShowInitialTooltip] = useState(true);

  const t = i18n.getTranslations();

  // Actualizar traducciones cuando cambie el idioma
  useEffect(() => {
    i18n.setLanguage(language);
  }, [language]);

  // Mostrar tooltip inicial por 5 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInitialTooltip(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Ocultar tooltip inicial cuando se expanda el menú
  useEffect(() => {
    if (isExpanded) {
      setShowInitialTooltip(false);
    }
  }, [isExpanded]);

  const handleDownloadCV = (language: 'es' | 'en') => {
    const link = document.createElement('a');
    link.href = `/CV-${language}.pdf`;
    link.download = `Jaime_Alvarez_CV_${language.toUpperCase()}.pdf`;
    link.click();
    setShowCVOptions(false);
    setIsExpanded(false);
  };

  const handleSendEmail = () => {
    window.location.href =
      'mailto:jaimealvarezdeneyra@gmail.com?subject=Contacto desde Portfolio';
    setIsExpanded(false);
  };

  const handleViewLinkedIn = () => {
    window.open(
      'https://www.linkedin.com/in/jaime-%C3%A1lvarez-de-neyra-de-gregorio-719a8624b/',
      '_blank'
    );
    setIsExpanded(false);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded) {
      setShowCVOptions(false);
    }
  };

  const actions = [
    {
      label: 'CV',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
      onClick: () => setShowCVOptions(!showCVOptions),
      color: 'from-blue-500 to-purple-500',
      hasSubmenu: true,
    },
    {
      label: 'Contacto',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      onClick: handleSendEmail,
      color: 'from-green-500 to-emerald-500',
    },
    {
      label: 'LinkedIn',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      onClick: handleViewLinkedIn,
      color: 'from-blue-600 to-blue-700',
    },
  ];

  return (
    <div className="fixed top-1/2 right-6 -translate-y-1/2 z-50">
      {/* Main Toggle Button - Always visible */}
      <div className="relative">
        {/* Action Items - Positioned absolutely above the button */}
        {isExpanded && (
          <div className="absolute bottom-full mb-4 right-0 flex flex-col gap-3 animate-fadeInUp">
            {actions.map((action, index) => (
              <div key={action.label} className="relative">
                <button
                  onClick={action.onClick}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className={`group relative p-3 rounded-xl bg-gradient-to-r ${action.color} text-white shadow-modern hover:shadow-modern-lg transition-all duration-300 hover:scale-105 hover:-translate-x-1 animate-slideInRight`}
                >
                  {action.icon}

                  {/* Tooltip normal para acciones sin submenu */}
                  {!action.hasSubmenu && (
                    <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-black/80 backdrop-blur-sm text-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                      {action.label}
                      <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-black/80"></div>
                    </div>
                  )}

                  {/* Tooltip especial para CV con opciones */}
                  {action.hasSubmenu && (
                    <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-black/80 backdrop-blur-sm text-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                      <div className="flex flex-col gap-1">
                        <span className="font-medium">Descargar CV</span>
                        <div className="flex gap-2 text-xs">
                          <span className="px-2 py-1 bg-white/20 rounded">
                            ES
                          </span>
                          <span className="px-2 py-1 bg-white/20 rounded">
                            EN
                          </span>
                        </div>
                      </div>
                      <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-black/80"></div>
                    </div>
                  )}
                </button>

                {/* Submenu para CV cuando está expandido */}
                {action.hasSubmenu && showCVOptions && (
                  <div className="absolute right-full mr-3 top-0 flex flex-col gap-2 animate-slideInRight">
                    <button
                      onClick={() => handleDownloadCV('es')}
                      className="px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm rounded-lg shadow-lg transition-all duration-200 whitespace-nowrap hover:scale-105 hover:-translate-x-1"
                    >
                      CV-ES.pdf
                    </button>
                    <button
                      onClick={() => handleDownloadCV('en')}
                      className="px-3 py-2 bg-purple-500 hover:bg-purple-600 text-white text-sm rounded-lg shadow-lg transition-all duration-200 whitespace-nowrap hover:scale-105 hover:-translate-x-1"
                    >
                      CV-EN.pdf
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Tooltip inicial */}
        {showInitialTooltip && !isExpanded && (
          <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm rounded-lg shadow-lg pointer-events-none whitespace-nowrap animate-slideInRight">
            <div className="flex flex-col gap-1">
              <span className="font-semibold">
                {t.floatingActions.tooltip.title}
              </span>
              <span className="text-xs opacity-90">
                {t.floatingActions.tooltip.subtitle}
              </span>
            </div>
            <div className="absolute left-full top-1/2 -translate-y-1/2 border-[6px] border-transparent border-l-purple-600"></div>
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={toggleExpanded}
          className={`p-4 rounded-full shadow-modern-lg transition-all duration-300 hover:scale-110 active:scale-95 ${
            isExpanded
              ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
              : 'bg-gradient-to-r from-primary to-secondary text-white'
          }`}
        >
          <div
            className={`transition-transform duration-300 ${
              isExpanded ? 'rotate-45' : 'rotate-0'
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};
