
import React, { useEffect, useRef } from 'react';
import { PROPERTY_HIGHLIGHTS, RECENT_SALES_DATA } from '../constants';
import { MapPin } from 'lucide-react';

// Leaflet is loaded globally via index.html script tag
declare global {
  interface Window {
    L: any;
  }
}

const PropertyMap: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);

  useEffect(() => {
    if (!mapRef.current || !window.L) return;

    // Initialize map only once
    if (!mapInstance.current) {
      const crestmeadCenter = [-27.69, 153.09];
      mapInstance.current = window.L.map(mapRef.current).setView(crestmeadCenter, 14);

      // Add OpenStreetMap tiles (Clean, standard style)
      window.L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
      }).addTo(mapInstance.current);

      // Custom Icons - Updated to new Zevesto Colors
      const highlightIcon = window.L.divIcon({
        className: 'custom-div-icon',
        // Tertiary Color: #93c830
        html: `<div style="background-color: #93c830; width: 30px; height: 30px; border-radius: 50%; border: 3px solid white; box-shadow: 0 4px 6px rgba(0,0,0,0.2); display: flex; align-items: center; justify-content: center; color: white;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
               </div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
      });

      const recentSaleIcon = window.L.divIcon({
        className: 'custom-div-icon',
        // Primary Color: #172b68
        html: `<div style="background-color: #172b68; width: 24px; height: 24px; border-radius: 50%; border: 2px solid white; box-shadow: 0 2px 4px rgba(0,0,0,0.2); display: flex; align-items: center; justify-content: center;">
               </div>`,
        iconSize: [24, 24],
        iconAnchor: [12, 12]
      });

      // Add Recent Sales Markers
      RECENT_SALES_DATA.forEach(sale => {
        if (sale.location) {
          const marker = window.L.marker([sale.location.lat, sale.location.lng], { icon: recentSaleIcon })
            .addTo(mapInstance.current);
            
          marker.bindPopup(`
            <div style="font-family: 'Lato', sans-serif; min-width: 200px;">
              <h4 style="margin: 0 0 4px; color: #172b68; font-weight: bold;">${sale.address}</h4>
              <div style="color: #93c830; font-weight: 800; font-size: 14px; margin-bottom: 8px;">${sale.price}</div>
              <div style="font-size: 12px; color: #666; display: flex; gap: 10px;">
                 <span>🛏️ ${sale.beds}</span>
                 <span>🛁 ${sale.baths}</span>
                 <span>🚗 ${sale.cars}</span>
              </div>
              <div style="font-size: 11px; color: #999; margin-top: 6px;">Sold ${sale.date}</div>
            </div>
          `);
        }
      });

      // Add Highlight Markers (On top)
      PROPERTY_HIGHLIGHTS.forEach(property => {
        if (property.location) {
          const marker = window.L.marker([property.location.lat, property.location.lng], { icon: highlightIcon, zIndexOffset: 1000 })
            .addTo(mapInstance.current);
            
          marker.bindPopup(`
            <div style="font-family: 'Lato', sans-serif; min-width: 220px;">
              <div style="background-color: #93c830; color: white; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: bold; display: inline-block; margin-bottom: 6px; text-transform: uppercase;">${property.category}</div>
              <h3 style="margin: 0 0 2px; font-family: 'Playfair Display', serif; color: #172b68; font-size: 16px;">${property.title}</h3>
              <div style="font-size: 12px; color: #666; margin-bottom: 6px;">${property.address}</div>
              <div style="color: #172b68; font-weight: 800; font-size: 15px; margin-bottom: 8px;">${property.price}</div>
              <img src="${property.imageUrl}" style="width: 100%; height: 100px; object-fit: cover; border-radius: 4px; margin-bottom: 8px;" />
              <div style="font-size: 12px; color: #444; line-height: 1.4;">${property.description}</div>
            </div>
          `);
        }
      });
    }
  }, []);

  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-zevesto-blue font-bold tracking-widest uppercase text-sm">Interactive Map</span>
          <h2 className="text-3xl md:text-4xl font-serif mt-3 text-zevesto-navy">Explore the Market Activity</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            See exactly where the activity is happening. Green markers indicate key highlights and Rob's sales, while navy markers show broader recent market transactions.
          </p>
        </div>

        <div className="w-full h-[500px] rounded-3xl overflow-hidden shadow-xl border border-gray-200 relative z-0">
          <div ref={mapRef} className="w-full h-full"></div>
        </div>
        
        <div className="flex justify-center gap-8 mt-8">
          <div className="flex items-center gap-2">
             <div className="w-4 h-4 rounded-full bg-zevesto-green border-2 border-white shadow-sm"></div>
             <span className="text-sm font-bold text-zevesto-navy">Property Highlights</span>
          </div>
          <div className="flex items-center gap-2">
             <div className="w-3 h-3 rounded-full bg-zevesto-navy border-2 border-white shadow-sm"></div>
             <span className="text-sm font-bold text-zevesto-navy">Recent Sales</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyMap;