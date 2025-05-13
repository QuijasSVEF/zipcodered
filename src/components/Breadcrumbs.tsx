import React from 'react';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbsProps {
  items: Array<{
    label: string;
    href: string;
  }>;
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
      <ol className="flex items-center space-x-2 text-sm text-gray-600" itemScope itemType="https://schema.org/BreadcrumbList">
        {items.map((item, index) => (
          <li 
            key={item.href}
            className="flex items-center"
            itemScope
            itemType="https://schema.org/ListItem"
            itemProp="itemListElement"
          >
            {index > 0 && <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />}
            <a
              href={item.href}
              className={`hover:text-primary-dark transition-colors ${
                index === items.length - 1 ? 'font-semibold text-primary-dark' : ''
              }`}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
              }}
              itemProp="item"
            >
              <span itemProp="name">{item.label}</span>
            </a>
            <meta itemProp="position" content={String(index + 1)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}