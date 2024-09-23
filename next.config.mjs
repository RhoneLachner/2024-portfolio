/** @type {import('next').NextConfig} */
const nextConfig = {

  async headers() {
    return [
      {
        source: '/fonts/:font*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
          },
          {
            key: 'Link',
            value:
              '</fonts/Montserrat-Regular.woff2>; rel=preload; as=font; type="font/woff2"; crossorigin="anonymous"',
          },
          {
            key: 'Link',
            value:
              '</fonts/Hyperbola.woff2>; rel=preload; as=font; type="font/woff2"; crossorigin="anonymous"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
