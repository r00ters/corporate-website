'use client';

import { useEffect, useRef } from 'react';
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
  {
    label: 'Cybersecurity',
    items: [
      { label: 'Vulnerability Assessment', href: '/cybersecurity/vulnerability-assessment' },
      { label: 'Network Penetration Test', href: '/cybersecurity/network-penetration-test' },
      { label: 'Web Application Penetration Test', href: '/cybersecurity/web-application-penetration-test' },
      { label: 'Mobile Application Security Testing', href: '/cybersecurity/mobile-application-security-testing' },
    ],
  },
  // { label: 'Blog', href: '#' },
  { label: 'Contatti', href: '/contact-us' },
];

export default function Header() {
  const pathname = usePathname();
  const toggleRef = useRef(null);

  useEffect(() => {
    if (toggleRef.current) {
      toggleRef.current.checked = false;
    }
  }, [pathname]);

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
          ref={toggleRef}
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
                      <summary className="" aria-haspopup="true">
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
                      <p className="dropdown-label">{item.label}</p>
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
                  <Link href={item.href} className="">
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
