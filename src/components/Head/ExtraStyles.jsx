import React from "react";

export default function ExtraStyles() {
  return (
    <>
      <style type="text/css">
        {`
        .recentcomments a {
          display: inline !important;
          padding: 0 !important;
          margin: 0 !important;
        }
        `}
      </style>
      <style type="text/css">
        {`
        .e-con.e-parent:nth-of-type(n + 4):not(.e-lazyloaded):not(.e-no-lazyload),
        .e-con.e-parent:nth-of-type(n + 4):not(.e-lazyloaded):not(.e-no-lazyload) * {
          background-image: none !important;
        }
        @media screen and (max-height: 1024px) {
          .e-con.e-parent:nth-of-type(n + 3):not(.e-lazyloaded):not(.e-no-lazyload),
          .e-con.e-parent:nth-of-type(n + 3):not(.e-lazyloaded):not(.e-no-lazyload) * {
            background-image: none !important;
          }
        }
        @media screen and (max-height: 640px) {
          .e-con.e-parent:nth-of-type(n + 2):not(.e-lazyloaded):not(.e-no-lazyload),
          .e-con.e-parent:nth-of-type(n + 2):not(.e-lazyloaded):not(.e-no-lazyload) * {
            background-image: none !important;
          }
        }
        `}
      </style>
      <style className="wp-fonts-local" type="text/css">
        {`
        @font-face {
          font-family: Inter;
          font-style: normal;
          font-weight: 300 900;
          font-display: fallback;
          src: url("https://bangkok.ge/wp-content/plugins/woocommerce/assets/fonts/Inter-VariableFont_slnt,wght.woff2") format("woff2");
          font-stretch: normal;
        }
        @font-face {
          font-family: Cardo;
          font-style: normal;
          font-weight: 400;
          font-display: fallback;
          src: url("https://bangkok.ge/wp-content/plugins/woocommerce/assets/fonts/cardo_normal_400.woff2") format("woff2");
        }
        `}
      </style>
    </>
  );
}