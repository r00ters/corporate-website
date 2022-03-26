module.exports = {
  siteMetadata: {
    title: 'Rooters > Your ultimate IT partner',
    author: 'Rooters s.r.l.s.',
    description: 'Rooters s.r.l.s - Your ultimate IT partner from integration to security.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/img/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
}
