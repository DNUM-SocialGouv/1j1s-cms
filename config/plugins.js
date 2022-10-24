module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('MINIO_ACCESS_KEY'),
        endpoint: env('MINIO_ENDPOINT'),
        secretAccessKey: env('MINIO_SECRET_KEY'),
        s3ForcePathStyle: true,
        params: {
          Bucket: env('MINIO_BUCKET'),
        },
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
      jwt: {
        expiresIn: '1h'
      }
    },
  },
  'import-export-entries': {
    enabled: true,
  },
  meilisearch: {
    config: {
      host: env('PLUGIN_MEILISEARCH_URL'),
      apiKey: env("PLUGIN_MEILISEARCH_API_KEY"),
      "fiche-metier": {
        filterableAttributes: ['centres_interet','formations_min_requise','niveau_acces_min','secteurs_activite','status'],
        populateEntryRule: [
          'centres_interet',
          'formations_min_requise',
          'niveau_acces_min',
          'secteurs_activite',
          'statuts',
        ]
      }
    }
  },
  sentry: {
    enabled: true,
    config: {
      dsn: env('SENTRY_DSN'),
      init: {
        environment: env('NODE_ENV')
      }
    },
  },
});
