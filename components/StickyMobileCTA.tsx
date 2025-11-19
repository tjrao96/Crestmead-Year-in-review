
import React, { useState, useEffect } from 'react';
import { Phone, CalendarCheck } from 'lucide-react';
import { AGENT_PHONE } from '../constants';

interface StickyMobileCTAProps {
  onBookAppraisal: () => void;
}

const StickyMobileCTA: React.FC<StickyMobileCTAProps> = ({ onBookAppraisal }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section (approx 600px)
      setIsVisible(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] p-3 md:hidden z-50 flex gap-3 animate-slide-up">
      <a 
        href={`tel:${AGENT_PHONE.replace(/\s/g, '')}`}
        className="flex-1 bg-zevesto-navy text-white py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-blue-900 transition-colors"
      >
        <Phone size={16} />
        Call Rob
      </a>
      <button 
        onClick={onBookAppraisal}
        className="flex-1 bg-zevesto-green text-white py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-green-600 transition-colors shadow-sm"
      >
        <CalendarCheck size={16} />
        Book Appraisal
      </button>
    </div>
  );
};

export default StickyMobileCTA;
