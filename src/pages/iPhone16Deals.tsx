
import { TheMobile } from "@/components/templates/TheMobile";
import { useSEO } from "@/hooks/useSEO";
import { PageText } from "@/components/ui/page-text";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const iPhone16Deals = () => {
  useSEO({
    title: "iPhone 16 Deals | Compare Best Monthly Plans",
    description: "Discover the latest iPhone 16 with flexible monthly contracts. Compare no upfront cost plans, unlimited data options & exclusive network deals."
  });

  return (
    <TheMobile
      title="iPhone 16 deals."
      description="Apple's Most Advanced iPhone with Premium Network Benefits, Unlimited Data Options, and Flexible Monthly Payment Solutions from UK Leading Providers."
      heroImage="/lovable-uploads/ae777cac-c70f-4c87-8a4d-8351654ead38.png"
      imageAlt="iPhone 16 showcasing its design"
      filter={{
        families: [1968],
        upfront_price: {
          min: 0,
          max: 0
        }
      }}
      sort="POPULARITY"
      imageProps={{
        loading: "eager",
        fetchPriority: "high",
        width: "800",
        height: "800",
        decoding: "async"
      }}
    >
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <PageText variant="h2">iPhone 16 Deals Overview</PageText>
        <PageText>
          Experience the future with our exclusive <strong>iPhone 16 deals</strong>! Tailored for UK mobile buyers, these offers come with flexible monthly contracts and no upfront cost. Enjoy premium network benefits and customizable data packages that fit your lifestyle.
        </PageText>

        <div className="my-8">
          <PageText variant="h3">Available iPhone 16 Deals & Contract Offers</PageText>
          <PageText>
            Our range of iPhone 16 deals is designed to suit every budget and usage requirement. Choose from contract lengths of 12, 24, or 36 months, ensuring you pay only what fits your lifestyle.
          </PageText>

          <div className="mt-4 space-y-2">
            <PageText variant="h4">Key Offer Highlights:</PageText>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><strong>Flexible Monthly Contracts:</strong> Spread the cost over your chosen contract period.</li>
              <li><strong>Diverse Data Packages:</strong> Options include 5GB, 10GB, 20GB, or even unlimited data plans.</li>
              <li><strong>Exclusive Network Benefits:</strong> Enjoy enhanced coverage, faster speeds, and extra perks.</li>
              <li><strong>Transparent Payment Options:</strong> No hidden fees and straightforward billing.</li>
            </ul>
          </div>

          <div className="mt-8">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Contract Length</TableHead>
                  <TableHead>Monthly Cost</TableHead>
                  <TableHead>Data Options</TableHead>
                  <TableHead>Extra Perks</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>12 Months</TableCell>
                  <TableCell>£XX/month</TableCell>
                  <TableCell>5GB / 10GB / Unlimited</TableCell>
                  <TableCell>Free music streaming</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>24 Months</TableCell>
                  <TableCell>£XX/month</TableCell>
                  <TableCell>10GB / 20GB / Unlimited</TableCell>
                  <TableCell>International roaming bundle</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>36 Months</TableCell>
                  <TableCell>£XX/month</TableCell>
                  <TableCell>20GB / Unlimited</TableCell>
                  <TableCell>Priority customer support</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="mt-12">
            <PageText variant="h3">iPhone 16 Deals: Device Overview & Comparison</PageText>
            <PageText>
              The new iPhone 16 sets a benchmark in innovation with its state-of-the-art features. Designed for superior performance, it promises an unrivalled mobile experience.
            </PageText>

            <div className="mt-4 space-y-2">
              <PageText variant="h4">Key Features:</PageText>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li><strong>Immersive Display:</strong> Enjoy a larger, edge-to-edge screen for vibrant visuals.</li>
                <li><strong>Advanced Camera System:</strong> Capture professional-quality photos with improved low-light performance.</li>
                <li><strong>Powerful Processor:</strong> Experience seamless multitasking and gaming with the A17 Bionic chip.</li>
                <li><strong>Enhanced Battery Life:</strong> Stay connected longer with efficient power management.</li>
                <li><strong>Flexible Payment:</strong> Benefit from no upfront cost and adaptable monthly contracts.</li>
              </ul>
            </div>

            <div className="mt-8">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Feature</TableHead>
                    <TableHead>iPhone 16</TableHead>
                    <TableHead>Previous Generation</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Display</TableCell>
                    <TableCell>6.7" Super Retina XDR</TableCell>
                    <TableCell>6.1" Retina HD</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Camera</TableCell>
                    <TableCell>Triple-lens with advanced sensors</TableCell>
                    <TableCell>Dual-lens setup</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Processor</TableCell>
                    <TableCell>A17 Bionic</TableCell>
                    <TableCell>A15 Bionic</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Battery Life</TableCell>
                    <TableCell>Up to 20% longer</TableCell>
                    <TableCell>Standard performance</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </TheMobile>
  );
};

export default iPhone16Deals;
