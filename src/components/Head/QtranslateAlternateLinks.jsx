import React from "react";

export default function QtranslateAlternateLinks() {
  return (
    <>
      <link
        hrefLang="ka" // Corrected property name
        href="https://bangkok.ge/ka/"
        rel="alternate"
      />
      <link
        hrefLang="en" // Corrected property name
        href="https://bangkok.ge/en/"
        rel="alternate"
      />
      <link
        hrefLang="x-default" // Corrected property name
        href="https://bangkok.ge/"
        rel="alternate"
      />
      <meta
        name="generator"
        content="qTranslate-X 3.4.6.8"
      />
    </>
  );
}
