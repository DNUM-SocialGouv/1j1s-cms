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
        settings: {
          filterableAttributes: ['centres_interet','formations_min_requise','niveau_acces_min','secteurs_activite','status'],
        },
        transformEntry({ entry }) {
          return {
            id: entry.id,
            nom_metier: entry.nom_metier,
            competences: entry.competences,
            condition_travail: entry.condition_travail,
            nature_travail: entry.nature_travail,
            vie_professionnelle: entry.vie_professionnelle,
            acces_metier: entry.acces_metier,
            accroche_metier: entry.accroche_metier,
            libelle_feminin: entry.libelle_feminin,
            libelle_masculin: entry.libelle_masculin,
            centres_interet: entry.centres_interet && entry.centres_interet.map(({ libelle }) => libelle),
            formations_min_requise: entry.formations_min_requise && entry.formations_min_requise.map(({ libelle }) => libelle),
            niveau_acces_min: entry.niveau_acces_min && entry.niveau_acces_min.map(({ libelle }) => libelle),
            secteurs_activite: entry.secteurs_activite && entry.secteurs_activite.map(({ libelle }) => libelle),
            statuts: entry.statuts && entry.statuts.map(({ libelle }) => libelle)
          }
        }
      }
    }
  },
  sentry: {
    enabled: true,
    config: {
      dsn: env('SENTRY_DSN'),
      init: {
        release : `${env('npm_package_name')}@${env('npm_package_version')}`,
        environment: env('NODE_ENV')
      }
    },
  },
  'config-sync': {
    enabled: true,
    config: {
      syncDir: "config/sync/",
      minify: true,
      excludedConfig: [
        'core-store.plugin_content_manager_configuration_components::fiche-metier.secteurs-d-activite',
        'core-store.plugin_content_manager_configuration_components::fiche-metier.statuts-professionnels',
        'core-store.plugin_content_manager_configuration_content_types::admin::role',
        'core-store.plugin_content_manager_configuration_content_types::admin::api-token-permission',
        'core-store.plugin_content_manager_configuration_components::fiche-metier.secteurs-d-activite',
        'core-store.plugin_content_manager_configuration_components::fiche-metier.statuts-professionnels',
        'core-store.plugin_content_manager_configuration_content_types::admin::role',
        'core-store.plugin_content_manager_configuration_content_types::admin::api-token-permission',
        'core-store.plugin_content_manager_configuration_content_types::api::article.article',
        'core-store.plugin_content_manager_configuration_components::cartes.carte-lien',
        'core-store.plugin_content_manager_configuration_content_types::plugin::upload.folder',
        'core-store.strapi_content_types_schema',
        'core-store.plugin_i18n_default_locale',
        'core-store.plugin_meilisearch_meilisearch_api_key_config',
        'core-store.plugin_content_manager_configuration_content_types::api::contact-poe.contact-poe',
        'core-store.plugin_users-permissions_email',
        'core-store.plugin_meilisearch_meilisearch_host',
        'core-store.plugin_content_manager_configuration_content_types::api::accessibilite.accessibilite',
        'core-store.plugin_content_manager_configuration_content_types::plugin::users-permissions.user',
        'i18n-locale.en',
        'core-store.i18n-locale',
        'core-store.plugin_content_manager_configuration_content_types::api::contact-cej.contact-cej',
        'core-store.plugin_content_manager_configuration_components::fiche-metier.niveau-acces-minimal',
        'core-store.plugin_upload_settings',
        'core-store.plugin_content_manager_configuration_components::fiche-metier.centres-d-interet',
        'core-store.plugin_content_manager_configuration_content_types::plugin::users-permissions.permission',
        'admin-role.strapi-super-admin',
        'core-store.plugin_users-permissions_advanced',
        'core-store.plugin_content_manager_configuration_content_types::api::conditions-generales-d-utilisation.conditions-generales-d-utilisation',
        'core-store.plugin_content_manager_configuration_content_types::plugin::upload.file',
        'core-store.plugin_content_manager_configuration_content_types::api::politique-de-confidentialite.politique-de-confidentialite',
        'core-store.plugin_content_manager_configuration_content_types::api::mesure-jeune.mesure-jeune',
        'core-store.plugin_content_manager_configuration_content_types::api::entreprise.entreprise',
        'core-store.plugin_content_manager_configuration_content_types::api::fiche-metier.fiche-metier',
        'core-store.plugin_content_manager_configuration_content_types::api::les-mesures-employeurs.les-mesures-employeurs',
        'core-store.plugin_content_manager_configuration_content_types::api::mention-legale.mention-legale',
        'core-store.plugin_content_manager_configuration_content_types::api::contact-entreprise.contact-entreprise',
        'core-store.plugin_meilisearch_meilisearch_host_config',
        'core-store.plugin_content_manager_configuration_content_types::plugin::i18n.locale',
        'core-store.plugin_meilisearch_meilisearch_api_key',
        'core-store.plugin_content_manager_configuration_content_types::admin::api-token',
        'core-store.plugin_documentation_config',
        'core-store.plugin_content_manager_configuration_content_types::admin::user',
        'core-store.plugin_content_manager_configuration_content_types::plugin::users-permissions.role',
        'core-store.plugin_content_manager_configuration_components::fiche-metier.formations-min-requise',
        'core-store.plugin_content_manager_configuration_content_types::admin::permission',
        'core-store.plugin_meilisearch_meilisearch_listened_content_types',
        'core-store.core_admin_auth',
        'core-store.plugin_upload_metrics',
        'core-store.plugin_users-permissions_grant'
      ]
    },
  },
});
