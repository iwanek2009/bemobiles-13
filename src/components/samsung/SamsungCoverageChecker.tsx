export const SamsungCoverageChecker = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4 max-w-[1000px]">
        <h2 className="text-3xl font-bold tracking-tight text-[#111111] mb-8">
          Samsung Coverage Checker: How It Works
        </h2>
        
        <p className="text-gray-600 mb-8">
          Many carriers provide an online coverage checker, similar to a broadband postcode checker. 
          This tool helps you see if a carrier's network offers reliable service where you live or work.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2">Carrier Database</h3>
            <p className="text-gray-600">
              Each network stores its coverage maps in a database—this includes 4G, 5G, and signal strength details.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Input Your Address</h3>
            <p className="text-gray-600">
              Enter your postcode or address in the coverage checker. This step resembles how you'd verify 
              connection speed or best internet in your location for broadband.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Select Samsung Phone and Plan</h3>
            <p className="text-gray-600">
              You can often filter results to see specific deals, like certain data limits or monthly 
              prices for Samsung devices.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Receive a Personalized List</h3>
            <p className="text-gray-600">
              Once the system verifies coverage, you'll get a customized result showing available plans, 
              network speeds, and contract deals for your Samsung smartphone.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Compare and Choose</h3>
            <p className="text-gray-600">
              Decide which option suits you best—if you're unsure, consider reading user reviews or 
              asking about additional promotions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};