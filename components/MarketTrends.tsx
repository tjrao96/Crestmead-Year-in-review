import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { MARKET_CHART_DATA } from '../constants';

const MarketTrends: React.FC = () => {
  return (
    <section id="trends" className="py-24 bg-zevesto-light relative overflow-hidden">
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <span className="text-zevesto-blue font-bold tracking-widest uppercase text-sm block mb-3">Market Analysis</span>
            <h2 className="text-4xl md:text-5xl font-serif text-zevesto-navy mb-6">
              Consistent growth, <br/> <span className="italic text-zevesto-green">Proven results.</span>
            </h2>
            <p className="text-stone-850 mb-8 leading-relaxed">
              Crestmead experienced consistent capital appreciation throughout 2025. The market has matured significantly, with renovated family homes now firmly established in the $700k+ bracket.
            </p>
            <ul className="space-y-6">
               <li className="flex items-start gap-4">
                 <span className="w-10 h-10 rounded-full bg-zevesto-navy text-white flex items-center justify-center font-bold flex-shrink-0">1</span>
                 <div>
                   <strong className="block text-zevesto-navy text-lg">Peak Selling Month: July</strong>
                   <span className="text-sm text-gray-600">Winter proved surprisingly active, with July recording the highest volume of transactions for the year.</span>
                 </div>
               </li>
               <li className="flex items-start gap-4">
                 <span className="w-10 h-10 rounded-full bg-zevesto-navy text-white flex items-center justify-center font-bold flex-shrink-0">2</span>
                 <div>
                   <strong className="block text-zevesto-navy text-lg">Dominant Price Bracket</strong>
                   <span className="text-sm text-gray-600">The <strong>$700k - $800k</strong> range saw the most activity (over 105 sales), followed by the $600k-$700k segment.</span>
                 </div>
               </li>
               <li className="flex items-start gap-4">
                 <span className="w-10 h-10 rounded-full bg-zevesto-navy text-white flex items-center justify-center font-bold flex-shrink-0">3</span>
                 <div>
                   <strong className="block text-zevesto-navy text-lg">Rental Strength</strong>
                   <span className="text-sm text-gray-600">Investors are seeing solid returns with a <strong>4.0% yield</strong> and median rents rising to $570/week.</span>
                 </div>
               </li>
            </ul>
          </div>

          <div className="lg:w-2/3 w-full bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
            <div className="flex justify-between items-center mb-8">
               <div>
                 <h3 className="text-lg font-bold text-zevesto-navy">Median House Price History (10 Years)</h3>
                 <p className="text-xs text-gray-400">Source: Pricefinder (Oct '24 - Sep '25)</p>
               </div>
               <div className="flex items-center gap-2 text-sm text-zevesto-green font-bold">
                 <span className="bg-zevesto-green/10 px-3 py-1 rounded-full">+12.9% in 2025</span>
               </div>
            </div>
            
            <div className="h-[400px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={MARKET_CHART_DATA}
                  margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#005EB8" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#005EB8" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E8EBF0" vertical={false} />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: '#0F2649', fontSize: 12, fontWeight: 700}}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{fill: '#78BE20', fontSize: 12, fontWeight: 700}}
                    tickFormatter={(value) => `$${value}k`}
                    domain={['dataMin - 50', 'auto']}
                  />
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)', backgroundColor: '#0F2649', color: '#fff' }}
                    itemStyle={{ color: '#fff', fontWeight: 'bold' }}
                    labelStyle={{ color: '#78BE20' }}
                    formatter={(value) => [`$${value},000`, 'Median Price']}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="price" 
                    stroke="#005EB8" 
                    strokeWidth={4} 
                    fillOpacity={1} 
                    fill="url(#colorPrice)" 
                    activeDot={{ r: 8, fill: '#78BE20', stroke: '#fff', strokeWidth: 2 }}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketTrends;