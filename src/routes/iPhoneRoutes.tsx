import { Route } from "react-router-dom";
import IPhone15Deals from "@/pages/iPhone15Deals";
import IPhone15PlusDeals from "@/pages/iPhone15PlusDeals";
import IPhone15ProDeals from "@/pages/iPhone15ProDeals";
import IPhone15ProMaxDeals from "@/pages/iPhone15ProMaxDeals";
import IPhone14Deals from "@/pages/iPhone14Deals";
import IPhone14ProDeals from "@/pages/iPhone14ProDeals";
import IPhone13Deals from "@/pages/iPhone13Deals";

export const IPhoneRoutes = [
  <Route key="iphone-15" path="/mobile-phones/iPhone-15-Deals" element={<IPhone15Deals />} />,
  <Route key="iphone-15-plus" path="/mobile-phones/iPhone-15-Plus-Deals" element={<IPhone15PlusDeals />} />,
  <Route key="iphone-15-pro" path="/mobile-phones/iPhone-15-Pro-Deals" element={<IPhone15ProDeals />} />,
  <Route key="iphone-15-pro-max" path="/mobile-phones/iPhone-15-Pro-Max-Deals" element={<IPhone15ProMaxDeals />} />,
  <Route key="iphone-14" path="/mobile-phones/iPhone-14-Deals" element={<IPhone14Deals />} />,
  <Route key="iphone-14-pro" path="/mobile-phones/iPhone-14-Pro-Deals" element={<IPhone14ProDeals />} />,
  <Route key="iphone-13" path="/mobile-phones/iPhone-13-Deals" element={<IPhone13Deals />} />
];