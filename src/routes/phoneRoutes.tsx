import { Route } from "react-router-dom";
import MobilePhones from "@/pages/MobilePhones";
import SamsungMobilePhones from "@/pages/SamsungMobilePhones";
import GoogleMobilePhones from "@/pages/GoogleMobilePhones";
import SonyMobilePhones from "@/pages/SonyMobilePhones";
import IPhoneMobilePhones from "@/pages/IPhoneMobilePhones";
import HonorMobilePhones from "@/pages/HonorMobilePhones";
import iPhone16Deals from "@/pages/iPhone16Deals";
import iPhone16PlusDeals from "@/pages/iPhone16PlusDeals";
import iPhone16ProDeals from "@/pages/iPhone16ProDeals";
import iPhone16ProMaxDeals from "@/pages/iPhone16ProMaxDeals";
import GalaxyS25Deals from "@/pages/GalaxyS25Deals";
import GalaxyS24Deals from "@/pages/GalaxyS24Deals";
import GalaxyS24PlusDeals from "@/pages/GalaxyS24PlusDeals";
import GalaxyS24UltraDeals from "@/pages/GalaxyS24UltraDeals";
import GooglePixel8Deals from "@/pages/GooglePixel8Deals";
import GooglePixel8ProDeals from "@/pages/GooglePixel8ProDeals";

export const PhoneRoutes = [
  <Route key="mobile-phones" path="/mobile-phones" element={<MobilePhones />} />,
  <Route key="samsung" path="/samsung-mobile-phones" element={<SamsungMobilePhones />} />,
  <Route key="google" path="/google-mobile-phones" element={<GoogleMobilePhones />} />,
  <Route key="sony" path="/sony-mobile-phones" element={<SonyMobilePhones />} />,
  <Route key="iphone" path="/iphone-mobile-phones" element={<IPhoneMobilePhones />} />,
  <Route key="honor" path="/honor-mobile-phones" element={<HonorMobilePhones />} />,
  <Route key="iphone-16" path="/mobile-phones/iPhone-16-Deals" element={<iPhone16Deals />} />,
  <Route key="iphone-16-plus" path="/mobile-phones/iPhone-16-Plus-Deals" element={<iPhone16PlusDeals />} />,
  <Route key="iphone-16-pro" path="/mobile-phones/iPhone-16-Pro-Deals" element={<iPhone16ProDeals />} />,
  <Route key="iphone-16-pro-max" path="/mobile-phones/iPhone-16-Pro-Max-Deals" element={<iPhone16ProMaxDeals />} />,
  <Route key="galaxy-s25" path="/mobile-phones/Galaxy-S25-Deals" element={<GalaxyS25Deals />} />,
  <Route key="galaxy-s24" path="/mobile-phones/Galaxy-S24-Deals" element={<GalaxyS24Deals />} />,
  <Route key="galaxy-s24-plus" path="/mobile-phones/Galaxy-S24-Plus-Deals" element={<GalaxyS24PlusDeals />} />,
  <Route key="galaxy-s24-ultra" path="/mobile-phones/Galaxy-S24-Ultra-Deals" element={<GalaxyS24UltraDeals />} />,
  <Route key="pixel-8" path="/mobile-phones/Google-Pixel-8-Deals" element={<GooglePixel8Deals />} />,
  <Route key="pixel-8-pro" path="/mobile-phones/Google-Pixel-8-Pro-Deals" element={<GooglePixel8ProDeals />} />
];