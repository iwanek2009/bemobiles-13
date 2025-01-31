import React from 'react';
import { PageText } from "@/components/ui/page-text";
import { Calendar, Percent, ArrowUpCircle, Info } from "lucide-react";

export const GoogleContractSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <PageText variant="h2" className="text-center mb-8">
            Contract Options and Carrier Deals
          </PageText>
          
          <PageText className="mb-8">
            A phone is a significant investment, and carriers know how to sweeten the deal. From interest-free financing to bonus data allocations, there are plenty of ways to make your Pixel more affordable.
          </PageText>

          <div className="space-y-8">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <PageText variant="h3" className="flex items-center gap-2">
                <Calendar className="w-6 h-6 text-primary" />
                Best Google Phone Contracts
              </PageText>
              <ul className="list-disc pl-6 space-y-3 mt-4 text-gray-600">
                <li>24-Month Contract – Spread out device costs over two years, usually with stable monthly payments.</li>
                <li>12-Month Flex Plans – Pay off your device faster (higher monthly cost) but upgrade more frequently.</li>
                <li>Pay Monthly vs. SIM-Only – If you already own a Pixel or prefer to buy one outright, a SIM-only contract can be more budget-friendly in the long run.</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <PageText variant="h3" className="flex items-center gap-2">
                <Percent className="w-6 h-6 text-primary" />
                Carrier-Specific Promos
              </PageText>
              <ul className="list-disc pl-6 space-y-3 mt-4 text-gray-600">
                <li>Exclusive Google Bundles – Some networks include accessories like the Pixel Buds or discounts on Google Nest devices.</li>
                <li>Family Plans – Multiple lines under one account often come with added perks, like shared data or bundle discounts.</li>
                <li>Trade-In Programs – Offload your old device (even if it's an iPhone) and reduce the upfront cost of a new Pixel.</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <PageText variant="h3" className="flex items-center gap-2">
                <ArrowUpCircle className="w-6 h-6 text-primary" />
                Google Phone Upgrade Deals
              </PageText>
              <ul className="list-disc pl-6 space-y-3 mt-4 text-gray-600">
                <li>Annual Upgrade – Certain carriers let you swap your Pixel for the next-generation model after 12 months, often with minimal extra fees.</li>
                <li>High Trade-In Value – Pixel phones retain decent resale worth, especially if you keep them in good condition and bundled with original accessories.</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
              <PageText className="text-blue-800 font-medium flex items-center gap-2">
                <Info className="w-5 h-5" />
                Pro Tip: Scrutinize contract details for hidden costs. Look out for early exit fees, data overage charges, or price increases that might kick in mid-contract.
              </PageText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};