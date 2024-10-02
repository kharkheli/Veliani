/** @type {import('next').NextConfig} */
import translations from './next-i18next.config.mjs'
const nextConfig = {
  reactStrictMode: true,
  i18n: translations.i8n
};

export default nextConfig;
