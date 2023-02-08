// next.config.js
module.exports = {
    async rewrites() {
        return [
          {
            source: '/pages/api/:path*',
            destination: 'https://fullstack-vercel-sg-app-nextjs.vercel.app/:path*',
          },
        ]
      },
  };