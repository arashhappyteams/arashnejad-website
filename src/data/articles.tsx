import { Link } from 'react-router-dom';

// Article data structure - easy to edit directly in code
export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  readingTime: string;
  tableOfContents: { id: string; text: string }[];
  content: JSX.Element;
}

// All articles - add new articles here
export const articles: Article[] = [
  {
    slug: 'growth-is-uncomfortable-by-design',
    title: 'Growth Is Uncomfortable by Design',
    description: 'Growth and comfort are allergic to each other. This is not a comfortable conversation. This article is written for leaders responsible for scaling organizations—CEOs, board members, and senior executives—who have already mastered operational discipline and are now confronting a harder truth: execution alone does not produce growth.',
    date: 'March 2022',
    category: 'Leadership',
    tags: ['Leadership', 'Growth', 'Culture'],
    readingTime: '8 min read',
    tableOfContents: [
      { id: 'section-1', text: 'Treat HR as a Growth Engine, Not a Support Function' },
      { id: 'section-2', text: 'Growth Is a Culture, Only Then It Is a Process' },
      { id: 'section-3', text: 'Stop Worshipping Performance Metrics in Isolation' },
      { id: 'section-4', text: 'A Final Thought for Leaders' },
    ],
    content: (
      <>
        {/* H2 Section 1 */}
        <section id="section-1" className="mb-12 scroll-mt-32">
          <h2 className="mb-6">Treat HR as a Growth Engine, Not a Support Function</h2>
          <p>
            Growth requires changing how we work, how we lead, and how we engage customers. Most leadership playbooks, including those taught in MBA programs, emphasize planning, risk mitigation, and disciplined execution. Those are table stakes. They are necessary, but they do not explain why so many well-run organizations stall, plateau, or quietly decay.
          </p>
          <p>
            <a href="https://www.ge.com/news/reports/jack-welch-legacy" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Jack Welch</a> believed Human Resources was the most important function in the company. Yet in most corporations, CHROs have the shortest tenure in the C-suite. That contradiction is not accidental.
          </p>
          <p>
            Elite HR leaders do not manage policies; they architect talent systems. They hire leaders, build leadership pipelines, develop high-performance teams, and remove toxic behaviors—including toxic A players who produce incredible short-term results. When HR is strong, it quietly compounds organizational advantage. When it is weak, no strategy survives.
          </p>
          <p>
            The reason many HR leaders fail is simple: they are incentivized to protect compliance and harmony rather than performance and capability. Growth demands the opposite. It requires HR leaders who are willing to challenge executives, enforce standards, and design systems that reward long-term contribution over short-term optics.
          </p>
        </section>

        {/* Blockquote 1 */}
        <blockquote className="my-8 pl-6 border-l-4 border-[var(--color-accent)] bg-gray-50 py-4 pr-6 rounded-r-lg">
          <p className="italic text-lg mb-2">
            "To win in the marketplace, you must first win in the workplace."
          </p>
          <p className="text-base mb-0">
            — <a href="https://www.forbes.com/sites/dougconant/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Doug Conant</a>
          </p>
        </blockquote>

        {/* H2 Section 2 */}
        <section id="section-2" className="mb-12 scroll-mt-32">
          <h2 className="mb-6">Growth Is a Culture, Only Then It Is a Process</h2>
          <p>
            Growth starts with culture.
          </p>
          <p>
            Organizations grow when they are led by transformational leaders—leaders who raise ambition, increase capability, and create psychological ownership in their teams. These leaders do not merely execute change; they embody it. When placed across the organization, they shape behaviors. Behaviors reinforce systems. Systems determine outcomes.
          </p>
          <p>
            <a href="https://leadershipcenter.artsci.wustl.edu/about-us/james-macgregor-burns" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">James MacGregor Burns</a> defined transformational leadership as leadership that elevates both motivation and morality in followers.
          </p>
          <p>
            <a href="https://marshallgoldsmith.com/articles/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Marshall Goldsmith</a> has written extensively about identifying and developing such leaders.
          </p>
          <p>
            Culture is not what you say; it is what your systems tolerate.
          </p>
        </section>

        {/* Blockquote 2 */}
        <blockquote className="my-8 pl-6 border-l-4 border-[var(--color-accent)] bg-gray-50 py-4 pr-6 rounded-r-lg">
          <p className="italic text-lg mb-2">
            "A bad system will beat a good person every time."
          </p>
          <p className="text-base mb-0">
            — <a href="https://deming.org/deming-the-man/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">W. Edwards Deming</a>
          </p>
        </blockquote>

        <p>
          If your culture resists growth, your best people will either conform—or leave.
        </p>

        {/* H2 Section 3 */}
        <section id="section-3" className="mb-12 scroll-mt-32">
          <h2 className="mb-6">Stop Worshipping Performance Metrics in Isolation</h2>
          <p>
            Most organizations claim to value trust, collaboration, and leadership. Then they promote and reward people almost exclusively on individual performance metrics.
          </p>
          <p>
            Simon Sinek describes this as the difference between a <Link to="/books" className="text-[var(--color-accent)] hover:underline">finite and infinite mindset</Link>.
          </p>
          <p>
            Tony Schwartz, writing in <a href="https://hbr.org/2013/06/the-way-were-working-isnt-working" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Harvard Business Review</a>, highlights the same tension: trust is a leading indicator of sustainable performance, yet it is rarely measured because it is uncomfortable to quantify.
          </p>
          <p>
            Performance metrics are lagging indicators. Trust, psychological safety, and team health are leading ones.
          </p>
          <p>
            Consider this dilemma: is your salesperson of the year the best contributor because they closed the largest deal—or because they elevated the entire team, shared knowledge, and made others better? Organizations that cannot answer this question consistently will eventually optimize themselves into dysfunction.
          </p>
        </section>

        {/* Pull Quote */}
        <div className="my-12 text-center px-6 py-8 bg-[var(--color-accent)]/5 rounded-lg">
          <div className="max-w-2xl mx-auto">
            <p className="text-2xl text-[var(--color-primary)] italic mb-0 relative">
              <span className="text-[var(--color-accent)] text-4xl absolute -left-4 -top-2">&ldquo;</span>
              Organizational culture is the water in the fishbowl. If the water is clean, nourishing, and energizing, the fish will thrive. If it is toxic, the fish will die—leaving the infrastructure valueless.
              <span className="text-[var(--color-accent)] text-4xl absolute -right-4 -bottom-6">&rdquo;</span>
            </p>
            <p className="text-base text-[var(--color-body-text)] mt-4 mb-0">
              — Ranjan De Silva
            </p>
          </div>
        </div>

        {/* H2 Section 4 */}
        <section id="section-4" className="mb-12 scroll-mt-32">
          <h2 className="mb-6">A Final Thought for Leaders</h2>
          <p>
            Leaders do not own results. They own the systems that produce them.
          </p>
          <p>
            If you are making decisions that feel easy with predictable outcomes, you are not pushing yourself. Decisions should carry risk. Remember the investment formula: more risk, more reward; less risk, less reward.
          </p>
          <p>
            Calculate the risks. Don't wait for perfect clarity. As long as the door is a two-way door, walk through it and learn.
          </p>
        </section>
      </>
    ),
  },

  {
    slug: '4-rules-to-build-high-performing-teams',
    title: '4 Rules to Build High-Performing Teams',
    description: 'Leaders don\'t achieve anything. It is the teams that they build and inspire who achieve the things leaders brag about. Whether you are part of a tightly defined team or an individual contributor within a large organization, your success increasingly depends on your ability to create, sustain, and contribute to effective teams.',
    date: 'March 2019',
    category: 'Leadership',
    tags: ['Leadership', 'Teams'],
    readingTime: '10 min read',
    tableOfContents: [
      { id: 'intro', text: 'Introduction' },
      { id: 'rule-1', text: 'Rule 1: Be Human First' },
      { id: 'rule-2', text: 'Rule 2: Inspire, Don\'t Merely Manage' },
      { id: 'rule-3', text: 'Rule 3: Remove Toxicity Early and Decisively' },
      { id: 'rule-4', text: 'Rule 4: Drive Continuous Change' },
      { id: 'closing', text: 'Closing Thought' },
    ],
    content: (
      <>
        {/* Introduction */}
        <section id="intro" className="mb-12 scroll-mt-32">
          <p>
            Leaders don't achieve anything. It is the teams that they build and inspire who achieve the things leaders brag about.
          </p>
          <p>
            Michael Jordan captured this reality succinctly:
          </p>
          <blockquote className="my-8 pl-6 border-l-4 border-[var(--color-accent)] bg-gray-50 py-4 pr-6 rounded-r-lg">
            <p className="italic text-lg mb-0">
              "Talent wins games, but teamwork wins championships."
            </p>
          </blockquote>
          <p>
            Whether you are part of a tightly defined team or an individual contributor within a large organization, your success increasingly depends on your ability to create, sustain, and contribute to effective teams.
          </p>
          <p>
            There are countless frameworks, guidelines, and theories on team building. Over time, however, I have found that most successful teams consistently follow four fundamental rules.
          </p>
        </section>

        {/* Rule 1 */}
        <section id="rule-1" className="mb-12 scroll-mt-32">
          <h2 className="mb-6">Rule 1: Be Human First</h2>
          <p>
            This sounds simple, but it is often the first thing lost.
          </p>
          <p>
            As leaders, we immerse ourselves in metrics, forecasts, presentations, and back-to-back meetings. In doing so, we sometimes forget that organizations are ultimately collections of people. High-performing teams are built on trust, empathy, and genuine human connection.
          </p>
          <p>
            Being human means listening, recognizing effort, and showing empathy—especially under pressure. Small gestures matter. Presence matters. Kindness is not a soft skill; it is a leadership skill.
          </p>
          <blockquote className="my-8 pl-6 border-l-4 border-[var(--color-accent)] bg-gray-50 py-4 pr-6 rounded-r-lg">
            <p className="italic text-lg mb-2">
              "Be kind, for everyone you meet is fighting a hard battle."
            </p>
            <p className="text-base mb-0">
              — Ian Maclaren (<a href="https://quoteinvestigator.com/2015/12/28/kind/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">source and attribution discussion</a>)
            </p>
          </blockquote>
          <p>
            Regardless of attribution, the sentiment holds true and leaders ignore it at their peril.
          </p>
        </section>

        {/* Rule 2 */}
        <section id="rule-2" className="mb-12 scroll-mt-32">
          <h2 className="mb-6">Rule 2: Inspire, Don't Merely Manage</h2>
          <p>
            If you lead people, your role isn't to simply allocate tasks or enforce processes. Your role is to give meaning to the work. People perform at their best when they understand why their efforts matter and how their contributions connect to a larger purpose.
          </p>
          <p>
            Excessive management is exhausting for leaders and teams alike. It often signals a lack of trust and tends to produce compliance, not commitment.
          </p>
          <p>
            Peter Drucker expressed this distinction clearly:
          </p>
          <blockquote className="my-8 pl-6 border-l-4 border-[var(--color-accent)] bg-gray-50 py-4 pr-6 rounded-r-lg">
            <p className="italic text-lg mb-2">
              "Most of what we call management consists of making it difficult for people to get their work done."
            </p>
            <p className="text-base mb-0">
              — <a href="https://www.drucker.institute/about-peter-drucker/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Peter Drucker</a>
            </p>
          </blockquote>
          <p>
            Strong leaders inspire direction and ownership. Weak leaders compensate with control.
          </p>
        </section>

        {/* Rule 3 */}
        <section id="rule-3" className="mb-12 scroll-mt-32">
          <h2 className="mb-6">Rule 3: Remove Toxicity Early and Decisively</h2>
          <p>
            Toxicity spreads faster than underperformance. It's a pandemic you do not want.
          </p>
          <p>
            Every team will experience disagreement, conflict, and periods of uneven performance. These are normal and manageable. Toxic behavior is different. Persistent negativity, undermining colleagues, or prioritizing personal success at the expense of the team will eventually erode trust and momentum.
          </p>
          <p>
            Leaders must confront toxicity early, directly, and decisively—often in partnership with HR. Delaying action in the name of short-term results almost always leads to long-term damage.
          </p>
          <p>
            Jack Welch was unapologetically clear on this point:
          </p>
          <blockquote className="my-8 pl-6 border-l-4 border-[var(--color-accent)] bg-gray-50 py-4 pr-6 rounded-r-lg">
            <p className="italic text-lg mb-2">
              "Disrupters are a personality. Get them out of the way of people trying to do their jobs, because they are poison."
            </p>
            <p className="text-base mb-0">
              — <a href="https://hbr.org/2005/04/jack-welch-responds" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Jack Welch</a>
            </p>
          </blockquote>
          <p>
            High performance does not excuse destructive behavior.
          </p>
        </section>

        {/* Rule 4 */}
        <section id="rule-4" className="mb-12 scroll-mt-32">
          <h2 className="mb-6">Rule 4: Drive Continuous Change</h2>
          <p>
            Teams stagnate when they stop growing.
          </p>
          <p>
            Change, while uncomfortable, creates shared purpose and reinforces bonds within teams. Humans are wired to connect when facing challenges together. When work becomes too predictable or comfortable, engagement fades and dysfunction slowly sets in.
          </p>
          <p>
            Leaders must guide their teams through change—not constantly for its own sake, but deliberately and with intent. Growth requires tension, learning, and adaptation.
          </p>
          <p>
            Sebastian Junger explores this dynamic powerfully in <a href="https://www.sebastianjunger.com/tribe-by-sebastian-junger/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Tribe</a>, highlighting how shared adversity strengthens connection and meaning.
          </p>
          <p className="text-sm text-[var(--color-body-text)]/70 italic">
            (Recommended: also link "Tribe" internally to your <Link to="/books" className="text-[var(--color-accent)] hover:underline">Books page</Link> for SEO + affiliate compounding.)
          </p>
          <p>
            As a reminder:
          </p>
          <blockquote className="my-8 pl-6 border-l-4 border-[var(--color-accent)] bg-gray-50 py-4 pr-6 rounded-r-lg">
            <p className="italic text-lg mb-2">
              "When you are finished changing, you are finished."
            </p>
            <p className="text-base mb-0">
              While often attributed to <a href="https://www.britannica.com/biography/Benjamin-Franklin" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Benjamin Franklin</a>, the message remains relevant: progress demands motion.
            </p>
          </blockquote>
        </section>

        {/* Closing Thought */}
        <section id="closing" className="mb-12 scroll-mt-32">
          <h2 className="mb-6">Closing Thought</h2>
          <p>
            Great teams are not built through slogans or incentives alone. They are built through consistent leadership behaviors, clear standards, and systems that reward collaboration, growth, and accountability.
          </p>
          <p>
            If you want exceptional results, start by building teams that trust each other, challenge each other, and move forward together.
          </p>
        </section>
      </>
    ),
  },

  {
    slug: 'have-we-forgotten-how-to-negotiate',
    title: 'Have We Forgotten How to Negotiate?',
    description: 'After more than a decade in sales organizations, I have sat through countless pricing calls and discount debates. The pattern is familiar: fear drives decisions internally, while value is left undefined externally.',
    date: 'August 2020',
    category: 'Sales',
    tags: ['Sales', 'Strategy', 'Negotiation'],
    readingTime: '8 min read',
    tableOfContents: [
      { id: 'intro', text: 'Introduction' },
      { id: 'childhood-skill', text: 'Negotiation Is a Childhood Skill Yet We Seem to Forget It' },
      { id: 'cloth-problem', text: 'The Cloth Problem: A Forgotten Lesson in Value' },
      { id: 'pricing-sales', text: 'What This Means for Pricing and Sales' },
      { id: 'hidden-cost', text: 'The Hidden Cost of Poor Negotiation' },
      { id: 'closing', text: 'A Closing Thought' },
    ],
    content: (
      <>
        {/* Introduction */}
        <section id="intro" className="mb-12 scroll-mt-32">
          <p>
            After more than a decade in sales organizations, I have sat through countless pricing calls and discount debates. You know the pattern well:
          </p>
          <blockquote className="my-8 pl-6 border-l-4 border-[var(--color-accent)] bg-gray-50 py-4 pr-6 rounded-r-lg">
            <p className="mb-2">"The price is too high."</p>
            <p className="mb-2">"They'll never pay for this."</p>
            <p className="mb-0">"We'll lose the deal unless we discount."</p>
          </blockquote>
          <p>
            Senior leaders push back. A number is eventually agreed upon. It is dropped into a proposal. The customer responds by asking for more discount or walks away entirely.
          </p>
          <p>
            Is this how negotiation happens in your organization?
          </p>
          <p>
            Are you capturing the full value of what you sell?
          </p>
          <p>
            Or are pricing decisions being driven internally by fear rather than externally by value?
          </p>
        </section>

        {/* Childhood Skill */}
        <section id="childhood-skill" className="mb-12 scroll-mt-32">
          <h2 className="mb-6">Negotiation Is a Childhood Skill Yet We Seem to Forget It</h2>
          <p>
            Humans learn to negotiate remarkably early. Anyone who has watched children trade toys, snacks, or favors has seen this instinct at work. Left alone, they argue. Guided properly, they learn to exchange value.
          </p>
          <p>
            The lesson is simple. Value is discovered through interaction, not imposed through authority.
          </p>
          <p>
            In professional settings, negotiation is obviously more complex. But complexity does not excuse abandoning fundamentals.
          </p>
        </section>

        {/* The Cloth Problem */}
        <section id="cloth-problem" className="mb-12 scroll-mt-32">
          <h2 className="mb-6">The Cloth Problem: A Forgotten Lesson in Value</h2>
          <p>
            This example is commonly taught in game theory and negotiation courses, including by <a href="https://som.yale.edu/faculty-research/faculty-directory/barry-nalebuff" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Professor Barry Nalebuff of the Yale School of Management</a>.
          </p>
          <p>
            It is also rooted in ancient legal reasoning found in the Babylonian Talmud, specifically Tractate Bava Metzia, which examines fair division under competing claims. A scholarly overview can be found at <a href="https://www.sefaria.org/Bava_Metzia" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Sefaria</a>.
          </p>
          <p>
            The scenario is simple.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Person A claims the entire piece of cloth.</li>
            <li>Person B claims only half.</li>
          </ul>
          <p>
            What is a fair division?
          </p>
          <p>
            The intuitive answer is often wrong.
          </p>
          <p>
            The fair outcome is this:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Person A receives three quarters of the cloth.</li>
            <li>Person B receives one quarter.</li>
          </ul>
          <p>
            Why?
          </p>
          <p>
            Because only the overlapping claim—half the cloth—is truly disputed. That disputed portion is split evenly. The remainder belongs to Person A by default.
          </p>
          <p>
            The lesson is subtle but powerful.
          </p>
          <blockquote className="my-8 pl-6 border-l-4 border-[var(--color-accent)] bg-gray-50 py-4 pr-6 rounded-r-lg">
            <p className="italic text-lg mb-0">
              Your claim defines the size of what is negotiable.
            </p>
          </blockquote>
          <p>
            Had Person B claimed the entire cloth, the outcome would have been dramatically different.
          </p>
          <p>
            For those interested in the modern strategic framing of this idea, Professor Nalebuff explores similar principles in his game theory work and online courses, including his <a href="https://www.coursera.org/learn/game-theory-1" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Coursera program</a>.
          </p>
        </section>

        {/* Pricing and Sales */}
        <section id="pricing-sales" className="mb-12 scroll-mt-32">
          <h2 className="mb-6">What This Means for Pricing and Sales</h2>
          <p>
            Now apply this thinking to selling a product or service.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>What is the customer saving?</li>
            <li>What additional revenue or strategic advantage are they gaining?</li>
            <li>What happens if they choose a competitor or do nothing?</li>
          </ul>
          <p>
            These questions define the size of the cloth.
          </p>
          <p>
            Yet in many organizations, they are never fully answered. Instead, internal discussions fixate on price rather than value, discount rather than outcome.
          </p>
          <p>
            When value is unclear, negotiation becomes adversarial.
          </p>
          <p>
            When value is understood, negotiation becomes efficient.
          </p>
        </section>

        {/* Hidden Cost */}
        <section id="hidden-cost" className="mb-12 scroll-mt-32">
          <h2 className="mb-6">The Hidden Cost of Poor Negotiation</h2>
          <p>
            Here is a simple but revealing exercise.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Calculate your proposal win/loss ratio.</li>
            <li>Multiply it by the time and money required to generate those proposals.</li>
            <li>Add the opportunity cost of foregone margin.</li>
          </ul>
          <p>
            What you get is a conservative estimate of how much weak negotiation is costing your business.
          </p>
          <p>
            Negotiation is not a soft skill. It is an economic lever.
          </p>
        </section>

        {/* Closing Thought */}
        <section id="closing" className="mb-12 scroll-mt-32">
          <h2 className="mb-6">A Closing Thought</h2>
          <p>
            Effective negotiation is not about pressure or posturing. It is about clarity of value, of alternatives, and of outcomes.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Gather insight.</li>
            <li>Listen carefully.</li>
            <li>Define the value before you discuss the price.</li>
          </ul>
          <p>
            Simple ideas are often the ones we forget first.
          </p>
          <p>
            As <a href="https://www.jfklibrary.org/learn/about-jfk/jfk-in-history/negotiation-speeches-and-quotes" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">John F. Kennedy</a> reminded us:
          </p>
          <blockquote className="my-8 pl-6 border-l-4 border-[var(--color-accent)] bg-gray-50 py-4 pr-6 rounded-r-lg">
            <p className="italic text-lg mb-0">
              "Let us never negotiate out of fear. But let us never fear to negotiate."
            </p>
          </blockquote>
        </section>
      </>
    ),
  },

  {
    slug: 'can-professionals-still-be-managed',
    title: 'Can Professionals Still Be Managed?',
    description: 'For decades, organizations have relied on managers to direct work, enforce processes, and deliver results. Yet the modern workplace tells a different story: professionals do not want to be managed; they want to be led.',
    date: 'June 2018',
    category: 'Leadership',
    tags: ['Leadership', 'Management'],
    readingTime: '9 min read',
    tableOfContents: [
      { id: 'intro', text: 'Introduction' },
      { id: 'professionals-seek-leadership', text: 'Professionals Seek Leadership, Not Control' },
      { id: 'why-leadership-matters', text: 'Why Leadership Matters More Than Ever' },
      { id: 'final-thought', text: 'A Final Thought' },
    ],
    content: (
      <>
        {/* Introduction */}
        <section id="intro" className="mb-12 scroll-mt-32">
          <p>
            For decades, organizations have relied on managers to direct work, enforce processes, and deliver results. Yet the modern workplace tells a different story: professionals do not want to be managed; they want to be led.
          </p>
          <p>
            We have read the books. We have seen the research. Leadership consistently outperforms management when it comes to engagement, innovation, and sustained performance. And yet, the title "manager" still dominates corporate org charts.
          </p>
          <p>
            Why?
          </p>
          <p>
            In today's workplace, high-performing teams are built around leaders, not controllers. Companies such as Microsoft, Amazon, and GE have demonstrated that empowered teams with a clear purpose outperform those governed by rigid hierarchy. The shift is not semantic; it is structural.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>
              <a href="https://www.microsoft.com/en-us/insidetrack/transforming-culture" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Microsoft leadership and culture transformation</a>
            </li>
            <li>
              <a href="https://www.amazon.jobs/content/en/our-workplace/leadership-principles" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Amazon leadership principles</a>
            </li>
            <li>
              <a href="https://www.ge.com/news/reports/jack-welch-legacy" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">GE leadership philosophy and legacy</a>
            </li>
          </ul>
        </section>

        {/* Professionals Seek Leadership */}
        <section id="professionals-seek-leadership" className="mb-12 scroll-mt-32">
          <h2 className="mb-6">Professionals Seek Leadership, Not Control</h2>
          <p>
            Modern professionals expect autonomy, purpose, and accountability. They want to understand why their work matters, not simply how to execute tasks.
          </p>
          <p>
            This shift is not limited to the workplace. New generations learn through experimentation, feedback, and collaboration—not blind obedience. Command-and-control approaches, whether at home or at work, increasingly fail to produce ownership or engagement.
          </p>
          <p>
            Organizations are responding by becoming flatter, more transparent, and more direct. Decision-making is moving closer to the edge. Information flows faster. Authority is earned through credibility, not title.
          </p>
          <p>
            So the question remains: if leadership is what professionals respond to, why do we continue to structure organizations around managers?
          </p>
        </section>

        {/* Why Leadership Matters */}
        <section id="why-leadership-matters" className="mb-12 scroll-mt-32">
          <h2 className="mb-6">Why Leadership Matters More Than Ever</h2>
          
          <h3 className="mb-4">1. Top Talent Follows Leaders</h3>
          <p>
            Top talent drives disproportionate value in organizations. Multiple studies have shown that a small percentage of employees account for the majority of enterprise impact.
          </p>
          <p>
            <a href="https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/the-organization-of-the-future-will-be-formed-around-talent" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">McKinsey on value concentration of top talent</a>
          </p>
          <p>
            The challenge is not just attracting this talent; it is also retaining it. The most consistent reason high performers stay is not compensation or perks, but leadership. They stay where they feel trusted, challenged, and inspired.
          </p>
          <p>
            <a href="https://www.mckinsey.com/capabilities/people-and-organizational-performance/our-insights/why-high-performers-leave-and-how-to-keep-them" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">McKinsey on why top performers stay</a>
          </p>
          <p>
            Managers can oversee output. Leaders earn followership.
          </p>

          <h3 className="mb-4 mt-8">2. Strategy Beats Tactics in a Connected World</h3>
          <p>
            Management focuses on tactics: plans, controls, and execution. Leadership focuses on strategy: direction, intent, and meaning.
          </p>
          <p>
            In a globally connected and volatile environment, tactics age quickly. Political shifts in one region impact markets in another. Technology compresses cycles. Yesterday's best practice becomes today's constraint.
          </p>
          <p>
            Leaders provide coherence amid complexity. They define why the organization moves, allowing teams to adapt how they execute.
          </p>
          <p>
            <a href="https://hbr.org/2015/01/the-big-lie-of-strategic-planning" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Harvard Business Review on strategy vs execution</a>
          </p>
          <p>
            Tactics win battles. Strategy sustains relevance.
          </p>

          <h3 className="mb-4 mt-8">3. Growth Is a Leadership Outcome</h3>
          <p>
            Growth does not come from tighter control. It comes from empowerment.
          </p>
          <p>
            Leaders give away authority to multiply capability. Managers often reclaim authority to reduce uncertainty. The difference is profound. When individuals are trusted to "fish for themselves," teams scale faster than when every action is supervised.
          </p>
          <p>
            Growth is not limited to revenue. Growth in manufacturing reduces cost. Growth in project delivery improves speed and quality. Growth in people compounds across every function.
          </p>
          <p>
            <a href="https://www.drucker.institute/about-peter-drucker/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Peter Drucker Institute on leadership and effectiveness</a>
          </p>
          <p>
            Growth is a mindset, and leadership is its catalyst.
          </p>
        </section>

        {/* Final Thought */}
        <section id="final-thought" className="mb-12 scroll-mt-32">
          <h2 className="mb-6">A Final Thought</h2>
          <p>
            Ronald Reagan summarized leadership simply:
          </p>
          <blockquote className="my-8 pl-6 border-l-4 border-[var(--color-accent)] bg-gray-50 py-4 pr-6 rounded-r-lg">
            <p className="italic text-lg mb-2">
              "The greatest leader is not necessarily the one who does the greatest things. He is the one who gets people to do the greatest things."
            </p>
            <p className="text-base mb-0">
              — <a href="https://www.reaganlibrary.gov/archives/speech" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Ronald Reagan</a>
            </p>
          </blockquote>
          <p>
            Organizations will always need structure and discipline. But in an era defined by knowledge work, speed, and interconnectedness, leadership—not management—is what unlocks performance.
          </p>
          <p>
            Perhaps the real question is not whether professionals can be managed anymore, but whether organizations can afford to keep trying.
          </p>
        </section>
      </>
    ),
  },

  {
    slug: 'empathy-vs-capitalism',
    title: 'Empathy vs. Capitalism',
    description: 'Leadership demands focus, discipline, and performance. But what happens when performance collides with human emotion? Where does empathy fit when capitalism demands results?',
    date: 'January 2017',
    category: 'Leadership',
    tags: ['Leadership', 'Culture'],
    readingTime: '9 min read',
    tableOfContents: [
      { id: 'intro', text: 'Introduction' },
      { id: 'profit-purpose', text: 'Profit and Purpose Are Not Opposites' },
      { id: 'empathy-skill', text: 'Empathy Is a Leadership Skill, Not a Weakness' },
      { id: 'narcissism-paradox', text: 'The Narcissism Paradox' },
      { id: 'final-thought', text: 'A Final Thought' },
    ],
    content: (
      <>
        {/* Introduction */}
        <section id="intro" className="mb-12 scroll-mt-32">
          <p>
            Leadership, in its strictest business form, demands focus, discipline, and relentless attention to performance. Shareholders, boards of directors, and customers expect leaders to deliver growth, efficiency, and returns. These expectations sit at the core of capitalism, and they are not inherently flawed.
          </p>
          <p>
            The tension emerges when things go wrong.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>What happens when performance collides with human emotion?</li>
            <li>How should leaders respond when fear, uncertainty, or loss enters the equation?</li>
            <li>Where does empathy fit when capitalism demands results?</li>
          </ul>
        </section>

        {/* Profit and Purpose */}
        <section id="profit-purpose" className="mb-12 scroll-mt-32">
          <h2 className="mb-6">Profit and Purpose Are Not Opposites</h2>
          <p>
            Modern consumers and employees are not opposed to profit. In many cases, they are investors themselves. What they increasingly expect, however, is purposeful capitalism—organizations that balance profit with responsibility and empathy.
          </p>
          <p>
            As <a href="https://www.simonmainwaring.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Simon Mainwaring</a> observes:
          </p>
          <blockquote className="my-8 pl-6 border-l-4 border-[var(--color-accent)] bg-gray-50 py-4 pr-6 rounded-r-lg">
            <p className="italic text-lg mb-0">
              "Today's consumers are eager to become loyal fans of companies that respect purposeful capitalism. They are not opposed to companies making a profit; indeed, they may even be investors in these companies, but at the core, they want more empathic, enlightened corporations that seek a balance between profit and purpose."
            </p>
          </blockquote>
          <p>
            This expectation is not sentimental. It is strategic. Organizations that ignore empathy in pursuit of short-term gains often erode trust, loyalty, and ultimately long-term value.
          </p>
        </section>

        {/* Empathy Is a Leadership Skill */}
        <section id="empathy-skill" className="mb-12 scroll-mt-32">
          <h2 className="mb-6">Empathy Is a Leadership Skill, Not a Weakness</h2>
          <p>
            We are social beings. Employees, customers, and leaders alike operate within a broader social context. Attempts to strip emotion from business decisions are neither realistic nor effective.
          </p>
          <p>
            Empathy does not mean avoiding hard decisions. It means understanding their human impact and communicating with clarity and respect. Leaders who fail to do this often lose credibility, even when their decisions are economically sound.
          </p>
          <p>
            Choosing when to prioritize profit and when to lean into empathy requires emotional intelligence and judgment. Many leaders fail here, not because they lack intent, but because balancing the two is difficult.
          </p>
          <p>
            As <a href="https://www.theodorerooseveltcenter.org" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Theodore Roosevelt</a> famously said:
          </p>
          <blockquote className="my-8 pl-6 border-l-4 border-[var(--color-accent)] bg-gray-50 py-4 pr-6 rounded-r-lg">
            <p className="italic text-lg mb-0">
              "Nobody cares how much you know until they know how much you care."
            </p>
          </blockquote>
        </section>

        {/* The Narcissism Paradox */}
        <section id="narcissism-paradox" className="mb-12 scroll-mt-32">
          <h2 className="mb-6">The Narcissism Paradox</h2>
          <p>
            There is, however, another side to this discussion.
          </p>
          <p>
            Some leaders who exhibit narcissistic traits and lower visible empathy have achieved extraordinary success. History offers examples of powerful, charismatic figures who mobilized teams and organizations through force of personality and conviction.
          </p>
          <p>
            One of the most studied modern examples is Steve Jobs.
          </p>
          <p>
            Jobs was widely described as demanding, emotionally intense, and often intolerant of dissent. Former colleagues openly acknowledged his difficult interpersonal style. Yet under his leadership, Apple produced some of the most category-defining products in modern history and transformed itself into one of the most valuable companies in the world.
          </p>
          <p>
            This paradox is examined in depth in Harvard Business Review's article <a href="https://hbr.org/2004/01/narcissistic-leaders-the-incredible-pros-the-inevitable-cons" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Narcissistic Leaders: The Incredible Pros, The Inevitable Cons</a>.
          </p>
          <p>
            The article explains how narcissistic leaders often possess exceptional vision, confidence, and an ability to inspire followership during times of uncertainty, while simultaneously creating long-term organizational risk if unchecked.
          </p>
          <p>
            Walter Isaacson's biography <a href="https://www.simonandschuster.com/books/Steve-Jobs/Walter-Isaacson/9781451648539" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Steve Jobs</a> also documents how Jobs evolved over time, developing greater emotional awareness and selective empathy, particularly during his second tenure at Apple.
          </p>
          <p>
            These leaders are not devoid of empathy. Rather, they deploy it selectively, often leaning more heavily on charisma and authority. This balance is rare and extremely difficult to replicate.
          </p>
          <p>
            When narcissism is imitated without emotional intelligence, it becomes destructive. Research in leadership psychology consistently shows that while narcissism can fuel confidence and vision, it also carries significant risk when left unchecked. The line between confidence and toxicity is thin, and most organizations pay a high price when it is crossed.
          </p>
        </section>

        {/* Final Thought */}
        <section id="final-thought" className="mb-12 scroll-mt-32">
          <h2 className="mb-6">A Final Thought</h2>
          <p>
            Empathy and capitalism are not opposing forces. They are complementary disciplines that require judgment, maturity, and self-awareness to balance effectively.
          </p>
          <p>
            Leaders who treat empathy as a liability often sacrifice trust for short-term performance. Leaders who ignore economic reality in the name of empathy risk organizational failure.
          </p>
          <p>
            The strongest leaders understand that sustainable success lives in the tension between the two.
          </p>
        </section>
      </>
    ),
  },

  {
    slug: 'how-to-succeed-in-turbulent-times',
    title: 'How to Succeed in Turbulent Times',
    description: 'We are operating in an era of sustained turbulence. The question for leaders is no longer how to predict the future, but how to navigate forward when certainty no longer exists.',
    date: 'August 2017',
    category: 'Leadership',
    tags: ['Leadership', 'Strategy'],
    readingTime: '10 min read',
    tableOfContents: [
      { id: 'intro', text: 'Introduction' },
      { id: 'four-forces', text: 'The Four Forces of Instability' },
      { id: 'what-leaders-must-accept', text: 'What Leaders Must Accept' },
      { id: 'three-point-framework', text: 'A Three-Point Framework for Turbulent Times' },
      { id: 'final-thought', text: 'A Final Thought' },
    ],
    content: (
      <>
        {/* Introduction */}
        <section id="intro" className="mb-12 scroll-mt-32">
          <p>
            I wake up at 5 AM each morning and read the news before starting the day. The conclusion is remarkably consistent: the world feels more volatile today than it did yesterday.
          </p>
          <p>
            We are operating in an era of sustained turbulence. The question for leaders is no longer how to predict the future, but how to navigate forward when certainty no longer exists.
          </p>
          <p>
            In today's business environment, leaders are operating in increasingly uncharted territory. Fundamental forces shaping organizations are shifting faster than traditional planning cycles can accommodate. Four forces, in particular, are moving targets.
          </p>
        </section>

        {/* Four Forces */}
        <section id="four-forces" className="mb-12 scroll-mt-32">
          <h2 className="mb-6">The Four Forces of Instability</h2>
          
          <h3 className="mb-4">Politics</h3>
          <p>
            Political dynamics now evolve faster than most organizations can respond. Trade agreements, regulations, and geopolitical tensions shift with little warning, often rendering long-term plans obsolete shortly after they are finalized.
          </p>
          <p>
            A global overview of political risk and its business impact is tracked by the <a href="https://www.weforum.org/topics/geopolitics" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">World Economic Forum</a>.
          </p>

          <h3 className="mb-4 mt-8">Economics</h3>
          <p>
            Globalization has tightly coupled markets, capital, and supply chains. Economic outcomes increasingly reflect probabilities rather than predictable cycles. Traditional economic models struggle to keep pace with the speed and interdependence of modern systems.
          </p>
          <p>
            McKinsey has extensively analyzed economic volatility and interconnected systems in their research on <a href="https://www.mckinsey.com/capabilities/strategy-and-corporate-finance/our-insights/globalization-in-transition-the-future-of-trade-and-value-chains" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">globalization in transition</a>.
          </p>

          <h3 className="mb-4 mt-8">People</h3>
          <p>
            Employee and customer behavior is changing rapidly. Technology, social platforms, generational expectations, and cultural shifts have accelerated how people form opinions, change preferences, and make decisions. Organizations that fail to adapt to these shifts lose talent and relevance.
          </p>
          <p>
            Harvard Business Review has documented these workforce and behavioral shifts in their article on <a href="https://hbr.org/2020/03/what-leaders-really-need-to-know-about-digital-transformation" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">what leaders need to know about digital transformation</a>.
          </p>

          <h3 className="mb-4 mt-8">Energy Mix</h3>
          <p>
            Energy underpins every modern system. From transportation and manufacturing to data centers and personal devices, the transition between oil, gas, electricity, renewables, and emerging technologies adds another layer of uncertainty. Predicting long-term energy outcomes has become increasingly complex.
          </p>
          <p>
            The <a href="https://www.iea.org/topics/world-energy-outlook" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">International Energy Agency</a> provides authoritative analysis on global energy transitions.
          </p>
        </section>

        {/* What Leaders Must Accept */}
        <section id="what-leaders-must-accept" className="mb-12 scroll-mt-32">
          <h2 className="mb-6">What Leaders Must Accept</h2>
          <p>
            With these forces moving so quickly, the first responsibility of leadership is acceptance.
          </p>
          <p>
            Many of these changes are outside your control. Fighting that reality wastes energy. Accepting it allows leaders to focus on what they can influence: direction, priorities, and readiness.
          </p>
          <p>
            Once this mindset is established, execution becomes clearer.
          </p>
        </section>

        {/* Three-Point Framework */}
        <section id="three-point-framework" className="mb-12 scroll-mt-32">
          <h2 className="mb-6">A Three-Point Framework for Turbulent Times</h2>
          
          <h3 className="mb-4">1. Embrace Change as Opportunity</h3>
          <p>
            Turbulence creates gaps. When competitors struggle to adapt, unmet needs emerge. Leaders who intentionally position their organizations to benefit from disruption often gain share while others retreat.
          </p>
          <p>
            <a href="https://www.innosight.com/insight/disruptive-innovation/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Clayton Christensen's work on disruption</a> remains foundational.
          </p>
          <p>
            Growth rarely comes from stability. It comes from moving decisively when others hesitate.
          </p>

          <h3 className="mb-4 mt-8">2. Focus Relentlessly</h3>
          <p>
            Periods of uncertainty demand calm, not reaction. Leaders with strong emotional intelligence maintain focus on core objectives while filtering noise. Clarity of purpose allows teams to operate effectively even when external signals are chaotic.
          </p>
          <p>
            <a href="https://www.danielgoleman.info/topics/emotional-intelligence/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Daniel Goleman's research on emotional intelligence and leadership</a> explains this dynamic.
          </p>
          <p>
            Focus is not denial. It is disciplined attention.
          </p>

          <h3 className="mb-4 mt-8">3. Plan for Multiple Futures</h3>
          <p>
            A single backup plan is no longer sufficient. Plan B, along with Plans C, D, and even E, is needed. Leaders must consider multiple scenarios and understand the risks and rewards of each. Plans should be reviewed frequently and activated without hesitation when conditions change.
          </p>
          <p>
            Scenario planning is a well-established leadership discipline documented by <a href="https://hbr.org/2009/11/scenario-planning-a-tool-for-strategic-thinking" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Harvard Business Review</a>.
          </p>
          <p>
            Planning is not prediction. It is preparation.
          </p>
        </section>

        {/* Final Thought */}
        <section id="final-thought" className="mb-12 scroll-mt-32">
          <h2 className="mb-6">A Final Thought</h2>
          <p>
            Turbulence is not an exception anymore. It is the environment.
          </p>
          <p>
            Leaders who succeed are those who accept uncertainty, focus their organizations, and continuously adapt. Growth and resilience are not destinations. They are ongoing processes.
          </p>
          <p>
            As <a href="https://winstonchurchill.org/resources/quotes/success/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Winston Churchill</a> once said:
          </p>
          <blockquote className="my-8 pl-6 border-l-4 border-[var(--color-accent)] bg-gray-50 py-4 pr-6 rounded-r-lg">
            <p className="italic text-lg mb-0">
              "Success is not final, failure is not fatal. It is the courage to continue that counts."
            </p>
          </blockquote>
        </section>
      </>
    ),
  },

  {
    slug: 'how-to-destroy-your-competition',
    title: 'How to Destroy Your Competition',
    description: 'The most effective way to outperform your competition is not through price wars, feature parity, or aggressive marketing. It is through loyalty.',
    date: 'September 2016',
    category: 'Strategy',
    tags: ['Strategy', 'Growth'],
    readingTime: '9 min read',
    tableOfContents: [
      { id: 'intro', text: 'Introduction' },
      { id: 'loyalty-advantage', text: 'Loyalty Is the Ultimate Competitive Advantage' },
      { id: 'teaching-strategy', text: 'Teaching as a Loyalty Strategy' },
      { id: 'gratitude-loyalty', text: 'Gratitude Creates Loyalty' },
      { id: 'why-not-teach', text: 'Why Most Companies Do Not Teach' },
      { id: 'final-thought', text: 'A Final Thought' },
    ],
    content: (
      <>
        {/* Introduction */}
        <section id="intro" className="mb-12 scroll-mt-32">
          <p>
            The most effective way to outperform your competition is not through price wars, feature parity, or aggressive marketing.
          </p>
          <p>
            It is through loyalty.
          </p>
          <p>
            Truly loyal customers do not make decisions based solely on price. They identify with the brand. They advocate for it. They stay through mistakes and defend them in conversations where the company is not even present.
          </p>
          <p>
            Few brands illustrate this better than <a href="https://www.harley-davidson.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Harley Davidson</a>, whose customer community and brand loyalty are widely studied. Its customers do not simply purchase motorcycles; they join a community. Companies like <a href="https://www.apple.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Apple</a> and <a href="https://thewaltdisneycompany.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Disney</a> have achieved similar outcomes by creating emotional connections rather than transactional dependence.
          </p>
          <p>
            As <a href="https://hyken.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Shep Hyken</a> aptly notes:
          </p>
          <blockquote className="my-8 pl-6 border-l-4 border-[var(--color-accent)] bg-gray-50 py-4 pr-6 rounded-r-lg">
            <p className="italic text-lg mb-0">
              "There is a big difference between a satisfied customer and a loyal one."
            </p>
          </blockquote>
        </section>

        {/* Loyalty Is the Ultimate Competitive Advantage */}
        <section id="loyalty-advantage" className="mb-12 scroll-mt-32">
          <h2 className="mb-6">Loyalty Is the Ultimate Competitive Advantage</h2>
          <p>
            In most marketing strategies, the stated objective is growth. The unstated objective is loyalty.
          </p>
          <p>
            Organizations use tools such as value-based pricing, differentiated features, and service enhancements. All of these matter. But the most durable source of value is emotional attachment. When customers feel connected to a brand, competitors struggle to displace them.
          </p>
          <p>
            Loyal customers generate more than repeat revenue. They reduce acquisition costs, tolerate pricing changes, and create long-term margin stability. Over time, this becomes a powerful economic moat, a concept popularized in competitive strategy literature by <a href="https://www.isc.hbs.edu/strategy/business-strategy/Pages/default.aspx" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Michael Porter</a>.
          </p>
          <p>
            The challenge is not recognizing the value of loyalty. The challenge is knowing how to create it.
          </p>
        </section>

        {/* Teaching as a Loyalty Strategy */}
        <section id="teaching-strategy" className="mb-12 scroll-mt-32">
          <h2 className="mb-6">Teaching as a Loyalty Strategy</h2>
          <p>
            One of the most effective and underutilized ways to build loyalty is education.
          </p>
          <p>
            A widely cited <a href="https://hbr.org" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Harvard Business Review</a> article argues that companies that teach their customers create deeper and more durable relationships. This insight reframes a familiar concept. Training is typically inward-facing and transactional. Education, when directed outward, is relational and strategic.
          </p>
          <p>
            Consider the implications.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>What if <a href="https://www.ge.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">GE</a> taught its customers the core principles behind designing long-lasting industrial products?</li>
            <li>What if Salesforce built a university focused not on its software, but on the fundamentals of selling—something it has already begun exploring through <a href="https://trailhead.salesforce.com" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Trailhead</a>?</li>
          </ul>
          <p>
            In doing so, companies shift from vendor to partner. They stop being interchangeable and start being indispensable.
          </p>
        </section>

        {/* Gratitude Creates Loyalty */}
        <section id="gratitude-loyalty" className="mb-12 scroll-mt-32">
          <h2 className="mb-6">Gratitude Creates Loyalty</h2>
          <p>
            Educating customers does more than increase competence. It creates gratitude.
          </p>
          <p>
            I come from a family of teachers and professors, and I have rarely seen loyalty stronger than that of grateful students. Teachers change lives. Long after the curriculum is forgotten, the impact remains.
          </p>
          <p>
            The same principle applies in business. When customers feel that a company has genuinely invested in their growth, loyalty follows naturally.
          </p>
          <p>
            As <a href="https://plato.stanford.edu/entries/aristotle-ethics" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Aristotle</a> observed:
          </p>
          <blockquote className="my-8 pl-6 border-l-4 border-[var(--color-accent)] bg-gray-50 py-4 pr-6 rounded-r-lg">
            <p className="italic text-lg mb-0">
              "Those who know, do. Those who understand, teach."
            </p>
          </blockquote>
        </section>

        {/* Why Most Companies Do Not Teach */}
        <section id="why-not-teach" className="mb-12 scroll-mt-32">
          <h2 className="mb-6">Why Most Companies Do Not Teach</h2>
          <p>
            The idea of teaching customers is not new. What prevents its adoption is the time horizon.
          </p>
          <p>
            Education is a long-term strategy. It does not always produce immediate quarterly returns. Most marketing organizations are optimized for short-term metrics, making sustained education programs difficult to justify.
          </p>
          <p>
            As a result, smaller privately held enterprises with multi-decade outlooks often outperform larger corporations in this area. They invest patiently and compound loyalty over time.
          </p>
          <p>
            <a href="https://www.ge.com/news/reports/jack-welch-legacy" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Jack Welch</a> captured the danger of short-term thinking succinctly:
          </p>
          <blockquote className="my-8 pl-6 border-l-4 border-[var(--color-accent)] bg-gray-50 py-4 pr-6 rounded-r-lg">
            <p className="italic text-lg mb-0">
              "Any jerk can have short-term earnings. You squeeze, squeeze, squeeze, and the company sinks five years later."
            </p>
          </blockquote>
        </section>

        {/* Final Thought */}
        <section id="final-thought" className="mb-12 scroll-mt-32">
          <h2 className="mb-6">A Final Thought</h2>
          <p>
            You do not destroy your competition by attacking them directly.
          </p>
          <p>
            You do it by becoming so valuable to your customers that competitors become irrelevant.
          </p>
          <p>
            Teach them.<br />
            Invest in them.<br />
            Grow with them.
          </p>
          <p>
            That is how loyalty is built and how markets are won.
          </p>
        </section>
      </>
    ),
  },

  {
    slug: 'what-marketing-actually-is',
    title: 'What Marketing Actually Is',
    description: 'At its core, marketing is the discipline of translating business objectives into market-facing decisions. It sits at the intersection of strategy, customer insight, product design, pricing, and growth.',
    date: 'May 2016',
    category: 'Strategy',
    tags: ['Strategy', 'Marketing'],
    readingTime: '8 min read',
    tableOfContents: [
      { id: 'intro', text: 'Introduction' },
      { id: 'perception-problem', text: 'The Perception Problem' },
      { id: 'naming-accountability', text: 'Naming Shapes Accountability' },
      { id: 'reframing-role', text: 'Reframing the Role' },
      { id: 'final-thought', text: 'A Final Thought' },
    ],
    content: (
      <>
        {/* Introduction */}
        <section id="intro" className="mb-12 scroll-mt-32">
          <p>
            At its core, marketing is the discipline of translating business objectives into market-facing decisions. It sits at the intersection of strategy, customer insight, product design, pricing, and growth.
          </p>
          <p>
            Done well, marketing determines:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Who a business serves</li>
            <li>What problems it solves</li>
            <li>How value is created and captured</li>
            <li>Why customers choose one company over another</li>
          </ul>
          <p>
            This is not advertising. It is business architecture, a concept closely aligned with modern strategy thinking articulated by <a href="https://www.hbs.edu" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Harvard Business School</a>.
          </p>
        </section>

        {/* The Perception Problem */}
        <section id="perception-problem" className="mb-12 scroll-mt-32">
          <h2 className="mb-6">The Perception Problem</h2>
          <p>
            Ask most people what marketing is, and the answer often resembles a scene from <a href="https://www.amc.com/shows/mad-men" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Mad Men</a>, the AMC television series. Creative slogans, glossy campaigns, and well-dressed teams debating taglines late into the night.
          </p>
          <p>
            That portrayal reflects marketing communications, not strategic marketing. The confusion is costly.
          </p>
          <p>
            The dilemma is all in the naming and how it is phrased. At the end of the day, perception is reality, as my long-time mentor <a href="https://www.linkedin.com/in/adam-middleton-mba/" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Adam Middleton</a> reminded me repeatedly over the years. Titles and labels shape how value is understood inside an organization long before results are visible.
          </p>
          <p>
            If that is true, then as a marketer, I should be able to market myself through a name that reinforces my value as a strategic contributor to the business, not one that diminishes it or confines it to communications and promotion.
          </p>
          <p>
            When marketing is perceived as a support function rather than a growth driver, it becomes expendable. When it is treated as decoration rather than decision-making, its impact is diluted.
          </p>
          <p>
            This perception does not just hurt organizations. It undermines the credibility of the people doing the work.
          </p>
        </section>

        {/* Naming Shapes Accountability */}
        <section id="naming-accountability" className="mb-12 scroll-mt-32">
          <h2 className="mb-6">Naming Shapes Accountability</h2>
          <p>
            Titles matter because they signal purpose.
          </p>
          <p>
            If perception is reality, then calling a function marketing while expecting it to drive growth, pricing discipline, customer insight, and long-term value is a mismatch.
          </p>
          <p>
            It is no coincidence that many organizations are shifting toward customer-centric language. Marketing is increasingly being reframed as customer leadership. This shift aligns with outside-in strategy principles described by <a href="https://hbr.org" target="_blank" rel="noopener noreferrer" className="text-[var(--color-accent)] hover:underline">Harvard Business Review</a>.
          </p>
          <p>
            The focus moves from pushing messages outward to designing the business from the outside in.
          </p>
          <p>
            Under this lens:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Marketing becomes customer strategy</li>
            <li>Product management becomes customer problem ownership</li>
            <li>Growth becomes a shared outcome, not a departmental metric</li>
          </ul>
        </section>

        {/* Reframing the Role */}
        <section id="reframing-role" className="mb-12 scroll-mt-32">
          <h2 className="mb-6">Reframing the Role</h2>
          <p>
            The executive I met in Dubai offered a framing that stayed with me. He described his role as Strategic Business Planning.
          </p>
          <p>
            Whether that is the right title is debatable. What matters is the intent behind it. Strategic marketing, when practiced correctly, is not about promotion. It is about shaping the business so that growth becomes a consequence, not a target.
          </p>
          <p>
            If the word marketing obscures that responsibility, then perhaps the word, not the discipline, is what needs to change.
          </p>
        </section>

        {/* Final Thought */}
        <section id="final-thought" className="mb-12 scroll-mt-32">
          <h2 className="mb-6">A Final Thought</h2>
          <p>
            Marketing is not useless. The way we talk about it often is.
          </p>
          <p>
            Until organizations align the name, mandate, and accountability of marketing with its true strategic value, the function will continue to be misunderstood and underutilized.
          </p>
          <p>
            Call it marketing.<br />
            Call it customer strategy.<br />
            Call it business planning.
          </p>
          <p>
            Just do not confuse communication with strategy or perception with reality.
          </p>
        </section>
      </>
    ),
  },

  // Add more articles here following the same structure
];

// Helper function to get article by slug
export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

// Helper function to get recommended articles (excluding current article)
export function getRecommendedArticles(currentSlug: string, limit: number = 3): Article[] {
  return articles
    .filter((article) => article.slug !== currentSlug)
    .slice(0, limit);
}