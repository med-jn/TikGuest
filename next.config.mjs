/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  // Clean Arabic (default language) URLs: /, /regles, /conditions, /privacy, /delete-account
  // The French and English versions live under /fr/... and /en/...
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/", destination: "/ar" },
        { source: "/regles", destination: "/ar/regles" },
        { source: "/conditions", destination: "/ar/conditions" },
        { source: "/privacy", destination: "/ar/privacy" },
        { source: "/delete-account", destination: "/ar/delete-account" },
      ],
    };
  },
  async redirects() {
    return [
      // /ar/... is the same page as /... : keep one canonical URL
      { source: "/ar", destination: "/", permanent: true },
      { source: "/ar/:path+", destination: "/:path+", permanent: true },
      // common aliases
      { source: "/terms", destination: "/conditions", permanent: true },
      { source: "/rules", destination: "/regles", permanent: true },
      { source: "/privacy-policy", destination: "/privacy", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
        ],
      },
    ];
  },
};
export default nextConfig;
