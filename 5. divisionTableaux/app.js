function diviseTableau(tab, tailleMorceau) {
    const length = tab.length
    const result = [];
    let nbrOfPart;
    if(length % tailleMorceau !== 0){
        nbrOfPart = Math.trunc(length / tailleMorceau) + 1;
    }else{
        nbrOfPart = Math.trunc(length / tailleMorceau);
    }
   let j = 1;
   for (let i = 0; i < length; i += tailleMorceau ) {
       const part = tab.slice(i,tailleMorceau * j );
       j++
       result.push(part);
   }
   return result
}



console.log(diviseTableau([4,2,1,3,5,4,7,8,9], 3))
console.log(diviseTableau([4,2,1,3,5,4,7,8,9,8], 3)); // [[4, 2, 1],[3, 5, 4],[7, 8, 9],[8]]
console.log(diviseTableau(["e","r","r","m","z","e","a"], 5)); // [["e", "r", "r", "m", "z"],["e", "a"]]


// -----------------  Énoncé ------------------- //

// On reçoit un tableau en premier argument, on doit le diviser en autant de sous-tableaux que possible de la taille du second argument.
// Si la taille du dernier sous-tableau est inférieure au second argument, retournez le 
// sous-tableau tel quel.
// Enfin retournez tous ces sous-tableaux dans un tableau;

// -----------------  Conseils ------------------- //

// splice()
// slice()







