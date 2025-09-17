// https://lucide.dev/icons/shield-alert?search=governance
import * as LucideIcons from "lucide-react";

export default function Keypoint() {
    return (
        <section className="keypoint" id="keypoint">
            {/* <h2><mark>Punti chiave</mark></h2> */}
            <article className="text-first">
                <main>
                    <h3><LucideIcons.Activity /> <mark>Monitoraggio continuo</mark> degli asset</h3>
                    <p>Per rafforzare la protezione aziendale, è essenziale raccogliere dati e metriche dall'infrastruttura.
                        La centralizzazione della telemetria da endpoint e server consente maggiore visibilità e reattività,
                        mentre l'automazione delle azioni operative ottimizza la gestione e riduce i rischi:
                        un approccio strategico che migliora la sicurezza e crea nuove opportunità di crescita.</p>
                </main>
                <figure class="media monitoring" alt="Monitoraggio continuo degli asset">
                </figure>
            </article>
            <article className="image-first">
                <main>
                    <h3><LucideIcons.ShieldCheck /> <mark>Sicurezza</mark> informatica</h3>
                    <p>Proteggere i dati e garantire la continuità operativa è una sfida sempre più complessa per le imprese.
                        Attacchi mirati possono compromettere sistemi e informazioni riservate, con conseguenze su efficienza e reputazione.
                        Implementare un processo di security equivale non solo a difendersi, ma anche mantenere il controllo
                        dei propri sistemi e affrontare il futuro con maggiore serenità.</p>
                </main>
                <figure class="media security" alt="Sicurezza informatica">
                </figure>
            </article>
            <article className="text-first">
                <main>
                    <h3><LucideIcons.Cpu /> <mark>Sviluppo</mark> tecnologico</h3>
                    <p>Supportare l'evoluzione digitale richiede infrastrutture robuste, affidabili e integrate,
                        in grado di adattarsi a scenari complessi e sostenere la crescita aziendale. Soluzioni scalabili migliorano
                        produttività ed efficienza, riducendo rischi e costi operativi. Investire nello sviluppo tecnologico
                        significa consolidare la resilienza aziendale garantendo sicurezza e competitività.</p>
                </main>
                <figure class="media technology" alt="Sviluppo tecnologico">
                </figure>
            </article>
            <article className="image-first">
                <main>
                    <h3><LucideIcons.Code2 />  <mark>Open Source</mark> e trasparenza</h3>
                    <p>La scelta di tecnologie Open Source offre libertà e indipendenza, evitando costosi lock-in e
                        garantendo pieno controllo sull'infrastruttura. L'approccio aperto e trasparente consente di ottimizzare
                        processi, ridurre la complessità e favorire l'innovazione continua. Un modello sostenibile che rafforza
                        la fiducia e abilita nuove opportunità di crescita in sempre nuovi scenari.</p>
                </main>
                <figure class="media open-source" alt="Open Source e trasparenza">
                </figure>
            </article>
        </section>
    );
}
