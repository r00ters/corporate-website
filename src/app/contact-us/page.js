import ContactForm from '@/components/ContactForm';
import Breadcrumb from '@/components/Breadcrumb';

export const dynamic = 'force-static';

export default function ContactUs() {

    return (
        <>
            <header className="container-fluid page header contact-us">
                <h1><mark>Contattaci</mark></h1>
                <Breadcrumb
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Contatti' },
                    ]}
                />
            </header>
            <main className="page container full-width">
                <div className="grid" id="contact-form">
                    <ContactForm />
                </div>
            </main>
        </>
    );
}
