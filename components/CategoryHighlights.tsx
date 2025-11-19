
import React from 'react';
import { PROPERTY_HIGHLIGHTS } from '../constants';
import { Bed, Bath, Car, ArrowRight, MapPin } from 'lucide-react';

const CategoryHighlights: React.FC = () => {
  return (
    <section id="highlights" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-zevesto-blue font-bold tracking-widest uppercase text-sm block mb-3">Sold Listings</span>
            <h2 className="text-4xl md:text-5xl font-serif text-zevesto-navy leading-tight">
              Highlights of the <br/> <span className="italic text-zevesto-green">2025 Market.</span>
            </h2>
          </div>
          <a 
            href="#recent-sales"
            className="hidden md:flex items-center gap-2 text-zevesto-navy font-bold border-b-2 border-zevesto-green pb-1 hover:text-zevesto-blue transition-colors"
          >
            View all recent sales <ArrowRight size={16}/>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROPERTY_HIGHLIGHTS.map((property) => (
            <div key={property.id} className="group cursor-pointer flex flex-col h-full bg-white rounded-3xl hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-gray-100">
              
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-3xl aspect-[4/3] mb-5">
                <div className="absolute top-4 left-4 z-10">
                   <span className="bg-zevesto-navy/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide uppercase shadow-lg">
                     {property.category}
                   </span>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <img 
                  src={property.imageUrl} 
                  alt={property.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Content */}
              <div className="flex flex-col flex-1 px-2 pb-4">
                <div className="mb-2">
                   <div className="flex justify-between items-center mb-1">
                     <span className="text-zevesto-green font-bold text-xl">{property.price}</span>
                     <span className="text-xs text-gray-400 font-medium bg-gray-50 px-2 py-1 rounded">Sold {property.soldDate}</span>
                   </div>
                   <h3 className="text-2xl font-serif text-zevesto-navy group-hover:text-zevesto-blue transition-colors leading-tight">
                    {property.title}
                  </h3>
                </div>
                
                <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-wide mb-4">
                   <MapPin size={12} />
                   {property.address}
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                  {property.description}
                </p>

                <div className="flex items-center justify-between border-t border-gray-100 pt-4 text-stone-850 text-sm font-medium">
                   <div className="flex gap-5">
                     <div className="flex items-center gap-1.5" title="Bedrooms">
                       <Bed size={18} className="text-zevesto-blue" /> <span>{property.beds}</span>
                     </div>
                     <div className="flex items-center gap-1.5" title="Bathrooms">
                       <Bath size={18} className="text-zevesto-blue" /> <span>{property.baths}</span>
                     </div>
                     <div className="flex items-center gap-1.5" title="Car Spaces">
                       <Car size={18} className="text-zevesto-blue" /> <span>{property.cars}</span>
                     </div>
                   </div>
                   <div className="text-zevesto-navy">
                     <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 md:hidden flex justify-center">
           <a href="#recent-sales" className="px-8 py-3 bg-zevesto-navy text-white rounded-full w-full font-bold text-center">View all sales</a>
        </div>
      </div>
    </section>
  );
};

export default CategoryHighlights;
