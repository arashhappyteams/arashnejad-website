import { motion } from 'motion/react';
import { SEOHead } from '../components/SEOHead';

export function PrivacyPolicy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy - Arash Nejad"
        description="Privacy Policy for arashnejad.com. Learn how Aria Developments Inc. collects, uses, and protects your personal information."
        canonical="https://www.arashnejad.com/privacy-policy"
      />

      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6">Privacy Policy</h1>
            <p className="text-sm text-[var(--color-body-text)] mb-8">
              Last updated: Jan 2, 2026
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="mb-4">Introduction</h2>
                <p className="text-base mb-4">
                  Welcome to arashnejad.com ("the Website").
                </p>
                <p className="text-base mb-4">
                  This Website is owned and operated by Aria Developments Inc.
                </p>
                <p className="text-base mb-4">
                  This Privacy Policy explains how personal information is collected, used, and protected when you visit this Website or interact with it.
                </p>
                <p className="text-base mb-4">
                  By using this Website, you agree to the collection and use of information in accordance with this policy.
                </p>
              </div>

              <div>
                <h2 className="mb-4">Information We Collect</h2>
                <p className="text-base mb-4">
                  We may collect the following types of information:
                </p>
                
                <h3 className="mb-3 mt-6">Information you voluntarily provide</h3>
                <ul className="list-disc list-inside space-y-2 text-base ml-4">
                  <li>Name and email address submitted through contact or submission forms</li>
                  <li>Any message, quote, or book recommendation you choose to share</li>
                </ul>

                <h3 className="mb-3 mt-6">Automatically collected information</h3>
                <ul className="list-disc list-inside space-y-2 text-base ml-4">
                  <li>Pages visited and time spent on the Website</li>
                  <li>Browser type, operating system, and device information</li>
                  <li>Referring URLs and general usage data</li>
                </ul>

                <h3 className="mb-3 mt-6">Cookies and similar technologies</h3>
                <ul className="list-disc list-inside space-y-2 text-base ml-4">
                  <li>Basic cookies used for functionality and analytics</li>
                  <li>No cookies are used to sell personal data</li>
                </ul>
              </div>

              <div>
                <h2 className="mb-4">How We Use Your Information</h2>
                <p className="text-base mb-4">
                  Information collected is used to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base ml-4">
                  <li>Respond to inquiries and messages you submit</li>
                  <li>Improve Website content, structure, and performance</li>
                  <li>Understand how visitors interact with the Website</li>
                  <li>Communicate information you explicitly request</li>
                </ul>
                <p className="text-base mb-4 mt-4">
                  No automated decision-making or profiling is performed.
                </p>
              </div>

              <div>
                <h2 className="mb-4">Information Sharing</h2>
                <p className="text-base mb-4">
                  Personal information is not sold, rented, or traded.
                </p>
                <p className="text-base mb-4">
                  Information may be shared only in limited circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base ml-4">
                  <li>With service providers supporting hosting, analytics, or form handling</li>
                  <li>With third-party form handling services that deliver form submissions via email (such as FormSubmit)</li>
                  <li>When required to comply with legal obligations or enforce legal rights</li>
                </ul>
                <p className="text-base mb-4 mt-4">
                  All service providers are required to protect information appropriately.
                </p>
              </div>

              <div>
                <h2 className="mb-4">Third-Party Links and Affiliate Disclosure</h2>
                <p className="text-base mb-4">
                  This Website may contain links to third-party websites, including Amazon affiliate links.
                </p>
                <p className="text-base mb-4">
                  If you click a third-party link, you will be directed to that website.
                </p>
                <p className="text-base mb-4">
                  Aria Developments Inc. is not responsible for the privacy practices or content of external sites.
                </p>
                <p className="text-base mb-4">
                  <strong>Affiliate disclosure:</strong><br />
                  As an Amazon Associate, Aria Developments Inc. may earn from qualifying purchases.
                </p>
              </div>

              <div>
                <h2 className="mb-4">Cookies</h2>
                <p className="text-base mb-4">
                  Cookies are used to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base ml-4">
                  <li>Ensure basic Website functionality</li>
                  <li>Understand traffic and usage patterns</li>
                </ul>
                <p className="text-base mb-4 mt-4">
                  You can control or disable cookies through your browser settings. Disabling cookies may affect certain features of the Website.
                </p>
              </div>

              <div>
                <h2 className="mb-4">Data Security</h2>
                <p className="text-base mb-4">
                  Reasonable administrative, technical, and organizational safeguards are used to protect personal information.
                </p>
                <p className="text-base mb-4">
                  However, no method of transmission or storage is completely secure.
                </p>
              </div>

              <div>
                <h2 className="mb-4">Your Rights</h2>
                <p className="text-base mb-4">
                  Depending on your location, you may have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-base ml-4">
                  <li>Access personal information held about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of personal information</li>
                  <li>Withdraw consent for communications</li>
                </ul>
                <p className="text-base mb-4 mt-4">
                  Requests can be made via the Contact page.
                </p>
              </div>

              <div>
                <h2 className="mb-4">Children's Privacy</h2>
                <p className="text-base mb-4">
                  This Website is not intended for individuals under the age of 13.
                </p>
                <p className="text-base mb-4">
                  Personal information from children is not knowingly collected.
                </p>
              </div>

              <div>
                <h2 className="mb-4">International Visitors</h2>
                <p className="text-base mb-4">
                  This Website is operated from Canada.
                </p>
                <p className="text-base mb-4">
                  Information may be processed and stored in jurisdictions with different data protection laws.
                </p>
              </div>

              <div>
                <h2 className="mb-4">Changes to This Policy</h2>
                <p className="text-base mb-4">
                  This Privacy Policy may be updated periodically.
                </p>
                <p className="text-base mb-4">
                  Changes will be reflected by the "Last updated" date at the top of this page.
                </p>
              </div>

              <div>
                <h2 className="mb-4">Contact</h2>
                <p className="text-base mb-0">
                  If you have questions about this Privacy Policy or how information is handled, please contact us via the Contact page.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}