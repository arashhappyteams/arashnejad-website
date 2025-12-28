import { motion } from 'motion/react';
import { Button } from '../components/Button';
import { SEOHead } from '../components/SEOHead';
import { Signature } from '../components/Signature';
import { VideoPlaceholder } from '../components/VideoPlaceholder';
import { Target, Users, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Arash Nejad',
    jobTitle: 'Global Growth Leader',
    description: 'Multiplying valuations through growth, culture & human-centric leadership.',
    url: 'https://www.arashnejad.com',
    sameAs: [
      'https://linkedin.com/in/arashnejad',
    ],
  };

  const videoStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Meet Arash Nejad - Introduction to Growth Leadership',
    description: 'Learn about Arash Nejad\'s approach to growth leadership and how he partners with organizations to build cultures that drive sustainable success.',
    thumbnailUrl: '/images/seo/video-thumbnail.jpg',
    uploadDate: '2024-12-01',
    duration: 'PT3M',
    contentUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  };

  const capabilities = [
    {
      icon: <Target size={28} />,
      title: 'Realign with Customer Outcomes',
      description: 'Product roadmap, marketing strategy, pricing, and the value propositions need to spell it out in 30 seconds.',
    },
    {
      icon: <Users size={28} />,
      title: 'Building Happy Teams',
      description: 'Focusing on people, remembering that we are human, is the main throttle to growth. Positive psychology is a science.',
    },
    {
      icon: <Cpu size={28} />,
      title: 'Strategy and Execution',
      description: 'Simple strategy that can be spoken to in 30 seconds and execution rigor to see it through. Fast decisions not perfect ones.',
    },
  ];

  const industries = [
    'Mining',
    'Industrial Automation and Control',
    'Utilities',
    'Energy',
    'Welding Automation',
    'Metal Fabrication',
    'Forestry',
    'Pulp and Paper',
    'Oil & Gas',
    'Industrial SaaS',
  ];

  const exploreCards = [
    {
      title: 'Insights',
      description: 'Practical reflections on leadership, execution, culture, and the human side of growth.',
      path: '/insights',
    },
    {
      title: 'Executive Dialogue',
      description: 'Occasional talks and panels, peer dialogue with executives and operators, and leadership forums with teams and boards.',
      path: '/speaking-coaching',
    },
    {
      title: 'Books I Recommend',
      description: 'The books that have shaped my thinking about leadership, culture, and execution.',
      path: '/books',
    },
    {
      title: 'Quotes I Love',
      description: 'The ideas and words that guide my approach to growth, culture, and happiness.',
      path: '/quotes',
    },
  ];

  // Hero quotes - displayed full-width
  const heroQuotes = [
    {
      id: 'hero1',
      quote: 'Culture eats strategy for breakfast.',
      attribution: 'Peter Drucker',
    },
    {
      id: 'hero2',
      quote: 'Leadership is not about being in charge. It is about taking care of those in your charge.',
      attribution: 'Simon Sinek',
    },
  ];

  // Regular quote cards for two-column grid
  const quotes = [
    {
      id: 1,
      quote: 'The only way to do great work is to love what you do.',
      attribution: 'Steve Jobs',
      commentary: 'Passion and purpose are non-negotiable ingredients for excellence. When people are genuinely engaged, everything else follows naturally.',
      category: 'Happiness',
    },
    {
      id: 2,
      quote: 'Simplicity is the ultimate sophistication.',
      attribution: 'Leonardo da Vinci',
      commentary: 'In a world of complexity, the ability to simplify is a superpower. The most effective strategies are clear and focused.',
      category: 'Simplicity',
    },
    {
      id: 3,
      quote: 'What got you here won\'t get you there.',
      attribution: 'Marshall Goldsmith',
      commentary: 'Growth requires evolution. The behaviors that drove early success often become barriers to future growth.',
      category: 'Growth',
    },
    {
      id: 4,
      quote: 'In the middle of difficulty lies opportunity.',
      attribution: 'Albert Einstein',
      commentary: 'Challenges are inevitable, but they\'re also catalysts for innovation. The best leaders see obstacles as opportunities.',
      category: 'Leadership',
    },
    {
      id: 5,
      quote: 'Trust is the glue of life. It\'s the foundational principle that holds all relationships.',
      attribution: 'Stephen Covey',
      commentary: 'Without trust, everything else falls apart. Building trust should be the first priority of every leader and organization.',
      category: 'Culture',
    },
    {
      id: 6,
      quote: 'The score takes care of itself.',
      attribution: 'Bill Walsh',
      commentary: 'Focus on excellence in execution and process, and the results will follow. This mindset shift is transformative for teams.',
      category: 'Execution',
    },
  ];

  return (
    <>
      <SEOHead
        title="Arash Nejad | Growth, Culture, and Human-Centric Leadership"
        description="Multiplying valuations through growth, culture, and human-centric leadership. Based in Canada, working with leaders across North America, Europe, and global markets."
        canonical="https://www.arashnejad.com"
        structuredData={structuredData}
      />

      {/* Video Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoStructuredData) }}
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="mb-6">
                Multiplying Valuations Through Growth, Culture & Human-Centric Leadership.
              </h1>
              <p className="mb-4 text-lg leading-relaxed">
                I scale organizations by aligning people with strategy and executing with discipline. I build and reignite teams in complex global industries.
              </p>
              <p className="mb-8 text-lg leading-relaxed">
                Based in North America, I look forward to connecting with leaders across the world in various markets.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button to="/insights" variant="primary">
                  Read Insights
                </Button>
                <Button to="/speaking-coaching" variant="secondary">
                  Executive Dialogue
                </Button>
              </div>
            </motion.div>

            {/* Right Column - Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/images/hero/arash-nejad-portrait.jpg"
                  alt="Arash Nejad"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Signature Overlay */}
              <div className="absolute bottom-4 right-4">
                <Signature />
              </div>
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Introduction Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column - Video */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl bg-black aspect-video">
                <VideoPlaceholder />
              </div>
            </motion.div>

            {/* Right Column - Context */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <h2 className="mb-4">Meet Arash</h2>
              <p className="text-base mb-4">
                A short introduction to how I think about growth, culture, simplicity, and human centric leadership, and how I help organizations create teams that thrive.
              </p>
              <p className="text-sm text-[var(--color-body-text)]/70 mb-0">
                3 minutes • Leadership & Growth Strategy
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-center mb-12">What I Do</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, borderColor: 'var(--color-accent)', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
                className="bg-white p-6 rounded-lg shadow-sm border-2 border-gray-100 transition-all duration-200"
              >
                <div className="text-[var(--color-accent)] mb-4">{capability.icon}</div>
                <h3 className="mb-3">{capability.title}</h3>
                <p className="text-base text-[var(--color-body-text)]">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why I Do It Section */}
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-12">Why I Do It</h2>
            <p className="text-lg leading-relaxed mb-0">
              <span className="relative inline-block">
                <span className="relative z-10 font-semibold text-[var(--color-primary)]">
                  My purpose is simple: to bring happiness.
                </span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-[var(--color-accent)]/20 -z-0" />
              </span>{' '}
              A teammate, a customer, or the person in front of me in a queue; After all, if we are not making the world a better place every day, what are we doing?
            </p>
          </motion.div>
        </div>
      </section>

      {/* Where I've Worked Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-4">Industries I Understand Deeply</h2>
              <p className="text-base leading-relaxed mb-3">
                I have worked across technical and heavy industries where execution, reliability, and culture are essential.
              </p>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-2 gap-3"
            >
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-[var(--color-body-text)]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                  <span className="text-base">{industry}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Explore My Work Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-center mb-12">Explore My Work</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exploreCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={card.path}>
                  <motion.div
                    whileHover={{ 
                      y: -4, 
                      borderColor: 'var(--color-accent)',
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)'
                    }}
                    className="bg-white p-6 rounded-lg border-2 border-gray-100 h-full flex flex-col transition-all duration-200"
                  >
                    <h3 className="mb-2">{card.title}</h3>
                    <p className="text-base text-[var(--color-body-text)] mb-4 flex-1">
                      {card.description}
                    </p>
                    <div className="flex items-center gap-2 text-[var(--color-accent)] text-sm font-semibold">
                      <span>Learn more</span>
                      <ArrowRight size={16} />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
