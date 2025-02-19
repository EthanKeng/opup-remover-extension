// content.js
function removePopup() {
    const selectors = [
      '.nf-modal.interstitial-full-screen',
      '[data-uia="clcsModal"]',
      '.nf-modal-background'
    ];
  
    selectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        element.remove();
      });
    });
  
    // Also remove any modal-related classes from body
    document.body.classList.remove('no-scroll', 'modal-open');
  }
  
  // Run immediately and also set up a mutation observer to handle dynamically loaded popups
  removePopup();
  
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.addedNodes.length) {
        removePopup();
      }
    }
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });