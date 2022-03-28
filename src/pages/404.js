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
        <pre>
          <code>
            #0 [ffffa67440b23ba0] machine_kexec at ffffffffa0c53f68{'\n'}
            #1 [ffffa67440b23bf8] __crash_kexec at ffffffffa0d086d1{'\n'}
            #2 [ffffa67440b23cb8] crash_kexec at ffffffffa0d08738{'\n'}
            #3 [ffffa67440b23cd0] oops_end at ffffffffa0c298b3{'\n'}
            #4 [ffffa67440b23cf0] no_context at ffffffffa0c619b1{'\n'}
            #5 [ffffa67440b23d50] __do_page_fault at ffffffffa0c62476{'\n'}
            #6 [ffffa67440b23dc0] page_fault at ffffffffa121a618{'\n'}
            {'    '}[exception RIP: sysrq_handle_crash+18]{'\n'}
            {'    '}RIP: ffffffffa102be62  RSP: ffffa67440b23e78  RFLAGS: 00010282{'\n'}
            {'    '}RAX: ffffffffa102be50  RBX: 0000000000000063  RCX: 0000000000000000{'\n'}
            {'    '}RDX: 0000000000000000  RSI: ffff88e69fd10648  RDI: 0000000000000063{'\n'}
            {'    '}RBP: ffffffffa18bf320   R8: 0000000000000001   R9: 0000000000007eb8{'\n'}
            {'    '}R10: 0000000000000001  R11: 0000000000000001  R12: 0000000000000004{'\n'}
            {'    '}R13: 0000000000000000  R14: 0000000000000000  R15: 0000000000000000{'\n'}
            {'    '}ORIG_RAX: ffffffffffffffff  CS: 0010  SS: 0018
        </code>
      </pre>
        <p><button><a href="/">Return to the right path</a></button></p>
      </div>
      <Footer />
    </section>

    <Copyright />
  </Layout>
)

export default NotFoundPage
