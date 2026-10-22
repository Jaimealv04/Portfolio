import { useEffect, useState } from 'react';

/** Tracks which of the given section ids is crossing the top band of the viewport. */
export const useActiveSection = (ids: readonly string[]) => {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      // A thin band just below the navigation bar
      { rootMargin: '-80px 0px -70% 0px' }
    );

    ids.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
};

export const scrollToSection = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
