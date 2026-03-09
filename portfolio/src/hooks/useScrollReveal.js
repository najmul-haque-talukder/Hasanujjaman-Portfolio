import { useEffect } from 'react';

/**
 * Attaches an IntersectionObserver to all elements matching the given
 * selector(s) and adds the 'visible' class when they enter the viewport.
 *
 * Usage:
 *   useScrollReveal('.reveal, .reveal-left, .reveal-right, .reveal-scale');
 */
const useScrollReveal = (selector = '.reveal, .reveal-left, .reveal-right, .reveal-scale') => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target); // animate once only
                    }
                });
            },
            { threshold: 0.12 }
        );

        const elements = document.querySelectorAll(selector);
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [selector]);
};

export default useScrollReveal;
