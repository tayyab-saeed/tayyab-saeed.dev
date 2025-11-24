import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';

import styles from '@/styles/ProjectCarousel.module.css';

interface ProjectCarouselProps {
  screenshots: string[];
  projectTitle: string;
}

const ProjectCarousel = ({ screenshots, projectTitle }: ProjectCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'center',
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  if (!screenshots || screenshots.length === 0) {
    return null;
  }

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carousel} ref={emblaRef}>
        <div className={styles.carouselContainer}>
          {screenshots.map((screenshot, index) => (
            <div className={styles.carouselSlide} key={index}>
              <div className={styles.imageWrapper}>
                <Image
                  src={screenshot}
                  alt={`${projectTitle} screenshot ${index + 1}`}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 800px"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {screenshots.length > 1 && (
        <>
          <button
            className={`${styles.carouselButton} ${styles.carouselButtonPrev}`}
            onClick={scrollPrev}
            aria-label="Previous screenshot"
          >
            <VscChevronLeft />
          </button>
          <button
            className={`${styles.carouselButton} ${styles.carouselButtonNext}`}
            onClick={scrollNext}
            aria-label="Next screenshot"
          >
            <VscChevronRight />
          </button>

          <div className={styles.dotsContainer}>
            {screenshots.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${
                  index === selectedIndex ? styles.dotActive : ''
                }`}
                onClick={() => scrollTo(index)}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectCarousel;

