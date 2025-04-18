import React from "react";

export default function StylesFunction() {
	return (
		<>
			<style
				id='wp-emoji-styles-inline-css'
				type='text/css'>
				{`
  img.wp-smiley, img.emoji {
    display: inline !important;
    border: none !important;
    box-shadow: none !important;
    height: 1em !important;
    width: 1em !important;
    margin: 0 0.07em !important;
    vertical-align: -0.1em !important;
    background: none !important;
    padding: 0 !important;
  }
        `}
			</style>
			<style
				id='classic-theme-styles-inline-css'
				type='text/css'>
				{`
/*! This file is auto-generated */
.wp-block-button__link{color:#fff;background-color:#32373c;border-radius:9999px;box-shadow:none;text-decoration:none;padding:calc(.667em + 2px) calc(1.333em + 2px);font-size:1.125em}.wp-block-file__button{background:#32373c;color:#fff;text-decoration:none}
        `}
			</style>
		</>
	);
}
