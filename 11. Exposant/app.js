// function puissance(a, n) {

//     let result = a;
//     for (let i = 1; i < n; i++) {
//         result *= a
//     }
//     return result;
// }

    function puissance(a, n){
        if(n === 0){
            return 1;
        }else{
            return a * puissance(a, n - 1)
        }
    }
console.log(puissance(4, 6)); //4096


// -----------------  Énoncé ------------------- //

// Créez un algorithme pour calculer la puissance(second argument) d'un nombre(premier argument).
// Utiliser la récursion convient parfaitement à ce genre de problème.

// -----------------  Conseils ------------------- //


// recursion






