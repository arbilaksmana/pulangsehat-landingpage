"use client";

import Link, { type LinkProps } from "next/link";
import type { ReactNode } from "react";
import { trackCtaEvent, type CtaEventName } from "@/lib/tracking";

type TrackedBlogLinkProps = LinkProps & {
  children: ReactNode;
  className?: string;
  trackingEvent: CtaEventName;
  trackingDestination: string;
};

export default function TrackedBlogLink({
  children,
  className,
  trackingEvent,
  trackingDestination,
  ...props
}: TrackedBlogLinkProps) {
  return (
    <Link
      {...props}
      className={className}
      onClick={() => trackCtaEvent(trackingEvent, trackingDestination)}
      data-track-event={trackingEvent}
    >
      {children}
    </Link>
  );
}
