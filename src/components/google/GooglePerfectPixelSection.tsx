import React from 'react';
import { PageText } from "@/components/ui/page-text";
import { Smartphone, Camera, Brain, Cloud, Home, Link2, Bot, Smartphone as PhoneIcon, DollarSign, Calendar, Signal, Settings, Users, Cpu } from "lucide-react";

export const GooglePerfectPixelSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <PageText variant="h2" className="text-center mb-12">
            Find the Perfect Pixel
          </PageText>
          
          <div className="prose prose-lg max-w-none text-gray-600 mb-12">
            <p>
              Google's Pixel smartphones have made quite a name for themselves with pure Android experiences, 
              top-tier camera performance, and seamless integration with Google services. Whether you're new 
              to Pixel or upgrading from a previous model, finding the right contract deal can be just as 
              important as choosing the device itself.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <Smartphone className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold">Stock Android Experience</h3>
              </div>
              <p className="text-gray-600">
                No heavy skins or bloatware. You get swift updates, timely security patches, and smooth performance.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <Camera className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold">Exceptional Camera Systems</h3>
              </div>
              <p className="text-gray-600">
                From stunning low-light shots to unique portrait modes, Pixel phones consistently rank among the top for mobile photography.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <Brain className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold">AI-Driven Features</h3>
              </div>
              <p className="text-gray-600">
                Real-time language translation, on-device call screening, and advanced voice commands harness Google's AI technology.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                <Cloud className="w-8 h-8 text-primary" />
                <h3 className="text-xl font-semibold">Seamless Ecosystem</h3>
              </div>
              <p className="text-gray-600">
                Syncing your emails, photos, and files across devices is effortless with built-in Google services.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <PageText variant="h3" className="mb-6">Exploring the Pixel Lineup</PageText>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="text-xl font-semibold mb-4">Standard Pixel</h4>
                  <p className="text-gray-600 mb-4">Perfect for users who want a streamlined phone that delivers great performance without the higher price tag of Pro models.</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Clean Android Interface with day-one OS updates</li>
                    <li>High-Quality Camera that often beats premium competitors</li>
                    <li>Long Battery Life to last through a typical day of moderate use</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h4 className="text-xl font-semibold mb-4">Pixel Pro</h4>
                  <p className="text-gray-600 mb-4">Designed for power users craving top-of-the-line specs, a bigger screen, and premium camera innovations.</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Pro-Level Camera Setup with telephoto lenses for crisp zoom shots</li>
                    <li>Higher Refresh-Rate Display for fluid scrolling (e.g., 90Hz or 120Hz)</li>
                    <li>More Robust Battery for those who need extended screen-on time</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <PageText variant="h3" className="mb-6">Latest Features</PageText>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <ul className="list-disc pl-6 space-y-4 text-gray-600">
                  <li>
                    <span className="font-semibold">Upgraded Tensor Chip:</span> Google's in-house processor focuses on AI tasks, enhancing voice recognition, photography, and overall performance.
                  </li>
                  <li>
                    <span className="font-semibold">Enhanced Camera Features:</span> Improved Night Sight for low-light photography, Magic Eraser for editing out distractions, and advanced portrait modes.
                  </li>
                  <li>
                    <span className="font-semibold">Adaptive Battery & Charging:</span> Smarter battery allocation to apps you use most, along with faster charging speeds.
                  </li>
                  <li>
                    <span className="font-semibold">Software Exclusives:</span> Features like Live Translate and advanced spam call screening.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <PageText variant="h2" className="mb-8">
              Tapping into the Google Ecosystem
            </PageText>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <Home className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-semibold">Smart Home Integration</h3>
                </div>
                <p className="text-gray-600">
                  Control Nest thermostats, Chromecast devices, and smart speakers directly from your phone.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <Link2 className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-semibold">Cross-Device Sync</h3>
                </div>
                <p className="text-gray-600">
                  Photos, emails, and documents are instantly accessible across your phone, tablet, and computer via Google Drive and Gmail.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <Bot className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-semibold">AI-Powered Apps</h3>
                </div>
                <p className="text-gray-600">
                  Google Assistant is deeply embedded, making everything from setting reminders to translating text quick and intuitive.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <Cloud className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-semibold">Data Backup</h3>
                </div>
                <p className="text-gray-600">
                  Automatic backups of messages, app data, and settings in your Google account for painless transfers if you switch or upgrade your device.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <PageText variant="h2" className="mb-8">
              Comparison with Competitors
            </PageText>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <PhoneIcon className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-semibold">Pure Android Experience</h3>
                </div>
                <p className="text-gray-600">
                  No third-party layers or extra bloatware, ensuring faster OS updates.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <Camera className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-semibold">Camera Innovation</h3>
                </div>
                <p className="text-gray-600">
                  Google's software-based photography techniques often outperform competing hardware-based systems.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <Cloud className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-semibold">Deep Google Services Integration</h3>
                </div>
                <p className="text-gray-600">
                  Ideal if you rely on Gmail, Google Docs, YouTube, and other Google apps daily.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <PageText variant="h2" className="mb-8">
              Tips for Choosing the Right Google Phone
            </PageText>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <DollarSign className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-semibold">Budget and Features</h3>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Standard Pixel – Solid choice if your focus is on camera quality and swift updates without extra frills.</li>
                  <li>Pixel Pro – Ideal for those who want advanced camera capabilities, higher refresh rates, or a more premium build.</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <Calendar className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-semibold">Timing Your Purchase</h3>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Launch Season – New Pixels typically release in the fall. Expect promotional carrier deals around these times.</li>
                  <li>Holiday Sales – Black Friday, Boxing Day, or year-end sales can yield substantial discounts, especially on older models.</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <Signal className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-semibold">Checking Carrier Coverage</h3>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Data Demands – High-definition streaming or gaming? Look for unlimited data plans or robust 5G coverage in your area.</li>
                  <li>Roaming Needs – If you travel frequently, choose carriers with favorable international roaming options.</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-4">
                  <Cloud className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-semibold">Storage vs. Cloud</h3>
                </div>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Built-In Storage – Decide between 128GB, 256GB, or higher if you shoot lots of 4K video.</li>
                  <li>Google Photos – Take advantage of cloud storage, but check if original-quality backups cost extra.</li>
                </ul>
              </div>
            </div>

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

            <div className="mt-16">
              <PageText variant="h2" className="mb-8">
                Future Google Phone Trends
              </PageText>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center gap-4 mb-4">
                    <Cpu className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-semibold">Self-Designed Chips</h3>
                  </div>
                  <p className="text-gray-600">
                    Expect Google to continue refining its Tensor processors, focusing on AI performance and battery efficiency.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center gap-4 mb-4">
                    <Camera className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-semibold">Camera Evolution</h3>
                  </div>
                  <p className="text-gray-600">
                    Enhanced zoom features, better low-light capture, and improved post-processing are likely to remain a priority.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-center gap-4 mb-4">
                    <Smartphone className="w-8 h-8 text-primary" />
                    <h3 className="text-xl font-semibold">Foldables?</h3>
                  </div>
                  <p className="text-gray-600">
                    Rumors suggest Google exploring foldable phone designs to compete with market alternatives. Keep an eye on upcoming announcements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
