
import { Route } from "react-router-dom";
import MobilePhones from "@/pages/MobilePhones";
import SamsungMobilePhones from "@/pages/SamsungMobilePhones";
import GoogleMobilePhones from "@/pages/GoogleMobilePhones";
import SonyMobilePhones from "@/pages/SonyMobilePhones";
import IPhoneMobilePhones from "@/pages/IPhoneMobilePhones";
import HonorMobilePhones from "@/pages/HonorMobilePhones";
import IPhone16Deals from "@/pages/iPhone16Deals";
import IPhone16PlusDeals from "@/pages/iPhone16PlusDeals";
import IPhone16ProDeals from "@/pages/iPhone16ProDeals";
import IPhone16ProMaxDeals from "@/pages/iPhone16ProMaxDeals";
import GalaxyS25Deals from "@/pages/GalaxyS25Deals";
import GalaxyS25PlusDeals from "@/pages/GalaxyS25PlusDeals";
import GalaxyS25UltraDeals from "@/pages/GalaxyS25UltraDeals";
import GalaxyS24Deals from "@/pages/GalaxyS24Deals";
import GalaxyS24PlusDeals from "@/pages/GalaxyS24PlusDeals";
import GalaxyS24UltraDeals from "@/pages/GalaxyS24UltraDeals";
import GooglePixel9Deals from "@/pages/GooglePixel9Deals";
import GooglePixel9ProDeals from "@/pages/GooglePixel9ProDeals";
import GooglePixel9ProFoldDeals from "@/pages/GooglePixel9ProFoldDeals";
import GooglePixel8ProDeals from "@/pages/GooglePixel8ProDeals";
import GooglePixel8Deals from "@/pages/GooglePixel8Deals";
import UnlimitedDataSamsungDealsByPopularity from "@/pages/UnlimitedDataSamsungDealsByPopularity";
import UnlimitedDataIPhoneDeals from "@/pages/UnlimitedDataIPhoneDeals";

export const PhoneRoutes = [
  <Route key="mobile-phones" path="/mobile-phones" element={<MobilePhones />} />,
  <Route key="samsung" path="/samsung-mobile-phones" element={<SamsungMobilePhones />} />,
  <Route key="google" path="/google-mobile-phones" element={<GoogleMobilePhones />} />,
  <Route key="sony" path="/sony-mobile-phones" element={<SonyMobilePhones />} />,
  <Route key="iphone" path="/iphone-mobile-phones" element={<IPhoneMobilePhones />} />,
  <Route key="honor" path="/honor-mobile-phones" element={<HonorMobilePhones />} />,
  <Route key="iphone-16" path="/mobile-phones/iPhone-16-Deals" element={<IPhone16Deals />} />,
  <Route key="iphone-16-plus" path="/mobile-phones/iPhone-16-Plus-Deals" element={<IPhone16PlusDeals />} />,
  <Route key="iphone-16-pro" path="/mobile-phones/iPhone-16-Pro-Deals" element={<IPhone16ProDeals />} />,
  <Route key="iphone-16-pro-max" path="/mobile-phones/iPhone-16-Pro-Max-Deals" element={<IPhone16ProMaxDeals />} />,
  <Route key="galaxy-s25" path="/mobile-phones/Galaxy-S25-Deals" element={<GalaxyS25Deals />} />,
  <Route key="galaxy-s25-plus" path="/mobile-phones/Galaxy-S25-Plus-Deals" element={<GalaxyS25PlusDeals />} />,
  <Route key="galaxy-s25-ultra" path="/mobile-phones/Galaxy-S25-Ultra-Deals" element={<GalaxyS25UltraDeals />} />,
  <Route key="galaxy-s24" path="/mobile-phones/Galaxy-S24-Deals" element={<GalaxyS24Deals />} />,
  <Route key="galaxy-s24-plus" path="/mobile-phones/Galaxy-S24-Plus-Deals" element={<GalaxyS24PlusDeals />} />,
  <Route key="galaxy-s24-ultra" path="/mobile-phones/Galaxy-S24-Ultra-Deals" element={<GalaxyS24UltraDeals />} />,
  <Route key="pixel-9" path="/mobile-phones/Google-Pixel-9-Deals" element={<GooglePixel9Deals />} />,
  <Route key="pixel-9-pro" path="/mobile-phones/Google-Pixel-9-Pro-Deals" element={<GooglePixel9ProDeals />} />,
  <Route key="pixel-9-pro-fold" path="/mobile-phones/Google-Pixel-9-Pro-Fold-Deals" element={<GooglePixel9ProFoldDeals />} />,
  <Route key="pixel-8-pro" path="/mobile-phones/Google-Pixel-8-Pro-Deals" element={<GooglePixel8ProDeals />} />,
  <Route key="pixel-8" path="/mobile-phones/Google-Pixel-8-Deals" element={<GooglePixel8Deals />} />,
  <Route key="unlimited-samsung-popularity" path="/mobile-phones/Unlimited-data-Samsung-Deals/by-popularity" element={<UnlimitedDataSamsungDealsByPopularity />} />,
  <Route key="unlimited-iphone-data" path="/mobile-phones/Unlimited-data-iPhone-Deals" element={<UnlimitedDataIPhoneDeals />} />
];
