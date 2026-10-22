import { useEffect, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { IconButton } from './Button';
import { easeApple } from './motion';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  closeLabel: string;
  labelledBy?: string;
  children: ReactNode;
}

/** Sheet-style dialog: blurred backdrop, Esc to close, scroll lock. */
export const Modal = ({ open, onClose, closeLabel, labelledBy, children }: ModalProps) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelledBy}
            className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-4xl border hairline bg-surface shadow-float sm:rounded-4xl"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.98 }}
            transition={{ duration: 0.45, ease: easeApple }}
          >
            <IconButton
              onClick={onClose}
              aria-label={closeLabel}
              className="glass absolute right-4 top-4 z-10"
            >
              <X className="h-4 w-4" strokeWidth={2.25} />
            </IconButton>
            <div className="overflow-y-auto overscroll-contain">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
