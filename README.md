# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) which lets you scaffold and manage your project in seconds.

### Commencer par :
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
Mode dev avec l'auto reload. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
```

Après chaque mise à jour du contenu du cms, vous devez faire un dump de la database
```
npm run postgres:rebuild
```

Environnement de dev
```
login : superadmin@1j1s.com
mot de passe : 1j1s-cms-DEV
token : 077e38a2d9a0ee8050121cf6747c0759f5a20a94e3900da815077eed10a7720a35cfe62ba844289707df457aa8bc81e9f16d1c82f33a226b8c98b639306c69e4ceba7648e2af1bb3576f7332f0caf7584a286b18dd8cfabd8ea3a3199c6ad9e7653b38d7d8846ac9e017784a7f8fd6ab11b379ed3493a484735570ffc80aedf6
```

### `build & start`

Mode prod. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run build & npm run start
```
