import React from 'react';
import { RMA_LOGO, RMA_BADGES, TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-zevesto-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
             <div className="bg-transparent px-4 py-2">
               <img src={RMA_LOGO} alt="RateMyAgent Verified Reviews Logo" className="h-12 object-contain" loading="lazy" />
             </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-zevesto-navy">Client Success Stories</h2>
          <p className="text-gray-500 mt-4">Verified results from our happy clients.</p>
        </div>

        {/* Static Featured Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative">
              <Quote className="absolute top-8 right-8 text-zevesto-light w-12 h-12 -z-0" />
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-zevesto-green">
                  <img 
                    src={testimonial.image} 
                    alt={`Property sold at ${testimonial.property}`} 
                    loading="lazy"
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h4 className="font-bold text-zevesto-navy">{testimonial.property}</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-zevesto-green font-bold text-sm">{testimonial.price}</span>
                    <span className="text-gray-300 text-xs">•</span>
                    <span className="text-gray-500 text-xs">{testimonial.type}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-orange-400 text-orange-400" />
                ))}
              </div>
              
              <h5 className="font-bold text-lg mb-2 text-zevesto-navy">{testimonial.title}</h5>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{testimonial.review}"</p>
              
              <div className="flex justify-between items-center border-t border-gray-100 pt-4">
                <span className="font-bold text-sm text-zevesto-navy">{testimonial.author}</span>
                <span className="text-xs text-gray-400">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Live Review Widget */}
        <div className="w-full max-w-6xl mx-auto mb-12">
           <h3 className="text-center text-xl font-serif text-zevesto-navy mb-8">More from our community</h3>
           <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
             <iframe 
               className='lc_reviews_widget' 
               src='https://reputationhub.site/reputation/widgets/review_widget/D82HODQnTAjvrvMIMW7r' 
               frameBorder='0' 
               scrolling='no' 
               style={{ minWidth: '100%', width: '100%', height: '450px', border: 'none' }}
               title="Live Client Reviews and Ratings for Rob Ford"
             ></iframe>
           </div>
        </div>
        
        {/* Recognition Badges */}
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-80 hover:opacity-100 transition-opacity">
           {RMA_BADGES.map((badge, index) => (
              <img 
                key={index} 
                src={badge} 
                alt="RateMyAgent Real Estate Award Badge" 
                loading="lazy"
                className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
           ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;