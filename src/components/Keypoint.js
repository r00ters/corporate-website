// https://lucide.dev/icons/shield-alert?search=governance
import * as LucideIcons from "lucide-react";

export default function Keypoint() {
  return (
 <section className="keypoint">
        <div className="grid claim">
            <article>
                <h3><LucideIcons.HandFist /> Solidità digitale</h3>
                <p>Aiutiamo il tuo business a evolversi in un mondo sempre più connesso, costruendo infrastrutture robuste, affidabili e interoperabili.</p>
            </article>
            <article>
                <h3><LucideIcons.ShieldCheck /> Protezione senza compromessi</h3>
                <p>Identifichiamo i rischi, miglioriamo le tue difese, monitoriamo i tuoi asset e li proteggiamo dagli attacchi informatici.</p>
            </article>
            <article>
                <h3><LucideIcons.Code2 /> Open Source e trasparenza</h3>
                <p>Amiamo i computer, l’hacking e crediamo nella libertà, ti evitiamo fastidiosi lock-in adottando soluzioni Open Source.</p>
            </article>
            
        </div>
        <div className="grid main">
            <div className="grid">
                <article>
                    <img src="/img/security.png" alt="Sicurezza informatica" />
                </article>
                <article>
                    <h3><mark>Sicurezza informatica</mark>, una necessità</h3>
                    <p>Proteggere i dati e garantire la continuità operativa è una sfida sempre più complessa per le imprese. Minacce sofisticate possono compromettere sistemi e informazioni sensibili, con impatti su produttività e reputazione. Adottare soluzioni avanzate significa non solo difendersi, ma anche mantenere il controllo e affrontare il futuro digitale con maggiore sicurezza.</p>
                </article>
            </div>
        </div>
        <div className="grid main">
            <div className="grid">
                <article>
                    <h3><mark>Monitoraggio continuo</mark> degli asset</h3>
                    <p>Per rafforzare la protezione aziendale, è essenziale un’infrastruttura connessa e reattiva. L’integrazione tra sistemi assicura un flusso di lavoro fluido e un controllo più efficace, mentre l’automazione semplifica la gestione e riduce il margine di errore. Un approccio strategico che migliora la sicurezza e crea nuove opportunità di crescita.</p>
                </article>
                <article>
                    <img src="/img/monitoring.png" alt="Monitoraggio degli asset" />
                </article>
            </div>
        </div>
    </section>
  );
}
