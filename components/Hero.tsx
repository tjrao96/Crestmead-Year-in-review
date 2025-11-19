
import React from 'react';
import { ArrowRight, TrendingUp, Home, BarChart3 } from 'lucide-react';

interface HeroProps {
  onBookAppraisal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onBookAppraisal }) => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2700&auto=format&fit=crop")',
        }}
      >
        {/* Darker Overlay Gradient for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-zevesto-navy/70 via-zevesto-navy/40 to-zevesto-navy/90"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex-1 container mx-auto px-6 flex flex-col justify-center items-center text-center pt-20 pb-32">
        
        <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-full text-xs font-bold tracking-[0.25em] uppercase mb-8 animate-fade-in-up shadow-lg">
          Crestmead Suburb Flyover Report
        </div>
        
        <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl text-white mb-8 leading-tight animate-fade-in-up delay-100 drop-shadow-2xl">
          2025 Year in <br/>
          <span className="text-zevesto-green italic relative">
            Review.
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-zevesto-green opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
            </svg>
          </span>
        </h1>
        
        <p className="text-white text-lg md:text-2xl max-w-3xl font-light mb-12 leading-relaxed animate-fade-in-up delay-200 drop-shadow-lg">
          A defining year for Crestmead real estate. <strong className="text-zevesto-green font-bold">12.9% growth</strong>, record-breaking $1M sales, and soaring demand from young families.
        </p>

        <div className="flex flex-col md:flex-row gap-5 animate-fade-in-up delay-300">
          <button 
            onClick={() => document.getElementById('market-stats')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-zevesto-green text-white px-8 py-4 rounded-full font-bold hover:bg-green-600 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2 min-w-[200px]"
          >
            <BarChart3 size={20} />
            View Market Data
          </button>
          <button 
            onClick={onBookAppraisal}
            className="bg-white text-zevesto-navy px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-2 min-w-[200px]"
          >
            Get My Home Appraised <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Redesigned Bottom Stats Bar - Solid & Anchored */}
      <div className="relative z-20 w-full container mx-auto px-6 animate-fade-in-up delay-500 mb-12 hidden lg:block">
        <div className="bg-white rounded-2xl shadow-2xl border-t-4 border-zevesto-green p-1 flex divide-x divide-gray-100">
          
           {/* Stat 1 */}
           <div className="flex-1 p-6 flex items-center gap-5 group hover:bg-zevesto-light/50 transition-colors rounded-l-xl">
             <div className="w-14 h-14 rounded-full bg-zevesto-navy/5 flex items-center justify-center text-zevesto-navy group-hover:scale-110 transition-transform">
                <Home size={28} strokeWidth={1.5} />
             </div>
             <div>
               <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Median House Price</p>
               <p className="font-serif text-3xl font-bold text-zevesto-navy">$745k</p>
             </div>
           </div>
           
           {/* Stat 2 */}
           <div className="flex-1 p-6 flex items-center gap-5 group hover:bg-zevesto-light/50 transition-colors">
             <div className="w-14 h-14 rounded-full bg-zevesto-green/10 flex items-center justify-center text-zevesto-green group-hover:scale-110 transition-transform">
                <TrendingUp size={28} strokeWidth={1.5} />
             </div>
             <div>
               <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Annual Growth</p>
               <p className="font-serif text-3xl font-bold text-zevesto-green">+12.9%</p>
             </div>
           </div>

           {/* Stat 3 */}
           <div className="flex-1 p-6 flex items-center gap-5 group hover:bg-zevesto-light/50 transition-colors">
             <div className="w-14 h-14 rounded-full bg-zevesto-blue/10 flex items-center justify-center text-zevesto-blue group-hover:scale-110 transition-transform">
                <BarChart3 size={28} strokeWidth={1.5} />
             </div>
             <div>
               <p className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1">Total Sales (2025)</p>
               <p className="font-serif text-3xl font-bold text-zevesto-navy">177</p>
             </div>
           </div>

           {/* CTA Area */}
           <div className="w-1/4 p-4 flex items-center justify-end pl-8">
             <button 
               onClick={onBookAppraisal}
               className="w-full h-full bg-zevesto-navy text-white rounded-xl flex items-center justify-between px-6 hover:bg-zevesto-blue transition-all group shadow-lg"
             >
               <span className="text-left">
                 <span className="block text-xs opacity-70 uppercase tracking-wide">Ready to sell?</span>
                 <span className="block font-bold">Book Appraisal</span>
               </span>
               <div className="bg-white/10 p-2 rounded-full group-hover:bg-white/20 transition-colors">
                  <ArrowRight size={20} />
               </div>
             </button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
