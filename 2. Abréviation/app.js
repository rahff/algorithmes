function abreviation(str) {
    const trimedText = str.trim()
    const firstPart = trimedText.split(' ')[0];
    const secondPart = trimedText.split(' ')[1];
    return firstPart + ' ' + secondPart.split('')[0] + '.';
};

console.log(abreviation("John Doe")); // John D.
console.log(abreviation("Romy Schneider")); // Romy S.
console.log(abreviation("             Alfred Hitchcock                 ")); // Alfred H.



// -----------------  Énoncé ------------------- //

// Créez un algorithme qui va retourner l'abréviation d'un nom et prénom, qui va retourner "John D." quand on lui passe en argument "John Doe"

// -----------------  Conseils ------------------- //

// On peut résoudre cet algo à base de conditions, on "nettoie" la chaîne de caractères en enlevant les espacements et en gardant seulement
// les deux premiers mots, on retourne ensuite le premier mot qui est le prénom et la premiere lettre du second + "."

// Fonctions utiles 
// trim()
// split()
// charAt()
// slice()