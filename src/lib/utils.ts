import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isInViewport(element: Element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= 0 && // Top of section has reached or passed the top of the viewport
    rect.bottom >= 0 // Bottom of section is still within or past the bottom of the viewport
  );
}

export function detectBrowser() {
  const userAgent = window.navigator.userAgent;
  if (userAgent.indexOf("Opera") || userAgent.indexOf("OPR") != -1) {
    return "Opera";
  } else if (userAgent.indexOf("Edg") != -1) {
    return "Edge";
  } else if (userAgent.indexOf("Chrome") != -1) {
    return "Chrome";
  } else if (userAgent.indexOf("Safari") != -1) {
    return "Safari";
  } else if (userAgent.indexOf("Firefox") != -1) {
    return "Firefox";
  } else {
    return "Unknown";
  }
}

export function normalizeLink(url?: string | null) {
  if (!url) return null;

  try {
    const parsed = new URL(url);
    const isInternal = parsed.hostname === import.meta.env.VITE_WP_SITE_HOST;

    return {
      href: isInternal ? parsed.pathname : parsed.href,
      external: !isInternal,
    };
  } catch {
    return { href: url, external: false };
  }
}
