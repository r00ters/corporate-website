import { graphql, StaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Helmet from 'react-helmet'
import '../assets/sass/main.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title,
            description,
            keyword,
            og_image,
            og_image_width,
            og_image_height,
            domain
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: data.site.siteMetadata.description },
            { name: 'keywords', content: data.site.siteMetadata.keyword },
            { name: 'og:image', content: data.site.siteMetadata.domain + data.site.siteMetadata.og_image },
            { name: 'og:image:width', content: data.site.siteMetadata.og_image_width },
            { name: 'og:image:heigh', content: data.site.siteMetadata.og_image_height },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div id="wrapper">{children}</div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
