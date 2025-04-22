// popup.js

document.addEventListener('DOMContentLoaded', function () {
  const searchEngineSelect = document.getElementById('searchEngine');
  const searchQueryInput = document.getElementById('searchQuery');
  const searchButton = document.getElementById('searchButton');

  searchButton.addEventListener('click', function () {
    const selectedEngine = searchEngineSelect.value;
    const query = searchQueryInput.value;

    if (query) {
      const engineUrls = {
        "brave": "https://search.brave.com/search?q=",
        "startpage": "https://www.startpage.com/do/search?query=",
        "google": "https://www.google.com/search?q=",
        // Add more engines as needed
      };

      const url = engineUrls[selectedEngine] + encodeURIComponent(query);
      window.open(url, '_blank');
    }
  });
});

