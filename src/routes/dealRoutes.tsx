import { Route } from "react-router-dom";
import NoUpfrontCostPhones from "@/pages/NoUpfrontCostPhones";
import PhoneContractsUnder20 from "@/pages/PhoneContractsUnder20";
import PhoneContractsUnder30 from "@/pages/PhoneContractsUnder30";
import PhoneContractsUnder40 from "@/pages/PhoneContractsUnder40";
import PhoneContractsUnder50 from "@/pages/PhoneContractsUnder50";
import UnlimitedDataIPhoneDeals from "@/pages/UnlimitedDataIPhoneDeals";
import UnlimitedDataSamsungDeals from "@/pages/UnlimitedDataSamsungDeals";
import UnlimitedDataGoogleDeals from "@/pages/UnlimitedDataGoogleDeals";
import UnlimitedDataHonorDeals from "@/pages/UnlimitedDataHonorDeals";
import UnlimitedDataSonyDeals from "@/pages/UnlimitedDataSonyDeals";
import RefurbishedPhoneContracts from "@/pages/RefurbishedPhoneContracts";

export const DealRoutes = [
  <Route key="no-upfront" path="/mobile-phones/no-upfront-cost" element={<NoUpfrontCostPhones />} />,
  <Route key="under-20" path="/mobile-phones/Phone-contracts-under-£20" element={<PhoneContractsUnder20 />} />,
  <Route key="under-30" path="/mobile-phones/Phone-contracts-under-£30" element={<PhoneContractsUnder30 />} />,
  <Route key="under-40" path="/mobile-phones/Phone-contracts-under-£40" element={<PhoneContractsUnder40 />} />,
  <Route key="under-50" path="/mobile-phones/Phone-contracts-under-£50" element={<PhoneContractsUnder50 />} />,
  <Route key="unlimited-iphone" path="/mobile-phones/Unlimited-data-iPhone-Deals" element={<UnlimitedDataIPhoneDeals />} />,
  <Route key="unlimited-samsung" path="/mobile-phones/Unlimited-data-Samsung-Deals" element={<UnlimitedDataSamsungDeals />} />,
  <Route key="unlimited-google" path="/mobile-phones/Unlimited-data-Google-Deals" element={<UnlimitedDataGoogleDeals />} />,
  <Route key="unlimited-honor" path="/mobile-phones/Unlimited-data-Honor-Deals" element={<UnlimitedDataHonorDeals />} />,
  <Route key="unlimited-sony" path="/mobile-phones/Unlimited-data-Sony-Deals" element={<UnlimitedDataSonyDeals />} />,
  <Route key="refurbished" path="/mobile-phones/Refurbished-mobile-Phone-contracts" element={<RefurbishedPhoneContracts />} />
];