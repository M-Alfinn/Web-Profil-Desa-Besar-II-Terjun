import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NewsSlideshowProps {
  images?: string[];
  defaultImage: string;
  title: string;
}

export default function NewsSlideshow({ images, defaultImage, title }: NewsSlideshowProps) {
  const slideImages = images && images.length > 0 ? images : [defaultImage];
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  useEffect(() => {
    // Reset index when images list changes
    setCurrentIdx(0);
    setDirection(0);
  }, [images]);

  // Autoplay slideshow every 5 seconds if there are multiple images
  useEffect(() => {
    if (slideImages.length <= 1) return;

    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIdx, slideImages]);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIdx((prev) => (prev === 0 ? slideImages.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIdx((prev) => (prev === slideImages.length - 1 ? 0 : prev + 1));
  };

  if (slideImages.length <= 1) {
    return (
      <div className="relative w-full h-[300px] sm:h-[400px] bg-slate-100 dark:bg-slate-950 overflow-hidden">
        <img
          src={slideImages[0]}
          alt={title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
      </div>
    );
  }

  // Animation variants for smooth sliding/fading
  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? '100%' : dir < 0 ? '-100%' : 0,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? '100%' : dir > 0 ? '-100%' : 0,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] bg-slate-100 dark:bg-slate-950 overflow-hidden group select-none">
      {/* Slides container */}
      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={currentIdx}
            src={slideImages[currentIdx]}
            alt={`${title} - Slide ${currentIdx + 1}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
            }}
            referrerPolicy="no-referrer"
            className="absolute w-full h-full object-cover object-center"
          />
        </AnimatePresence>
      </div>

      {/* Slide overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none" />

      {/* Navigation Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-10 cursor-pointer"
        aria-label="Foto sebelumnya"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-10 cursor-pointer"
        aria-label="Foto berikutnya"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Image Counter Badge */}
      <div className="absolute top-4 right-4 bg-black/60 text-white text-[10px] font-black tracking-wider uppercase px-2.5 py-1 rounded-full backdrop-blur-md z-10">
        Foto {currentIdx + 1} / {slideImages.length}
      </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
        {slideImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIdx ? 1 : -1);
              setCurrentIdx(idx);
            }}
            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
              currentIdx === idx ? 'w-6 bg-emerald-500' : 'w-2 bg-white/60 hover:bg-white'
            }`}
            aria-label={`Buka foto ke-${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
