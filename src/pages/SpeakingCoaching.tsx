import { motion } from 'motion/react';
import { SEOHead } from '../components/SEOHead';
import { Button } from '../components/Button';
import { Presentation, MessageCircle, Users, Rocket, Building, Target, TrendingUp } from 'lucide-react';

export function SpeakingCoaching() {
  const formats = [
    {
      icon: <Presentation size={32} />,
      title: 'Public Speaking',
      description: 'Occasional talks and panels on leadership, culture, and growth.',
    },
    {
      icon: <MessageCircle size={32} />,
      title: 'Peer Conversations',
      description: 'Exchanging perspectives with fellow executives and operators.',
    },
    {
      icon: <Users size={32} />,
      title: 'Leadership Forums',
      description: 'Participating in structured discussions with leadership teams and boards.',
    },
  ];

  const topics = [
    'Building High-Performance Cultures',
    'Scaling Without Losing Your Soul',
    'Human-Centric Leadership',
    'Building Outcome-Based GTMs',
    'Leading Through Transformation',
    'Transforming into a SaaS Business',
    'Simplifying Strategic Complexity',
    'Building Predictables Sales and Marketing Teams',
  ];

  const audiences = [
    {
      icon: <Rocket size={20} />,
      title: 'Startups & Scale-ups',
      description: 'Companies navigating rapid growth and change.',
    },
    {
      icon: <Building size={20} />,
      title: 'Enterprise Organizations',
      description: 'Large companies driving transformation and innovation.',
    },
    {
      icon: <Target size={20} />,
      title: 'Leadership Teams',
      description: 'Executive teams seeking alignment around their GTM.',
    },
    {
      icon: <TrendingUp size={20} />,
      title: 'Eager Individuals',
      description: 'Enterprenours who are willing to learn together.',
    },
  ];

  return (
    <>
      <SEOHead
        title="Speaking & Coaching with Arash Nejad | Executive Leadership"
        description="Engage with Arash Nejad through speaking engagements, executive coaching, and leadership forums. Topics include culture transformation, growth strategies, and building high-performing teams."
        canonical="https://www.arashnejad.com/speaking-coaching"
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-6">Speaking & Coaching</h1>
            <p className="mb-4">
              I engage through occasional public talks, thoughtful peer conversations, and structured leadership forums.
            </p>
            <p className="mb-0">
              Whether you're organizing a panel, seeking an executive perspective, or facilitating a strategic discussion, I'm open to meaningful exchanges that create value for all involved.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Formats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-center mb-12">How We Can Work Together</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {formats.map((format, index) => (
              <motion.div
                key={format.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, borderColor: 'var(--color-accent)', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
                className="bg-white p-6 rounded-lg border-2 border-gray-100 transition-all duration-200"
              >
                <div className="text-[var(--color-accent)] mb-4">{format.icon}</div>
                <h3 className="mb-3">{format.title}</h3>
                <p className="text-base mb-0">{format.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-center mb-4">Popular Topics</h2>
            <p className="text-center text-base text-[var(--color-body-text)] mb-12 max-w-2xl mx-auto">
              These are some of the most requested topics, but every engagement is customized to your specific challenges and goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {topics.map((topic, index) => (
              <motion.div
                key={topic}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ scale: 1.02 }}
                className="bg-gray-50 px-4 py-3 rounded-lg text-center border border-gray-100"
              >
                <p className="text-sm mb-0">{topic}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who I Work With Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-center mb-12">Who I Work With</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {audiences.map((audience, index) => (
              <motion.div
                key={audience.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, borderColor: 'var(--color-accent)', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
                className="flex gap-4 items-start p-6 bg-white rounded-lg border-2 border-gray-100 transition-all duration-200"
              >
                <div className="flex-shrink-0 text-[var(--color-accent)] mt-1">
                  {audience.icon}
                </div>
                <div>
                  <h4 className="mb-2">{audience.title}</h4>
                  <p className="text-base mb-0">{audience.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-[var(--color-primary)] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="text-5xl text-[var(--color-accent)] mb-4">"</div>
            <blockquote className="text-xl leading-relaxed mb-6">
              With his entrepreneurial flair, strategic thinking, relationship building & influencing capacity and focus on driving customer outcomes, Arash would be a great asset to any team, especially those aiming to enter new segments , developing new space with novel technology, or entering foreign markets.
            </blockquote>
            <p className="text-white/80 text-base mb-0">— Canan Özsoy, President and CEO GE in Türkiye</p>
          </motion.div>
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
            <h3 className="mb-4">Let's Exchange Perspectives</h3>
            <p className="text-base mb-6">
              If you're organizing a panel, hosting a leadership forum, or looking for an executive perspective, I'd be happy to explore how we can create value together.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button to="/contact" variant="primary">
                Start a Conversation
              </Button>
              <Button to="/insights" variant="secondary">
                Read My Insights
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}