import React from 'react';
import { PageText } from "@/components/ui/page-text";
import { Settings, Cloud, Users, Bot, DollarSign } from "lucide-react";

export const ContractTips = () => {
  return (
    <div className="mt-16">
      <PageText variant="h2" className="mb-8">
        Making the Most of Your Google Phone Contract
      </PageText>
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <ul className="list-disc pl-6 space-y-4 text-gray-600">
          <li className="flex items-start gap-4">
            <Settings className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
            <span>Customize Call Screening – Filter out spam calls automatically for a quieter inbox.</span>
          </li>
          <li className="flex items-start gap-4">
            <Cloud className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
            <span>Explore Google One – For extra cloud storage, extended device backups, and premium support.</span>
          </li>
          <li className="flex items-start gap-4">
            <Users className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
            <span>Use Family Sharing – Share apps, purchased movies, or even your YouTube Premium subscription with family members.</span>
          </li>
          <li className="flex items-start gap-4">
            <Bot className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
            <span>Leverage Google Assistant Routines – Automate morning routines (e.g., news briefings, commute updates) or bedtime tasks (phone brightness down, alarm set).</span>
          </li>
          <li className="flex items-start gap-4">
            <DollarSign className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
            <span>Check for Bundles – If your carrier also provides broadband or TV services, bundling can yield significant monthly savings.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};