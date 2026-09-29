const TRACKING_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "src",
  "sck",
];
const STORAGE_KEY = "checkout_tracking_params";

function readStored(): Record<string, string> {
  try {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function currentTracking(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const search = new URLSearchParams(window.location.search);
  const found: Record<string, string> = {};
  for (const key of TRACKING_KEYS) {
    const value = search.get(key);
    if (value) found[key] = value;
  }
  // Guarda os parâmetros da entrada para não perdê-los se a URL mudar.
  const merged = { ...readStored(), ...found };
  if (Object.keys(found).length) {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
    } catch {
      /* storage indisponível */
    }
  }
  return merged;
}

/** Retorna a URL do checkout com UTMs, src e sck da página atual. */
export function buildCheckoutUrl(base: string): string {
  const url = new URL(base);
  for (const [key, value] of Object.entries(currentTracking())) {
    url.searchParams.set(key, value);
  }
  return url.toString();
}
