window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});(function () {
  const googleAppDomains = [
    'drive.google.com', 'docs.google.com', 'sheets.google.com',
    'slides.google.com', 'meet.google.com', 'calendar.google.com',
    'mail-attachment.googleusercontent.com'
  ];

  function isGoogleWorkspaceLink(url) {
    try {
      const parsed = new URL(url);
      return googleAppDomains.some(
        (d) => parsed.hostname === d || parsed.hostname.endsWith('.' + d)
      );
    } catch (e) { return false; }
  }

  document.addEventListener('click', function (e) {
    const link = e.target.closest('a');
    if (!link || !link.href) return;
    if (link.href.startsWith('https://mail.google.com') || link.href.startsWith('mailto:') || link.hasAttribute('download')) return;

    if (isGoogleWorkspaceLink(link.href)) {
      e.preventDefault(); e.stopPropagation();
      window.open(link.href, '_blank', 'width=1320,height=840,resizable=yes,scrollbars=yes');
    } else if (link.target === '_blank' || link.href.startsWith('http')) {
      e.preventDefault(); e.stopPropagation();
      window.open(link.href, '_blank', 'noopener,noreferrer');
    }
  }, true);

  const originalOpen = window.open;
  window.open = function (url, target, features) {
    if (url && isGoogleWorkspaceLink(url)) {
      return originalOpen.call(this, url, '_blank', features || 'width=1320,height=840,resizable=yes,scrollbars=yes');
    }
    return originalOpen.call(this, url, target || '_blank', features);
  };
})();