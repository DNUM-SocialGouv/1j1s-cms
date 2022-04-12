# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) which lets you scaffold and manage your project in seconds.

### Commencer par :
```
npm run install
# or
yarn install
```

### `develop`

Démarrer le postgres avant de démarrer l'application
```
docker-compose up
```

Mettre à jour le postgres avant de lancer le cms (si y'a eu un nouveau push sur develop vous devez aussi mettre à jour la database)
```
npm run postgres:seed
```

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop
```

Après chaque mise à jour du contenu du cms, vous devez faire un dump de la database
```
npm run postgres:rebuild
npm run postgres:dump
```

Environnement de dev
```
login : superadmin@1j1s.com
mot de passe : 1j1s-cms-DEV
token : 077e38a2d9a0ee8050121cf6747c0759f5a20a94e3900da815077eed10a7720a35cfe62ba844289707df457aa8bc81e9f16d1c82f33a226b8c98b639306c69e4ceba7648e2af1bb3576f7332f0caf7584a286b18dd8cfabd8ea3a3199c6ad9e7653b38d7d8846ac9e017784a7f8fd6ab11b379ed3493a484735570ffc80aedf6
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project. Find the one that suits you on the [deployment section of the documentation](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html).

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://docs.strapi.io) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>
