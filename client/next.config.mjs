/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [process.env.NEXT_PUBLIC_SUPABASE_STORAGE_DOMAIN],
  },
};

export default nextConfig;
