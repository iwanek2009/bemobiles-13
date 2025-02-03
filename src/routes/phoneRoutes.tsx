import { Route } from "react-router-dom";
import MobilePhones from "@/pages/MobilePhones";
import SamsungMobilePhones from "@/pages/SamsungMobilePhones";
import GoogleMobilePhones from "@/pages/GoogleMobilePhones";
import SonyMobilePhones from "@/pages/SonyMobilePhones";
import IPhoneMobilePhones from "@/pages/IPhoneMobilePhones";
import HonorMobilePhones from "@/pages/HonorMobilePhones";
import iPhone13Deals from "@/pages/iPhone13Deals";
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
  <Route key="iphone-13" path="/mobile-phones/iPhone-13-Deals" element={<iPhone13Deals />} />,
  <Route key="galaxy-s24" path="/mobile-phones/Galaxy-S24-Deals" element={<GalaxyS24Deals />} />,
  <Route key="galaxy-s24-plus" path="/mobile-phones/Galaxy-S24-Plus-Deals" element={<GalaxyS24PlusDeals />} />,
  <Route key="galaxy-s24-ultra" path="/mobile-phones/Galaxy-S24-Ultra-Deals" element={<GalaxyS24UltraDeals />} />,
  <Route key="pixel-8" path="/mobile-phones/Google-Pixel-8-Deals" element={<GooglePixel8Deals />} />,
  <Route key="pixel-8-pro" path="/mobile-phones/Google-Pixel-8-Pro-Deals" element={<GooglePixel8ProDeals />} />
];