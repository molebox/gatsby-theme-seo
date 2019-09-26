import * as React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

interface Props {
	title: string;
	description?: string;
	lang: string;
	image?: Image;
	meta?: [];
	keywords?: string[];
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
const SEO = ({ title, description, lang = 'en', meta, image, keywords, pathname }: Props) => {
	return (
		<StaticQuery
			query={detailsQuery}
			render={(data) => {
				const metaDescription = description || '';
				const metaImage = image && image.src ? `${data.site.siteMetadata.siteUrl}${image.src}` : null;
				const metaUrl = `${data.site.siteMetadata.siteUrl}${pathname}`;
				return (
					<Helmet
						htmlAttributes={{
							lang,
						}}
						title={title}
						titleTemplate={`%s | ${data.site.siteMetadata.title}`}
						meta={[
							{
								name: `description`,
								content: metaDescription,
							},
							{
								property: `og:title`,
								content: title,
							},
							{
								property: `og:url`,
								content: metaUrl,
							},
							{
								property: `og:description`,
								content: metaDescription,
							},
							{
								property: `og:type`,
								content: `website`,
							},
							{
								name: `twitter:creator`,
								content: `@${data.site.siteMetadata.social.twitter}`,
							},
							{
								name: `twitter:title`,
								content: title,
							},
							{
								name: `twitter:description`,
								content: metaDescription,
							},
						]
							.concat(
								metaImage && image
									? [
											{
												property: `og:image`,
												content: metaImage,
											},
											{
												property: `og:image:alt`,
												content: title,
											},
											{
												property: 'og:image:width',
												content: image.width,
											},
											{
												property: 'og:image:height',
												content: image.height,
											},
											{
												name: `twitter:card`,
												content: `summary_large_image`,
											},
									  ]
									: [
											{
												name: `twitter:card`,
												content: `summary`,
											},
									  ]
							)
							.concat(
								keywords && keywords.length > 0
									? {
											name: `keywords`,
											content: keywords.join(`, `),
									  }
									: []
							)
							.concat(meta ? meta : [])}
					/>
				);
			}}
		/>
	);
};

export default SEO;

const detailsQuery = graphql`
	query DefaultSEOQuery {
		site {
			siteMetadata {
				title
				siteUrl
				author
				social {
					twitter
				}
			}
		}
	}
`;
