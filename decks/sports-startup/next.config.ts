import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  outputFileTracingExcludes: {
    "*": ["./reference/**", "./raw-images/**"],
  },
};

export default nextConfig;
