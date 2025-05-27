let Catalogue = new Map([["Porsche 911",1000000],["BMW M5",200000],["Clio 5",20000]])

Catalogue.set("Simca 1100",10000)

for(let [voiture,prix] of Catalogue.entries()){
    console.log(`voiture : ${voiture} prix : ${prix}`)
}

console.log(`Nombre de vehicules dans le catalogue : ${Catalogue.size}`)