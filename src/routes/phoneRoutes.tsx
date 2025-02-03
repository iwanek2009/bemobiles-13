import { Route } from "react-router-dom";
import MobilePhones from "@/pages/MobilePhones";
import SamsungMobilePhones from "@/pages/SamsungMobilePhones";
import GoogleMobilePhones from "@/pages/GoogleMobilePhones";
import SonyMobilePhones from "@/pages/SonyMobilePhones";
import IPhoneMobilePhones from "@/pages/IPhoneMobilePhones";
import HonorMobilePhones from "@/pages/HonorMobilePhones";

export const PhoneRoutes = [
  <Route key="mobile-phones" path="/mobile-phones" element={<MobilePhones />} />,
  <Route key="samsung" path="/samsung-mobile-phones" element={<SamsungMobilePhones />} />,
  <Route key="google" path="/google-mobile-phones" element={<GoogleMobilePhones />} />,
  <Route key="sony" path="/sony-mobile-phones" element={<SonyMobilePhones />} />,
  <Route key="iphone" path="/iphone-mobile-phones" element={<IPhoneMobilePhones />} />,
  <Route key="honor" path="/honor-mobile-phones" element={<HonorMobilePhones />} />
];