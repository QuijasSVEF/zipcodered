import React from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  keywords?: string;
}

export function SEO({ 
  title = "Zipcode Code Red: California School Funding Status Checker | Educational Equity",
  description = "Is your school in a Code Red Zone? Discover California school funding disparities by zip code. $13,372 per-student funding gap impacts educational opportunities.",
  image = "https://i.imgur.com/wWIWjYp.jpeg",
  keywords = "zip code red, zipcode red, Zipcode Code Red, California school funding, education equity, school funding checker, code red school zones, school funding by zip code, education funding crisis"
}: SEOProps) {
  const location = useLocation();
  const url = `https://zipcodered.com${location.pathname}`;

  React.useEffect(() => {
    // Update meta tags
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:url"]')?.setAttribute('content', url);
    document.querySelector('meta[property="og:image"]')?.setAttribute('content', image);
    document.querySelector('meta[name="keywords"]')?.setAttribute('content', keywords);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);
    document.querySelector('meta[name="twitter:image"]')?.setAttribute('content', image);
  }, [title, description, image, url]);

  return null;
}