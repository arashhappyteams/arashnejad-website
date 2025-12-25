import { motion } from 'motion/react';
import { SEOHead } from '../components/SEOHead';
import { Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Contact() {
  const [messageLength, setMessageLength] = useState(0);
  
  return (
    <>
      <SEOHead 
        title="Contact Arash Nejad | Get in Touch"
        description="Get in touch with Arash Nejad to discuss leadership, growth strategy, speaking engagements, or peer conversations about building high-performing organizations."
        canonical="https://www.arashnejad.com/contact"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-4">Let's Connect</h1>
            <p className="text-[var(--color-body-text)]">
              Whether you're interested in a speaking engagement, peer conversation, or just want to exchange perspectives on growth and leadership—I'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pb-16">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-8 rounded-lg border-2 border-[var(--color-accent)]/20"
          >
            <div className="text-center mb-6">
              <p className="text-base text-[var(--color-body-text)]/80">
                Fill out the form below and I'll get back to you within 48 hours.
              </p>
            </div>

            <form action="https://formsubmit.co/ArashShn@gmail.com" method="POST" className="space-y-5">
              {/* Hidden FormSubmit Configuration Fields */}
              <input type="hidden" name="_subject" value="New Contact Form Submission - arashnejad.com" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="true" />
              <input type="hidden" name="_next" value="https://www.arashnejad.com/thank-you.html" />
              
              {/* Honeypot for spam protection */}
              <input type="text" name="_honey" style={{ display: 'none' }} />

              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-[var(--color-primary)] mb-2">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[var(--color-primary)] mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-semibold text-[var(--color-primary)] mb-2">
                  Organization <span className="text-gray-400 text-xs font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all"
                  placeholder="Your company or organization"
                />
              </div>

              <div>
                <label htmlFor="linkedin" className="block text-sm font-semibold text-[var(--color-primary)] mb-2">
                  LinkedIn Profile <span className="text-gray-400 text-xs font-normal">(optional)</span>
                </label>
                <input
                  type="url"
                  id="linkedin"
                  name="linkedin"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="message" className="block text-sm font-semibold text-[var(--color-primary)]">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <span className={`text-xs ${messageLength >= 100 ? 'text-green-600' : 'text-gray-500'}`}>
                    {messageLength}/100
                  </span>
                </div>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all resize-none"
                  placeholder="Tell me what you're looking to discuss... (minimum 100 characters)"
                  minLength={100}
                  onChange={(e) => setMessageLength(e.target.value.length)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="bookSuggestion" className="block text-sm font-semibold text-[var(--color-primary)] mb-2">
                    Book Suggestion <span className="text-gray-400 text-xs font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="bookSuggestion"
                    name="bookSuggestion"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all resize-none"
                    placeholder="Book title and author"
                  />
                </div>

                <div>
                  <label htmlFor="quoteSuggestion" className="block text-sm font-semibold text-[var(--color-primary)] mb-2">
                    Quote Suggestion <span className="text-gray-400 text-xs font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="quoteSuggestion"
                    name="quoteSuggestion"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all resize-none"
                    placeholder="Your favorite quote"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-[var(--color-primary)] text-white rounded-md hover:bg-[#0f1621] transition-all duration-200 font-semibold shadow-sm hover:shadow-md flex items-center justify-center gap-2 group"
              >
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                <span>Send Message</span>
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Other Ways to Connect Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-center mb-12">Other Ways to Connect</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Speaking & Forums Card */}
              <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
                <h3 className="text-xl mb-4">Speaking & Forums</h3>
                <p className="text-[var(--color-body-text)] mb-6">
                  Interested in having me speak at a panel, join a leadership forum, or participate in a discussion?
                </p>
                <Link
                  to="/speaking-coaching"
                  className="text-[var(--color-accent)] hover:underline font-semibold"
                >
                  Learn more about speaking →
                </Link>
              </div>

              {/* Peer Conversations Card */}
              <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
                <h3 className="text-xl mb-4">Peer Conversations</h3>
                <p className="text-[var(--color-body-text)] mb-6">
                  Looking to exchange perspectives as fellow executives or operators on growth and leadership?
                </p>
                <Link
                  to="/speaking-coaching"
                  className="text-[var(--color-accent)] hover:underline font-semibold"
                >
                  Explore peer exchanges →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}