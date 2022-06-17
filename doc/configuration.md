# Branchement au bucket S3 pour la gestion des medias

Pour gérer les médias dans Strapi, il est nécéssaire de configurer un provider externe pour stocker l'upload de medias (images, vidéos).
Dans notre cas, nous utilisons un service de stockage d'objets de type Amazon S3.
Voici la marche à suivre pour configurer le service et le brancher à Strapi.

## Étape 1: Connexion au service de stockage et création du bucket
Le service de stockage utilisé est un service « compatible S3 » (ie : protocole S3 implémenté).
Physiquement, les données sont hébergés par Cegedim, en France et non par Amazon.
Le produit [Minio](https://docs.min.io/docs/aws-cli-with-minio.html) se cache derrière ce service.
La documentation amazon S3 est globalement applicable, l’accès au service s'effectue par le [CLI AWS Command Line Interface](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html). 
Il également possible d'utiliser le CLI proposé par Minio (néanmoins le CLI AWS s'est avéré être plus léger et plus facile à installer).

Une fois le CLI AWS installé, il est nécéssaire de renseigner une configuration pour s'authentifier au service de stockage. Pour cela :
```
$ aws configure
```
Il faut ensuite renseigner un `AWS Access Key ID` ainsi qu'un `AWS Secret Access Key`. `Default region name` et `Default output format` doivent être laissés vides.

Une fois le CLI configuré, nous pouvons créer un bucket comme ceci :
```
$ aws --endpoint-url https://storage-eb4.cegedim.cloud s3 mb s3://[nom-du-bucket]
```
Pour lister les buckets existants et vérifier que ce dernier a bien été créé :
```
$ aws --endpoint-url https://storage-eb4.cegedim.cloud s3 ls
```

## Étape 2: Installation du plugin Strapi
Il n'existe malheureusement pas de plugin officiel maintenu par Strapi pour se connecter à un service Minio. 
Il existe cependant plusieurs plugins créés par des développeurs indépendants. Attention car ce sont des plugins peu utilisés et donc pas nécéssairement correctement maintenus. 
Tous ces plugins sont implémentés à l'aide de la [librairie JS de Minio](https://docs.min.io/docs/javascript-client-quickstart-guide.html)

Nous avons fait le choix d'utiliser le plugin [strapi-provider-upload-minio-ce](https://www.npmjs.com/package/strapi-provider-upload-minio-ce) qui semblait le plus à jour par rapport à la dernière version de Strapi.

Le plugin est déjà renseigné dans les dépendances du `package.json` de Strapi, il faut donc s'assurer d'avoir installé les dernières dépendances à l'aide d'un `npm install`

Ensuite il faut renseigner les différentes variables d'environnement (dans le fichier `.env`) afin que le plugin puisse fonctionner :
```
MINIO_ACCESS_KEY=[clé d'accès]
MINIO_SECRET_KEY=[clé secrète]
MINIO_BUCKET=[nom-du-bucket]
MINIO_ENDPOINT=[préfixe-environnement].storage-eb4.cegedim.cloud
MINIO_HOST=[préfixe-environnement].storage-eb4.cegedim.cloud
```

Voici les 4 préfixes correspondants à chaque environnement à disposition. 
Pour les besoins de dev, nous utiliserons le premier :
```
cos-njord-dgefp-1j1s-dev 
cos-njord-dgefp-1j1s-integ 
cos-njord-dgefp-1j1s-preprod 
cos-njord-dgefp-1j1s-prod
```

## Étape 3: Test d'upload dans Strapi
Vous pouvez démarrer Strapi et vous rendre dans l'interface d'admin, plus précisémment dans l'onglet Media Library.
Tentez d'y ajouter une image pour tester l'envoi vers le bucket.

Pour s'assurer que l'image y est désormais bien stockée, vous pouvez vérifier à l'aide de la commande suivante : 
```
$ aws --endpoint-url https://storage-eb4.cegedim.cloud s3 ls s3://[nom-du-bucket]/cms/
```

