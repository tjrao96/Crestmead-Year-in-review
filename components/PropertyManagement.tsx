
import React from 'react';
import { ShieldCheck, TrendingUp, Users, Smartphone, ArrowRight, Wrench } from 'lucide-react';

interface PropertyManagementProps {
  onBookAppraisal: () => void;
}

const PropertyManagement: React.FC<PropertyManagementProps> = ({ onBookAppraisal }) => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Content Column */}
          <div className="lg:w-1/2">
            <span className="text-zevesto-blue font-bold tracking-widest uppercase text-sm block mb-3">Asset Management</span>
            <h2 className="text-4xl md:text-5xl font-serif text-zevesto-navy mb-6 leading-tight">
              We don't just manage property. <br/>
              <span className="italic text-zevesto-green">We build wealth.</span>
            </h2>
            <p className="text-stone-850 text-lg mb-8 leading-relaxed">
              Most agencies see property management as simple rent collection. At Zevesto, we treat your investment like a business. Our goal isn't just to maintain the status quo, but to maximize your yield and protect your asset's future value.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-zevesto-light rounded-xl flex items-center justify-center text-zevesto-navy shrink-0">
                  <Users size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-zevesto-navy text-lg"> rigorous Tenant Selection</h4>
                  <p className="text-sm text-gray-600 mt-1">We check deeper than standard databases. Finding the right tenant is 90% of the work done.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-zevesto-light rounded-xl flex items-center justify-center text-zevesto-navy shrink-0">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-zevesto-navy text-lg">Zero-Tolerance Arrears</h4>
                  <p className="text-sm text-gray-600 mt-1">Our automated systems and daily monitoring ensure your cash flow remains consistent.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-zevesto-light rounded-xl flex items-center justify-center text-zevesto-navy shrink-0">
                  <Wrench size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-zevesto-navy text-lg">Proactive Maintenance</h4>
                  <p className="text-sm text-gray-600 mt-1">We fix small issues before they become expensive problems, using trusted local trades.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-zevesto-light rounded-xl flex items-center justify-center text-zevesto-navy shrink-0">
                  <Smartphone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-zevesto-navy text-lg">24/7 Owner Portal</h4>
                  <p className="text-sm text-gray-600 mt-1">Total transparency. Access your statements, inspection reports, and financial data anytime.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual / CTA Column */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-zevesto-navy rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
              {/* Decorative Blob */}
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-zevesto-blue rounded-full blur-3xl opacity-40"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 mb-8">
                   <ShieldCheck size={16} className="text-zevesto-green" />
                   <span className="text-xs font-bold uppercase tracking-wider">Investor Protection</span>
                </div>

                <h3 className="text-3xl font-serif mb-6">Switching is easier than you think.</h3>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  Unhappy with your current manager? We handle the entire transfer process for you. No awkward conversations, no lost files. Just a seamless upgrade to better service.
                </p>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
                   <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-4">
                     <span className="text-sm font-medium text-gray-400">Current Market Demand</span>
                     <span className="text-zevesto-green font-bold">High</span>
                   </div>
                   <div className="flex justify-between items-center">
                     <span className="text-sm font-medium text-gray-400">Avg. Days to Lease</span>
                     <span className="text-white font-bold">7 Days</span>
                   </div>
                </div>

                <button 
                  onClick={onBookAppraisal}
                  className="w-full bg-white text-zevesto-navy py-4 rounded-xl font-bold hover:bg-gray-100 transition-all flex items-center justify-center gap-2 group"
                >
                  Get a Rental Appraisal
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PropertyManagement;
