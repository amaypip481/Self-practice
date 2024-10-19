let arrayToMultiply = [1,2,3,4,5,6,7,8];



function sumOfArrayMethods(array){
   let filteredArray =  array.filter((num)=>{
        return (num%2 === 0);
    });

    let multipliedArray = filteredArray.map((num)=> {
        return num*3;
    });

   return multipliedArray.reduce((Total, currentItem) => {
    return Total +currentItem;
   },0);

}


// console.log(sumOfArrayMethods(arrayToMultiply));


// function sumOfTripledEvens(array) {
//     return array
//       .filter((num) => num % 2 === 0)
//       .map((num) => num * 3)
//       .reduce((acc, curr) => acc + curr);
//   }

  
//   console.log(sumOfTripledEvens(arrayToMultiply));
let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 2 first elements
let removed = arr.splice(0, 2);

// alert( removed );
// alert(arr);

["Bilbo", "Gandalf", "Nazgul"].forEach((item, index, array) => {
    alert(`${item} is at index ${index} in ${array}`);
  });