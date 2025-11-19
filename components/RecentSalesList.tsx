
import React from 'react';
import { RECENT_SALES_DATA } from '../constants';
import { MapPin, Bed, Bath, Car, Calendar } from 'lucide-react';

const RecentSalesList: React.FC = () => {
  return (
    <section id="recent-sales" className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-zevesto-blue font-bold tracking-widest uppercase text-sm">Market Activity</span>
          <h2 className="text-3xl md:text-4xl font-serif mt-3 text-zevesto-navy">Recent Transactions</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            A snapshot of recent sales in Crestmead, demonstrating the depth of buyer demand across all price points.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-left border-collapse">
            <thead>
              <tr className="bg-zevesto-light text-zevesto-navy border-b border-gray-200">
                <th className="py-4 px-6 font-bold font-serif">Address</th>
                <th className="py-4 px-6 font-bold font-serif">Price</th>
                <th className="py-4 px-6 font-bold font-serif">Configuration</th>
                <th className="py-4 px-6 font-bold font-serif">Date</th>
                <th className="py-4 px-6 font-bold font-serif">Land</th>
              </tr>
            </thead>
            <tbody className="text-sm text-stone-850">
              {RECENT_SALES_DATA.map((sale, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-zevesto-light/50 transition-colors">
                  <td className="py-4 px-6 flex items-center gap-2 font-medium">
                    <div className="p-2 bg-zevesto-light rounded-full text-zevesto-green">
                      <MapPin size={14} />
                    </div>
                    {sale.address}
                  </td>
                  <td className="py-4 px-6 font-bold text-zevesto-navy">{sale.price}</td>
                  <td className="py-4 px-6">
                    <div className="flex gap-4 text-gray-500">
                      <span className="flex items-center gap-1"><Bed size={14}/> {sale.beds}</span>
                      <span className="flex items-center gap-1"><Bath size={14}/> {sale.baths}</span>
                      <span className="flex items-center gap-1"><Car size={14}/> {sale.cars}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 flex items-center gap-2 text-gray-500">
                     <Calendar size={14} /> {sale.date}
                  </td>
                  <td className="py-4 px-6 text-gray-500">{sale.land}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 text-center text-xs text-gray-400">
          *Data sourced from Pricefinder & Domain (Oct 2024 - 2025).
        </div>
      </div>
    </section>
  );
};

export default RecentSalesList;
