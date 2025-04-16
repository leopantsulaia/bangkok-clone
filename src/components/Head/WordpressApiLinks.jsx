import React from "react";

export default function WordpressApiLinks() {
	return (
		<>
			<link
				rel='https://api.w.org/'
				href='https://bangkok.ge/en/wp-json/'
			/>
			<link
				rel='alternate'
				title='JSON'
				type='application/json'
				href='https://bangkok.ge/en/wp-json/wp/v2/pages/6949'
			/>
			<link
				rel='EditURI'
				type='application/rsd+xml'
				title='RSD'
				href='https://bangkok.ge/xmlrpc.php?rsd'
			/>
			<link
				rel='alternate'
				title='oEmbed (JSON)'
				type='application/json+oembed'
				href='https://bangkok.ge/en/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fbangkok.ge%2Fen%2F'
			/>
			<link
				rel='alternate'
				title='oEmbed (XML)'
				type='text/xml+oembed'
				href='https://bangkok.ge/en/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fbangkok.ge%2Fen%2F&#038;format=xml'
			/>
		</>
	);
}
