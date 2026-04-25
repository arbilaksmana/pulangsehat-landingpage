"use client";

import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useEffect } from "react";
import type { TrackEventPayload } from "@/lib/tracking";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

const clarityProjectId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

function sanitizeEventName(value: string) {
  return value.replace(/[^a-zA-Z0-9_]/g, "_").slice(0, 40);
}

function GoogleAnalyticsEvents() {
  useEffect(() => {
    const handleTrackingEvent = (event: Event) => {
      const payload = (event as CustomEvent<TrackEventPayload>).detail;

      if (!payload || typeof window.gtag !== "function") {
        return;
      }

      window.gtag("event", sanitizeEventName(payload.label), {
        event_category: payload.category,
        event_label: payload.destination,
        action: payload.action,
      });
    };

    window.addEventListener("pulangsehat:tracking", handleTrackingEvent as EventListener);

    return () => {
      window.removeEventListener("pulangsehat:tracking", handleTrackingEvent as EventListener);
    };
  }, []);

  return null;
}

export default function FreeAnalytics() {
  return (
    <>
      <Analytics />
      <SpeedInsights />

      {clarityProjectId ? (
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "${clarityProjectId}");`}
        </Script>
      ) : null}

      {gaMeasurementId ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaMeasurementId}');`}
          </Script>
          <GoogleAnalyticsEvents />
        </>
      ) : null}
    </>
  );
}
