'use client';

import { Menu } from "lucide-react";
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const NAVIGATION = [
  { label: 'Home', href: '/' },
  // {
  //   label: 'Servizi',
  //   items: [
  //     { label: 'MSP', href: '#' },
  //     { label: 'Backup 365', href: '#' },
  //     { label: 'MailShield', href: '#' },
  //   ],
  // },
  // {
  //   label: 'Cybersecurity',
  //   items: [
  //     { label: 'Vulnerability Assessment', href: '/cybersecurity/vulnerability-assessment' },
  //     { label: 'Network Penetration Test', href: '#' },
  //     { label: 'Web Application Penetration Test', href: '#' },
  //     { label: 'Mobile Application Security Testing', href: '#' },
  //   ],
  // },
  // { label: 'Blog', href: '#' },
];

export default function Header() {
  const pathname = usePathname();

  const headerClassName = pathname === '/kb'
    ? 'container site-header is-fixed'
    : 'container site-header';

  return (
    <header className={headerClassName}>
      <div className="site-header__inner">
        <Link href="/" aria-label="Rooters homepage" className="site-logo">
          <Image src="/img/logo.svg" alt="Rooters" width={250} height={60} />
        </Link>
        <input
          type="checkbox"
          id="menu-toggle"
          className="menu-checkbox"
          aria-label="Apri il menu"
        />
        <label htmlFor="menu-toggle" className="menu-toggle">
          <Menu aria-hidden="true" />
          <span className="sr-only">Apri il menu</span>
        </label>
        <nav
          id="primary-navigation"
          className="site-nav"
          aria-label="Navigazione principale"
        >
          <ul>
            {NAVIGATION.map((item) => (
              <li key={item.label}>
                {'items' in item ? (
                  <>
                    <details className="dropdown desktop">
                      <summary className="contrast" aria-haspopup="true">
                        {item.label}
                      </summary>
                      <ul>
                        {item.items.map((subItem) => (
                          <li key={subItem.label}>
                            <Link href={subItem.href}>{subItem.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                    <div className="dropdown mobile">
                      <p className="contrast dropdown-label">{item.label}</p>
                      <ul>
                        {item.items.map((subItem) => (
                          <li key={subItem.label}>
                            <Link href={subItem.href}>{subItem.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link href={item.href} className="contrast">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
