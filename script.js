// Fade-in sections on scroll (Apple-like effect)
window.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');

  // Simple validation test - ensure required sections exist
  const requiredSections = ['hero', 'about', 'academic', 'professional', 'contact'];
  requiredSections.forEach(id => {
    const section = document.getElementById(id);
    if (!section) {
      console.warn(`Missing required section: ${id}`);
    }
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, { threshold: 0.1 });

    sections.forEach(section => observer.observe(section));
  } else {
    // Fallback: show all sections if IntersectionObserver is not supported
    sections.forEach(section => section.classList.add('visible'));
  }
});