import React from "react";

export default function HeadLinks() {
  return (
    <>
      <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      <link href="https://fonts.gstatic.com" crossOrigin="anonymous" rel="preconnect" />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="Bangkok » Feed"
        href="https://bangkok.ge/en/feed/"
      />
      <link
        rel="alternate"
        type="application/rss+xml"
        title="Bangkok » Comments Feed"
        href="https://bangkok.ge/en/comments/feed/"
      />
    </>
  );
}