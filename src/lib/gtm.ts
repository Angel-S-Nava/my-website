// src/lib/gtm.ts
export type DataLayerEvent = {
  // evento común (opcional)
  event?: string;

  // pageview common fields
  page_path?: string;
  page_title?: string;
  page_location?: string;

  // debug flag (GA4 DebugView)
  debug_mode?: boolean;

  // you can add other typical fields you will push
  // avoid storing GTM ID here — keep it in env/snippet
  [key: string]: unknown;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

/**
 * Ensures dataLayer exists and pushes a typed event object.
 */
export function pushToDataLayer(evt: DataLayerEvent): void {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(evt);

  // handy debug during development (no ruido en production)
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next
    console.debug('[dataLayer.push]', evt);
  }
}

/**
 * Convenience: push a normalized page_view event.
 * Use this from your Analytics client component.
 */
export function pushPageView(opts: {
  page_path: string;
  page_title?: string;
  page_location?: string;
  debug_mode?: boolean;
}) {
  pushToDataLayer({
    event: 'page_view',
    page_path: opts.page_path,
    page_title: opts.page_title,
    page_location: opts.page_location,
    ...(opts.debug_mode ? { debug_mode: true } : {}),
  });
}
