const TEST_ENV = process.env.TEST_ENV || 'development'

const SITE_URL =
  TEST_ENV === 'production' ? 'https://www.test.io' : 'https://www.test.dev'

const config = {
  siteMetadata: {
    title: 'Test',
    description:
      'Test provides you with secure identity management. Social sign-in, multi-factor authentication and more so you can focus on your business.',
    author: 'Test',
    siteUrl: SITE_URL,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-typescript-checker`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.(ts|js)x?$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `copy`,
        path: `${__dirname}/src/copy/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/src/docs`,
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/docs`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          docs: require.resolve('./src/layouts/docs-layout.jsx'),
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Test`,
        // eslint-disable-next-line @typescript-eslint/camelcase
        short_name: `starter`,
        // eslint-disable-next-line @typescript-eslint/camelcase
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        resolveEnv: () => TEST_ENV,
        env: {
          production: {
            policy: [
              { userAgent: '*', allow: ['/'] },
              { userAgent: '*', disallow: ['/terms-of-service'] },
              { userAgent: '*', disallow: ['/privacy-policy'] },
              { userAgent: '*', disallow: ['/cookies'] },
            ],
          },
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
        },
      },
    },
  ],
}

// Conditionally add Production-only plugins
if (TEST_ENV === 'production') {
  config.plugins.push(
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.ANALYTICS_ID,
        anonymize: false,
        head: true,
      },
    },
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: process.env.TAG_MANAGER_ID,
      },
    },
  )
}

module.exports = config
