import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
  // Add an incremental cache (R2 / KV / D1) here later if you need
  // ISR / `revalidate` / the Next.js Data Cache. Static pages work without it.
});
