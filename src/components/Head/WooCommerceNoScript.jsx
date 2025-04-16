import React from "react";

export default function WooCommerceNoScript() {
  return (
    <noscript>
      <style>
        {`
        .woocommerce-product-gallery {
          opacity: 1 !important;
        }
        `}
      </style>
    </noscript>
  );
}