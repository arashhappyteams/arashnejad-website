import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  to?: string;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  to,
  href,
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) {
  const baseStyles = 'inline-block px-6 py-3 rounded-md transition-all duration-200 cursor-pointer text-base font-semibold';
  
  const variantStyles = {
    primary: 'bg-[var(--color-primary)] text-white hover:bg-[#0f1621]',
    secondary: 'border-2 border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white',
  };

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  const MotionWrapper = motion.div;

  if (to) {
    return (
      <MotionWrapper
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="inline-block"
      >
        <Link to={to} className={combinedStyles}>
          {children}
        </Link>
      </MotionWrapper>
    );
  }

  if (href) {
    return (
      <MotionWrapper
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="inline-block"
      >
        <a href={href} target="_blank" rel="noopener noreferrer" className={combinedStyles}>
          {children}
        </a>
      </MotionWrapper>
    );
  }

  return (
    <MotionWrapper
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      <button type={type} onClick={onClick} className={combinedStyles}>
        {children}
      </button>
    </MotionWrapper>
  );
}