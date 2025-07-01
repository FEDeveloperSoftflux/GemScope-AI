import React from 'react';
import Footer from '../../Layout/Footer';
import { Link } from 'react-router-dom';
import PrivacyGradient from '../../assets/PrivacyGradient.svg';

const PrivacyPolicy = () => {
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
            <span className="text-white font-medium font-['Lato'] text-[12px] leading-[70px]">Privacy Policy</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-weight-700 mb-24 text-center font-['Schibsted_Grotesk'] relative z-1 ">Privacy Policy</h1>
        </div>

        {/* Content Box */}
        <div className="max-w-3xl w-full bg-black/90 rounded-lg shadow-lg">
        <span className="text-white font-['Schibsted_Grotesk'] text-[30px] leading-[20px] pl-2 mb-12">Privacy Policy</span>
        <div className="mb-6" />
          <style>{`
            .policy-heading {
              font-size: 23px;
              line-height: 30px;
              color: #ffffff;
              font-weight: 500;
              margin-top: 10px;
              margin-bottom: 10px;
              padding-left: 10px;
              font-family: 'Schibsted Grotesk';
            }
            .policy-paragraph {
              font-size: 13px;
              line-height: 25px;
              color: #a3a3a3;
              margin-bottom: 8px;
              padding-left: 10px;
              font-family: 'Lato';
              font-weight: 500;
            }
            .policy-content ul {
              list-style-type: disc;
              list-style-position: inside;
              padding-left: 2rem;
              margin-bottom: 8px;
              font-family: 'Lato';
            }
            .policy-content ol {
              list-style-type: decimal;
              list-style-position: inside;
              padding-left: 2rem;
              margin-bottom: 8px;
              font-family: 'Lato';
            }
            .policy-content li {
              font-size: 13px;
              line-height: 20px;
              color: #a3a3a3;
              margin-bottom: 8px;
              font-family: 'Lato';
            }
            .policy-content li::marker {
              color: #a3a3a3;
              font-size: 16px;
            }
          `}</style>
          <div className="policy-content px-2 py-4">
            <h2 className="policy-heading">GemScope AI Is Committed To Protecting Your Privacy.</h2>
            <p className="policy-paragraph">
              This Privacy Policy explains how we collect, use, and protect your information when you use our website and services, including our crypto analysis and AI-powered tools (the "Platform"). By accessing or using GemScope's AI platform, you agree to this Privacy Policy. If you do not agree, please do not use the Platform.
            </p>

            <h2 className="policy-heading">Information We Collect</h2>
            <div className="policy-section font-bold policy-paragraph" style={{marginBottom: 0}}>
              A) Account Information
            </div>
            <ul>
              <li>Name (optional)</li>
              <li>Email address</li>
              <li>Password (hashed)</li>
              <li>Subscription plan (Free, Pro, Enterprise)</li>
            </ul>
            <div className="policy-section font-bold policy-paragraph" style={{marginBottom: 0}}>
              B) Payment Information
            </div>
            <ul>
              <li>Payment processing is handled by Stripe</li>
              <li>We do not store your full credit card details</li>
              <li>Subscription plan (Free, Pro, Enterprise)</li>
            </ul>
            <div className="policy-section font-bold policy-paragraph" style={{marginBottom: 0}}>
              C) Usage Data
            </div>
            <ul>
              <li>Coins/tokens you search</li>
              <li>API queries triggered through your usage</li>
              <li>AI prompts submitted</li>
              <li>Scans performed</li>
              <li>Dashboard activity (watchlist, saved tokens)</li>
            </ul>
            <div className="policy-section font-bold policy-paragraph" style={{marginBottom: 0}}>
              D) Device & Technical Info
            </div>
            <ul>
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device identifiers</li>
              <li>Referral URLs</li>
              <li>Cookies and analytics tags</li>
            </ul>

            <h2 className="policy-heading">How We Use Your Data</h2>
            <ul>
              <li>Provide core services (token scanning, AI reports, dashboards)</li>
              <li>Enforce subscription limits (Free, Pro, Enterprise)</li>
              <li>Improve system performance and recommendations</li>
              <li>Analyse platform usage and trends</li>
              <li>Send important service updates</li>
              <li>Respond to support inquiries</li>
              <li>Detect and prevent abuse or fraud</li>
            </ul>

            <h2 className="policy-heading">Third-Party Integrations</h2>
            <p className="policy-paragraph">
              We integrate with third-party APIs and platforms. Your usage may involve the following services:
            </p>
            <ul>
              <li>OpenAI (GPT-4): For generating AI summaries, red flags, and trust scores.</li>
              <li>CoinGecko, LunarCrush, DEXTools, Reddit API: For gathering token data and social metrics.</li>
              <li>Stripe: For secure subscription billing.</li>
            </ul>
            <p className="policy-paragraph">
              These services only receive the data required to perform their function. We do not sell or share your data with third parties for marketing purposes.
            </p>

            <h2 className="policy-heading">Data Retention</h2>
            <ul>
              <li>We retain account and usage data as long as your account is active.</li>
              <li>Deleted accounts are permanently removed from our system within 30 days.</li>
              <li>Prompt inputs and AI outputs may be anonymised and stored for internal analytics.</li>
            </ul>

            <h2 className="policy-heading">Your Rights</h2>
            <ul>
              <li>Access your personal data</li>
              <li>Request data deletion</li>
              <li>Modify your information</li>
            </ul>

            <h2 className="policy-heading">Cookies</h2>
            <p className="policy-paragraph">
              We use cookies for:
            </p>
            <ul>
              <li>Session management</li>
              <li>Usage tracking</li>
              <li>Preference storage</li>
            </ul>
            <p className="policy-paragraph">
              You can control cookie settings in your browser, but disabling cookies may limit functionality.
            </p>

            <h2 className="policy-heading">Security</h2>
            <p className="policy-paragraph">
              We implement industry-standard security practices:
            </p>
            <ul>
              <li>HTTPS encryption</li>
              <li>Hashed passwords</li>
              <li>API key access controls</li>
              <li>Rate limiting and abuse detection</li>
            </ul>
            <p className="policy-paragraph">
              However, no online service is 100% secure. You use the Platform at your own risk.
            </p>

            <h2 className="policy-heading">Children's Privacy</h2>
            <p className="policy-paragraph">
              GemScope AI is not intended for users under the age of 18. We do not knowingly collect personal data from children.
            </p>

            <h2 className="policy-heading">International Users</h2>
            <p className="policy-paragraph">
              If you access GemScope's AI platform from outside the UK or EU, note that your information may be transferred to and processed in regions where data protection laws may differ from your jurisdiction.
            </p>

            <h2 className="policy-heading">Changes To This Policy</h2>
            <p className="policy-paragraph">
              We may update this Privacy Policy periodically. You will be notified of material changes via email or app notice.
            </p>

            <h2 className="policy-heading">Contact Us</h2>
            <p className="policy-paragraph">
              If you have questions about this Privacy Policy or our data practices, contact us at: <a href="mailto:support@gemscope-ai.com" className="text-purple-400 underline">support@gemscope-ai.com</a>
            </p>
            <p className="policy-paragraph">
              <b>Effective Date:</b> [Insert Launch Date]<br/>
              <b>Last Updated:</b> [Insert Update Date]
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;