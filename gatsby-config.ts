import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  trailingSlash: 'always',
  siteMetadata: {
    title: 'Beefy Finance',
    titleTemplate: '{title} - Beefy Finance',
    siteUrl: 'https://beefy.com',
    description:
      'Beefy is a Decentralized, Multichain Yield Optimizer that allows its users to earn compound interest on their crypto holdings. Beefy earns you the highest APYs with safety and efficiency in mind.',
    twitterUsername: '@beefyfinance',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Beefy Finance',
        short_name: 'Beefy',
        start_url: '/',
        background_color: '#1B1E31',
        theme_color: '#1B1E31',
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    `gatsby-transformer-json`,
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 720,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'jsonContent',
        path: './src/content/json',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blogContent',
        path: './src/content/blog/',
      },
    },
  ],
};

export default config;
