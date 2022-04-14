## Création d'un nouveau contenu

Lors de la création d'un nouveau `Content-Type` il faudra lui donner les accès en mode 
public pour qu'il soit accéssible depuis le back et le front. (pas besoin d'un bearer si le cms
est accèssible via le front le bearer token est visible).

Etapes :
![alt text](./doc/strapi%200.png)
![alt text](./doc/strapi%201.1.png)
![alt text](./doc/strapi%201.png)
![alt text](./doc/strapi%202.png)

## Exemple d'appel à l'api Strapi

Strapi fourni une api de base auto générer qui permet d'accéder à la donnée via une api
- Sans contenu `media` : http://localhost:1337/api/accueil?populate=*
- Avec contenu `media`, petit point tricky ici Strapi ne remonte pas "naturellement" les éléments
  `media` il faudra pour se faire écrire une petite query custom :
  - http://localhost:1337/api/accueil?populate[articles][populate]=*
    (on indique ici qu'on veut accéder à tous les attributs du content type accueil)
  
