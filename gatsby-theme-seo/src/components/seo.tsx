import * as React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

interface Props {
	title: string;
	description?: string;
	lang: string;
	meta?: [];
	keywords?: string[];
	pathname?: string;
	twitter?: string;
	ogImage?: string;
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
const SEO = ({ title, description, lang = 'en', meta, keywords, pathname, twitter, ogImage }: Props) => {
	return (
		<StaticQuery
			query={detailsQuery}
			render={(data) => {
				const metaDescription = description || '';
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
								property: `og:image`,
								content: ogImage ? ogImage : '',
							},
							{
								property: `og:type`,
								content: ogImage ? `article` : `website`,
							},
							{
								name: `twitter:creator`,
								content: `@${twitter ? twitter : ''}`,
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
								ogImage
									? [
											{
												property: `og:image`,
												content: ogImage,
											},
											{
												property: `og:image:alt`,
												content: title,
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
	query GatsbyThemeSEODefault {
		site {
			siteMetadata {
				title
				siteUrl
				author
			}
		}
	}
`;
