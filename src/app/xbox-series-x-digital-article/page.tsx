import { permanentRedirect } from "next/navigation";

// Merged into /best-gaming-consoles-2026#xbox-series-x-digital in Nov 2026. next.config.mjs also sends a 301 for this path.
export default function Page() {
  permanentRedirect("/best-gaming-consoles-2026#xbox-series-x-digital");
}
