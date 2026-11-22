import { permanentRedirect } from "next/navigation";

// Merged into /best-macbooks-2026#macbook-pro-14-m5 in Nov 2026. next.config.mjs also sends a 301 for this path.
export default function Page() {
  permanentRedirect("/best-macbooks-2026#macbook-pro-14-m5");
}
