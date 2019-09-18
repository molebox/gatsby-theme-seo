declare module 'gatsby-theme-seo' {
	interface Props {
		title: string;
		description?: string;
		lang: string;
		image?: Image;
		meta: [];
		keywords: string[];
		pathname?: string;
	}

	interface Image {
		src: string;
		height: string;
		width: string;
	}

	/**
	 * An SEO component to be used in any component to boost Search Engine Optimization
	 * @param title The title of the page
	 * @param descrition The pages description
	 * @param lang The language of the website. Default set to 'en'
	 * @param image The pages main image. If supplied, must supply src, height and width of image. This can be taken from your graphql query
	 * @param meta The HTML meta tag
	 * @param keywords The pages keywords. Example - blog
	 * @param pathname The path of the current page. Example - www.myblog.com/pathname
	 */
	export const SEO: (props: Props) => JSX.Element;
}
