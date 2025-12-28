import { motion } from 'motion/react';
import { SEOHead } from '../components/SEOHead';
import { Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Insights() {
  const insights = [
    {
      id: 1,
      title: 'Growth Is Uncomfortable by Design',
      excerpt: 'Growth and comfort are allergic to each other. This article is written for leaders responsible for scaling organizations who have mastered operational discipline and are now confronting a harder truth: execution alone does not produce growth.',
      readTime: '8 min read',
      tags: ['Leadership', 'Growth', 'Culture'],
      date: 'March 2022',
      slug: 'growth-is-uncomfortable-by-design',
    },
    {
      id: 2,
      title: 'Have We Forgotten How to Negotiate?',
      excerpt: 'After more than a decade in sales organizations, I have sat through countless pricing calls and discount debates. The pattern is familiar: fear drives decisions internally, while value is left undefined externally.',
      readTime: '8 min read',
      tags: ['Sales', 'Strategy', 'Negotiation'],
      date: 'August 2020',
      slug: 'have-we-forgotten-how-to-negotiate',
    },
    {
      id: 3,
      title: '4 Rules to Build High-Performing Teams',
      excerpt: 'Leaders don\'t achieve anything. It is the teams that they build and inspire who achieve the things leaders brag about.',
      readTime: '10 min read',
      tags: ['Leadership', 'Teams'],
      date: 'March 2019',
      slug: '4-rules-to-build-high-performing-teams',
    },
    {
      id: 4,
      title: 'Can Professionals Still Be Managed?',
      excerpt: 'For decades, organizations have relied on managers to direct work, enforce processes, and deliver results. Yet the modern workplace tells a different story: professionals do not want to be managed; they want to be led.',
      readTime: '9 min read',
      tags: ['Leadership', 'Management'],
      date: 'June 2018',
      slug: 'can-professionals-still-be-managed',
    },
    {
      id: 5,
      title: 'Empathy vs. Capitalism',
      excerpt: 'Leadership demands focus, discipline, and performance. But what happens when performance collides with human emotion? Where does empathy fit when capitalism demands results?',
      readTime: '9 min read',
      tags: ['Leadership', 'Culture'],
      date: 'January 2017',
      slug: 'empathy-vs-capitalism',
    },
    {
      id: 6,
      title: 'How to Succeed in Turbulent Times',
      excerpt: 'We are operating in an era of sustained turbulence. The question for leaders is no longer how to predict the future, but how to navigate forward when certainty no longer exists.',
      readTime: '10 min read',
      tags: ['Leadership', 'Strategy'],
      date: 'August 2017',
      slug: 'how-to-succeed-in-turbulent-times',
    },
    {
      id: 7,
      title: 'How to Destroy Your Competition',
      excerpt: 'The most effective way to outperform your competition is not through price wars, feature parity, or aggressive marketing. It is through loyalty.',
      readTime: '9 min read',
      tags: ['Strategy', 'Growth'],
      date: 'September 2016',
      slug: 'how-to-destroy-your-competition',
    },
    {
      id: 8,
      title: 'What Marketing Actually Is',
      excerpt: 'At its core, marketing is the discipline of translating business objectives into market-facing decisions. It sits at the intersection of strategy, customer insight, product design, pricing, and growth.',
      readTime: '8 min read',
      tags: ['Strategy', 'Marketing'],
      date: 'May 2016',
      slug: 'what-marketing-actually-is',
    },
  ];

  return (
    <>
      <SEOHead
        title="Leadership and Growth Insights by Arash Nejad"
        description="Practical insights on leadership, culture, execution, and human-centric growth strategies from Arash Nejad. Learn how to build high-performing teams and scale organizations."
        canonical="https://www.arashnejad.com/insights"
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6">Insights & Articles</h1>
            <p className="text-lg mb-0">
              Practical insights on leadership, growth strategies, and building high-performing organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {insights.map((insight, index) => (
              <motion.article
                key={insight.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -4, borderColor: 'var(--color-accent)', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
                className="bg-gray-50 rounded-lg border-2 border-gray-200 overflow-hidden h-full flex flex-col transition-all duration-200"
              >
                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {insight.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="mb-3 flex-1">{insight.title}</h3>

                  <p className="text-base text-[var(--color-body-text)] mb-4">
                    {insight.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-[var(--color-body-text)]/70 pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <Clock size={14} />
                      <span>{insight.readTime}</span>
                    </div>
                    <span>{insight.date}</span>
                  </div>

                  {/* Read Article Link */}
                  <div className="mt-4">
                    <Link 
                      to={`/insights/${insight.slug}`}
                      className="flex items-center gap-2 text-[var(--color-accent)] text-sm font-semibold group"
                    >
                      <span>Read Article</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-8 rounded-lg text-center"
          >
            <h3 className="mb-4">Want to Go Deeper?</h3>
            <p className="text-base mb-6">
              If you're interested in exploring how these insights can be applied to your organization, let's have a conversation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/speaking-coaching"
                className="inline-block px-6 py-3 bg-[var(--color-primary)] text-white rounded-md hover:bg-[#0f1621] transition-all duration-200 font-semibold"
              >
                Executive Dialogue
              </Link>
              <Link
                to="/contact"
                className="inline-block px-6 py-3 border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-md hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200 font-semibold"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
