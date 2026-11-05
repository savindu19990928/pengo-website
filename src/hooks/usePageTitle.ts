import { useEffect } from 'react';

export function usePageTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} | Pengo` : 'Pengo — Elevate Your Digital Experience';
  }, [title]);
}