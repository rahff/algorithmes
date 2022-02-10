function triTableau(arr) {
    const result = getArrayWithUniqueValue(arr);
    for(let i = 0; i < result.length; i++) { 
        result[i] = arr.filter((v)=> v === result[i])
    }
    return result;
}
const getArrayWithUniqueValue = (array) =>{
    const set = new Set(array);
    const arrayWithUniqueValue = []
    set.forEach((v)=> arrayWithUniqueValue.push(v))
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








