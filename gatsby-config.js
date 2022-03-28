if (process.env.STAGING) {
  require("dotenv").config({
    path: `.env.staging`,
  })
} else {
  require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
  })
}

module.exports = {
  siteMetadata: {
    title: 'Rooters > Your ultimate IT partner',
    author: 'Rooters s.r.l.s.',
    description: 'Rooters s.r.l.s - Your ultimate IT partner from integration to security.',
    keyword: 'hardware, software, on-premises, cloud, data recovery, secure delete, security, compliance, support, consultant, automation',
    og_image: '/og-image.png',
    og_image_width: '1260',
    og_image_height: '630',
    domain: process.env.GATSBY_DOMAIN
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
    'gatsby-plugin-sass'
  ],
}
