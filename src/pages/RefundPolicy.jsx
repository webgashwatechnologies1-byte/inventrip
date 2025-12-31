const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Refund Policy</h1>
          
          <div className="prose max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">General Refund Policy</h2>
              <p>
                At Inventrip, we understand that plans can change. Our refund policy is designed to 
                be fair to both our customers and our business operations. Refund eligibility and 
                amounts depend on the type of service booked and the timing of the cancellation.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Package Tours</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>30+ days before travel:</strong> Full refund minus 5% processing fee</li>
                <li><strong>15-30 days before travel:</strong> 50% refund</li>
                <li><strong>7-14 days before travel:</strong> 25% refund</li>
                <li><strong>Less than 7 days:</strong> No refund</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Transportation Bookings</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Flights:</strong> Subject to airline cancellation policies</li>
                <li><strong>Railway:</strong> Subject to IRCTC cancellation rules</li>
                <li><strong>Taxi/Volvo:</strong> 50% refund if cancelled 48+ hours before, no refund after</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Refund Processing</h2>
              <p>
                Refunds will be processed to the original payment method used for booking. 
                Processing time is typically 7-14 business days, but may take longer depending 
                on your bank or payment provider.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Non-Refundable Items</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Processing fees</li>
                <li>Travel insurance premiums (once policy is issued)</li>
                <li>Visa fees (once application is submitted)</li>
                <li>Special event tickets or permits</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Force Majeure</h2>
              <p>
                In case of natural disasters, pandemics, or other force majeure events, refund 
                policies may be adjusted. We will work with customers on a case-by-case basis to 
                find the best solution.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Contact for Refunds</h2>
              <p>
                To request a refund, please contact us at{' '}
                <a href="mailto:refunds@inventrip.com" className="text-blue-600 hover:underline">
                  refunds@inventrip.com
                </a>
                {' '}or call{' '}
                <a href="tel:7832911551" className="text-blue-600 hover:underline">
                  +91 7832911551
                </a>
                . Please have your booking reference number ready.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;

