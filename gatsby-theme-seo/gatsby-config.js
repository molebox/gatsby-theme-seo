module.exports = (options) => {
    const {title, author, siteUrl, social} = options;

    return {
        siteMetadata: {
            title,
            author,
            siteUrl,
            social
        },
        plugins: [
            'gatsby-plugin-react-helmet',
            'gatsby-plugin-sitemap',
            'gatsby-plugin-typescript'
        ]
    }
}
