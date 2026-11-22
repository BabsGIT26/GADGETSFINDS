import { permanentRedirect } from "next/navigation";

// Merged into /best-graphics-cards-2026#rtx-5090 in Nov 2026. next.config.mjs also sends a 301 for this path.
export default function Page() {
  permanentRedirect("/best-graphics-cards-2026#rtx-5090");
}
