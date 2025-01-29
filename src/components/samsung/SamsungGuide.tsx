import { SamsungInnovation } from "./sections/SamsungInnovation";
import { SamsungSSeries } from "./sections/SamsungSSeries";
import { SamsungASeries } from "./sections/SamsungASeries";
import { SamsungZSeries } from "./sections/SamsungZSeries";
import { SamsungEcosystem } from "./sections/SamsungEcosystem";
import { SamsungContracts } from "./sections/SamsungContracts";
import { SamsungComparison } from "./sections/SamsungComparison";
import { SamsungChoosingTips } from "./sections/SamsungChoosingTips";

export const SamsungGuide = () => {
  return (
    <div className="bg-gradient-to-b from-white to-[#2990dd]/10 py-12">
      <div className="container mx-auto px-4 max-w-[1000px]">
        <h2 className="text-3xl font-bold tracking-tight text-[#111111] mb-6">
          Your Friendly Guide to Finding the Perfect Samsung Phone Contract
        </h2>
        
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          When it comes to Android smartphones, few brands spark as much excitement as Samsung. From the budget-friendly A-series to the cutting-edge S-series and eye-catching Z-series foldables, Samsung consistently delivers innovation and style in equal measure. In this guide, we'll break down the essentials of Samsung phone deals, Samsung Galaxy contracts, and how you can make the most of your next upgrade—whether you're a longtime Galaxy fan or new to the Samsung family.
        </p>

        <div className="space-y-10">
          <SamsungInnovation />
          <SamsungSSeries />
          <SamsungASeries />
          <SamsungZSeries />
          <SamsungEcosystem />
          <SamsungContracts />
          <SamsungComparison />
          <SamsungChoosingTips />
        </div>
      </div>
    </div>
  );
};