import { useEffect } from "react";

export default function GoogleAnalytics() {
  useEffect(() => {
    // Create the async script tag
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-4L9KN89SX7";
    document.head.appendChild(script);

    // Inline gtag config
    const inlineScript = document.createElement("script");
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-4L9KN89SX7');
    `;
    document.head.appendChild(inlineScript);

    // Cleanup on unmount
    return () => {
      document.head.removeChild(script);
      document.head.removeChild(inlineScript);
    };
  }, []);

  return null;
}