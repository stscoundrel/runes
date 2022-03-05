const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV !== 'production',
  },
  swcMinify: true,
  sassOptions: {
    prependData: `
        @import 'styles/variables';
        @import 'styles/media-queries';
        @import 'styles/rem';
      `,
  },
})
