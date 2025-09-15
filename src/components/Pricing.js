export default function Pricing() {
  return (
    <section className="pricing">
        <hgroup>
            <h2>Scegli il piano pi&ugrave; <br /><mark>adatto alle tue esigenze</mark></h2>
            <p>Tutti i nostri piani dispongono di un volume di e-mail illimitato</p>
        </hgroup>
        <div className="grid">
            <article>
                <h3><mark>SMALL</mark></h3>
                <ul>
                    <li>1 dominio</li>
                    <li>Volume e-mail illimitato</li>
                    <li>Supporto via ticket alla configurazione</li>
                    <li>Report mensili</li>
                </ul>
                <footer>
                    <div className="grid price">
                        <a role="button" className="contrast" data-discover="true" href="/examples">19.99€ / mese</a>
                    </div>
                </footer>
            </article>
            <article>
                <h3><mark>MEDIUM</mark></h3>
                <ul>
                    <li>Fino a 5 domini</li>
                    <li>Volume e-mail illimitato</li>
                    <li>Supporto face-to-face alla configurazione</li>
                    <li>Supporto via ticket</li>
                    <li>Report mensili</li>
                </ul>
                <footer>
                    <div className="grid price">
                        <a role="button" className="contrast" data-discover="true" href="/examples">39.99€ / mese</a>
                    </div>
                </footer>
            </article>
            <article>
                <h3><mark>LARGE</mark></h3>
                <ul>
                    <li>10 domini inclusi</li>
                    <li>Domini extra</li>
                    <li>Volume e-mail illimitato</li>
                    <li>Supporto face-to-face alla configurazione</li>
                    <li>Supporto via ticket</li>
                    <li>Report mensili</li>
                    <li>Alert in tempo reale</li>
                    <li>Webhook</li>
                </ul>
                <footer>
                    <div className="grid price">
                        <a role="button" className="contrast" data-discover="true" href="/examples">59.99€ / mese<br />
                            <span>pacchetti di 5 domini extra a 14.99€</span></a>
                    </div>
                </footer>
            </article>
        </div>

    </section>
  );
}
