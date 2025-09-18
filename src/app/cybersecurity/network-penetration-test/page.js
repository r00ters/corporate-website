import Image from 'next/image';
import Link from 'next/link';
import { CircleCheckBig } from "lucide-react";
import Breadcrumb from '@/components/Breadcrumb';

export default function PageNetworkPenetrationTest() {
    const assessmentSteps = [
        "Valutazione delle vulnerabilità e analisi approfondita per individuare punti deboli nelle infrastrutture di rete.",
        "Simulazione di attacchi con test pratici per verificare la capacità della rete di resistere a tentativi di intrusione." ,
        "Analisi delle configurazioni e verifica delle impostazioni per garantire l'adozione delle migliori pratiche di sicurezza.",
        "Raccomandazioni e fornitura di linee guida per mitigare le vulnerabilità identificate e rafforzare la sicurezza complessiva della rete."
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
            <header className="container-fluid page header network-penetration-test">
                <h1><mark>Network Penetration Test</mark></h1>
                <Breadcrumb
                    items={[
                        { label: 'Home', href: '/' },
                        { label: 'Cybersecurity', href: '#' },
                        { label: 'NPT' },
                    ]}
                />
            </header>
            <main className="page container">
                <div className="grid">
                    <article className="page-content">
                        <h2>Mettiamo alla prova la tua rete</h2>
                        <p>Rooters, in collaborazione con ISGroup, offre servizi di Network Penetration Testing per valutare e rafforzare la sicurezza delle reti aziendali. Questo servizio identifica vulnerabilità potenziali attraverso simulazioni di attacchi informatici, consentendo alle organizzazioni di migliorare le proprie difese e prevenire accessi non autorizzati.</p>

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
