import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from 'lucide-react';

export type Crumb = {label: string;to?: string;};

export function Breadcrumbs({ items }: {items: Crumb[];}) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-icegrey">
        {items.map((crumb, i) =>
        <li key={crumb.label} className="flex items-center gap-2">
            {i > 0 && <ChevronRightIcon aria-hidden="true" className="h-3.5 w-3.5 text-icegrey/50" />}
            {crumb.to ?
          <Link to={crumb.to} className="transition-colors duration-200 hover:text-snow">
                {crumb.label}
              </Link> :

          <span aria-current="page" className="text-snow">
                {crumb.label}
              </span>
          }
          </li>
        )}
      </ol>
    </nav>);

}