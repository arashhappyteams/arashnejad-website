import { motion } from 'motion/react';
import { SEOHead } from '../components/SEOHead';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export function Books() {
  const [whyRecommendLength, setWhyRecommendLength] = useState(0);
  
  const books = [
    {
      id: 1,
      title: 'The Effective Executive',
      author: 'Peter F. Drucker',
      year: '2006',
      commentary: 'Drucker is the father of modern management to me. This book draws a clear line between leadership and the traditional assembly line management style. It is dry at times but important. Take your time with it and take a lot of notes.',
      amazonUrl: 'https://www.amazon.com/Effective-Executive-Definitive-Harperbusiness-Essentials/dp/0060833459',
    },
    {
      id: 2,
      title: 'Give and Take: A Revolutionary Approach to Success',
      author: 'Adam Grant',
      year: '2013',
      commentary: 'Adam is a positive psychologist and a professor at Wharton. He explains human behavior and success in a simple and practical way. If you do not feel successful or cannot define what success is, leading can become difficult.',
      amazonUrl: 'https://www.amazon.com/Give-Take-Helping-Others-Success/dp/0143124986',
    },
    {
      id: 3,
      title: 'Outlive: The Science and Art of Longevity',
      author: 'Peter Attia',
      year: '2023',
      commentary: 'Peter Attia explains predictive and data-driven medicine in a way that an engineer can appreciate. A healthy mind and a healthy body are essential for leadership. A tired or unwell leader struggles to execute with consistency.',
      amazonUrl: 'https://www.amazon.com/Outlive-Science-Art-Longevity-Dr/dp/0593236599',
    },
    {
      id: 4,
      title: 'Start with Why: How Great Leaders Inspire Everyone to Take Action',
      author: 'Simon Sinek',
      year: '2011',
      commentary: 'Simon is one of the clearest voices on leadership. This book is essential for anyone building a product or a service. Without a strong Why, the road ahead becomes far more difficult.',
      amazonUrl: 'https://www.amazon.com/Start-Why-Leaders-Inspire-Everyone/dp/1591846447',
    },
    {
      id: 5,
      title: 'Extreme Ownership: How U.S. Navy SEALs Lead and Win',
      author: 'Jocko Willink & Leif Babin ',
      year: '2017',
      commentary: 'Jocko and Leif draw lessons from his time as a Navy SEAL. Although business is not war, the skills needed to lead under pressure can be applied directly to organizations. I encourage everyone who leads teams to read this book.',
      amazonUrl: 'https://www.amazon.com/Extreme-Ownership-U-S-Navy-SEALs/dp/1250067057',
    },
    {
      id: 6,
      title: 'Essentialism: The Disciplined Pursuit of Less',
      author: 'Greg McKeown ',
      year: '2020',
      commentary: 'Greg brings clarity to the struggle of competing priorities. One idea that stands out is his statement that you can do anything but not everything. It is a helpful reminder when life becomes crowded.',
      amazonUrl: 'https://www.amazon.com/Essentialism-Disciplined-Pursuit-Greg-McKeown/dp/0804137404',
    },
    {
      id: 7,
      title: 'Leaders Eat Last',
      author: 'Simon Sinek',
      year: '2014',
      commentary: 'Explores the biological and cultural foundations of great leadership. Insights on creating circles of safety resonate with human-centric approaches.',
      amazonUrl: 'https://www.amazon.com/Leaders-Eat-Last-Together-Others/dp/1591845327',
    },
    {
      id: 8,
      title: 'The Infinite Game',
      author: 'Simon Sinek',
      year: '2019',
      commentary: 'Challenges us to think beyond quarterly results. The concept of infinite vs. finite games reframes how we approach strategy.',
      amazonUrl: 'https://www.amazon.com/Infinite-Game-Simon-Sinek/dp/073521350X',
    },
    {
      id: 9,
      title: '10x Is Easier Than 2x: How World-Class Entrepreneurs Achieve More by Doing Less',
      author: 'Dan Sullivan & Benjamin Hardy',
      year: '2023',
      commentary: 'Having seen S&P making strides to grow double digits vs riding a fast speedboat of a start up, I completely agree with this book',
      amazonUrl: 'https://www.amazon.com/10x-Easier-Than-World-Class-Entrepreneurs/dp/1401981208',
    },
    {
      id: 10,
      title: 'Winning',
      author: 'Jack Welch',
      year: '2005',
      commentary: 'Transforming the only remaining company from the original Dow Jones, started by Thomas Edison, into the largest company in the world, was not luck. You have to read what Jack has to say.',
      amazonUrl: 'https://www.amazon.com/Winning-Ultimate-Business-How-Book/dp/0060753943',
    },
    {
      id: 11,
      title: 'The Lean Startup',
      author: 'Eric Ries',
      year: '2011',
      commentary: 'Build–Measure–Learn and validated learning concepts have influenced how I think about innovation. Essential for growth initiatives.',
      amazonUrl: 'https://www.amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898',
    },
    {
      id: 12,
      title: 'What Color Is Your Parachute?',
      author: 'Richard N. Bolles',
      year: '2022',
      commentary: 'Been around for decades and a must for anyone choosing careers, teenagers, and professionals trying to decide between two jobs',
      amazonUrl: 'https://www.amazon.com/10x-Easier-Than-World-Class-Entrepreneurs/dp/140196995X',
    },
    {
      id: 13,
      title: 'Driving Explosive Growth',
      author: 'Mark Allen Roberts',
      year: '2023',
      commentary: 'I met Mark through a consultation and a PE connection. He is incredible at making the sales process simple. He provides consulation, training, and is deeply vested with parties he works with. Highly Recommend his book.',
      amazonUrl: 'https://www.amazon.ca/Driving-Explosive-Growth-Approach-Profitably/dp/B0C9KTRGFY',
    },
  ];

  return (
    <>
      <SEOHead
        title="Recommended Books by Arash Nejad | Leadership & Growth"
        description="Explore Arash Nejad's curated list of essential books on leadership, organizational culture, growth strategies, and human-centric management."
        canonical="https://www.arashnejad.com/books"
      />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <BookOpen size={40} className="mx-auto mb-4 text-[var(--color-accent)]" />
            <h1 className="mb-6">Books I Recommend</h1>
            <p className="text-lg mb-0">
              I read often and enjoy researching ideas. I also use what I call my new word calculators (the large language models) which help me consume information efficiently. In this section I share a list of must-read books and why they may be helpful to you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {books.map((book, index) => {
              // Map book covers to each book
              const bookCovers = [
                  '/images/books/book-cover-01-business.jpg',
                  '/images/books/book-cover-02-leadership.jpg',
                  '/images/books/book-cover-03-hardcover.jpg',
                  '/images/books/book-cover-04-corporate.jpg',
                  '/images/books/book-cover-05-strategy.jpg',
                  '/images/books/book-cover-06-professional.jpg',
                  '/images/books/book-cover-07-textbook.jpg',
                  '/images/books/book-cover-08-blue.jpg',
                  '/images/books/book-cover-09-red.jpg',
                  '/images/books/book-cover-10-green.jpg',
                  '/images/books/book-cover-11-yellow.jpg',
                  '/images/books/book-cover-12-black.jpg',
                  '/images/books/Driving-Explosive-Growth.jpg',
              ];

              return (
                <motion.div
                  key={book.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="bg-gray-50 rounded-lg border border-gray-200 h-full flex flex-col overflow-hidden transition-all duration-200 hover:border-[#D9A441]/40 hover:shadow-lg group"
                >
                  {/* Book Cover and Content Container */}
                  <div className="flex gap-5 p-5 h-full">
                    {/* Book Cover Thumbnail */}
                    <div className="flex-shrink-0 relative group-hover:scale-105 transition-transform duration-300">
                      <div className="w-24 h-32 rounded-md overflow-hidden shadow-lg ring-1 ring-black/10">
                        <img
                          src={bookCovers[index]}
                          alt={`${book.title} cover`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Book spine shadow effect */}
                      <div className="absolute -right-1 top-1 bottom-1 w-1 bg-gradient-to-r from-black/20 to-transparent rounded-r-sm" />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-1 min-w-0">
                      {/* Year badge */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs px-2 py-1 bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded-full font-semibold">
                          {book.year}
                        </span>
                      </div>

                      {/* Title and Author */}
                      <h3 className="mb-1 text-lg leading-snug">{book.title}</h3>
                      <p className="text-sm text-[var(--color-body-text)]/70 mb-3 italic">
                        by {book.author}
                      </p>

                      {/* Divider */}
                      <div className="h-px bg-[#D9A441]/30 mb-3" />

                      {/* Commentary */}
                      <p className="text-sm leading-relaxed text-[var(--color-body-text)] mb-3">
                        <span className="text-[#D9A441] italic mr-1">My reflection:</span>
                        {book.commentary}
                      </p>

                      {/* Amazon Button */}
                      <div className="mt-auto">
                        <a
                          href={book.amazonUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-[var(--color-primary)] border border-[var(--color-primary)] px-3 py-1.5 rounded-md hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200"
                        >
                          Buy on Amazon
                          <ArrowRight size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Book Suggestion CTA */}
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
              <BookOpen size={32} className="mx-auto mb-3 text-[#D9A441]" />
              <h3 className="mb-3">Recommend a Book</h3>
              <p className="text-base text-[var(--color-body-text)]/80">
                Have a book that shaped your thinking? Share it with me — I may add it to this collection.
              </p>
            </div>

            <form action="https://formsubmit.co/ArashShn@gmail.com" method="POST" className="space-y-5">
              {/* Hidden FormSubmit Configuration Fields */}
              <input type="hidden" name="_subject" value="New Book Recommendation - arashnejad.com" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="true" />
              <input type="hidden" name="_next" value="https://www.arashnejad.com/thank-you.html" />
              
              {/* Honeypot for spam protection */}
              <input type="text" name="_honey" style={{ display: 'none' }} />

              <div>
                <label htmlFor="bookTitle" className="block text-sm font-semibold text-[var(--color-primary)] mb-2">
                  Book Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="bookTitle"
                  name="bookTitle"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D9A441] focus:border-transparent transition-all"
                  placeholder="Enter the book title..."
                  required
                />
              </div>

              <div>
                <label htmlFor="author" className="block text-sm font-semibold text-[var(--color-primary)] mb-2">
                  Author <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="author"
                  name="author"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D9A441] focus:border-transparent transition-all"
                  placeholder="Author name..."
                  required
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="whyRecommend" className="block text-sm font-semibold text-[var(--color-primary)]">
                    Why You Recommend It <span className="text-red-500">*</span>
                  </label>
                  <span className={`text-xs ${whyRecommendLength >= 100 ? 'text-green-600' : 'text-gray-500'}`}>
                    {whyRecommendLength}/100
                  </span>
                </div>
                <textarea
                  id="whyRecommend"
                  name="whyRecommend"
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D9A441] focus:border-transparent transition-all resize-none"
                  placeholder="Share why this book is valuable... (minimum 100 characters)"
                  minLength={100}
                  required
                  onChange={(e) => setWhyRecommendLength(e.target.value.length)}
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
                  Recommend Book
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

      {/* Affiliate Disclosure */}
      <div className="pb-8 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs text-gray-400 text-center">
            As an Amazon Associate, Aria Developments Inc. may earn from qualifying purchases.
          </p>
        </div>
      </div>
    </>
  );
}
