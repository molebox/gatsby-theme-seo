# gatsby-theme-seo
A Gatsby theme for site SEO. Built with TypeScript.

## BEAKING CHANGE ##

As of v.1.0.0 the twitter handle is now removed from siteMetadata and instead taken as a prop o the actual SEO component itself. The reason for this change was to prevent clashing with other themes that use siteMetadata.

## BEAKING CHANGE v1.1.0 ##

As of v.1.1.0 the image prop has been removed in favor of an ogImage prop which expects a full url to your open graph image 

## Installation: 

```yarn add gatsby-theme-seo```

## Props

| Name          | Optional | Type       | Default |
|---------------|----------|------------|---------|
| title         |   No     | string     | None    |
| description   |   No     | string     | None    |
| lang          |   No     | string     | 'en'    |
| ogImage       |   Yes    | string     | None    |
| meta          |   Yes    | array      | None    |
| keywords      |   Yes    | string[]   | None    |
| pathname      |   Yes    | string     | None    |
| twitter       |   Yes    | string     | None    |


## Usage: 

In your sites gatsby-config: 

```
module.exports = {
    plugins: [
         {
            resolve: 'gatsby-theme-seo', 
            options: {
                title: 'My awesome website',
                author: 'Rich Haines',
                siteUrl: 'https://www.myawesomewebsite.com',
                social: {
                    twitter: 'studio_hungry'
                }
            }
        }
    ]
}
```

```
import React from 'react';
import {SEO} from 'gatsby-theme-seo';

const Index = () => (
    <div>
        <SEO title="Test" description="My site is super amazing"/>
        <h1>This is a title</h1>
    </div>
)

export default Index;
```

The description is optional so you can grab it from a data source. This gives you the flexibility to allow your CMS to dictate this information instead of the hardcoded values from the themes options.

```
import React from 'react';
import {SEO} from 'gatsby-theme-seo';
import {graphql, useStaticQuery} from 'gatsby';

const Index = () => {
  const content = useStaticQuery(query);
  const metadata = content.allSanityMetadata.edges;
  return (
    <Layout>
      {metadata.map(({node}) => (
        <SEO
        title="My Awesome Website"
        description={node.description}
        keywords={node.keywords}
      />
      ))}
    </Layout>
  );
};

export default Index;

export const query = graphql`
  query MainImageQuery {
    allSanityMetadata {
      edges {
        node {
          keywords
          description
        }
      }
    }
  }
`;

```

```
import React from 'react';
import {SEO} from 'gatsby-theme-seo';

const Index = () => (
    <div>
        <SEO title="Test" />
        <h1>This is a title</h1>
    </div>
)

export default Index;
```

## Built With

- [Gatsby](https://www.gatsbyjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

## Authors

- **Rich Haines** - _Hungry Bear Studio_

## License

This project is licensed under the MIT License