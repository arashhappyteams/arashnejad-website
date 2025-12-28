import { motion } from 'motion/react';
import { SEOHead } from '../components/SEOHead';
import { Button } from '../components/Button';
import { Factory, Zap, Brain, Droplet, Bot, Server, Cog, Building, Flame, ExternalLink, Trees } from 'lucide-react';
import { useEffect, useState } from 'react';

function LeaderboardStat({ 
  value, 
  prefix = '', 
  suffix = '', 
  label,
  delay = 0,
  duration = 2 
}: { 
  value: number; 
  prefix?: string; 
  suffix?: string; 
  label: string;
  delay?: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = Math.min((currentTime - startTime) / (duration * 1000), 1);
      
      // Easing function for smooth acceleration
      const easeOutQuart = 1 - Math.pow(1 - elapsed, 4);
      
      setCount(Math.floor(easeOutQuart * value));

      if (elapsed < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value, duration]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      onViewportEnter={() => setIsVisible(true)}
      whileHover={{ y: -4, borderColor: 'var(--color-accent)', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
      className="bg-white p-4 rounded-lg border-2 border-gray-100 text-center transition-all duration-200"
    >
      <div className="text-3xl font-bold text-[var(--color-primary)] mb-1">
        {prefix}{count}{suffix}
      </div>
      <p className="text-xs text-[var(--color-body-text)] mb-0">
        {label}
      </p>
    </motion.div>
  );
}

export function About() {
  const principles = [
    {
      number: '01',
      title: 'Simplicity',
      description: 'The best strategies are simple, clear, and actionable. To me, it\'s not a 2-min pitch. It has to be within 10 seconds.',
    },
    {
      number: '02',
      title: 'Culture First',
      description: 'Culture is the medium between people in a team. It has to match the business objectives.',
    },
    {
      number: '03',
      title: 'Customer Outcomes First',
      description: 'The business has to be defined by the customer\'s success and outside-in to grow. Inside-out businesses are ripe for disruption',
    },
  ];

  const industries = [
    { icon: <Cog size={20} />, name: 'Industrial Automation & Controls' },
    { icon: <Factory size={20} />, name: 'Advanced Manufacturing & Capital Equipment' },
    { icon: <Zap size={20} />, name: 'Energy & Power Systems' },
    { icon: <Brain size={20} />, name: 'AI-Enabled Industrial Systems' },
    { icon: <Droplet size={20} />, name: 'Oil & Gas (Upstream, Midstream, Industrial Services)' },
    { icon: <Bot size={20} />, name: 'Robotics and Cobots' },
    { icon: <Server size={20} />, name: 'Industrial SaaS, Digital Platforms & Analytics' },
    { icon: <Building size={20} />, name: 'Government & Public-Sector Infrastructure' },
    { icon: <Building size={20} />, name: 'Private Equity-Backed Industrial Technology Companies' },
    { icon: <Flame size={20} />, name: 'Welding and Metal Fabrication' },
    { icon: <Trees size={20} />, name: 'Forestry and Pulp & Paper' },
  ];
  
  return (
    <>
      <SEOHead
        title="About Arash Nejad | Global Growth Leader & Executive"
        description="Learn about Arash Nejad's journey in global growth leadership. Based in Canada, working with leaders across North America, Europe, and global markets to build high-performing organizations."
        canonical="https://www.arashnejad.com/about"
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4"
            >
              <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/images/hero/arash-nejad-portrait.jpg"
                  alt="Arash Nejad"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-8"
            >
              <h1 className="mb-6">About Me</h1>
              <p className="mb-4">
                I am a Sales and Marketer at heart. I scale organizations, from startups and scaleups to global enterprises, by aligning people, strategy, and then executing. My secret sauce is my ability to build teams and reignite existing ones to 10x the output.
              </p>
              <p className="mb-4">
                As an electrical and computer engineer, I enjoy building companies around complex and highly technical products. My recent work has focused on the application of AI in industrial automation in heavy industries.
              </p>
              <p className="mb-4">
                Based in Canada, I work with leaders and teams across North America, Europe, and global markets.
              </p>
              <p className="mb-0">
                My approach is rooted in the science behind Positive Psychology and the teachings of <a href="https://ppc.sas.upenn.edu/people/martin-ep-seligman" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors duration-200 underline">Dr. Martin Seligman</a> at The Wharton School of the University of Pennsylvania.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-center mb-12">Education</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <motion.a
              href="https://www.hbs.edu/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              whileHover={{ y: -4, borderColor: 'var(--color-accent)', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
              className="bg-white p-6 rounded-lg border-2 border-gray-100 text-center transition-all duration-200 group"
            >
              <div className="mb-4 flex justify-center">
                <img 
                  src="/images/about/education/harvard-business-school.png" 
                  alt="Harvard Business School"
                  className="h-16 w-auto object-contain"
                />
              </div>
              <p className="font-semibold text-[var(--color-primary)] mb-0 group-hover:text-[var(--color-accent)] transition-colors">Harvard Business School</p>
            </motion.a>

            <motion.a
              href="https://www.wharton.upenn.edu/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -4, borderColor: 'var(--color-accent)', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
              className="bg-white p-6 rounded-lg border-2 border-gray-100 text-center transition-all duration-200 group"
            >
              <div className="mb-4 flex justify-center">
                <img 
                  src="/images/about/education/wharton-school.svg" 
                  alt="The Wharton School"
                  className="h-16 w-auto object-contain"
                />
              </div>
              <p className="font-semibold text-[var(--color-primary)] mb-0 group-hover:text-[var(--color-accent)] transition-colors">The Wharton School</p>
            </motion.a>

            <motion.a
              href="https://www.ge.com/news/reports/inside-crotonville-ges-corporate-vault-unlocked"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              whileHover={{ y: -4, borderColor: 'var(--color-accent)', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
              className="bg-white p-6 rounded-lg border-2 border-gray-100 text-center transition-all duration-200 group"
            >
              <div className="mb-4 flex justify-center">
                <img 
                  src="/images/about/education/general-electric.svg" 
                  alt="GE Management Development Institute"
                  className="h-16 w-auto object-contain"
                />
              </div>
              <p className="font-semibold text-[var(--color-primary)] mb-0 group-hover:text-[var(--color-accent)] transition-colors">GE Management Development Institute</p>
            </motion.a>

            <motion.a
              href="https://www.ucalgary.ca/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -4, borderColor: 'var(--color-accent)', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
              className="bg-white p-6 rounded-lg border-2 border-gray-100 text-center transition-all duration-200 group"
            >
              <div className="mb-4 flex justify-center">
                <img 
                  src="/images/about/education/university-of-calgary.png" 
                  alt="University of Calgary"
                  className="h-16 w-auto object-contain"
                />
              </div>
              <p className="font-semibold text-[var(--color-primary)] mb-0 group-hover:text-[var(--color-accent)] transition-colors">University of Calgary</p>
              <p className="text-xs text-[var(--color-body-text)] mt-1 mb-0">BSc & MSc, Electrical & Computer Engineering</p>
            </motion.a>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-center mb-12">My Philosophy</h2>
          </motion.div>

          <div className="space-y-6">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg border-l-4 border-[var(--color-accent)] shadow-sm"
              >
                <div className="flex gap-6">
                  <span className="text-3xl font-bold text-[var(--color-accent)] opacity-50">
                    {principle.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="mb-2">{principle.title}</h3>
                    <p className="text-base mb-0">{principle.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Perspective Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-center mb-12">Track Record of Impact</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* $150M P&L */}
            <LeaderboardStat value={150} prefix="$" suffix="M+" label="P&L Responsibility" delay={0.05} />

            {/* $2B Sales Regions */}
            <LeaderboardStat value={2} prefix="$" suffix="B+" label="Sales Regions Led" delay={0.1} />

            {/* 4x Valuations */}
            <LeaderboardStat value={4} suffix="x" label="Valuation <15 Months" delay={0.15} />

            {/* 20 Years S&P 500 */}
            <LeaderboardStat value={20} suffix=" Yrs" label="S&P 500 Experience" delay={0.2} />

            {/* 10+ Countries */}
            <LeaderboardStat value={10} suffix="+" label="Countries" delay={0.25} />
          </div>
        </div>
      </section>

      {/* Industry Experience Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-center mb-12">Industry Experience</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -4, borderColor: 'var(--color-accent)', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
                className="bg-white p-4 rounded-lg border-2 border-gray-100 text-center transition-all duration-200"
              >
                <div className="text-[var(--color-primary)] mb-2 flex justify-center">
                  {industry.icon}
                </div>
                <p className="text-sm mb-0">{industry.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media & Publications Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-center mb-12">Media & Publications</h2>
          </motion.div>

          {/* Recent Media */}
          <div className="mb-12">
            <h3 className="mb-6">Recent Media</h3>
            <div className="space-y-4">
              <motion.a
                href="https://www.thefabricator.com/thewelder/article/automationrobotics/keys-to-adopting-welding-automation-successfully"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.05 }}
                whileHover={{ y: -4, borderColor: 'var(--color-accent)', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
                className="block bg-white p-6 rounded-lg border-2 border-gray-100 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-sm text-[var(--color-body-text)] mb-2">March 2024</p>
                    <h4 className="mb-2">Change Management in Automation</h4>
                    <p className="text-sm text-[var(--color-body-text)] mb-0">The Fabricator / The Welder</p>
                  </div>
                  <ExternalLink size={20} className="text-[var(--color-primary)] flex-shrink-0" />
                </div>
              </motion.a>

              <motion.a
                href="https://rss.com/podcasts/hypergen-sales-podcast/1153004/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -4, borderColor: 'var(--color-accent)', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
                className="block bg-white p-6 rounded-lg border-2 border-gray-100 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-sm text-[var(--color-body-text)] mb-2">October 2023</p>
                    <h4 className="mb-2">Sales Leadership Podcast</h4>
                    <p className="text-sm text-[var(--color-body-text)] mb-0">Hypergen Sales Podcast</p>
                  </div>
                  <ExternalLink size={20} className="text-[var(--color-primary)] flex-shrink-0" />
                </div>
              </motion.a>

              <motion.a
                href="https://www.canadianmetalworking.com/canadianfabricatingandwelding/news/automationsoftware/novarc-technologies-appoints-chief-revenue-officer"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                whileHover={{ y: -4, borderColor: 'var(--color-accent)', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
                className="block bg-white p-6 rounded-lg border-2 border-gray-100 transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-sm text-[var(--color-body-text)] mb-2">May 2023</p>
                    <h4 className="mb-2">Fabrication & Welding</h4>
                    <p className="text-sm text-[var(--color-body-text)] mb-0">Canadian Metalworking</p>
                  </div>
                  <ExternalLink size={20} className="text-[var(--color-primary)] flex-shrink-0" />
                </div>
              </motion.a>
            </div>
          </div>

          {/* Academic Research */}
          <div>
            <h3 className="mb-6">Academic Research</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="bg-gray-50 p-6 rounded-lg border-l-4 border-[var(--color-accent)]"
              >
                <p className="text-sm text-[var(--color-body-text)] mb-2">October 2016</p>
                <h4 className="mb-2">Pump Storage Power Plants' Flexibility and Constraints</h4>
                <p className="text-sm text-[var(--color-body-text)] mb-0">31st Power System Conference</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gray-50 p-6 rounded-lg border-l-4 border-[var(--color-accent)]"
              >
                <p className="text-sm text-[var(--color-body-text)] mb-2">January 2005</p>
                <h4 className="mb-2">Voltage Stability Constrained Optimal Power Flow</h4>
                <p className="text-sm text-[var(--color-body-text)] mb-0">Automation of Electric Power Systems, Issue 16</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="bg-gray-50 p-6 rounded-lg border-l-4 border-[var(--color-accent)]"
              >
                <p className="text-sm text-[var(--color-body-text)] mb-2">May 2003</p>
                <h4 className="mb-2">Communication Protocols in Substation Automation and SCADA</h4>
                <p className="text-sm text-[var(--color-body-text)] mb-0">19th Power Engineering Conference in the Middle East</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gray-50 p-6 rounded-lg border-l-4 border-[var(--color-accent)]"
              >
                <p className="text-sm text-[var(--color-body-text)] mb-2">January 2003</p>
                <h4 className="mb-2">Low-power Single-bit Full Adder Cells</h4>
                <p className="text-sm text-[var(--color-body-text)] mb-0">Canadian Journal of Electrical and Computer Engineering, Vol 28, Issue 1</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="bg-gray-50 p-6 rounded-lg border-l-4 border-[var(--color-accent)]"
              >
                <p className="text-sm text-[var(--color-body-text)] mb-2">June 2002</p>
                <h4 className="mb-2">Software-Controlled Electromechanical Model of Functional Gastric Stimulation</h4>
                <p className="text-sm text-[var(--color-body-text)] mb-0">27th International Conference on ICT&P</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Life Beyond Leadership Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Life Beyond Leadership</h2>
            <p className="text-base text-[var(--color-body-text)] max-w-2xl mx-auto">
              When I'm not scaling organizations, you'll find me pushing my own limits and cherishing moments with the people I love.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Skiing */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/about/hobbies/skiing-mountain.jpg"
                  alt="Skiing in the mountains"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                <h3 className="text-white mb-2">Skiing</h3>
                <p className="text-white/90 text-sm mb-0">Finding clarity on the slopes, where every turn requires focus and commitment.</p>
              </div>
            </motion.div>

            {/* Marathon Running */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/about/hobbies/marathon-running.jpg"
                  alt="Marathon running"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                <h3 className="text-white mb-2">Marathon Running</h3>
                <p className="text-white/90 text-sm mb-0">Endurance isn't just physical—it's a mindset that applies to everything I do.</p>
              </div>
            </motion.div>

            {/* Rock Climbing */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/about/hobbies/rock-climbing.jpg"
                  alt="Rock climbing outdoors"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                <h3 className="text-white mb-2">Rock Climbing</h3>
                <p className="text-white/90 text-sm mb-0">Every route is a puzzle. Problem-solving under pressure builds resilience.</p>
              </div>
            </motion.div>

            {/* Family Time */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -4 }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/images/about/hobbies/family-time.jpg"
                  alt="Quality time with family"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                <h3 className="text-white mb-2">Family</h3>
                <p className="text-white/90 text-sm mb-0">The foundation of everything. These moments remind me what truly matters.</p>
              </div>
            </motion.div>
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
            <h3 className="mb-4">Let's Connect</h3>
            <p className="text-base mb-6">
              Follow my journey on LinkedIn or reach out to continue the conversation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href="https://www.linkedin.com/in/arashnejad/" variant="primary">
                View LinkedIn Profile
              </Button>
              <Button to="/contact" variant="secondary">
                Continue the Conversation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
