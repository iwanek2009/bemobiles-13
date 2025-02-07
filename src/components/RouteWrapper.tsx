
import { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import ExamplePage from "@/pages/ExamplePage";
import { PhoneRoutes } from "@/routes/phoneRoutes";
import { DealRoutes } from "@/routes/dealRoutes";
import { IPhoneRoutes } from "@/routes/iPhoneRoutes";

export const RouteWrapper = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      const isLocalLink =
        anchor.hostname === window.location.hostname &&
        href &&
        !href.startsWith('#');

      // List of routes that should trigger a full page refresh
      const refreshRoutes = [
        '/mobile-phones',
        '/samsung-mobile-phones',
        '/google-mobile-phones',
        '/sony-mobile-phones',
        '/iphone-mobile-phones',
        '/honor-mobile-phones',
        '/mobile-phones/no-upfront-cost',
        '/mobile-phones/Phone-contracts-under-£20',
        '/mobile-phones/Phone-contracts-under-£30',
        '/mobile-phones/Phone-contracts-under-£40',
        '/mobile-phones/Phone-contracts-under-£50',
        '/mobile-phones/Unlimited-data-iPhone-Deals',
        '/mobile-phones/Unlimited-data-Samsung-Deals',
        '/mobile-phones/Unlimited-data-Google-Deals',
        '/mobile-phones/Unlimited-data-Honor-Deals',
        '/mobile-phones/Unlimited-data-Sony-Deals',
        '/mobile-phones/Refurbished-mobile-Phone-contracts',
        '/mobile-phones/iPhone-15-Deals',
        '/mobile-phones/iPhone-15-Plus-Deals',
        '/mobile-phones/iPhone-15-Pro-Deals',
        '/mobile-phones/iPhone-15-Pro-Max-Deals',
        '/mobile-phones/iPhone-14-Deals',
        '/mobile-phones/iPhone-14-Pro-Deals',
        '/mobile-phones/Galaxy-S25-Deals',
        '/mobile-phones/Galaxy-S25-Plus-Deals',
        '/mobile-phones/Galaxy-S25-Ultra-Deals',
        '/mobile-phones/Google-Pixel-9-Deals',
        '/mobile-phones/Google-Pixel-9-Pro-Deals',
        '/mobile-phones/Google-Pixel-9-Pro-Fold-Deals',
        '/mobile-phones/iPhone-16-Deals',
        '/mobile-phones/iPhone-16-Plus-Deals',
        '/mobile-phones/iPhone-16-Pro-Deals',
        '/mobile-phones/iPhone-16-Pro-Max-Deals',
        '/mobile-phones/Google-Pixel-8-Pro-Deals',  // Added this route
        '/mobile-phones/Google-Pixel-8-Deals'       // Also adding Pixel 8 for consistency
      ];

      const shouldRefresh = refreshRoutes.some(route => href === route);

      if (isLocalLink && shouldRefresh) {
        e.preventDefault();
        console.log('Forcing full page reload for:', href);
        window.location.href = href;
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/example" element={<ExamplePage />} />
      {PhoneRoutes}
      {DealRoutes}
      {IPhoneRoutes}
    </Routes>
  );
};

