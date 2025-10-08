import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const FloatingActions = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleDownloadResume = () => {
    // In a real application, this would download the resume
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Jaime_Alvarez_CV.pdf';
    link.click();
    setIsExpanded(false);
  };

  const handleSendEmail = () => {
    window.location.href =
      'mailto:jaime.alvarez@example.com?subject=Contacto desde Portfolio';
    setIsExpanded(false);
  };

  const handleViewLinkedIn = () => {
    window.open('https://linkedin.com/in/your-profile', '_blank');
    setIsExpanded(false);
  };

  const handleViewGitHub = () => {
    window.open('https://github.com/Jaimealv04', '_blank');
    setIsExpanded(false);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const actions = [
    {
      label: 'Descargar CV',
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
      onClick: handleDownloadResume,
      color: 'from-blue-500 to-purple-500',
      delay: 0.05,
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
      delay: 0.1,
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
      delay: 0.15,
    },
    {
      label: 'GitHub',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.30 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      onClick: handleViewGitHub,
      color: 'from-gray-700 to-gray-900',
      delay: 0.2,
    },
  ];

  return (
    <div className="fixed top-1/2 right-6 -translate-y-1/2 z-50 flex flex-col gap-3">
      {/* Action Items */}
      <AnimatePresence>
        {isExpanded && (
          <div className="flex flex-col gap-3 mb-4">
            {actions.map((action) => (
              <motion.button
                key={action.label}
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 20 }}
                transition={{
                  duration: 0.2,
                  delay: action.delay * 0.5,
                  type: 'spring',
                  stiffness: 300,
                }}
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={action.onClick}
                className={`group relative p-3 rounded-xl bg-gradient-to-r ${action.color} text-white shadow-modern hover:shadow-modern-lg transition-all duration-300`}
              >
                {action.icon}

                {/* Tooltip */}
                <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-black/80 backdrop-blur-sm text-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
                  {action.label}
                  <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-black/80"></div>
                </div>
              </motion.button>
            ))}
          </div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleExpanded}
        className={`p-4 rounded-full shadow-modern-lg transition-all duration-300 ${
          isExpanded
            ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
            : 'bg-gradient-to-r from-primary to-secondary text-white'
        }`}
      >
        <motion.div
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ duration: 0.3, type: 'spring' }}
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
        </motion.div>
      </motion.button>
    </div>
  );
};
