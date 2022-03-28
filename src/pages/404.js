import React from 'react'
import Layout from '../components/layout'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'

const NotFoundPage = () => (
  <Layout>
    <section>
      <header>
        <h2>404</h2>
      </header>
      <div className="content">
        <p  className="quote">
          You just hit a route that doesn't exist :(
        </p>
        <p><button><a href="/">Return to the right path</a></button></p>
      </div>
      <Footer />
    </section>

    <Copyright />
  </Layout>
)

export default NotFoundPage
