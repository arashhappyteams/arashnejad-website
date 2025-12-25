import { Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 text-sm text-[var(--color-body-text)]">
            <span>&copy; 2026 Aria Developments Inc. All rights reserved.</span>
            <span className="text-gray-300">•</span>
            <Link 
              to="/privacy-policy" 
              className="text-xs text-gray-500 hover:text-[var(--color-primary)] transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-300">•</span>
            <span className="text-xs text-gray-500">All opinions expressed are those of the author.</span>
          </div>
          <a
            href="https://www.linkedin.com/in/arashnejad/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-body-text)] hover:text-[var(--color-primary)] transition-colors duration-200 flex items-center"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}