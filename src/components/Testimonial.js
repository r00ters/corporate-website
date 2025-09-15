// https://lucide.dev/icons/shield-alert?search=governance
import * as LucideIcons from "lucide-react";

export default function Testimonial() {
  return (

          <section class="testimonial">
            <div className="grid">
              <article>
                  <LucideIcons.MessageSquareQuote />
                  <p>Rooters è un partner strategico nella continua crescita digitale della nostra azienda. Il loro supporto, preciso ed efficace, ci ha permesso di ottenere la certificazione TPN (Trusted Partner Network) indispensabile nel mercato media e entertainment. Con la loro gestione dell'infrastruttura IT abbiamo ottimizzato i nostri flussi operativi e ridotto gli incidenti.</p>
                  <div className="testimonial-picture">
                      <img src="/img/testimonial-1.png" alt="Claudio Angeletti - CEO, VSI Group" />
                      <h4>Claudio Angeletti</h4>
                      <mark>CEO, VSI Italia</mark>
                  </div>
              </article>
              <article>
                  <LucideIcons.MessageSquareQuote />
                  <p>Collaborare con Rooters è stata un'esperienza eccezionale. La loro competenza tecnica ha svolto un ruolo cruciale nella realizzazione di un progetto ambizioso che ha permesso a Consulsat di compiere un passo fondamentale, migliorando significativamente la qualità dei propri servizi. Grazie al loro supporto, il nostro Autonomous System fornisce oggi ai nostri clienti un accesso internet indipendente.</p>
                  <div className="testimonial-picture">
                      <img src="/img/testimonial-2.png" alt="Antonella Oliviero - CEO, Consulsat" />
                      <h4>Antonella Oliviero</h4>
                      <mark>CEO, Consulsat</mark>
                  </div>
              </article>
              <article>
                  <LucideIcons.MessageSquareQuote />
                  <p>Per Ebagil affidarsi a Rooters ha significato investire nella propria evoluzione tecnologica. La loro consulenza ci ha guidato nello sviluppo di progetti all’avanguardia, dalla gestione dei server e dello storage all’implementazione di soluzioni per l’Industria 4.0. Grazie alla loro professionalità, possiamo oggi vantare un modern workplace efficiente e di gran lunga più sicuro.</p>
                  <div className="testimonial-picture">
                      <img src="/img/testimonial-3.png" alt="Vincenzo Benevento - CEO, Erbagil" />
                      <h4>Vincenzo Benevento</h4>
                      <mark>CEO, Erbagil</mark>
                  </div>
              </article>
              
              </div>
          </section> 

  );
}
