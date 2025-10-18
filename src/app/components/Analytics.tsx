// src/app/components/Analytics.tsx
'use client';
import { usePathname } from 'next/navigation';
import { useEffect, JSX } from 'react';
import { pushPageView } from '@/lib/gtm';

export default function Analytics(): JSX.Element {
  const pathname = usePathname() ?? '/';

  useEffect(() => {
    // don't reference process.env in hook body during SSR — it's safe in client
    const isDev = process.env.NODE_ENV === 'development';

    pushPageView({
      page_path: pathname,
      page_title: document.title || undefined,
      page_location: window.location.href,
      debug_mode: isDev, // solo true en dev para DebugView
    });
  }, [pathname]);

  return <></>;
}
