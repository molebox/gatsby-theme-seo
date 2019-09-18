module.exports = (options) => {
    const {title, author, description, siteUrl, social} = options;

    return {
        siteMetadata: {
            title,
            author,
            description,
            siteUrl,
            social
        },
        plugins: [
            'gatsby-plugin-react-helmet',
            'gatsby-plugin-typescript'
        ]
    }
}