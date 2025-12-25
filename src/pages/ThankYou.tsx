import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SEOHead } from '../components/SEOHead';

export function ThankYou() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    // Countdown timer
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <>
      <SEOHead
        title="Thank You | Arash Nejad"
        description="Thank you for reaching out. Your message has been received."
        canonical="https://www.arashnejad.com/thank-you"
      />

      <section className="min-h-[80vh] flex items-center justify-center bg-white py-24">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 15,
                delay: 0.2 
              }}
            >
              <CheckCircle 
                size={80} 
                className="mx-auto mb-6 text-green-600" 
                strokeWidth={1.5}
              />
            </motion.div>

            {/* Heading */}
            <h1 className="mb-4">Thank You!</h1>
            
            {/* Message */}
            <p className="text-lg mb-8 text-[var(--color-body-text)]">
              Your message has been successfully submitted. I appreciate you taking the time to reach out, and I'll get back to you as soon as possible.
            </p>

            {/* Redirect Notice */}
            <div className="mb-8">
              <p className="text-sm text-[var(--color-body-text)]/70">
                Redirecting to home page in <span className="font-semibold text-[var(--color-accent)]">{countdown}</span> {countdown === 1 ? 'second' : 'seconds'}...
              </p>
            </div>

            {/* Manual Navigation Options */}
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                to="/"
                className="px-8 py-3 bg-[var(--color-primary)] text-white rounded-md hover:bg-[#0f1621] transition-all duration-200 font-semibold shadow-sm hover:shadow-md"
              >
                Go to Home
              </Link>
              <Link
                to="/insights"
                className="px-8 py-3 border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-md hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200 font-semibold"
              >
                Read Insights
              </Link>
            </div>

            {/* Decorative Element */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-12 h-1 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
