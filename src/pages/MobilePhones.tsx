import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BrandFilter } from "@/components/BrandFilter";
import { StickeeWidget } from "@/components/StickeeWidget";
import { useEffect } from "react";

const MobilePhones = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;

      const isLocalLink =
        anchor.hostname === window.location.hostname &&
        anchor.getAttribute('href') &&
        !anchor.getAttribute('href')?.startsWith('#');

      // Only force reload if we're on the mobile-phones page
      if (isLocalLink && window.location.pathname === '/mobile-phones') {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          console.log('Forcing full page reload for:', href);
          window.location.href = href;
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="pt-8 pb-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Mobile Phones</h1>
          <p className="text-gray-600">Find the perfect mobile phone deal for you</p>
        </div>
      </div>
      <BrandFilter />
      <StickeeWidget />
      <Footer />
    </div>
  );
};

export default MobilePhones;