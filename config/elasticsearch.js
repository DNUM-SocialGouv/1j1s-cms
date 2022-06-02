
module.exports = ({ env }) => ({
  connection: {
    // https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/auth-reference.html
    node: env('ELASTICSEARCH_HOST', 'http://127.0.0.1:9200'),
    auth: {
      username: env('ELASTICSEARCH_USERNAME'),
      password: env('ELASTICSEARCH_PASSWORD'),
    }
  },
  settings: {
    importLimit: 3000,
    removeExistIndexForMigration: false,
    validStatus: [200, 201],
    validMethod: ['PUT', 'POST', 'DELETE'],
    fillByResponse: false,
    index_prefix: '',
    index_postfix: '',
  },
  models: [
  {
    "model": "accueil",
    "index": "accueil",
    "plugin": null,
    "enabled": false,
    "migration": false,
    "pk": "id",
    "relations": [],
    "conditions": {},
    "fillByResponse": true,
    "supportAdminPanel": true,
    "urls": []
  }
]
});
