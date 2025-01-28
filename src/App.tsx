import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import Index from "./pages/Index";
import MobilePhones from "./pages/MobilePhones";

const queryClient = new QueryClient();

const RouteWrapper = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;

      // Only force reload for mobile-phones route
      const href = anchor.getAttribute('href');
      const isMobilePhonesLink = href === '/mobile-phones';

      const isLocalLink =
        anchor.hostname === window.location.hostname &&
        href &&
        !href.startsWith('#');

      if (isLocalLink && isMobilePhonesLink) {
        e.preventDefault();
        console.log('Forcing full page reload for mobile-phones:', href);
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