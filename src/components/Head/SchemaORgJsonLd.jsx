import React from "react";

export default function SchemaOrgJsonLd() {
	return (
		<script type='application/ld+json'>
			{`
      {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            "@id": "https://bangkok.ge/en/#/schema/WebSite",
            "url": "https://bangkok.ge/en/",
            "name": "Bangkok",
            "description": "Asian fast food chain",
            "inLanguage": "en-US",
            "potentialAction": {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://bangkok.ge/en/search/{search_term_string}/"
              },
              "query-input": "required name=search_term_string"
            },
            "publisher": {
              "@id": "https://bangkok.ge/en/#/schema/Organization"
            }
          },
          {
            "@type": "WebPage",
            "@id": "https://bangkok.ge/en/",
            "url": "https://bangkok.ge/en/",
            "name": "Bangkok - Asian fast food chain",
            "description": "ბანგკოკი - აზიური კერძების რესტორანი",
            "inLanguage": "en-US",
            "isPartOf": {
              "@id": "https://bangkok.ge/en/#/schema/WebSite"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "@id": "https://bangkok.ge/en/#/schema/BreadcrumbList",
              "itemListElement": {
                "@type": "ListItem",
                "position": 1,
                "name": "Bangkok"
              }
            },
            "potentialAction": {
              "@type": "ReadAction",
              "target": "https://bangkok.ge/en/"
            },
            "about": {
              "@id": "https://bangkok.ge/en/#/schema/Organization"
            }
          },
          {
            "@type": "Organization",
            "@id": "https://bangkok.ge/en/#/schema/Organization",
            "name": "Bangkok",
            "url": "https://bangkok.ge/en/",
            "logo": {
              "@type": "ImageObject",
              "url": "https://bangkok.ge/wp-content/uploads/2024/05/cropped-ok.png",
              "contentUrl": "https://bangkok.ge/wp-content/uploads/2024/05/cropped-ok.png",
              "width": 512,
              "height": 512,
              "contentSize": "18724"
            }
          }
        ]
      }
      `}
		</script>
	);
}
