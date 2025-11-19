import React from 'react';
import { ArrowRight, ShieldCheck, BarChart2, Key, Briefcase } from 'lucide-react';

const WhyZevesto: React.FC = () => {
  return (
    <section className="py-24 bg-zevesto-navy text-white relative overflow-hidden">
       {/* Background Accents */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
         <div className="absolute -top-24 -left-24 w-96 h-96 bg-zevesto-blue rounded-full blur-3xl"></div>
         <div className="absolute bottom-0 right-0 w-64 h-64 bg-zevesto-green rounded-full blur-3xl"></div>
       </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2">
            <span className="text-zevesto-green font-bold tracking-widest uppercase text-sm block mb-3">About Zevesto</span>
            <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
              Real estate is a vehicle <br/> <span className="italic text-gray-300">for wealth creation.</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Zevesto Property Group was founded to provide a higher standard of service than the typical franchise agency. We don't just facilitate transactions; we partner with our clients to build, protect, and manage their wealth.
            </p>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed border-l-2 border-zevesto-green pl-4">
              With Rob Ford, you get the hyper-local expertise of a Crestmead specialist. With Zevesto, you get the infrastructure of a high-performance agency dedicated to your long-term financial success.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                 <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-zevesto-green shrink-0 group-hover:bg-zevesto-green group-hover:text-white transition-all">
                   <Briefcase size={24} />
                 </div>
                 <div>
                   <h4 className="text-xl font-bold font-serif">A Complete Ecosystem</h4>
                   <p className="text-sm text-gray-400 mt-1">We integrate sales, property management, and strategic advice. We handle the entire lifecycle of your property journey under one roof.</p>
                 </div>
              </div>
              
              <div className="flex items-start gap-4 group">
                 <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-zevesto-blue shrink-0 group-hover:bg-zevesto-blue group-hover:text-white transition-all">
                   <ShieldCheck size={24} />
                 </div>
                 <div>
                   <h4 className="text-xl font-bold font-serif">Process Driven Results</h4>
                   <p className="text-sm text-gray-400 mt-1">We don't rely on luck. Our proven frameworks for negotiation and marketing ensure consistent, premium results for every client.</p>
                 </div>
              </div>
            </div>

            <div className="mt-10">
              <a 
                href="https://tjrao.com.au/about-zevesto/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-bold border-b border-zevesto-green pb-1 hover:text-zevesto-green transition-colors"
              >
                Read our full story <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
               <div className="absolute inset-0 bg-zevesto-navy/20 group-hover:bg-transparent transition-colors duration-500"></div>
               <img 
                 src="https://tjrao.com.au/wp-content/uploads/2024/09/PP_0015_0004_PP_0867-2048x1365.jpg" 
                 alt="Zevesto Property Group Team Office Environment" 
                 loading="lazy"
                 className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
               />
            </div>
            <p className="text-center text-xs text-gray-500 mt-4 uppercase tracking-widest">The Zevesto Property Group Team</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyZevesto;