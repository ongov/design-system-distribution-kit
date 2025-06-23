function GoogleHelper(gaToken) {
    this.constructor = function(gaToken) {
        this.registerGAToken(gaToken);
    };
    this.registerGAToken = function(gaToken) {
        this.gaToken = gaToken;
    };
    this.head = function() {
        return `
        <script>(function(w, d, s, l, i) {
          w[l] = w[l] || [];
          w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
          const f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l !== 'dataLayer' ? '&l=' + l : '';
          j.async = true;
          j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
          f.parentNode.insertBefore(j, f);
      })(window, document, 'script', 'dataLayer', '${gaToken}');</script>`;
    };

    this.body = function() {
        return `<noscript><iframe
          src="https://www.googletagmanager.com/ns.html?id=${gaToken}"
          height="0"
          width="0"
          style="display:none;visibility:hidden"></iframe></noscript>`;
    };
}

module.exports = GoogleHelper;
