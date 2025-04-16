import GlobalStyles from "./GlobalStyles";
import GoogleAnalytics from "./GoogleAnalytics";
import HeadLinks from "./HeadLinks";
import MetaTags from "./MetaTags";
import SchemaOrgJsonLd from "./SchemaORgJsonLd";
import WpEmojiScript from "./WpEmojiScript";
import Stylesheets from "./Stylesheets";
import ElementorStylesheets from "./ElementorStylesheets";
import GoogleFonts from "./GoogleFonts";
import WooCommerceGtagConsent from "./WooCommerceGtagConsent";
import WooCommerceJqueryScripts from "./WooCommerceJqueryScripts";
import WooCommerceScripts from "./WooCommerceScripts";
import WordpressApiLinks from "./WordpressApiLinks";
import QtranslateFlagsStyles from "./QtranslateFlagsStyles";
import QtranslateAlternateLinks from "./QtranslateAlternateLinks";
import WooCommerceNoScript from "./WooCommerceNoScript";
import MetaGeneratorTags from "./MetaGeneratorTags";
import ExtraStyles from "./ExtraStyles";
import FaviconLinks from "./FaviconLinks";
import SetREVStartSizeScript from "./SetREVStartSizeScript";
import KirkiInlineStyles from "./KirkiInlineStyles";
import KirkiInlineStyles1 from "./KirkiInlineStyles1";
import KirkiInlineStyles2 from "./KirkiInlineStyles2";
import KirkiInlineStyles3 from "./KirkiInlineStyles3";
import KirkiInlineStyles4 from "./KirkiInlineStyles4";

export default function Head() {
	return (
		<>
			<MetaTags />
			<GoogleAnalytics />
			<SchemaOrgJsonLd />
			<HeadLinks />
			<WpEmojiScript />
			<GlobalStyles />
			<Stylesheets />
			<ElementorStylesheets />
			<GoogleFonts />
			<WooCommerceGtagConsent />
			<WooCommerceJqueryScripts />
			<WooCommerceScripts />
			<WordpressApiLinks />
			<QtranslateFlagsStyles />
			<QtranslateAlternateLinks />
			<WooCommerceNoScript />
			<MetaGeneratorTags />
			<ExtraStyles />
			<FaviconLinks />
			<SetREVStartSizeScript />
			<KirkiInlineStyles />
			<KirkiInlineStyles1 />
			<KirkiInlineStyles2 />
			<KirkiInlineStyles3 />
			<KirkiInlineStyles4 />
		</>
	);
}
