function lePlusFrequent(array) {
  const counterValue = (index) => {
    let countValue = {
      value: array[index],
      count: 0,
    };
    array.forEach((el, i) => {
      if (el === array[index]) {
        countValue.count++;
      }
    });
    return countValue;
  };
  const reducerValue = () => {
    let values = [];
    for (let i = 0; i < array.length; i++) {
      const countedValue = counterValue(i);
      values.push(countedValue);
    }
    for (const obj of values) {
      for (let i = 0; i < values.length; i++) {
        if (obj.value === values[i].value && values.indexOf(obj) !== i) {
          values.splice(i, 1);
        }
      }
    }
    return values;
  };
  const reducedValues = reducerValue();
  function findMax(values) {
    let isMax = {
      value: undefined,
      count: 0,
    };
    for (const obj of values) {
      for (let i = 0; i < values.length; i++) {
        if (
          obj.count > values[i].count &&
          obj.count >= isMax.count &&
          values.indexOf(obj) !== i
        ) {
          isMax = obj;
        } else if (obj.count > values[i].count && !obj.count >= isMax.count) {
          return;
        }
      }
    }
    return isMax;
  }
  const result = findMax(reducedValues);
  return result;
}

console.log(
  lePlusFrequent([
    "a",
    3,
    "a",
    2,
    "a",
    "b",
    2,
    "b",
    4,
    "a",
    3,
    "a",
    3,
    3,
    3,
    "a",
    "a",
    3,
    3,
    3,
    "a",
    "a",
    "a",
  ])
);

// -----------------  Énoncé ------------------- //

// Créez un programme qui trouve le ou les éléments qui apparaissent le plus dans un tableau.
