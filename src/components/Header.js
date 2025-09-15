'use client';

import {usePathname} from 'next/navigation'
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const pathname = usePathname()
  
  var headerClassName = 'container';
  if (pathname === '/kb') {
    headerClassName = headerClassName + ' is-fixed'
  }

  return (
    <header className={headerClassName}>
      <nav>
        <ul>
          <li>
            <Link href="/" aria-label="Rooters homepage" className="contrast">
              <Image src="/img/logo.svg" alt="Rooters" width={250} height={60} />
            </Link>
          </li>
        </ul>
        {/* <ul>
          <li><a href="#" className="contrast">Blog</a></li>
        </ul> */}
      </nav>
    </header>
  );
}
