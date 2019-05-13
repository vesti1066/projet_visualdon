
const DATA = require('data.json');

const format = d => ({
  nom: d.Nom,
  exp: [
    d["Exportations-2000-02"],
    d["Exportations-2015"],
    d["Exportations-2016"],
    d["Exportations-2017"],  
  ],
  imp: [
    d["Importations-2000-02"],
    d["Importations-2015"],
    d["Importations-2016"],
    d["Importations-2017"],  
  ],
})

console.log(DATA.map(format));