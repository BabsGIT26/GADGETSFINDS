import { permanentRedirect } from "next/navigation";

// Merged into /best-ps5-accessories-2026#dualsense in Nov 2026. next.config.mjs also sends a 301 for this path.
export default function Page() {
  permanentRedirect("/best-ps5-accessories-2026#dualsense");
}
