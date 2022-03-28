import React from 'react';

function Footer() {

    return (
      <footer>
        <ul className="items">
          <li>
            <span>
              Rooters s.r.l.s.<br />
              Z.I. Pezzapiana, snc<br />
              82100 Benevento (BN)<br />
              PIVA: 01785300623<br />
              REA: BN-148134<br />
              SDI: KRRH6B9<br />
            </span>
            <a href="mailto:sales@rooters.it">sales@rooters.it</a> <i className="icon solid fa-at"></i><br />
            <a href="tel://(+39) 0824 1717229">(+39) 0824 1717229</a> <i className="icon solid fa-phone"></i><br />
            <a href={'/B20EA48B.asc'}>PGP 0xB20EA48B</a> <i className="icon solid fa-key"></i><br />
          </li>
          <li>
            <h3>Elsewhere</h3>
            <ul className="icons">
              <li>
                <a href="https://twitter.com/rooters_it" className="icon brands fa-twitter">
                  <span className="label">Twitter</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/rooters-it" className="icon brands fa-linkedin-in">
                  <span className="label">LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/r00ters" className="icon brands fa-github">
                  <span className="label">GitHub</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </footer>
    );
}

export default Footer