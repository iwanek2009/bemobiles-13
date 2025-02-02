import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import Index from "./pages/Index";
import MobilePhones from "./pages/MobilePhones";
import ExamplePage from "./pages/ExamplePage";
import SamsungMobilePhones from "./pages/SamsungMobilePhones";
import GoogleMobilePhones from "./pages/GoogleMobilePhones";
import SonyMobilePhones from "./pages/SonyMobilePhones";
import IPhoneMobilePhones from "./pages/IPhoneMobilePhones";
import HonorMobilePhones from "./pages/HonorMobilePhones";

const queryClient = new QueryClient();

const RouteWrapper = () => {
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
        '/honor-mobile-phones'
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
      <Route path="/mobile-phones" element={<MobilePhones />} />
      <Route path="/example" element={<ExamplePage />} />
      <Route path="/samsung-mobile-phones" element={<SamsungMobilePhones />} />
      <Route path="/google-mobile-phones" element={<GoogleMobilePhones />} />
      <Route path="/sony-mobile-phones" element={<SonyMobilePhones />} />
      <Route path="/iphone-mobile-phones" element={<IPhoneMobilePhones />} />
      <Route path="/honor-mobile-phones" element={<HonorMobilePhones />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <RouteWrapper />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;