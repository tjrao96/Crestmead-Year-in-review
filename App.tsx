
import React, { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MessageFromRob from './components/MessageFromRob';
import StatsOverview from './components/StatsOverview';
import CategoryHighlights from './components/CategoryHighlights';
import RecentSalesList from './components/RecentSalesList';
import PropertyMap from './components/PropertyMap';
import MarketTrends from './components/MarketTrends';
import Demographics from './components/Demographics';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import AboutRob from './components/AboutRob';
import WhyZevesto from './components/WhyZevesto';
import PropertyManagement from './components/PropertyManagement';
import FAQ from './components/FAQ';
import StickyMobileCTA from './components/StickyMobileCTA';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="font-sans text-stone-850 antialiased selection:bg-zevesto-green selection:text-white">
      <Navbar onBookAppraisal={openModal} />
      <main>
        <Hero onBookAppraisal={openModal} />
        <MessageFromRob />
        <StatsOverview />
        <CategoryHighlights />
        <RecentSalesList />
        <PropertyMap />
        <MarketTrends />
        <Demographics />
        <AboutRob />
        <WhyZevesto />
        <PropertyManagement onBookAppraisal={openModal} />
        <Testimonials />
        <FAQ />
      </main>
      <Footer onBookAppraisal={openModal} />
      <StickyMobileCTA onBookAppraisal={openModal} />
      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
      <Analytics />
    </div>
  );
};

export default App;
