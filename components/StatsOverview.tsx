import React from 'react';
import { MARKET_STATS } from '../constants';

const StatsOverview: React.FC = () => {
  return (
    <section id="market-stats" className="py-20 bg-zevesto-navy text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <span className="text-zevesto-green font-bold tracking-widest uppercase text-sm">Market Performance</span>
           <h2 className="text-3xl md:text-4xl font-serif mt-3">Crestmead by the numbers</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MARKET_STATS.map((stat, index) => (
            <div key={index} className="group bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-zevesto-green/50 transition-all hover:bg-white/10">
              <div className="mb-4">
                 <h3 className="text-4xl md:text-5xl font-serif text-white mb-2 group-hover:text-zevesto-green transition-colors">{stat.value}</h3>
                 <p className="text-gray-300 font-medium text-lg">{stat.label}</p>
              </div>
              <div className="w-12 h-1 bg-zevesto-green rounded-full mb-4 opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <p className="text-sm text-gray-400 uppercase tracking-wide font-bold">{stat.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsOverview;