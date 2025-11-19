
import React from 'react';
import { Instagram, Phone, Mail, MapPin, Star, Home } from 'lucide-react';
import { AGENCY_NAME, AGENT_NAME, AGENT_PHONE, AGENT_EMAIL, LOGO_URL } from '../constants';

interface FooterProps {
  onBookAppraisal: () => void;
}

const Footer: React.FC<FooterProps> = ({ onBookAppraisal }) => {
  return (
    <footer className="bg-zevesto-navy text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          <div className="space-y-6">
             <div className="h-12 flex items-center mb-6">
               <a href="https://zevesto.com/" target="_blank" rel="noopener noreferrer" className="h-full block">
                 <img 
                   src={LOGO_URL} 
                   alt={AGENCY_NAME} 
                   className="h-full w-auto object-contain brightness-0 invert opacity-90 hover:opacity-100 transition-opacity"
                 />
               </a>
             </div>
             <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
               Delivering exceptional results for Crestmead homeowners. Expert negotiation and data-driven marketing strategies by {AGENT_NAME}.
             </p>
             <div className="flex gap-4">
               <a 
                 href="https://www.instagram.com/zevesto/?hl=en" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-zevesto-green hover:border-zevesto-green hover:text-white transition-all text-white"
                 title="Instagram"
               >
                 <Instagram size={18} />
               </a>
               <a 
                 href="https://share.google/mRpgxOqvQ4fAeG1qX" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-zevesto-green hover:border-zevesto-green hover:text-white transition-all text-white"
                 title="Google Business Profile"
               >
                 <MapPin size={18} />
               </a>
               <a 
                 href="https://www.realestate.com.au/agency/zevesto-property-group-TDTRWJ" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-zevesto-green hover:border-zevesto-green hover:text-white transition-all text-white"
                 title="RealEstate.com.au"
               >
                 <Home size={18} />
               </a>
               <a 
                 href="https://www.ratemyagent.com.au/real-estate-agency/zevesto-property-group-al370/sales/overview" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-zevesto-green hover:border-zevesto-green hover:text-white transition-all text-white"
                 title="RateMyAgent"
               >
                 <Star size={18} />
               </a>
             </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-lg tracking-wide uppercase text-sm text-zevesto-green">Contact</h4>
            <ul className="space-y-4 text-gray-300 text-sm font-medium">
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-zevesto-green group-hover:bg-zevesto-green group-hover:text-white transition-colors">
                   <Phone size={14} />
                </div> 
                <a href={`tel:${AGENT_PHONE.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{AGENT_PHONE}</a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-zevesto-green group-hover:bg-zevesto-green group-hover:text-white transition-colors">
                   <Mail size={14} />
                </div>
                <a href={`mailto:${AGENT_EMAIL}`} className="hover:text-white transition-colors">{AGENT_EMAIL}</a>
              </li>
            </ul>
          </div>

          <div className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center shadow-xl relative overflow-hidden">
             <div className="absolute top-0 right-0 w-20 h-20 bg-zevesto-green rounded-full blur-2xl translate-x-1/2 -translate-y-1/2 opacity-20"></div>
             <h4 className="font-serif text-xl mb-2 text-white">Thinking of selling?</h4>
             <p className="text-gray-400 text-sm mb-6">Get a free, accurate appraisal of your property's value in today's market.</p>
             <button 
                onClick={onBookAppraisal}
                className="w-full bg-zevesto-green text-white py-3 rounded-full font-bold hover:bg-green-600 transition-colors shadow-lg cursor-pointer"
             >
               Book Now
             </button>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-center items-center text-xs text-gray-500">
          <p>&copy; 2025 {AGENCY_NAME}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
