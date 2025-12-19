const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/index.html',
        permanent: false, // set true if you want 308 permanent
      },
    ];
  },
};

export default nextConfig;
