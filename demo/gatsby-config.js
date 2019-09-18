module.exports = {
    plugins: [
        {
            resolve: 'gatsby-theme-seo', 
            options: {
                title: 'Test Site',
                description: 'This is a test description',
                author: 'Me!',
                siteUrl: 'localhost:3000',
                social: {
                    twitter: 'studio_hungry'
                }
            }
        }
    ]
}