import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export default function SEO({ title, description, image, url }: SEOProps) {
  const fullTitle = title.includes('LA7') ? title : `${title} | LA7 Visuals`;
  const siteUrl = url ?? window.location.href;
  const ogImage = image ?? '/portfolio/boucheron/bou01.png';

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (name: string, content: string, isOg = false) => {
      const attr = isOg ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', description);
    setMeta('og:title', fullTitle, true);
    setMeta('og:description', description, true);
    setMeta('og:image', ogImage, true);
    setMeta('og:url', siteUrl, true);
    setMeta('og:type', 'website', true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
    setMeta('twitter:image', ogImage);
  }, [fullTitle, description, ogImage, siteUrl]);

  return null;
}
