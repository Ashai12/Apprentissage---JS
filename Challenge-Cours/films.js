function good(title){
    return title;
};

let tab = [0,0,8,0,[0,0,0,0,{name: 'ouf'}], good];

console.log(tab[5](tab[4][4].name));