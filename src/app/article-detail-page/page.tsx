import { permanentRedirect } from "next/navigation";

// Merged into / in Nov 2026. next.config.mjs also sends a 301 for this path.
export default function Page() {
  permanentRedirect("/");
}
