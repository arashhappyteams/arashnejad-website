import { motion } from 'motion/react';
import { SEOHead } from '../components/SEOHead';
import { Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Quotes() {
  const [inspirationLength, setInspirationLength] = useState(0);
  
  // Hero quotes - displayed full-width
  const heroQuotes = [
    {
      id: 'hero1',
      quote: 'Culture eats strategy for breakfast.',
      attribution: 'Peter Drucker',
    },
    {
      id: 'hero2',
      quote: 'You can\'t manage what you can\'t measure.',
      attribution: 'Peter Drucker',
    },
    {
      id: 'hero3',
      quote: 'Any jerk can have short-term earnings. You squeeze, squeeze, squeeze, and the company sinks five years later.',
      attribution: 'Jack Welch',
      commentary: 'Short-term thinking sacrifices long-term value. Leaders must resist the temptation to optimize for quarterly results at the expense of sustainable growth.',
    },
  ];

  // Regular quote cards
  const quotes = [
    {
      id: 2,
      quote: 'A leader is someone who can persuade people to do what they do not want to do and like it.',
      attribution: 'President Harry Truman',
      commentary: 'While controversial in his time, Truman’s point captures the essence of leadership. It is about influence, persuasion, and bringing people together with purpose and belief.',
      category: 'Leadership',
      headshot: 'https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGhlYWRzaG90fGVufDF8fHx8MTc2NTUwNTAwNXww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      quote: 'Simplicity is the ultimate sophistication.',
      attribution: 'Leonardo da Vinci',
      commentary: 'In a world of complexity, the ability to simplify is a superpower. The most effective strategies are clear and focused.',
      category: 'Simplicity',
      // No headshot for this quote
    },
    {
      id: 5,
      quote: 'Leadership is not about being in charge. It is about taking care of those in your charge.',
      attribution: 'Simon Sinek',
      commentary: 'Inspired by his book "Leaders Eat Last", the quote is a reminder of what a Servant Leader is. Take care of your employees and they will take care of your business.',
      category: 'Leadership',
      headshot: 'https://images.unsplash.com/photo-1584940121258-c2553b66a739?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTQ3MjAwMnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 6,
      quote: 'In the middle of difficulty lies opportunity.',
      attribution: 'Albert Einstein',
      commentary: 'Challenges are inevitable, but they\'re also catalysts for innovation. The best leaders see obstacles as opportunities.',
      category: 'Leadership',
      headshot: 'https://images.unsplash.com/photo-1748200100142-e8d4f689acd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRob3IlMjBwb3J0cmFpdCUyMGhlYWRzaG90fGVufDF8fHx8MTc2NTU0OTYyMnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 7,
      quote: 'Management is doing things right; leadership is doing the right things.',
      attribution: 'Peter Drucker',
      commentary: 'If you must constantly check on your team, you have not inspired them or delegated effectively. Growth oriented businesses need leaders who guide their teams to do the right things at the right time.',
      category: 'Culture',
      // No headshot for this quote
    },
    {
      id: 8,
      quote: 'Those who build great companies understand that the ultimate throttle on growth for any great company is not markets, or technology, or competition, or products. It is one thing above all others: the ability to get and keep enough of the right people.',
      attribution: 'Jim Collins',
      commentary: 'CHROs have the shortest lifespan in S&P500 C-suite, because most think they have the strategy or the product so why worry about the people.',
      category: 'Execution',
      headshot: 'https://images.unsplash.com/photo-1663518629510-016989dc4ee3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkZXIlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjU1NDk2MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 9,
      quote: 'Change before you have to.',
      attribution: 'Jack Welch',
      commentary: 'It goes against your grain to change something that ain\'t broken. Do it before someone does it better. Eat or be eaten.',
      category: 'Growth',
      // No headshot for this quote
    },
    {
      id: 10,
      quote: 'The aim of positive psychology is to catalyze a change in psychology from a preoccupation only with repairing the worst things in life to also building the best qualities in life.',
      attribution: 'Martin Seligman',
      commentary: 'Science of happiness is far more advanced than people realize. There is a mathematical formula to bring joy into your lives and most psychologists practice removal of misery instead.',
      category: 'Happiness',
      headshot: 'https://images.unsplash.com/photo-1717068341511-204207d72705?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR1cmUlMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjU1NDk2MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 11,
      quote: 'People don\'t care how much you know until they know how much you care.',
      attribution: 'Theodore Roosevelt',
      commentary: 'Empathy and genuine care are the foundation of effective leadership. Human connection matters more than technical expertise.',
      category: 'Leadership',
      // No headshot for this quote
    },
    {
      id: 12,
      quote: 'The best way to predict the future is to create it.',
      attribution: 'Peter Drucker',
      commentary: 'Much is to be said about execution. I see too many ideas faulter as overthinkers spend too much time trying to predict the future so they never start.',
      category: 'Execution',
      // No headshot for this quote
    },
    {
      id: 13,
      quote: 'To win in the marketplace, you must first win in the workplace.',
      attribution: 'Doug Conant',
      commentary: 'I really like his journey and focus on happiness, trust, and correlation to productivity.',
      category: 'Culture',
      headshot: 'https://images.unsplash.com/photo-1717068341511-204207d72705?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXR1cmUlMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjU1NDk2MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 15,
      quote: 'A bad system will beat a good person every time.',
      attribution: 'W. Edwards Deming',
      commentary: 'Systems and processes matter more than individual heroics. Great organizations build systems that enable success rather than relying on exceptional people to overcome broken processes.',
      category: 'Culture',
    },
    {
      id: 16,
      quote: 'Talent wins games, but teamwork wins championships.',
      attribution: 'Michael Jordan',
      commentary: 'Individual brilliance can only take you so far. Sustained excellence requires teams that trust each other, complement each other\'s strengths, and move forward together.',
      category: 'Leadership',
    },
    {
      id: 17,
      quote: 'Be kind, for everyone you meet is fighting a hard battle.',
      attribution: 'Ian Maclaren',
      commentary: 'Kindness is not a soft skill; it is a leadership skill. Empathy and human connection form the foundation of high-performing teams.',
      category: 'Leadership',
    },
    {
      id: 18,
      quote: 'Most of what we call management consists of making it difficult for people to get their work done.',
      attribution: 'Peter Drucker',
      commentary: 'Excessive management signals a lack of trust and produces compliance, not commitment. Strong leaders inspire direction and ownership rather than compensate with control.',
      category: 'Leadership',
    },
    {
      id: 19,
      quote: 'Disrupters are a personality. Get them out of the way of people trying to do their jobs, because they are poison.',
      attribution: 'Jack Welch',
      commentary: 'Toxicity spreads faster than underperformance. High performance does not excuse destructive behavior. Leaders must confront toxicity early and decisively.',
      category: 'Culture',
    },
    {
      id: 20,
      quote: 'When you are finished changing, you are finished.',
      attribution: 'Benjamin Franklin',
      commentary: 'Teams stagnate when they stop growing. Change, while uncomfortable, creates shared purpose and reinforces bonds. Progress demands motion.',
      category: 'Growth',
    },
    {
      id: 21,
      quote: 'Let us never negotiate out of fear. But let us never fear to negotiate.',
      attribution: 'John F. Kennedy',
      commentary: 'Effective negotiation is about clarity of value, alternatives, and outcomes. It is not about pressure or posturing, but about understanding what is truly at stake.',
      category: 'Strategy',
    },
    {
      id: 22,
      quote: 'The greatest leader is not necessarily the one who does the greatest things. He is the one who gets people to do the greatest things.',
      attribution: 'Ronald Reagan',
      commentary: 'Leaders don\'t own results. They own the systems that produce them. Leadership unlocks performance in others.',
      category: 'Leadership',
    },
    {
      id: 23,
      quote: 'Today\'s consumers are eager to become loyal fans of companies that respect purposeful capitalism. They are not opposed to companies making a profit; indeed, they may even be investors in these companies, but at the core, they want more empathic, enlightened corporations that seek a balance between profit and purpose.',
      attribution: 'Simon Mainwaring',
      commentary: 'Organizations that ignore empathy in pursuit of short-term gains often erode trust, loyalty, and ultimately long-term value. This expectation is strategic, not sentimental.',
      category: 'Culture',
    },
    {
      id: 24,
      quote: 'Success is not final, failure is not fatal. It is the courage to continue that counts.',
      attribution: 'Winston Churchill',
      commentary: 'Resilience and persistence matter more than any single outcome. In turbulent times, the ability to navigate forward when certainty no longer exists defines success.',
      category: 'Leadership',
    },
    {
      id: 25,
      quote: 'There is a big difference between a satisfied customer and a loyal one.',
      attribution: 'Shep Hyken',
      commentary: 'Satisfaction is transactional. Loyalty is relational. The most effective way to outperform competition is not through price wars or aggressive marketing—it is through loyalty.',
      category: 'Strategy',
    },
    {
      id: 26,
      quote: 'Those who know, do. Those who understand, teach.',
      attribution: 'Aristotle',
      commentary: 'True mastery is demonstrated not just through action, but through the ability to transfer knowledge and develop others. Great leaders build capability in their teams.',
      category: 'Leadership',
    },
  ];

  return (
    <>
      <SEOHead
        title="Inspiring Quotes by Arash Nejad | Leadership & Culture"
        description="Explore curated quotes that inspire Arash Nejad's approach to leadership, organizational culture, growth, and human-centric management."
        canonical="https://www.arashnejad.com/quotes"
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Quote size={40} className="mx-auto mb-4 text-[#D9A441]" />
            <h1 className="mb-6">Quotes I Love</h1>
            <p className="text-lg mb-0">
              Words have power. These quotes have influenced my thinking, challenged my assumptions, and inspired my approach to leadership and growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Hero Quote 1 */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Quote size={48} className="mx-auto mb-6 text-[#D9A441]" />
            <blockquote className="text-3xl text-[var(--color-primary)] mb-4 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              {heroQuotes[0].quote}
            </blockquote>
            <div className="w-24 h-1 bg-[#D9A441] mx-auto mb-4" />
            <p className="text-lg text-[var(--color-body-text)]/70 italic">
              — {heroQuotes[0].attribution}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quotes Grid - First Half */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {quotes.slice(0, 6).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="bg-gray-50 p-5 rounded-lg border border-gray-200 h-full flex flex-col transition-all duration-200 hover:border-[#D9A441]/40 hover:shadow-lg relative"
              >
                {/* Optional Author Headshot - Top Right */}
                {item.headshot && (
                  <div className="absolute -top-5 right-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white shadow-md">
                      <img
                        src={item.headshot}
                        alt={item.attribution}
                        className="w-full h-full object-cover grayscale opacity-70"
                      />
                    </div>
                  </div>
                )}

                {/* Gold quote mark */}
                <Quote size={24} className="text-[#D9A441] mb-3" />
                
                {/* Quote text */}
                <blockquote className="text-lg text-[var(--color-primary)] mb-3 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                  {item.quote}
                </blockquote>

                {/* Attribution */}
                <p className="text-base text-[var(--color-body-text)]/70 italic mb-3">
                  — {item.attribution}
                </p>

                {/* Gold divider */}
                <div className="h-px bg-[#D9A441]/30 mb-3" />

                {/* Commentary */}
                <p className="text-sm text-[var(--color-body-text)]/80 mb-3 leading-relaxed">
                  <span className="text-[#D9A441] italic mr-1">My reflection:</span>
                  {item.commentary}
                </p>

                {/* Category tag */}
                <div className="mt-auto pt-2">
                  <span className="inline-block px-3 py-1 border border-[#D9A441] text-[#D9A441] rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Quote 2 */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Quote size={48} className="mx-auto mb-6 text-[#D9A441]" />
            <blockquote className="text-3xl text-[var(--color-primary)] mb-4 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              {heroQuotes[1].quote}
            </blockquote>
            <div className="w-24 h-1 bg-[#D9A441] mx-auto mb-4" />
            <p className="text-lg text-[var(--color-body-text)]/70 italic">
              — {heroQuotes[1].attribution}
            </p>
            <p className="text-sm text-[var(--color-body-text)]/70 italic mt-2">
              {heroQuotes[1].commentary}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quotes Grid - Second Half */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {quotes.slice(6, 12).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="bg-gray-50 p-5 rounded-lg border border-gray-200 h-full flex flex-col transition-all duration-200 hover:border-[#D9A441]/40 hover:shadow-lg relative"
              >
                {/* Optional Author Headshot - Top Right */}
                {item.headshot && (
                  <div className="absolute -top-5 right-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white shadow-md">
                      <img
                        src={item.headshot}
                        alt={item.attribution}
                        className="w-full h-full object-cover grayscale opacity-70"
                      />
                    </div>
                  </div>
                )}

                {/* Gold quote mark */}
                <Quote size={24} className="text-[#D9A441] mb-3" />
                
                {/* Quote text */}
                <blockquote className="text-lg text-[var(--color-primary)] mb-3 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                  {item.quote}
                </blockquote>

                {/* Attribution */}
                <p className="text-base text-[var(--color-body-text)]/70 italic mb-3">
                  — {item.attribution}
                </p>

                {/* Gold divider */}
                <div className="h-px bg-[#D9A441]/30 mb-3" />

                {/* Commentary */}
                <p className="text-sm text-[var(--color-body-text)]/80 mb-3 leading-relaxed">
                  <span className="text-[#D9A441] italic mr-1">My reflection:</span>
                  {item.commentary}
                </p>

                {/* Category tag */}
                <div className="mt-auto pt-2">
                  <span className="inline-block px-3 py-1 border border-[#D9A441] text-[#D9A441] rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Quote 3 */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Quote size={48} className="mx-auto mb-6 text-[#D9A441]" />
            <blockquote className="text-3xl text-[var(--color-primary)] mb-4 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              {heroQuotes[2].quote}
            </blockquote>
            <div className="w-24 h-1 bg-[#D9A441] mx-auto mb-4" />
            <p className="text-lg text-[var(--color-body-text)]/70 italic">
              — {heroQuotes[2].attribution}
            </p>
            {heroQuotes[2].commentary && (
              <p className="text-sm text-[var(--color-body-text)]/70 italic mt-2">
                {heroQuotes[2].commentary}
              </p>
            )}
          </motion.div>
        </div>
      </section>

      {/* Quotes Grid - Third Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {quotes.slice(12).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="bg-gray-50 p-5 rounded-lg border border-gray-200 h-full flex flex-col transition-all duration-200 hover:border-[#D9A441]/40 hover:shadow-lg relative"
              >
                {/* Optional Author Headshot - Top Right */}
                {item.headshot && (
                  <div className="absolute -top-5 right-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white shadow-md">
                      <img
                        src={item.headshot}
                        alt={item.attribution}
                        className="w-full h-full object-cover grayscale opacity-70"
                      />
                    </div>
                  </div>
                )}

                {/* Gold quote mark */}
                <Quote size={24} className="text-[#D9A441] mb-3" />
                
                {/* Quote text */}
                <blockquote className="text-lg text-[var(--color-primary)] mb-3 leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                  {item.quote}
                </blockquote>

                {/* Attribution */}
                <p className="text-base text-[var(--color-body-text)]/70 italic mb-3">
                  — {item.attribution}
                </p>

                {/* Gold divider */}
                <div className="h-px bg-[#D9A441]/30 mb-3" />

                {/* Commentary */}
                <p className="text-sm text-[var(--color-body-text)]/80 mb-3 leading-relaxed">
                  <span className="text-[#D9A441] italic mr-1">My reflection:</span>
                  {item.commentary}
                </p>

                {/* Category tag */}
                <div className="mt-auto pt-2">
                  <span className="inline-block px-3 py-1 border border-[#D9A441] text-[#D9A441] rounded-full text-xs font-semibold">
                    {item.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="py-16 bg-[var(--color-primary)] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-white mb-6">The Power of Words</h2>
            <p className="text-lg text-white/90 mb-4">
              Great quotes distill complex wisdom into memorable insights. They serve as anchors during challenging times and inspiration when we need it most.
            </p>
            <p className="text-lg text-white/90 mb-0">
              I return to these quotes regularly, finding new meaning and relevance as I continue to learn and grow as a leader.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Submission CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-8 rounded-lg border-2 border-[#D9A441]/20"
          >
            <div className="text-center mb-6">
              <Quote size={32} className="mx-auto mb-3 text-[#D9A441]" />
              <h3 className="mb-3">Share a Quote That Inspires You</h3>
              <p className="text-base text-[var(--color-body-text)]/80">
                Have a quote that resonates with you? Send it to me — I may feature it here.
              </p>
            </div>

            <form action="https://formsubmit.co/ArashShn@gmail.com" method="POST" className="space-y-5">
              {/* Hidden FormSubmit Configuration Fields */}
              <input type="hidden" name="_subject" value="New Quote Submission - arashnejad.com" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="true" />
              <input type="hidden" name="_next" value="https://www.arashnejad.com/thank-you.html" />
              
              {/* Honeypot for spam protection */}
              <input type="text" name="_honey" style={{ display: 'none' }} />

              <div>
                <label htmlFor="quote" className="block text-sm font-semibold text-[var(--color-primary)] mb-2">
                  Quote Text <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="quote"
                  name="quote"
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D9A441] focus:border-transparent transition-all resize-none"
                  placeholder="Enter the quote..."
                  required
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="inspiration" className="block text-sm font-semibold text-[var(--color-primary)]">
                    Why It Inspires You <span className="text-red-500">*</span>
                  </label>
                  <span className={`text-xs ${inspirationLength >= 100 ? 'text-green-600' : 'text-gray-500'}`}>
                    {inspirationLength}/100
                  </span>
                </div>
                <textarea
                  id="inspiration"
                  name="inspiration"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D9A441] focus:border-transparent transition-all resize-none"
                  placeholder="Share what makes this quote meaningful to you... (minimum 100 characters)"
                  minLength={100}
                  required
                  onChange={(e) => setInspirationLength(e.target.value.length)}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[var(--color-primary)] mb-2">
                  Your Email <span className="text-gray-400 text-xs font-normal">(optional)</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D9A441] focus:border-transparent transition-all"
                  placeholder="your.email@example.com"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Share your email if you'd like me to get back to you
                </p>
              </div>

              <div className="flex gap-4 justify-center pt-3">
                <button
                  type="submit"
                  className="px-8 py-3 bg-[var(--color-primary)] text-white rounded-md hover:bg-[#0f1621] transition-all duration-200 font-semibold shadow-sm hover:shadow-md"
                >
                  Share Quote
                </button>
                <Link
                  to="/contact"
                  className="inline-block px-8 py-3 border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-md hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200 font-semibold"
                >
                  Contact Me Instead
                </Link>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}