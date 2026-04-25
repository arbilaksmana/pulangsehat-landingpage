export const CTA_LINKS = {
  earlyAccess: process.env.NEXT_PUBLIC_EARLY_ACCESS_URL ?? "https://forms.gle/BDHUEGQA83ZTkpd37",
  earlyAccessInternal: "/api/early-access",
} as const;

export type CtaEventName =
  | "early_access_navbar_desktop"
  | "early_access_navbar_mobile"
  | "early_access_hero"
  | "early_access_cta_section"
  | "blog_featured_article_click"
  | "blog_article_card_click"
  | "blog_article_read_more_click"
  | "blog_article_back_to_index"
  | "blog_related_article_click"
  | "blog_article_early_access_click"
  | "contact_footer_submit";

export type TrackEventPayload = {
  event: string;
  category: string;
  action: string;
  label: string;
  destination?: string;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

const eventCatalog: Record<CtaEventName, Omit<TrackEventPayload, "destination">> = {
  early_access_navbar_desktop: {
    event: "cta_click",
    category: "conversion",
    action: "click",
    label: "early_access_navbar_desktop",
  },
  early_access_navbar_mobile: {
    event: "cta_click",
    category: "conversion",
    action: "click",
    label: "early_access_navbar_mobile",
  },
  early_access_hero: {
    event: "cta_click",
    category: "conversion",
    action: "click",
    label: "early_access_hero",
  },
  early_access_cta_section: {
    event: "cta_click",
    category: "conversion",
    action: "click",
    label: "early_access_cta_section",
  },
  blog_featured_article_click: {
    event: "blog_click",
    category: "content",
    action: "open_article",
    label: "blog_featured_article_click",
  },
  blog_article_card_click: {
    event: "blog_click",
    category: "content",
    action: "open_article",
    label: "blog_article_card_click",
  },
  blog_article_read_more_click: {
    event: "blog_click",
    category: "content",
    action: "read_more",
    label: "blog_article_read_more_click",
  },
  blog_article_back_to_index: {
    event: "blog_click",
    category: "content",
    action: "back_to_index",
    label: "blog_article_back_to_index",
  },
  blog_related_article_click: {
    event: "blog_click",
    category: "content",
    action: "open_related_article",
    label: "blog_related_article_click",
  },
  blog_article_early_access_click: {
    event: "cta_click",
    category: "conversion",
    action: "click",
    label: "blog_article_early_access_click",
  },
  contact_footer_submit: {
    event: "contact_submit",
    category: "engagement",
    action: "submit",
    label: "contact_footer_submit",
  },
};

export function trackCtaEvent(name: CtaEventName, destination?: string) {
  if (typeof window === "undefined") {
    return;
  }

  const payload: TrackEventPayload = {
    ...eventCatalog[name],
    destination,
  };

  window.dispatchEvent(
    new CustomEvent("pulangsehat:tracking", {
      detail: payload,
    })
  );

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(payload);
  }
}
