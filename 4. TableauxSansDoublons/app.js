function tableauxSansDoublons(...arrays) {
    const result = [];
    const array = [];
    for (let i = 0; i < arrays.length; i++) {
        const part = new Set(arrays[i])
        part.forEach((value)=>{
            array.push(value)
        })
    }
    new Set(array).forEach((value)=>{
        result.push(value)
    })
    return result;
}


console.log(tableauxSansDoublons([5,5,4], [6,3,5])); // [5, 4, 6, 3]
console.log(tableauxSansDoublons([5,5,4, 5,8,7,7,7,7], [6,3,5,7,8,6,1], ["e", 1, "e", "y",2, "y"])); //[5,4,8,7,6,3,1,"e","y",2]
console.log(tableauxSansDoublons(["a","b","z"],["z","e","a"])); // ["a", "b", "z", "e"]


// -----------------  Énoncé ------------------- //

// Créez un algorithme qui assemble tous les tableaux que l'on passe en argument, sans avoir de doublons(si il y a deux fois(ou plus) la même valeur, supprimez la).


// -----------------  Conseils ------------------- //

// Array.from(arguments)
// filter()
// forEach()
// push()
// indexOf







