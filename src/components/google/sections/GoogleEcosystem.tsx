import React from 'react';
import { PageText } from "@/components/ui/page-text";
import { Home, Link2, Bot, Cloud } from "lucide-react";

const ecosystemFeatures = [
  {
    icon: Home,
    title: "Smart Home Integration",
    description: "Control Nest thermostats, Chromecast devices, and smart speakers directly from your phone."
  },
  {
    icon: Link2,
    title: "Cross-Device Sync",
    description: "Photos, emails, and documents are instantly accessible across your phone, tablet, and computer via Google Drive and Gmail."
  },
  {
    icon: Bot,
    title: "AI-Powered Apps",
    description: "Google Assistant is deeply embedded, making everything from setting reminders to translating text quick and intuitive."
  },
  {
    icon: Cloud,
    title: "Data Backup",
    description: "Automatic backups of messages, app data, and settings in your Google account for painless transfers if you switch or upgrade your device."
  }
];

export const GoogleEcosystem = () => {
  return (
    <div className="mt-16">
      <PageText variant="h2" className="mb-8">
        Tapping into the Google Ecosystem
      </PageText>
      <div className="grid md:grid-cols-2 gap-8">
        {ecosystemFeatures.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-4 mb-4">
              <feature.icon className="w-8 h-8 text-primary" />
              <h3 className="text-xl font-semibold">{feature.title}</h3>
            </div>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};