function triTableau(arr) {
    const set = new Set(arr);
    const arrayWithUniqueValue = []
    set.forEach((v)=> arrayWithUniqueValue.push(v))
    for(let i = 0; i < arrayWithUniqueValue.length; i++) { 
        arrayWithUniqueValue[i] = arr.filter((v)=> v === arrayWithUniqueValue[i])
    }
    return arrayWithUniqueValue;
}

console.log(triTableau([2, 1, 2, 1, 3])); // [[2, 2], [1, 1]]
console.log(triTableau([5, 4, 5, 5, 4, 3])); // [[5, 5, 5], [4, 4], [3]]
console.log(triTableau(["b", "a", "b", "a", "c"])); // [["b", "b"], ["a", "a"], ["c"]]


// -----------------  Énoncé ------------------- //

// Créez un algorithme qui regroupe les mêmes valeurs d'un tableau dans des sous-tableaux.
// Retournez tous les sous-tableaux dans un tableau.

// -----------------  Conseils ------------------- //

// new Set()
// filter() 
// Array
// push








