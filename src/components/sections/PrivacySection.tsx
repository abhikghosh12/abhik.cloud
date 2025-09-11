import React from 'react';

const PrivacySection: React.FC = () => {
  return (
    <section className="section bg-white">
      {/* Pink Gradient Side Panels */}
      <div className="absolute left-0 top-0 w-64 h-full bg-gradient-to-r from-[#E91E63] to-transparent"></div>
      <div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-[#E91E63] to-transparent"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                This website does not collect any kind of data why we don't hold accountability for any 
                data usage. This web site is storing relative data from 3rd party services. We use 
                Google analytics to track the user performance.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Information We Collect</h2>
              <p>
                We may collect information you provide directly to us, such as when you contact us 
                through our contact form or schedule an appointment. This may include your name, 
                email address, phone number, and any message you send to us.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Schedule and manage appointments</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Third-Party Services</h2>
              <p>
                Our website may use third-party services such as:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Google Analytics for website analytics</li>
                <li>Calendly for appointment scheduling</li>
                <li>Social media platforms for social sharing</li>
              </ul>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Contact Information</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mt-4">
                <p><strong>Email:</strong> abhikghosh@outlook.com</p>
                <p><strong>Phone:</strong> (+49) 0176-65979446</p>
                <p><strong>Address:</strong> Maximilianstraße 6, 86150 Augsburg, Germany</p>
              </div>

              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Updates to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any 
                changes by posting the new Privacy Policy on this page and updating the 
                "last updated" date.
              </p>

              <p className="text-sm text-gray-500 mt-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-16 text-center">
        <p className="text-gray-600">©2019 by Abhik Ghosh</p>
      </div>
    </section>
  );
};

export default PrivacySection;