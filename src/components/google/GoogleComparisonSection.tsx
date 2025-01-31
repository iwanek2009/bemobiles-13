import React from 'react';
import { PageText } from "@/components/ui/page-text";

export const GoogleComparisonSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <PageText variant="h2" className="mb-6">
            Why Choose a Google Phone?
          </PageText>
          <PageText>
            Google phones, typically known as Pixel devices, offer standout features for everyday life. They run clean Android software—straight from Google—and usually get updates faster than most other smartphones. Many users praise their cameras for bright, detail-rich photos, even in low light. If you're craving an easy-to-use interface plus top-notch photo capabilities, a Google phone might be your perfect match.
          </PageText>

          <PageText variant="h2" className="mt-12 mb-6">
            How to Compare Google Phone Contract Deals
          </PageText>
          <PageText>
            Comparing deals for a new Google phone is not unlike comparing broadband services: you want the best price without skimping on quality. Below are quick steps to get you started:
          </PageText>

          <div className="mt-8 space-y-8">
            <div>
              <PageText variant="h3">Check Coverage</PageText>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Ensure you have a reliable mobile network in your area, much like checking for the best internet in [location].</li>
                <li>Carriers usually have coverage maps. Verify your home and work locations for consistent signals.</li>
              </ul>
            </div>

            <div>
              <PageText variant="h3">Assess Data Needs</PageText>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>If you stream movies or do online gaming, an unlimited data plan can be as crucial as a stable home broadband connection.</li>
                <li>Light users may be fine with smaller data allowances, potentially saving money.</li>
              </ul>
            </div>

            <div>
              <PageText variant="h3">Review Contract Length</PageText>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>12-Month Contracts: Typically higher monthly costs but you can upgrade sooner.</li>
                <li>24-Month Contracts: Lower monthly costs but longer commitment.</li>
              </ul>
            </div>

            <div>
              <PageText variant="h3">Examine Upfront Costs</PageText>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Some deals have zero upfront fees, while others require partial payment for the phone.</li>
                <li>Watch out for promotional offers that reduce or waive initial costs entirely.</li>
              </ul>
            </div>

            <div>
              <PageText variant="h3">Look for Extras</PageText>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Certain providers bundle perks like free streaming subscriptions, device insurance, or boosted roaming options.</li>
              </ul>
            </div>
          </div>

          <PageText variant="h2" className="mt-12 mb-6">
            What to Consider Before Signing a Contract
          </PageText>

          <div className="space-y-8">
            <div>
              <PageText variant="h3">1. Budget and Monthly Costs</PageText>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Overall Spend: Weigh the total cost of your plan (phone + data + extras) against your monthly income.</li>
                <li>Hidden Fees: Check if the provider raises prices mid-contract or includes unplanned add-ons.</li>
              </ul>
            </div>

            <div>
              <PageText variant="h3">2. Trade-In Programs</PageText>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Many carriers offer trade-ins for older phones.</li>
                <li>You could significantly offset a new Google phone's cost by surrendering last year's device.</li>
              </ul>
            </div>

            <div>
              <PageText variant="h3">3. Internet Speeds and Usage</PageText>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>If you rely on your phone for tethering or as a backup to home broadband, ensure your mobile data plan can handle high usage.</li>
                <li>It's similar to evaluating connection speed for home internet: consider streaming, gaming, or remote work demands.</li>
              </ul>
            </div>

            <div>
              <PageText variant="h3">4. Customer Service and Reliability</PageText>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Some carriers excel in support, from quick tech assistance to easy billing.</li>
                <li>User reviews or awards can help you identify providers who are consistently reliable.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
