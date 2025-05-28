let marquesVoituresSport = ["Porsche","Ferrari","BMW"];

let [marque1,marque2,marque3] = marquesVoituresSport;

console.log(`Marque n°1 : ${marque1}`);
console.log(`Marque n°2 : ${marque2}`);
console.log(`Marque n°3 : ${marque3}`);

let [marque4,,marque6] = marquesVoituresSport; // la double virgule passe à l'index suivant du tableau (de [0] à [2])

console.log(`Marque n°4 : ${marque4}`);
console.log(`Marque n°6 : ${marque6}`);

let {[0]:marque7,[2]:marque8} = marquesVoituresSport; // destructuring via indexs

console.log(`Marque n°7 : ${marque7}`);
console.log(`Marque n°8 : ${marque8}`);

let porsche911 = {
    marque : "Porsche",
    modele : "911"
}

let {marque,modele} = porsche911;

console.log(`Marque préférée : ${marque}`);
console.log(`Modèle préférée : ${modele}`);