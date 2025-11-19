
import React from 'react';
import { X } from 'lucide-react';
import { BOOKING_FORM_URL } from '../constants';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-xl w-full max-w-3xl h-[85vh] flex flex-col shadow-2xl animate-fade-in-up overflow-hidden">
        <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-zevesto-navy text-white">
          <h3 className="font-serif text-xl font-bold">Request Your Property Appraisal</h3>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-white/10 rounded-full transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="flex-1 w-full bg-white overflow-hidden relative">
          {/* Standard Iframe without popup trigger attributes */}
          <iframe
            src={BOOKING_FORM_URL}
            style={{ width: '100%', height: '100%', border: 'none' }}
            id="booking-frame"
            title="Appraisal Request"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
