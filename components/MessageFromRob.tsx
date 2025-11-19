
import React from 'react';
import { Quote } from 'lucide-react';
import { AGENT_NAME, AGENT_IMAGE } from '../constants';

const MessageFromRob: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-zevesto-light rounded-[2rem] p-8 md:p-16 relative overflow-hidden border border-zevesto-gray shadow-sm">
          <Quote className="absolute top-8 left-8 text-zevesto-navy/5 w-32 h-32" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 relative">
               <div className="absolute inset-0 bg-zevesto-green rounded-full blur-2xl opacity-20 translate-y-4"></div>
              <img 
                src={AGENT_IMAGE}
                alt={AGENT_NAME}
                className="w-full h-full object-cover rounded-full border-8 border-white shadow-xl relative z-10"
              />
            </div>
            
            <div className="text-center md:text-left">
              <span className="inline-block px-3 py-1 bg-zevesto-blue/10 text-zevesto-blue text-xs font-bold uppercase tracking-wider rounded-full mb-4">2025 Market Update</span>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-zevesto-navy mb-6">Crestmead: A Year of Robust Growth</h3>
              <p className="text-stone-850 leading-relaxed mb-6 font-light text-lg md:text-xl">
                "The 2025 suburb report highlights a market of exceptional strength and stability. We have observed a significant annual growth rate of <strong className="text-zevesto-green">12.9%</strong>, lifting the median house price to <strong className="text-zevesto-navy">$745,000</strong>. 
                Activity has been most intense in the <strong className="text-zevesto-navy">$700k - $800k</strong> bracket, with July recording the highest volume of transactions. 
                With rental yields holding strong at <strong className="text-zevesto-navy">4.0%</strong> and a demographic shift towards young families (45% of households), the data confirms Crestmead remains a high-performing asset class in South East Queensland."
              </p>
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 font-serif text-zevesto-navy font-bold tracking-wide justify-center md:justify-start">
                <span className="text-xl">— {AGENT_NAME}</span>
                <span className="hidden md:inline w-1.5 h-1.5 bg-zevesto-green rounded-full"></span>
                <span className="text-zevesto-blue text-sm uppercase tracking-widest">Zevesto Property Group</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessageFromRob;
