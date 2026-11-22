import { permanentRedirect } from "next/navigation";

// Merged into /best-phones-2026#galaxy-s26-ultra in Nov 2026. next.config.mjs also sends a 301 for this path.
export default function Page() {
  permanentRedirect("/best-phones-2026#galaxy-s26-ultra");
}
