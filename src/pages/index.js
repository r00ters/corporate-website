import React from 'react'
import pic01 from '../assets/img/pic01.jpg'
import logo from '../assets/img/logo.svg'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import Copyright from '../components/Copyright'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <section className="intro">
      <header>
        <img src={logo} alt="Rooters" height="200"/>
        <p>
          Your ultimate IT partner<br />
          from integration to security
        </p>
      </header>
      <div className="content">
        <span className="image fill" data-position="center">
          <img src={pic01} alt="" />
        </span>
      </div>
    </section>

    <section>
      <header>
        <h2>What we do</h2>
      </header>
      <div className="content">
        <p>
          <strong>Every business has an engine</strong>, and it takes a lot to
          run it. We can do that, and we can do plenty more. Join us and watch
          your business grow. No effort, no worries.
        </p>
        <ul className="feature-icons">
          <li className="icon solid fa-laptop">Hardware & Software distribution</li>
          <li className="icon solid fa-signal">On-Premises & Cloud solutions</li>
          <li className="icon solid fa-bolt">Data recovery & Secure delete</li>
          <li className="icon solid fa-cog">Security & Compliance</li>
          <li className="icon solid fa-map-marker-alt">Remote & On-site support</li>
          <li className="icon solid fa-code">Software automation</li>
        </ul>
      </div>
    </section>

    <section>
      <header>
        <h2>How we do it</h2>
      </header>
      <div className="content">
        <p>
          <strong>We have 15 years of experience</strong> behind us and when it
          comes to IT we are the best. That's why we can assist you 360 degrees
          without fear. We love computers, hacking and we trust in freedom, so
          our solutions are powered by Open Source, as much as possible, to
          avoid annoying lock-ins.
        </p>
        <p className="quote">
          <i className="icon solid fa-quote-left"></i>
            {' '}There are no secrets to success. It is the result of
            preparation, hard work and learning from failure.{' '}
          <i className="icon solid fa-quote-right"></i>
        </p>
      </div>
    </section>

    <section>
      <header>
        <h2>Get in touch</h2>
      </header>
      <div className="content">
        <p>
          <strong>How can we help?</strong> If you have any questions or
          queries, a member of staff will always be happy to help. Feel free to
          contact us.
        </p>
        <ContactForm />
      </div>
      <Footer />
    </section>

    <Copyright />
  </Layout>
)

export default IndexPage
