var porsche911 = "porsche911"; // à ce niveau un var ou un let n'a pas de différences

for (var varMarque of ["Porsche","Ferrari","BMW"]){
    console.log(`Marque : ${varMarque}`);
}

console.log(`variable porsche911: ${porsche911}`); // variable globale déclarée au tout début du code

console.log(`variable varMarque: ${varMarque}`); 