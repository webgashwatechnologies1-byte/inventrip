const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Terms & Conditions</h1>
          
          <div className="prose max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Acceptance of Terms</h2>
              <p>
                By accessing and using the Inventrip website and services, you accept and agree to be 
                bound by the terms and provision of this agreement. If you do not agree to abide by 
                the above, please do not use this service.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Booking Terms</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>All bookings are subject to availability</li>
                <li>Prices are subject to change without prior notice</li>
                <li>Full payment or deposit may be required at the time of booking</li>
                <li>Booking confirmations will be sent via email or SMS</li>
                <li>Travel documents must be verified before departure</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Cancellation Policy</h2>
              <p>
                Cancellation terms vary by package and service type. Please refer to the specific 
                cancellation policy for your booking. Generally:
              </p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Cancellations made 30+ days before travel: Full refund (minus processing fees)</li>
                <li>Cancellations made 15-30 days before travel: 50% refund</li>
                <li>Cancellations made less than 15 days before travel: No refund</li>
                <li>Refunds may take 7-14 business days to process</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Travel Documents</h2>
              <p>
                It is the responsibility of the traveler to ensure they have valid travel documents, 
                including passports, visas, and any required permits. Inventrip is not responsible for 
                any issues arising from invalid or missing travel documents.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Limitation of Liability</h2>
              <p>
                Inventrip acts as an intermediary between travelers and service providers. We are not 
                liable for any loss, damage, injury, or inconvenience caused by third-party service 
                providers. Travelers are advised to obtain appropriate travel insurance.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Modifications</h2>
              <p>
                Inventrip reserves the right to modify these terms and conditions at any time. 
                Continued use of our services after changes constitutes acceptance of the modified terms.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;

