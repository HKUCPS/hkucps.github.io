// Home page animation initialization
(function() {
  // Mark page as loaded for animations
  window.addEventListener('load', function() {
    document.body.setAttribute('data-loaded', '');
  });

  // Add intersection observer for scroll animations
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all feature sections
    document.querySelectorAll('.feature').forEach(feature => {
      feature.style.opacity = '0';
      feature.style.transform = 'translateY(20px)';
      feature.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(feature);
    });
  }
})();
