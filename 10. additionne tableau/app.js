function tableauAdition(tab) {

    const result = tab.reduce((prev, curr)=>{
        return prev + curr
    })

    return result;
};
  
console.log(tableauAdition([1,2,3,4,5,6]));


// -----------------  Énoncé ------------------- //

// Créez un algorithme pour aditionner les valeurs d'un tableau.

// -----------------  Conseils ------------------- //


// pop()
// recursion






