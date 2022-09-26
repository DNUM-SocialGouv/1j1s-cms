# Permissions et rôles

Il existe 2 types d'utilisateur. Les utilisateurs authentifiés et les publics. Nos appels au CMS passent par le serveur,
qui lui est authentifié auprès du CMS.

Lors de la création d'un nouveau `content-type` ou d'un nouvel environnement, il est indispensable de donner les bonnes
permissions aux `content-types` existants ou nouveaux afin de lire, créer ou supprimer de la donnée.
Les contenus en lecture nécessitent la permission `find` du rôle **Public** (Settings -> User & permissions plugin /
Roles -> Public). Les éléments envoyés depuis le serveur vers le Strapi eux nécessiteront la permission `create` du rôle **Authenticated**,
comme les demandes de contacts et les entreprises.
![Ajouter une permission find 1](../roles/permissions-public-1.png)
![Ajouter une permission find 2](../roles/permissions-public-2.png)
![Ajouter une permission create](../roles/permissions-authenticated-create.png)
