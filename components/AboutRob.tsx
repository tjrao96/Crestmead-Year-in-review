import React from 'react';
import { TrendingUp, Users, Search, ArrowRight } from 'lucide-react';
import { AGENT_IMAGE, AGENT_NAME } from '../constants';

const AboutRob: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          {/* Professional Profile - More Subtle */}
          <div className="w-full md:w-1/3 sticky top-32">
            <div className="relative">
              <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <img 
                  src={AGENT_IMAGE} 
                  alt={`Portrait of ${AGENT_NAME}, Real Estate Specialist at Zevesto`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-zevesto-navy text-white p-6 rounded-xl shadow-xl max-w-[200px] hidden md:block">
                <p className="font-serif text-lg leading-tight">"Negotiation begins before the first inspection."</p>
              </div>
            </div>
          </div>

          {/* The Pitch - Strategy Focused */}
          <div className="w-full md:w-2/3">
            <div className="inline-flex items-center gap-2 bg-zevesto-light px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-zevesto-navy mb-6">
              <TrendingUp size={14} />
              The Strategy
            </div>
            
            <h2 className="text-3xl md:text-5xl font-serif text-zevesto-navy mb-8 leading-tight">
              Most agents wait for a buyer.<br/>
              <span className="text-zevesto-green italic">We create the market.</span>
            </h2>
            
            <div className="prose prose-lg text-stone-850 mb-10">
              <p>
                In a market like Crestmead, a standard campaign often leads to a standard result. To achieve a premium price, you need to create <strong>competitive tension</strong>.
              </p>
              <p>
                With 19 years of experience and over 800 sales, my approach is different. I don't see a good offer as the finish line; I see it as the starting point. By leveraging Zevesto's pre-market database, we often bring qualified buyers to the table before the 'For Sale' sign even goes up.
              </p>
              <p>
                This isn't about luck. It's about a structured process of negotiation that pushes every transaction past "good enough" to its absolute maximum potential.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-100 pt-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-zevesto-light flex items-center justify-center text-zevesto-blue shrink-0">
                  <Users size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-zevesto-navy">Pre-Market Network</h4>
                  <p className="text-sm text-gray-600">Access to buyers waiting specifically for Crestmead homes.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-zevesto-light flex items-center justify-center text-zevesto-blue shrink-0">
                  <Search size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-zevesto-navy">Total Transparency</h4>
                  <p className="text-sm text-gray-600">You see every piece of feedback and every step of the negotiation.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutRob;