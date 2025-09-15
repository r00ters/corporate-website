// https://lucide.dev/icons/shield-alert?search=governance
import * as LucideIcons from "lucide-react";

export default function Features() {
  return (
    <section className="features">
        {/* <h4><mark>Oltre 15 Anni di Esperienza</mark></h4> */}
        <div className="grid">
            <article>
                <LucideIcons.ServerCog />
                <h3>Managed Service Provider</h3>
                <p>Gestiamo e monitoriamo i tuoi sistemi IT per garantire continuità operativa, affidabilità, efficienza e sicurezza.</p>
            </article>
            <article>
                <LucideIcons.ShieldAlert />
                <h3>Cybersecurity</h3>
                <p>Difendiamo i tuoi asset e gestiamo le vulnerabilità e le minacce in antcipo rispetto ad attori malevoli.</p>
            </article>
            <article>
                <LucideIcons.Landmark />
                <h3>Governance &amp; Compliance</h3>
                <p>Ti affianchiamo nell'adeguamento alle normative, definendo policy strategiche per una gestione conforme e strutturata.</p>
            </article>
            <article>
                <LucideIcons.Blocks />
                <h3>System Integrator</h3>
                <p>Progettiamo architetture integrate per ambienti locali e cloud, favorendo scalabilità e interoperabilità illimitate.</p>
            </article>
            <article>
                <LucideIcons.Network />
                <h3>Carrier Grade Networking</h3>
                <p>Sviluppiamo reti avanzate, resilienti e performanti, assicurando connessioni stabili, sicure e senza interruzioni.</p>
            </article>
            <article>
                <LucideIcons.Brain />
                <h3>IA &amp; Software Automation</h3>
                <p>Implementiamo soluzioni basate sull'AI per ottimizzare i processi aziendali, riducendo errori e tempi di esecuzione.</p>
            </article>
        </div>
    </section>
  );
}
