import React from 'react';
import Footer from '../../Layout/Footer';
import { Link } from 'react-router-dom';
import PrivacyGradient from '../../assets/PrivacyGradient.svg';

const TermsCondition = () => {
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
            <span className="text-white font-medium font-['Lato'] text-[12px] leading-[70px]">Terms of Service</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-weight-700 mb-24 text-center font-['Schibsted_Grotesk'] relative z-1 ">Terms of Service</h1>
        </div>

        {/* Content Box */}
        <div className="max-w-3xl w-full bg-black/90 rounded-lg shadow-lg">
          <span className="text-white font-['Schibsted_Grotesk'] text-[30px] leading-[20px] pl-2 mb-12">Terms of Service</span>
          <div className="mb-6" />
          <style>{`
            .terms-heading {
              font-size: 23px;
              line-height: 30px;
              color: #ffffff;
              font-weight: 500;
              margin-top: 10px;
              margin-bottom: 10px;
              padding-left: 10px;
              font-family: 'Schibsted Grotesk';
            }
            .terms-paragraph {
              font-size: 13px;
              line-height: 25px;
              color: #a3a3a3;
              margin-bottom: 8px;
              padding-left: 10px;
              font-family: 'Lato';
              font-weight: 500;
            }
            .terms-content ul, .terms-content ol {
              list-style-type: disc;
              list-style-position: inside;
              padding-left: 2rem;
              margin-bottom: 8px;
              font-family: 'Lato';
            }
            .terms-content li {
              font-size: 13px;
              line-height: 20px;
              color: #a3a3a3;
              margin-bottom: 8px;
              font-family: 'Lato';
            }
            .terms-content li::marker {
              color: #a3a3a3;
              font-size: 16px;
            }
          `}</style>
          <div className="terms-content px-2 py-4">
            <h2 className="terms-heading">Welcome To GemScope AI</h2>
            <p className="terms-paragraph">
              These Terms of Service ("Terms") govern your access to and use of our website, software, and services (collectively, the "Platform"). By accessing or using the Platform, you agree to be bound by these Terms. If you do not agree, please do not use our services.
            </p>

            <h2 className="terms-heading">Eligibility</h2>
            <p className="terms-paragraph">
              You must be at least 18 years old to use GemScope AI. By using the Platform, you represent and warrant that you meet this age requirement.
            </p>

            <h2 className="terms-heading">Account Registration</h2>
            <ul>
              <li>To access certain features, you must create an account with a valid email address.</li>
              <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
              <li>You agree to notify us immediately of any unauthorized use of your account.</li>
            </ul>

            <h2 className="terms-heading">Subscriptions And Payment</h2>
            <ul>
              <li>GemScope AI offers tiered subscription plans: Free, Pro, Enterprise, and Lifetime Enterprise.</li>
              <li>Subscription fees and terms are described on our pricing page and within the Platform.</li>
              <li>Payments are processed securely via Stripe.</li>
              <li>Subscription fees are non-refundable except as required by law.</li>
              <li>We reserve the right to modify subscription fees with prior notice.</li>
              <li>Failure to pay may result in suspension or termination of your account access.</li>
            </ul>

            <h2 className="terms-heading">Use Of The Platform</h2>
            <ul>
              <li>You agree to use the Platform only for lawful purposes and in compliance with all applicable laws.</li>
              <li>You will not:
                <ul>
                  <li>Attempt to disrupt or interfere with the Platform's operation.</li>
                  <li>Reverse engineer, decompile, or attempt to extract the source code of the Platform.</li>
                  <li>Share or redistribute the Platform or your access credentials without permission.</li>
                </ul>
              </li>
            </ul>

            <h2 className="terms-heading">Content And Intellectual Property</h2>
            <ul>
              <li>All content, data, designs, software, and trademarks related to GemScope AI are owned or licensed by us.</li>
              <li>You may not copy, reproduce, distribute, or create derivative works from any part of the Platform without our written consent.</li>
              <li>User-generated data, including AI prompts and scans, remain your property, but you grant us a license to use anonymized data for analytics and improvement.</li>
            </ul>

            <h2 className="terms-heading">AI Outputs And Data Accuracy</h2>
            <ul>
              <li>The AI-generated scores, summaries, and analyses are for informational purposes only and do not constitute financial advice.</li>
              <li>You acknowledge that crypto markets are volatile, and the Platform's predictions or ratings may not be accurate or guaranteed.</li>
              <li>You agree to use your own judgment and perform due diligence before making any investment decisions.</li>
              <li>We disclaim liability for any losses or damages resulting from your use of the Platform.</li>
            </ul>

            <h2 className="terms-heading">Third-Party Services</h2>
            <ul>
              <li>The Platform integrates with third-party services (e.g., OpenAI, CoinGecko, LunarCrush).</li>
              <li>Your use of these third-party services is subject to their own terms and policies.</li>
              <li>We are not responsible for the availability, accuracy, or reliability of third-party APIs or data.</li>
            </ul>

            <h2 className="terms-heading">Termination</h2>
            <ul>
              <li>We may suspend or terminate your account and access to the Platform at any time for violations of these Terms or any applicable laws.</li>
              <li>Upon termination, your rights to use the Platform will cease immediately.</li>
              <li>Data deletion requests will be handled in accordance with our Privacy Policy.</li>
            </ul>

            <h2 className="terms-heading">Disclaimer Of Warranties</h2>
            <ul>
              <li>The Platform is provided "as is" and "as available" without warranties of any kind, express or implied.</li>
              <li>We disclaim all warranties, including merchantability, fitness for a particular purpose, and non-infringement.</li>
              <li>We do not guarantee uninterrupted or error-free service.</li>
            </ul>

            <h2 className="terms-heading">Limitation Of Liability</h2>
            <ul>
              <li>To the maximum extent permitted by law, GemScope AI and its affiliates are not liable for any indirect, incidental, consequential, or punitive damages.</li>
              <li>Our total liability for any claim arising out of or relating to these Terms or the Platform shall not exceed the amount you paid us in the prior 6 months.</li>
            </ul>

            <h2 className="terms-heading">Indemnification</h2>
            <ul>
              <li>You agree to indemnify and hold harmless GemScope AI and its officers, employees, and partners from any claims, damages, or liabilities arising out of your use of the Platform or violation of these Terms.</li>
            </ul>

            <h2 className="terms-heading">Changes To Terms</h2>
            <ul>
              <li>We may update these Terms periodically.</li>
              <li>Material changes will be communicated via email or on the Platform.</li>
              <li>Continued use after changes signifies acceptance of the updated Terms.</li>
            </ul>

            <h2 className="terms-heading">Governing Law And Dispute Resolution</h2>
            <ul>
              <li>These Terms are governed by the laws of England and Wales.</li>
              <li>Any disputes will be resolved through binding arbitration or courts in that jurisdiction.</li>
            </ul>

            <h2 className="terms-heading">Contact Information</h2>
            <p className="terms-paragraph">
              If you have questions about these Terms, contact us at: <a href="mailto:Support@gemscope-ai.com" className="text-purple-400 underline">Support@gemscope-ai.com</a>
            </p>
            <p className="terms-paragraph">
              <b>Effective Date:</b> [Insert Launch Date]<br/>
              <b>Last Updated:</b> [Insert Update Date]
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsCondition;