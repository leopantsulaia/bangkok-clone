import { useEffect } from "react";

export default function Scripts() {
  useEffect(() => {
    // RS_MODULES script
    window.RS_MODULES = window.RS_MODULES || {};
    window.RS_MODULES.modules = window.RS_MODULES.modules || {};
    window.RS_MODULES.waiting = window.RS_MODULES.waiting || [];
    window.RS_MODULES.defered = true;
    window.RS_MODULES.moduleWaiting = window.RS_MODULES.moduleWaiting || {};
    window.RS_MODULES.type = "compiled";

    // Lazyload observer script
    const lazyloadRunObserver = () => {
      const lazyloadBackgrounds = document.querySelectorAll(
        `.e-con.e-parent:not(.e-lazyloaded)`
      );
      const lazyloadBackgroundObserver = new window.IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              let lazyloadBackground = entry.target;
              if (lazyloadBackground) {
                lazyloadBackground.classList.add("e-lazyloaded");
              }
              lazyloadBackgroundObserver.unobserve(entry.target);
            }
          });
        },
        { rootMargin: "200px 0px 200px 0px" }
      );
      lazyloadBackgrounds.forEach((lazyloadBackground) => {
        lazyloadBackgroundObserver.observe(lazyloadBackground);
      });
    };
    const events = ["DOMContentLoaded", "elementor/lazyload/observe"];
    events.forEach((event) => {
      document.addEventListener(event, lazyloadRunObserver);
    });

    // WooCommerce JS class swap
    const swapWooClass = () => {
      var c = document.body.className;
      c = c.replace(/woocommerce-no-js/, "woocommerce-js");
      document.body.className = c;
    };
    swapWooClass();

    // Cleanup listeners on unmount
    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, lazyloadRunObserver);
      });
    };
  }, []);

  return null;
}