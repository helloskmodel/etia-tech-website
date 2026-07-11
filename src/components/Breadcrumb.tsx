'use client';

import Link from 'next/link';

interface BreadcrumbItem {
  name: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  theme?: 'blue' | 'purple' | 'default';
}

export default function Breadcrumb({ items, theme = 'default' }: BreadcrumbProps) {
  const linkColor = theme === 'blue' ? 'hover:text-blue-600' : 
                    theme === 'purple' ? 'hover:text-purple-600' : 
                    'hover:text-slate-900';

  return (
    <nav className="text-sm text-slate-500 mb-6">
      <Link href="/" className={linkColor}>首页</Link>
      {items.map((item, index) => (
        <span key={index}>
          {' / '}
          {item.href ? (
            <Link href={item.href} className={linkColor}>{item.name}</Link>
          ) : (
            <span className="text-slate-700">{item.name}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
