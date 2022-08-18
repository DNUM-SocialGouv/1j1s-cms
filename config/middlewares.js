module.exports = [
  'strapi::errors',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          'img-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', process.env.MINIO_ENDPOINT],
          'media-src': ["'self'", 'data:', 'blob:', 'dl.airtable.com', process.env.MINIO_ENDPOINT],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::body',
    config: {
      jsonLimit: '20mb',
    },
  },
];
