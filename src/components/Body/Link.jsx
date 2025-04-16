import { useEffect } from "react";

export default function Link() {
  useEffect(() => {
    const links = [
      {
        rel: "stylesheet",
        id: "wc-blocks-style-css",
        href: "https://bangkok.ge/wp-content/plugins/woocommerce/assets/client/blocks/wc-blocks.css",
        type: "text/css",
        media: "all",
      },
      {
        rel: "stylesheet",
        id: "elementor-post-21-css",
        href: "https://bangkok.ge/wp-content/uploads/elementor/css/post-21.css",
        type: "text/css",
        media: "all",
      },
      {
        rel: "stylesheet",
        id: "widget-icon-list-css",
        href: "https://bangkok.ge/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css",
        type: "text/css",
        media: "all",
      },
      {
        rel: "stylesheet",
        id: "widget-social-icons-css",
        href: "https://bangkok.ge/wp-content/plugins/elementor/assets/css/widget-social-icons.min.css",
        type: "text/css",
        media: "all",
      },
      {
        rel: "stylesheet",
        id: "e-apple-webkit-css",
        href: "https://bangkok.ge/wp-content/plugins/elementor/assets/css/conditionals/apple-webkit.min.css",
        type: "text/css",
        media: "all",
      },
      {
        rel: "stylesheet",
        id: "widget-image-css",
        href: "https://bangkok.ge/wp-content/plugins/elementor/assets/css/widget-image.min.css",
        type: "text/css",
        media: "all",
      },
      {
        rel: "stylesheet",
        id: "elementor-post-46-css",
        href: "https://bangkok.ge/wp-content/uploads/elementor/css/post-46.css",
        type: "text/css",
        media: "all",
      },
      {
        rel: "stylesheet",
        id: "widget-heading-css",
        href: "https://bangkok.ge/wp-content/plugins/elementor/assets/css/widget-heading.min.css",
        type: "text/css",
        media: "all",
      },
      {
        rel: "stylesheet",
        id: "elementor-post-5968-css",
        href: "https://bangkok.ge/wp-content/uploads/elementor/css/post-5968.css",
        type: "text/css",
        media: "all",
      },
      {
        rel: "stylesheet",
        id: "google-fonts-2-css",
        href: "https://fonts.googleapis.com/css?family=Lato%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&display=swap",
        type: "text/css",
        media: "all",
      },
      {
        rel: "stylesheet",
        id: "elementor-icons-shared-0-css",
        href: "https://bangkok.ge/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.min.css",
        type: "text/css",
        media: "all",
      },
      {
        rel: "stylesheet",
        id: "elementor-icons-fa-solid-css",
        href: "https://bangkok.ge/wp-content/plugins/elementor/assets/lib/font-awesome/css/solid.min.css",
        type: "text/css",
        media: "all",
      },
      {
        rel: "stylesheet",
        id: "elementor-icons-fa-brands-css",
        href: "https://bangkok.ge/wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.min.css",
        type: "text/css",
        media: "all",
      },
      {
        rel: "stylesheet",
        id: "rs-plugin-settings-css",
        href: "https://bangkok.ge/wp-content/plugins/revslider/public/assets/css/rs6.css",
        type: "text/css",
        media: "all",
      },
    ];

    const createdLinks = links.map((attrs) => {
      const link = document.createElement("link");
      Object.entries(attrs).forEach(([k, v]) => link.setAttribute(k, v));
      document.head.appendChild(link);
      return link;
    });

    // Cleanup on unmount
    return () => {
      createdLinks.forEach((link) => {
        if (link.parentNode) link.parentNode.removeChild(link);
      });
    };
  }, []);

  return null;
}