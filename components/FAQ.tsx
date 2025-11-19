
import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <span className="text-zevesto-blue font-bold tracking-widest uppercase text-sm block mb-3">Common Questions</span>
          <h2 className="text-3xl md:text-4xl font-serif text-zevesto-navy">Understanding the Market</h2>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div 
              key={index} 
              className={`border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-md bg-zevesto-light/30 border-zevesto-blue/30' : 'hover:border-gray-300'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
              >
                <span className={`font-bold text-lg ${openIndex === index ? 'text-zevesto-blue' : 'text-zevesto-navy'}`}>
                  {item.question}
                </span>
                <div className={`p-1 rounded-full transition-colors ${openIndex === index ? 'bg-zevesto-blue text-white' : 'bg-gray-100 text-gray-500'}`}>
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
