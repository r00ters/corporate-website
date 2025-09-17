import Image from 'next/image';
import Link from 'next/link';
import { CircleCheckBig } from "lucide-react";
import Breadcrumb from '@/components/Breadcrumb';

export default function PageMobileApplicationSecurityTesting() {
    const assessmentSteps = [
        "Analizziamo il codice sorgente per individuare vulnerabilità che potrebbero essere sfruttate da attaccanti.",
        "Simuliamo attacchi con test di penetrazione per identificare e correggere debolezze dell'applicazione.",
        "Verifichiamo le interazioni tra l'app e i server per garantire la protezione dei dati durante il trasferimento.",
        "Analizziamo le librerie e i componenti di terze parti utilizzati nell'app per assicurare l'assenza di vulnerabilità."
    ];

    const certifications = [
        {
            src: "/img/iqnet_certification.svg",
            alt: "Certificazione IQNet",
            width: 269,
            height: 269,
        },
        {
            src: "/img/iso_iec_27001_2022_certification.png",
            alt: "Certificazione ISO/IEC 27001:2022",
            width: 227,
            height: 267,
        },
        {
            src: "/img/iso_iec_9001_2015_certification.png",
            alt: "Certificazione ISO/IEC 9001:2015",
            width: 226,
            height: 267,
        },
    ];

    return (
        <>
            <header className="container-fluid page header mobile-application-security-testing">
                <h1><mark>Mobile Application Security Testing</mark></h1>
                <Breadcrumb
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Cyber Security', href: '#' },
                        { label: 'Mobile Application Security Testing' },
                    ]}
                />
            </header>
            <main className="page container">
                <div className="grid">
                    <article className="page-content">
                        <h2>Applicazioni mobile più sicure</h2>
                        <p>Grazie alla nostra collaborazione con ISGroup, offriamo servizi di Mobile Application Security Testing per piattaforme iOS e Android. Questa attività identifica e risolve vulnerabilità nelle applicazioni sviluppate dalla tua azienda, garantendo la sicurezza dei dati e la fiducia degli utenti.</p>

                        <section aria-labelledby="process">
                            <h3 id="process">Come funziona?</h3>
                            <ul className="assessment-checklist">
                                {assessmentSteps.map((step) => (
                                    <li key={step}>
                                        <CircleCheckBig aria-hidden="true" />
                                        <p>{step}</p>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </article>
                    <aside className="page-sidebar">
                        <section aria-labelledby="contact-va">
                            <h3 id="contact-va">Per saperne di pi&ugrave;</h3>
                            <p>Parla con un nostro esperto per una consulenza gratuita.</p>
                            <Link href="/contact-us#contact-form" role="button" type="button">Contattaci</Link>
                        </section>
                        <figure className="partner-logo">
                            <Image src="/img/isgroup_white.png" alt="ISGroup" width={600} height={176} />
                            <figcaption>In collaborazione con ISGroup, leader italiano nella cybersecurity</figcaption>
                        </figure>
                        <section aria-labelledby="certificazioni">
                            <ul className="certifications">
                                {certifications.map(({ src, alt, width, height }) => (
                                    <li key={src}>
                                        <Image src={src} alt={alt} width={width} height={height} />
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </aside>
                </div>

            </main>
        </>
    );
}
