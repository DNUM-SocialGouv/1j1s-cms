const fs = require('fs')
const xml2js = require('xml2js')

const ONISEP_XML_FILENAME = 'Onisep_Ideo_Fiches_metiers_27062022.xml'

const parser = xml2js.Parser({
  trim: true,
  explicitArray: false,
  mergeAttr: true,
  normalize: true,
  explicitRoot: false
})

try {
  fs.readFile(ONISEP_XML_FILENAME, (err, data) => {
    parser.parseString(data, (err, res) => {
      const generatedFileName = `fiches-metiers.json`
      const mappedResult = mapMetierList(res)
      const dataAsJSONString = JSON.stringify(mappedResult, null, 2)

      fs.writeFile(generatedFileName, dataAsJSONString, err => {
        if (err) console.error(err)
      })

      console.info('XML file converted into JSON format successfully.')
    })
  });
} catch (e) {
  console.error(e)
}

function mapMetierList(res) {
  return res.metier.map((metier) => ({
    acces_metier: metier.acces_metier,
    accroche_metier: metier.accroche_metier,
    centres_interet: renameIdKeysFromArray(removeNestingLevel(metier.centres_interet)),
    competences: metier.competences,
    condition_travail: metier.condition_travail,
    formations_min_requise: renameIdKeysFromArray(removeNestingLevel(metier.formations_min_requise)),
    formats_courts: removeNestingLevel(metier.formats_courts),
    identifiant: metier.identifiant,
    libelle_feminin: metier.libelle_feminin,
    libelle_masculin: metier.libelle_masculin,
    metiers_associes: renameIdKeysFromArray(removeNestingLevel(metier.metiers_associes)),
    nom_metier: metier.nom_metier,
    nature_travail: metier.nature_travail,
    niveau_acces_min: removeIdKeysFromObject(metier.niveau_acces_min),
    publications: removeNestingLevel(metier.publications),
    romesV3: removeNestingLevel(metier.romesV3),
    secteurs_activite: renameIdKeysFromArray(removeNestingLevel(metier.secteurs_activite)),
    sources_numeriques: removeNestingLevel(metier.sources_numeriques),
    statuts: renameIdKeysFromArray(removeNestingLevel(metier.statuts)),
    synonymes: removeNestingLevel(metier.synonymes),
    vie_professionnelle: metier.vie_professionnelle,
  }));
}

function renameIdKeysFromArray(array) {
  if (!array) return undefined
  return array.map(object => removeIdKeysFromObject(object))
}

function removeIdKeysFromObject(object) {
  const newObject = object
  newObject.identifiant = newObject.id
  delete newObject.id
  return newObject
}

function removeNestingLevel(field) {
  if (Array.isArray((field))) return field
  else if (typeof field === 'string') {
    return handleStringNesting(field);
  }
  else if (typeof field === 'object') {
    return handleObjectNesting(field);
  }
  else return undefined
}

function handleObjectNesting(field) {
  const value = Object.values(field)[0]
  if (typeof value === 'string' && value.length > 0) return [value]
  else if (typeof value === 'string' && value.length === 0) return []
  else if (Array.isArray(value)) {
    if (value.length === 1) return [value]
    else if (value.length > 1) return value
  }
  else return [value]
}

function handleStringNesting(field) {
  if (field.length < 1) return []
  else return [field]
}
