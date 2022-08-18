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
      apiKey: env("PLUGIN_MEILISEARCH_API_KEY"),
      "fiche-metier": {
        populateEntryRule: [
          'centres_interet.centre_interet',
          'formations_min_requise.formation_min_requise',
          'secteurs_activite.secteur_activite',
          'statuts.statut',
        ],
        transformEntry({ entry }) {
          return {
            id: entry.id,
            identifiant: entry.identifiant,
            nom_metier: entry.nom_metier,
            competences: entry.competences,
            acces_metier: entry.acces_metier,
            condition_travail: entry.condition_travail,
            nature_travail: entry.nature_travail,
            vie_professionnelle: entry.vie_professionnelle,
            secteurs_activite: entry.secteurs_activite && entry.secteurs_activite.secteur_activite,
            centres_interet: entry.centres_interet && entry.centres_interet.centre_interet,
            niveau_acces_min: entry.niveau_acces_min,
            statuts: entry.statuts && entry.statuts.statut,
            synonymes: entry.synonymes,
            formations_min_requise: entry.formations_min_requise && entry.formations_min_requise.formation_min_requise,
            createdAt: entry.createdAt,
            updatedAt: entry.updatedAt
          }
        }
      }
    }
  },
});
