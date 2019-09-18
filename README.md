# gatsby-theme-seo
A Gatsby theme for site SEO. Built with TypeScript.

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