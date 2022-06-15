module.exports = () => ({
  //...
  meilisearch: {
    config: {
      host: "http://localhost:7700",
      apiKey: "masterKey",
      stage: {
        indexName: 'stages',
        settings: {
          filterableAttributes: ['domaines', 'duree', 'localisation'],
        },
      }
    }
  }
})
