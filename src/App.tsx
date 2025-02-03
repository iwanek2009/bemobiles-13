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
import NoUpfrontCostPhones from "./pages/NoUpfrontCostPhones";
import PhoneContractsUnder20 from "./pages/PhoneContractsUnder20";
import PhoneContractsUnder30 from "./pages/PhoneContractsUnder30";
import PhoneContractsUnder40 from "./pages/PhoneContractsUnder40";
import PhoneContractsUnder50 from "./pages/PhoneContractsUnder50";
import UnlimitedDataIPhoneDeals from "./pages/UnlimitedDataIPhoneDeals";
import UnlimitedDataSamsungDeals from "./pages/UnlimitedDataSamsungDeals";
import UnlimitedDataGoogleDeals from "./pages/UnlimitedDataGoogleDeals";
import UnlimitedDataHonorDeals from "./pages/UnlimitedDataHonorDeals";
import UnlimitedDataSonyDeals from "./pages/UnlimitedDataSonyDeals";
import RefurbishedPhoneContracts from "./pages/RefurbishedPhoneContracts";

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
        '/mobile-phones/Refurbished-mobile-Phone-contracts'
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
      <Route path="/mobile-phones/no-upfront-cost" element={<NoUpfrontCostPhones />} />
      <Route path="/mobile-phones/Phone-contracts-under-£20" element={<PhoneContractsUnder20 />} />
      <Route path="/mobile-phones/Phone-contracts-under-£30" element={<PhoneContractsUnder30 />} />
      <Route path="/mobile-phones/Phone-contracts-under-£40" element={<PhoneContractsUnder40 />} />
      <Route path="/mobile-phones/Phone-contracts-under-£50" element={<PhoneContractsUnder50 />} />
      <Route path="/mobile-phones/Unlimited-data-iPhone-Deals" element={<UnlimitedDataIPhoneDeals />} />
      <Route path="/mobile-phones/Unlimited-data-Samsung-Deals" element={<UnlimitedDataSamsungDeals />} />
      <Route path="/mobile-phones/Unlimited-data-Google-Deals" element={<UnlimitedDataGoogleDeals />} />
      <Route path="/mobile-phones/Unlimited-data-Honor-Deals" element={<UnlimitedDataHonorDeals />} />
      <Route path="/mobile-phones/Unlimited-data-Sony-Deals" element={<UnlimitedDataSonyDeals />} />
      <Route path="/mobile-phones/Refurbished-mobile-Phone-contracts" element={<RefurbishedPhoneContracts />} />
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