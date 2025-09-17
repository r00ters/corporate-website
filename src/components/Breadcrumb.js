import Link from 'next/link';

export default function Breadcrumb({ items = [] }) {
    if (!items.length) {
        return null;
    }

    return (
        <nav aria-label="breadcrumb" className="breadcrumb">
            <ul>
                {items.map(({ label, href }, index) => {
                    const isCurrent = index === items.length - 1;
                    const key = href ?? `${label}-${index}`;

                    return (
                        <li key={key} aria-current={isCurrent ? 'page' : undefined}>
                            {href && !isCurrent ? (
                                <Link href={href}>{label}</Link>
                            ) : (
                                label
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
