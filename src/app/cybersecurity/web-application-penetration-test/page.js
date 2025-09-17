import Image from 'next/image';
import Link from 'next/link';
import { CircleCheckBig } from "lucide-react";
import Breadcrumb from '@/components/Breadcrumb';

export default function PageWebApplicationPenetrationTest() {
    const assessmentSteps = [
        "Identifichiamo e classifichiamo le falle di sicurezza, come SQL Injection e Cross-Site Scripting, riducendo i rischi di attacco.",
        "Eseguiamo test mirati per verificare la resistenza delle applicazioni contro exploit e tecniche di hacking avanzate.",
        "Controlliamo le impostazioni di sicurezza di server e database per eliminare configurazioni errate e punti deboli.",
        "Forniamo un'analisi dettagliata con soluzioni concrete per rafforzare la sicurezza delle tue applicazioni web."
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
            <header className="container-fluid page header web-application-penetration-test">
                <h1><mark>Web Application Penetration Test</mark></h1>
                <Breadcrumb
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Cyber Security', href: '#' },
                        { label: 'WAPT' },
                    ]}
                />
            </header>
            <main className="page container">
                <div className="grid">
                    <article className="page-content">
                        <h2>Applicazioni web impenetrabili</h2>
                        <p>Il Web Application Penetration Testing è un'attività svolta per identificare vulnerabilità nei siti e nelle applicazioni web. Con il nostro partner ISGroup, e grazie ai nostri professionisti qualificati, simuliamo attacchi reali per analizzare falle di sicurezza, proteggere i dati sensibili e rafforzare le difese della tua azienda contro le minacce informatiche.</p>

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
