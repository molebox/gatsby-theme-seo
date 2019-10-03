# gatsby-theme-seo
A Gatsby theme for site SEO. Built with TypeScript.

## Installation: 

```yarn add gatsby-theme-seo```

## Props

| Name          | Optional | Type       | Default |
|---------------|----------|------------|---------|
| title         |   No     | string     | None    |
| description   |   Yes    | string     | None    |
| lang          |   No     | string     | 'en'    |
| image         |   Yes    | Image      | None    |
| meta          |   Yes    | array      | None    |
| keywords      |   Yes    | string[]   | None    |
| pathname      |   Yes    | string     | None    |

## Image Object

| Name   | Optional  | Type   | Default |
|--------|-----------|--------|---------|
| src    |  No       | string | None    |
| height |  No       | string | None    |
| width  |  No       | string | None    |


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

The description is optional so you can grab it (as well as other data like keywords and images) from a data source. This gives you the flexibility to allow your CMS to dictate this information instead of the hardcoded values from the themes options.

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

## Built With

- [Gatsby](https://www.gatsbyjs.org/)
- [TypeScript](https://www.typescriptlang.org/)

## Authors

- **Rich Haines** - _Hungry Bear Studio_

## License

This project is licensed under the MIT License
