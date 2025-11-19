import React from 'react';
import { Users, Home, Briefcase, Baby } from 'lucide-react';

const Demographics: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <span className="text-zevesto-blue font-bold tracking-widest uppercase text-sm">Crestmead Profile</span>
           <h2 className="text-3xl md:text-4xl font-serif mt-3 text-zevesto-navy">Who lives in Crestmead?</h2>
           <p className="text-gray-500 mt-4 max-w-2xl mx-auto">The 2025 Flyover reveals a shifting demographic towards young families and professionals.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Family Composition */}
          <div className="bg-zevesto-light p-8 rounded-2xl border border-gray-100">
             <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-zevesto-green mb-6 shadow-sm">
                <Baby size={24} />
             </div>
             <h3 className="font-serif text-xl font-bold text-zevesto-navy mb-4">Family Structure</h3>
             <div className="space-y-4">
                <div>
                   <div className="flex justify-between text-sm font-bold text-gray-600 mb-1">
                     <span>Couples with Kids</span>
                     <span>45%</span>
                   </div>
                   <div className="w-full bg-gray-200 rounded-full h-2">
                     <div className="bg-zevesto-navy h-2 rounded-full" style={{ width: '45%' }}></div>
                   </div>
                </div>
                <div>
                   <div className="flex justify-between text-sm font-bold text-gray-600 mb-1">
                     <span>Couples w/o Kids</span>
                     <span>28%</span>
                   </div>
                   <div className="w-full bg-gray-200 rounded-full h-2">
                     <div className="bg-zevesto-blue h-2 rounded-full" style={{ width: '28%' }}></div>
                   </div>
                </div>
                <div>
                   <div className="flex justify-between text-sm font-bold text-gray-600 mb-1">
                     <span>Single Parents</span>
                     <span>25%</span>
                   </div>
                   <div className="w-full bg-gray-200 rounded-full h-2">
                     <div className="bg-zevesto-green h-2 rounded-full" style={{ width: '25%' }}></div>
                   </div>
                </div>
             </div>
          </div>

          {/* Home Ownership */}
          <div className="bg-zevesto-light p-8 rounded-2xl border border-gray-100">
             <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-zevesto-blue mb-6 shadow-sm">
                <Home size={24} />
             </div>
             <h3 className="font-serif text-xl font-bold text-zevesto-navy mb-4">Ownership</h3>
             <ul className="space-y-3 text-stone-850">
               <li className="flex items-center gap-3">
                 <span className="w-3 h-3 rounded-full bg-zevesto-green"></span>
                 <span className="flex-1">Purchasing</span>
                 <span className="font-bold">45%</span>
               </li>
               <li className="flex items-center gap-3">
                 <span className="w-3 h-3 rounded-full bg-zevesto-navy"></span>
                 <span className="flex-1">Renting</span>
                 <span className="font-bold">37%</span>
               </li>
               <li className="flex items-center gap-3">
                 <span className="w-3 h-3 rounded-full bg-zevesto-blue"></span>
                 <span className="flex-1">Fully Owned</span>
                 <span className="font-bold">16%</span>
               </li>
             </ul>
             <p className="text-xs text-gray-400 mt-6 pt-4 border-t border-gray-200">
               Dominant dwelling type is Separate House (96%).
             </p>
          </div>

          {/* Age Groups */}
          <div className="bg-zevesto-light p-8 rounded-2xl border border-gray-100">
             <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-purple-600 mb-6 shadow-sm">
                <Users size={24} />
             </div>
             <h3 className="font-serif text-xl font-bold text-zevesto-navy mb-4">Dominant Age</h3>
             <div className="text-center py-2">
               <span className="block text-5xl font-serif font-bold text-zevesto-navy">20-39</span>
               <span className="text-sm uppercase tracking-wider text-gray-500 font-bold">Years Old</span>
             </div>
             <p className="text-sm text-gray-600 mt-4 leading-relaxed text-center">
               The largest demographic group in Crestmead, representing over 3,500 residents, indicating a vibrant workforce and young family area.
             </p>
          </div>

          {/* Employment */}
          <div className="bg-zevesto-light p-8 rounded-2xl border border-gray-100">
             <div className="bg-white w-12 h-12 rounded-full flex items-center justify-center text-orange-500 mb-6 shadow-sm">
                <Briefcase size={24} />
             </div>
             <h3 className="font-serif text-xl font-bold text-zevesto-navy mb-4">Key Occupations</h3>
             <div className="flex flex-wrap gap-2">
               <span className="px-3 py-1 bg-white text-stone-850 text-xs font-bold rounded-full border border-gray-200">Labourers (18%)</span>
               <span className="px-3 py-1 bg-white text-stone-850 text-xs font-bold rounded-full border border-gray-200">Machinery Ops (14%)</span>
               <span className="px-3 py-1 bg-white text-stone-850 text-xs font-bold rounded-full border border-gray-200">Technicians (12%)</span>
               <span className="px-3 py-1 bg-white text-stone-850 text-xs font-bold rounded-full border border-gray-200">Community Service (14%)</span>
             </div>
             <div className="mt-6">
               <span className="block text-xs font-bold text-gray-500 uppercase mb-1">Median Income Trend</span>
               <div className="h-1 w-full bg-gradient-to-r from-gray-300 via-zevesto-green to-zevesto-navy rounded-full"></div>
               <span className="text-xs text-gray-400 mt-1 block">Rising annual household income</span>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Demographics;