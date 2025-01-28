import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Index from "./pages/Index";
import MobilePhones from "./pages/MobilePhones";

const queryClient = new QueryClient();

const RouteWrapper = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleMobilePhonesNavigation = () => {
    // Force a clean reload through the browser
    window.location.href = '/mobile-phones';
  };

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route 
        path="/mobile-phones" 
        element={<MobilePhones />}
        handle={{ onNavigate: handleMobilePhonesNavigation }}
      />
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