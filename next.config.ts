import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  outputFileTracingExcludes: {
    "*": ["./drd-v2/**", "./ocura-landing/**", "./reference-doc/**", "./images/**"],
  },
};

export default nextConfig;
