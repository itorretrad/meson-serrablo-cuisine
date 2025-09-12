import { useEffect, useRef, useState } from 'react';

interface ScrollNavigationOptions {
  sections: string[];
  threshold?: number;
  debounceMs?: number;
}

export const useScrollNavigation = ({ 
  sections, 
  threshold = 100, 
  debounceMs = 150 
}: ScrollNavigationOptions) => {
  const [currentSection, setCurrentSection] = useState(0);
  const scrollTimeout = useRef<NodeJS.Timeout>();
  const isNavigating = useRef(false);
  const startY = useRef(0);
  const lastScrollTime = useRef(0);

  const navigateToSection = (index: number) => {
    if (index >= 0 && index < sections.length) {
      const element = document.getElementById(sections[index]);
      if (element) {
        isNavigating.current = true;
        element.scrollIntoView({ behavior: 'smooth' });
        setCurrentSection(index);
        
        // Reset navigation flag after animation
        setTimeout(() => {
          isNavigating.current = false;
        }, 1000);
      }
    }
  };

  useEffect(() => {
    let touchStartY = 0;
    let touchStartTime = 0;

    const handleTouchStart = (e: TouchEvent) => {
      if (isNavigating.current) return;
      touchStartY = e.touches[0].clientY;
      touchStartTime = Date.now();
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isNavigating.current) return;
      
      const touchEndY = e.changedTouches[0].clientY;
      const touchEndTime = Date.now();
      
      const distance = Math.abs(touchEndY - touchStartY);
      const duration = touchEndTime - touchStartTime;
      const velocity = distance / duration;

      // Detect fast swipe (high velocity) or long distance
      if (velocity > 0.5 || distance > threshold) {
        const direction = touchEndY > touchStartY ? -1 : 1; // -1 for up (prev section), 1 for down (next section)
        
        if (direction === 1 && currentSection < sections.length - 1) {
          navigateToSection(currentSection + 1);
        } else if (direction === -1 && currentSection > 0) {
          navigateToSection(currentSection - 1);
        }
      }
    };

    const handleWheel = (e: WheelEvent) => {
      if (isNavigating.current) return;
      
      const now = Date.now();
      const timeDelta = now - lastScrollTime.current;
      lastScrollTime.current = now;

      // Clear existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Detect fast scroll or accumulated scroll
      const deltaY = Math.abs(e.deltaY);
      
      if (deltaY > 50 || timeDelta < 50) {
        scrollTimeout.current = setTimeout(() => {
          const direction = e.deltaY > 0 ? 1 : -1;
          
          if (direction === 1 && currentSection < sections.length - 1) {
            navigateToSection(currentSection + 1);
          } else if (direction === -1 && currentSection > 0) {
            navigateToSection(currentSection - 1);
          }
        }, debounceMs);
      }
    };

    // Add event listeners
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: false });

    // Detect current section on scroll
    const handleScroll = () => {
      if (isNavigating.current) return;
      
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setCurrentSection(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [sections, threshold, debounceMs, currentSection]);

  return {
    currentSection,
    navigateToSection,
    totalSections: sections.length
  };
};