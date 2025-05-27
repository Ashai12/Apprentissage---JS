let Catalogue = new Set(["Porsche 911","Ferrari Testarossa","BMW M5","BMW M5"])

Catalogue.add("Simca 1100")

for(let Voiture of Catalogue){
    console.log(Voiture)
}

console.log(`Nombres de voitures dans le catalogue : ${Catalogue.size}`)