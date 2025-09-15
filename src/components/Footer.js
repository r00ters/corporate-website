import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
        <div className="container">
            <section>
                <nav className="links">
                    <ul>
                        <li><strong>ROOTERS SRLS</strong></li>
                        <li>Z.I. Pezzapiana, snc</li>
                        <li>82100 Benevento (BN)</li>
                        <li>PIVA: 1785300623</li>
                        <li>REA: BN-148134</li>
                        <li>SDI: KRRH6B9</li>
                    </ul>
                    <ul>
                        <li><strong>Contatti</strong></li>
                        <li><Link className="secondary" data-discover="true" href="mailto:sales@rooters.it">sales@rooters.it</Link></li>
                        <li><Link className="secondary" data-discover="true" href="/B20EA48B.asc">PGP: 0xB20EA48B</Link></li>
                    </ul>
                    <ul>
                        <li><strong>Link veloci</strong></li>
                        <li><Link className="secondary" href="https://msp.rooters.it/">Portale MSP</Link></li>
                        <li><Link className="secondary" href="https://cloudgz.gravityzone.bitdefender.com/">Bitdefender</Link></li>
                    </ul>
                    {/* <ul>
                        <li><strong>Press</strong></li>
                        <li><Link className="secondary" href="/blog/">Blog</Link></li>
                    </ul> */}
                </nav>
            </section>
            <section>
                <p>Website code licensed CC BY-SA 4.0.</p>
            </section>
        </div>
    </footer>
  );
}
