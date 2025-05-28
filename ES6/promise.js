console.log("Démarrage des deux voitures");
console.log("Porsche 911 vs Ferrari Testarossa");

var maPromesse = new Promise(function(resolve, reject){
    setTimeout(function() {
        if (Math.random()>0.5){
            resolve("La Porsche 911 est la plus rapide");
        } else {
            reject("Ferrari Testarossa est la plus rapide");
        }
    }, 5000);
});

console.log("Contrôle radar dans 5 secondes");

maPromesse.then(function(verdict) {
    // Cas resolve (Porsche 911)
    console.log(`Verdict : ${verdict}`);
}).catch(function(verdict) {
    // Cas reject (Ferrari Testarossa)
    console.log(`Verdict : ${verdict}`);
});