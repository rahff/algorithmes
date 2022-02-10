const partage = (arr, nbrOfParts) => {
 const especes = arr.sort((a, b)=> a - b);
 const total = especes.reduce((prev, curr)=> prev + curr, 0);
 if(total % nbrOfParts !== 0) return false;
 const partEgale = total / nbrOfParts;
 const parts = Array(nbrOfParts).fill(partEgale);
 for (let i = 0; i < nbrOfParts; i++) {
  while (parts[i] > 0 ) {
    let idx = especes.findIndex(esp => esp === parts[i]);
    if(idx === -1) idx = especes.findIndex(esp => esp < parts[i]);
    if(idx === -1) return false;
    else parts[i] -= especes.splice(idx, 1);
    if(parts[i] < 0) return false;
  }
 }
  return true;
}


console.log(partage([2,2,2], 3)); // true
console.log(partage([10,10,10], 3)); // true
console.log(partage([20,10,5,5,10,5,5], 3)); // true
console.log(partage([2,2,5])); // false
console.log(partage([2,4,5,1,5,1], 3)); // true
console.log(partage([2,1,2], 2)); // false
console.log(partage([1,2,1,1,1], 3)); // true, il peut donner une pièce de deux à un, et les pièces de 1 aux autres
console.log(partage([5,10,1,1,1], 6)); // false, le total ici est 18, on peut certes le diviser par trois, deux ou six , mais pas répartir les billets et pièces de manière équitable !
console.log(partage([2,1,5,1,2,1,2,1,5,1,2,1], 6));//true
console.log(partage([2,1,5,1,2,1,2,1,5,1,2,1,5,1,2,2,2], 6));//true
console.log(partage([2,1,5,1,2,1,2,1,5,2,1,1,5,1,2,2,2], 2));//false



// -----------------  Énoncé ------------------- //

// Créez un programme qui partage équitablement des pièces et des billets à trois personnes.
// Attention, même si la somme est divisible par trois, il faut prendre en compte le partage des espèces(troisieme exemple).
// On ne peut pas "couper" un billet en deux ou trois !




// -----------------  Conseils ------------------- //

// reduce()
// sort()
// splice()
// fill()
// findIndex()
// Il y a beaucoup de manières de faire ...








