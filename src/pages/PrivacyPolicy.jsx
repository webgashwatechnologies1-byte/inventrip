const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
          
          <div className="prose max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Introduction</h2>
              <p>
                Inventrip ("we", "our", or "us") is committed to protecting your privacy. This Privacy 
                Policy explains how we collect, use, disclose, and safeguard your information when you 
                visit our website and use our services.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Information We Collect</h2>
              <p>We may collect information about you in a variety of ways:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Travel preferences and booking information</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Device information and usage data</li>
                <li>Cookies and tracking technologies</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Process and manage your bookings</li>
                <li>Communicate with you about your travel plans</li>
                <li>Send you promotional materials and updates (with your consent)</li>
                <li>Improve our services and website</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect 
                your personal information. However, no method of transmission over the Internet is 
                100% secure, and we cannot guarantee absolute security.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 mt-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to processing of your data</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:privacy@inventrip.com" className="text-blue-600 hover:underline">
                  privacy@inventrip.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

