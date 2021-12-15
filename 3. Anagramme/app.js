function anagramme(strA, strB) {
    const sanitizedA = sanitizeString(strA);
    const sanitizedB = sanitizeString(strB);
    let count = 0;
    if(sanitizedA.length !== sanitizedB.length){
        return false;
    }else{
        for (let i = 0; i < sanitizedA.length; i++) {
            if(sanitizedB.includes(sanitizedA[i])){
                count ++
            }
        }
        return count === sanitizedA.length
    }

}
function sanitizeString(str){
    let a = str.trim().toLowerCase().split('')
    let sanitizedStr = [];
    const regex = /[a-z]/i
    a.map((letter)=> {
        if(letter.match(regex)){
            sanitizedStr.push(letter)
        }
    })
    return sanitizedStr.join("")
}

console.log(anagramme("$*^^gare", "        Rag    e")); // True
console.log(anagramme("faible", "fiable")); // True
console.log(anagramme("something", "somebody")); // false




// -----------------  Énoncé ------------------- //

// Créez un algorithme qui va retourner true si le premier paramètre est un anagramme du second, false dans le cas contraire.
// Malheuresement les entrées contiennent parfois des symboles et des espaces qu'il va falloir supprimer des chaînes.


// -----------------  Conseils ------------------- //

// Regex
// sort()
// toLowerCase()
// replace()
// join()
// split()
// comparaison "=="