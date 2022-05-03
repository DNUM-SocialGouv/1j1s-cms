# 🚀 Getting started with Strapi

### Local :
```
npm run install
```

#### Si c'est la première fois que vous démarrez l'appli
Démarrer le postgres avant de démarrer l'application
```
npm run postgres:up
```

Puis, populate la base
```
npm run postgres:seed
```

#### Sinon
Après chaque mise à jour du contenu du cms, vous devez faire un rebuild de la database si de la data a été ajouté
```
npm run postgres:rebuild
```

Mode dev avec l'auto reload. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)
```
npm run develop
```

Login et mot de passe pour l'env de dev
```
login : superadmin@1j1s.com
mot de passe : 1j1s-cms-DEV
```

### Tester le mode prod en dev
Mode prod. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run build & npm run start
```

### IMPORTANT /!\
Après chaque mis à jour de contenu en local vous devez exporter vos données pour les copains,
pour se faire :
```
npm run postgres:dump:local
```

### Scalingo
#### Pour faire un dump pour scalingo

``
npm run postgres:dumpscalingo
`` 

Copier coller les "INSERT INTO" du fichier `dumpforscalingo.sql` et à aller sur [adminer](https://adminer.osc-fr1.scalingo.com/) 
rentrer les logins correspondant via les variables d'env sur scalingo.

Une fois loger vous pouvez aller sur "Requête SQL" et coller les "INSERT INTO" puis "Exécuter", vos données saisies en local seront copiés sur l'env scalingo.

#### Pour faire un seed depuis scalingo

Aller sur [adminer](https://adminer.osc-fr1.scalingo.com/) cliquer sur "Exporter"
prennez toutes les tables et leurs données mais seulement les content models du site. <br /><br />
Table à ne pas sélectionner lors de l'export :
- admin_permissions
- admin_permissions_role_links
- admin_roles
- admin_users
- admin_users_roles_links
- i18n_locale
- strapi_api_tokens
- strapi_core_store_settings
- strapi_database_schema
- strapi_migrations
- strapi_webhooks
- up_permissions
- up_permissions_role_links
- up_roles
- up_users
- up_users_role_links

Copier coller les "INSERT INTO" dans un fichier sql (à supprimer ensuite) et run cette commande :

``
cat monfichiersql.sql | docker exec -i 1j1s-cms_db_1 psql -U admin-1j1s-cms 1j1s-cms
`` 
