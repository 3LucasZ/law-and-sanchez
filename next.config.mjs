/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath:"/my-site",
    images: {
        unoptimized: true
    }
};

export default nextConfig;
