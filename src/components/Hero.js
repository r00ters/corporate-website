import Link from 'next/link';
import * as LucideIcons from "lucide-react";

export default function Hero() {
  return (

        <section className="hero">
            <div className="hook">
                <h1><mark>Proteggi il tuo business</mark></h1>
                <p className="secondary">Dalla sicurezza informatica all'integrazione tecnologica,
                siamo il tuo alleato nel monitorare, proteggere e ottimizzare
                il tuo ecosistema IT.</p>
                <p className="arrow"><Link href="#keypoint"><LucideIcons.CircleArrowDown  size={50} absoluteStrokeWidth /></Link></p>
            </div>
        </section>

  );
}
