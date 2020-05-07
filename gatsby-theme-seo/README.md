# gatsby-theme-seo
A Gatsby theme for site SEO. Built with TypeScript.

## BEAKING CHANGE ##

As of v.1.0.0 the twitter handle is now removed from siteMetadata and instead taken as a prop o the actual SEO component itself. The reason for this change was to prevent clashing with other themes that use siteMetadata.

## Installation: 

```yarn add gatsby-theme-seo```

## Props

| Name          | Optional | Type       | Default |
|---------------|----------|------------|---------|
| title         |   No     | string     | None    |
| description   |   No     | string     | None    |
| lang          |   No     | string     | 'en'    |
| image         |   Yes    | Image      | None    |
| meta          |   Yes    | array      | None    |
| keywords      |   Yes    | string[]   | None    |
| pathname      |   Yes    | string     | None    |
| twitter       |   Yes    | string     | None    |

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
                title: 'My Website',
                description: 'I am describing my website right here!',
                author: 'Rich Haines',
                siteUrl: 'https://www.myawesomewebsite.com'
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