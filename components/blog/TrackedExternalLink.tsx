"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { trackCtaEvent, type CtaEventName } from "@/lib/tracking";

type TrackedExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  trackingEvent: CtaEventName;
  trackingDestination: string;
};

export default function TrackedExternalLink({
  children,
  trackingEvent,
  trackingDestination,
  ...props
}: TrackedExternalLinkProps) {
  return (
    <a
      {...props}
      onClick={() => trackCtaEvent(trackingEvent, trackingDestination)}
      data-track-event={trackingEvent}
    >
      {children}
    </a>
  );
}
