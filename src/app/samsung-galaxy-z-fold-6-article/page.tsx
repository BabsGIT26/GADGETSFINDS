import { permanentRedirect } from "next/navigation";

// Merged into /best-foldable-phones-2026#older-models in Nov 2026. next.config.mjs also sends a 301 for this path.
export default function Page() {
  permanentRedirect("/best-foldable-phones-2026#older-models");
}
