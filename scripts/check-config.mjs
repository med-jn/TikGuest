// Runs before `next build`. Warns (does not fail) when legal-page settings are missing.
const missing = [];
if (!process.env.NEXT_PUBLIC_CONTACT_EMAIL) missing.push("NEXT_PUBLIC_CONTACT_EMAIL");
if (!process.env.NEXT_PUBLIC_DEVELOPER_NAME) missing.push("NEXT_PUBLIC_DEVELOPER_NAME");
if (missing.length) {
  console.warn(
    "\n\x1b[33m⚠  TikGuest: missing env vars -> " + missing.join(", ") +
      "\n   The legal pages will show a placeholder. Set them in Vercel (Settings -> Environment Variables) and redeploy.\x1b[0m\n"
  );
}
