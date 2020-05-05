(function() {
  if (document.location.hash) {
      setTimeout(function() {
          window.scrollTo(window.scrollX, window.scrollY - 100);
      }, 10);
  }
})();
