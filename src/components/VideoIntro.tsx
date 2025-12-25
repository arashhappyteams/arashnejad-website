import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Play, Pause } from 'lucide-react';

interface VideoIntroProps {
  title?: string;
  description?: string;
  videoUrl?: string;
  thumbnailUrl?: string;
}

export function VideoIntro({
  title = 'Meet Arash',
  description = 'Learn about my journey in global growth leadership and my approach to building high-performing organizations.',
  videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  thumbnailUrl,
}: VideoIntroProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLIFrameElement>(null);

  return (
    <section className="py-20 bg-[var(--color-muted-gray)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-[var(--color-primary)] mb-4">{title}</h2>
          <p className="text-[var(--color-text)]/80 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.02 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video max-w-4xl mx-auto"
        >
          <iframe
            ref={videoRef}
            src={videoUrl}
            title="Video Introduction"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 max-w-3xl mx-auto text-center"
        >
          <p className="text-[var(--color-text)]/70 italic">
            In this introduction, I share my perspective on leadership, growth strategies, and the importance of building human-centric organizations that drive sustainable success.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
