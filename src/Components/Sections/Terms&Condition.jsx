import React, { useEffect, useState } from 'react';
import Footer from '../../Layout/Footer';
import { Link } from 'react-router-dom';
import PrivacyGradient from '../../assets/PrivacyGradient.svg';

const mockFetchPrivacyContent = () => {
  // Simulate an API call to fetch content (replace with real API in future)
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        sections: [
          {
            title: 'Introduction',
            body: `Welcome to GemScope AI. Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services.`
          },
          {
            title: 'Information We Collect',
            body: `We may collect personal information such as your name, email address, and usage data when you interact with our platform. This helps us provide and improve our services.`
          },
          {
            title: 'How We Use Your Information',
            body: `Your information is used to operate, maintain, and enhance our services, communicate with you, and ensure the security of our platform. We do not sell your personal data to third parties.`
          },
          {
            title: 'Data Security',
            body: `We implement industry-standard security measures to protect your data. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.`
          },
          {
            title: 'Contact Us',
            body: `If you have any questions or concerns about this Privacy Policy, please contact us at <a href=\"mailto:support@gemscope.ai\" class=\"text-purple-400 underline\">support@gemscope.ai</a>.`
          }
        ]
      });
    }, 1000);
  });
};

const PrivacyPolicy = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    mockFetchPrivacyContent().then(data => {
      setContent(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <section className="min-h-screen bg-black text-white py-6 px-4 flex flex-col items-center justify-center">
        {/* Header Box */}
        <div 
          className="max-w-3xl w-full bg-black/80 shadow-lg pt-4 pb-6 px-6 relative overflow-hidden mb-2"
          style={{
            backgroundImage: `url(${PrivacyGradient})`,
            backgroundSize: '90%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        >
          {/* Breadcrumb Navigation */}
          <nav className=" flex items-center justify-center space-x-1 text-base relative z-10 pt-10">
            <Link to="/" className="text-gray-400 hover:text-white transition-colors font-['Lato'] text-[12px] leading-[20px]">Home</Link>
            <span className="text-white">&gt;</span>
            <span className="text-white font-medium font-['Lato'] text-[12px] leading-[70px]">Terms of service</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-weight-700 mb-24 text-center font-['Schibsted_Grotesk'] relative z-1 ">Terms of service</h1>
        </div>

        {/* Content Box */}
        <div className="max-w-3xl w-full bg-black/90 rounded-lg shadow-lg">
        <span className="text-white font-['Schibsted_Grotesk'] text-[30px] leading-[20px] pl-2 mb-12">Terms of service</span>
        <div className="mb-6" />
          {/* Custom styles for content */}
          <style>{`
           .policy-heading {
              font-size: 23px;
              line-height: 30px;
              color: #ffffff;
              font-weight: 500;
              margin-top: 10px;
              margin-bottom: 10px;
              line-height: 30px;
              padding-left: 10px;
              font-family: 'Schibsted Grotesk'
              font-weight: 500;
            }
            .policy-paragraph {
              font-size: 13px;
              line-height: 20px;
              color: #a3a3a3;
              line-height: 25px;
              margin-bottom: 8px;
              padding-left: 10px;
              font-family: 'Lato'
              font-weight: 500;
            }
            .policy-content ul, .policy-content ol {
              padding-left: 2rem;
              margin-bottom: 8px;
              padding-left: 10px;
              font-family: 'Lato'
            }
            .policy-content li {
              font-size: 10px;
              line-height: 8px;
              color: #a3a3a3;
              margin-bottom: 8px;
              padding-left: 10px;
              font-family: 'Lato'
            }
          `}</style>
          <div className="policy-content">
            {loading ? (
              <div className="text-center py-10 text-gray-400">Loading policy...</div>
            ) : (
              content.sections.map((section, idx) => (
                <section key={idx}>
                  <h2 className="policy-heading">{section.title}</h2>
                  <div className="policy-paragraph" dangerouslySetInnerHTML={{ __html: section.body }} />
                </section>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;