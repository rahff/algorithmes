function memeProps(obj, test){
    let result = false;
    const keysOfObj = Object.keys(obj)
    const keysOfTest = Object.keys(test)
    for (let i = 0; i < keysOfObj.length; i++) {
      if(keysOfTest.includes(keysOfObj[i])){
          if(obj[keysOfObj[i]] === test[keysOfObj[i]]){
            result = true
          }else{
              result = false;
              break;
          }
      }else{
          result = false;
      }
    }
    return result;
}


console.log(memeProps({age: 44, taille: 188}, { age: 44, taille: 188 })); // true 
console.log(memeProps({age: 44, taille: 188}, { age: 24, taille: 180 })); // false 
console.log(memeProps({age: 44, taille: 188}, { age: 10, taille: 148 })); // false 
console.log(memeProps({a:1,b: 5}, {a:2, b:5})); //false
console.log(memeProps({p:"ere", i:5}, {m:"ere", i:"5"})); // false
console.log(memeProps({l:"g", v:"s"}, {l:"g", v:"s"}))//true


// -----------------  Énoncé ------------------- //

// Créez un programme pour vérifier si le premier objet contient au moins les propriétés du second, et que ces propriétés ont également les mêmes valeurs.
// -----------------  Conseils ------------------- //

// Object.keys()
// every()
// hasOwnProperty()






