import { motion } from 'motion/react';
import { SEOHead } from '../components/SEOHead';
import { ArrowLeft, Clock, ArrowRight, Linkedin } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { getArticleBySlug, getRecommendedArticles } from '../data/articles';

export function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  
  // Get article from data file
  const article = slug ? getArticleBySlug(slug) : undefined;
  
  // Get recommended articles
  const recommendedArticles = slug ? getRecommendedArticles(slug, 3) : [];

  // Smooth scroll to TOC sections
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Article not found
  if (!article) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4">Article Not Found</h1>
          <p className="text-[var(--color-body-text)] mb-6">This article could not be found.</p>
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-title)] text-white rounded-lg hover:bg-opacity-90 transition-all"
          >
            <ArrowLeft size={16} />
            <span>Back to Insights</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead
        title={article.title}
        description={article.description}
        canonical={`https://www.arashnejad.com/insights/${article.slug}`}
      />

      <div className="bg-white min-h-screen">
        {/* Back Navigation */}
        <div className="sticky top-24 z-10 pointer-events-none">
          <div className="px-6 lg:px-8 py-4">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg shadow-sm text-[var(--color-body-text)] hover:text-[var(--color-primary)] hover:border-[var(--color-accent)] transition-all group pointer-events-auto"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back to Insights</span>
            </Link>
          </div>
        </div>

        {/* Main Article Container */}
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Main Content Column */}
            <div className="lg:col-span-8 lg:col-start-3">
              
              {/* Article Header */}
              <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded-full text-sm font-semibold">
                    {article.category}
                  </span>
                </div>

                {/* Article Title */}
                <h1 className="mb-6">{article.title}</h1>

                {/* Meta Row */}
                <div className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-body-text)]/70 mb-6">
                  <span>{article.date}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{article.readingTime}</span>
                  </div>
                  {article.tags.length > 0 && (
                    <>
                      <span>•</span>
                      <div className="flex flex-wrap gap-1">
                        {article.tags.map((tag, index) => (
                          <span key={tag}>
                            {tag}
                            {index < article.tags.length - 1 && ', '}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Description/Intro */}
                <p className="text-xl leading-relaxed text-[var(--color-body-text)]">
                  {article.description}
                </p>
              </motion.header>

              {/* Table of Contents */}
              {article.tableOfContents.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="mb-12 p-6 bg-gray-50 border border-gray-100 rounded-lg"
                >
                  <h4 className="mb-4">On this page</h4>
                  <nav>
                    <ul className="space-y-2">
                      {article.tableOfContents.map((item) => (
                        <li key={item.id}>
                          <button
                            onClick={() => scrollToSection(item.id)}
                            className="text-[var(--color-body-text)] hover:text-[var(--color-accent)] transition-colors text-base"
                          >
                            {item.text}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </motion.div>
              )}

              {/* Article Body Content */}
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-lg max-w-none"
              >
                {article.content}
              </motion.article>

              {/* Discuss on LinkedIn CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-16 p-8 bg-gray-50 border border-gray-200 rounded-lg text-center"
              >
                <h3 className="mb-4">Continue the conversation</h3>
                <p className="text-base mb-6 text-[var(--color-body-text)]">
                  If this resonates, share your thoughts with me on LinkedIn.
                </p>
                <a
                  href="https://www.linkedin.com/in/arashnejad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0A66C2] text-white rounded-md hover:bg-[#004182] transition-all duration-200 font-semibold"
                >
                  <Linkedin size={18} />
                  <span>Discuss this on LinkedIn</span>
                </a>
              </motion.div>

              {/* Recommended Articles */}
              {recommendedArticles.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mt-16"
                >
                  <h3 className="mb-8">You might also like</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {recommendedArticles.map((recArticle, index) => (
                      <motion.article
                        key={recArticle.slug}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.05 }}
                        whileHover={{ y: -4 }}
                        className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden h-full flex flex-col p-6"
                      >
                        <span className="inline-block w-fit px-2 py-1 bg-[var(--color-accent)]/10 text-[var(--color-accent)] rounded text-xs font-semibold mb-3">
                          {recArticle.category}
                        </span>
                        
                        <h4 className="mb-3 flex-1">{recArticle.title}</h4>
                        
                        <p className="text-sm text-[var(--color-body-text)] mb-4">
                          {recArticle.description.substring(0, 120)}...
                        </p>
                        
                        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                          <div className="flex items-center gap-2 text-sm text-[var(--color-body-text)]/70">
                            <Clock size={14} />
                            <span>{recArticle.readingTime}</span>
                          </div>
                          
                          <Link
                            to={`/insights/${recArticle.slug}`}
                            className="flex items-center gap-1 text-[var(--color-accent)] text-sm font-semibold group"
                          >
                            <span>Read</span>
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </motion.section>
              )}

              {/* Author Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-16 p-6 border border-gray-200 rounded-lg"
              >
                <div className="flex items-start gap-4">
                  {/* Author Avatar Placeholder */}
                  <div className="w-16 h-16 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden">
                    <div className="w-full h-full bg-[var(--color-primary)]"></div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="mb-2">Arash Nejad</h4>
                    <p className="text-sm text-[var(--color-body-text)] mb-4">
                      Global growth leader focused on culture, execution, and human-centric 
                      leadership in heavy industries.
                    </p>
                    <a
                      href="https://www.linkedin.com/in/arashnejad/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#0A66C2] text-sm font-semibold hover:text-[#004182] transition-colors"
                    >
                      <Linkedin size={16} />
                      <span>View LinkedIn Profile</span>
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Private Feedback Note */}
              <div className="mt-8 text-center">
                <p className="text-sm text-[var(--color-body-text)]/60">
                  If you would like to share feedback privately, you can reach me through the{' '}
                  <Link to="/contact" className="text-[var(--color-accent)] hover:underline">
                    Contact page
                  </Link>
                  .
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}