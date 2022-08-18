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
      jwtSecret: env('JWT_SECRET')
    },
  },
  'import-export-entries': {
    enabled: true,
  },
  meilisearch: {
    config: {
      host: env('PLUGIN_MEILISEARCH_URL'),
      apiKey: env("PLUGIN_MEILISEARCH_API_KEY")
    }
  },
});
