module.exports = () => ({
  //...
  meilisearch: {
    config: {
      host: "http://localhost:7700",
      apiKey: "masterKey",
      stage: {
        indexName: 'stages',
        transformEntry({ entry }) {
          return {
            ...entry,
            _geo: {
              lat: entry.localisation?.latitude,
              lng: entry.localisation?.longitude
            }
          }
        },
        settings: {
          filterableAttributes: ['domaines', 'duree', '_geo'],
        },
      }
    }
  }
})
