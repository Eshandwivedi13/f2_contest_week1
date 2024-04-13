/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];
//[{id:1,name:"john",age:"18",profession:"developer"},{id:2, name:"jack",age:"20", profession:"developer"},{id:3, name:"karen", age:"19",profession:"admin"}]
function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  //console.log all the employees which have the profession of developer using the map function.

    let ans = arr.map(function(value){//value is of objectType
       if(value.profession === "developer") return value//returns that value in array which has profession as developer
    })
    //got ans array but has undefined
    let developers = ans.filter(function(value){
      return  value !== undefined;//filter mostly used for conditions
    })
    console.log(developers)
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  // PrintDeveloperbyForEach() - console.log all the employees which have the profession of developer using the for each function.
  let developers = []; // Array to store developer objects
  arr.forEach(function(value){//value is of objectType
      if(value.profession === "developer") developers.push(value);//returns that value in array which has profession as developer
  })
  console.log(developers)
}

function addData() {
  //Write your code here, just console.log
  // In this function make another such employee object and append that in this array. Example - push this in the array - {id:4,name:"susan",age:"20",profession:"intern"} and then console.log it.
  let obj = {id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(obj);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  // In this function remove the object where the profession is admin. console.log the changed array.
  let arrWithoutAdmin = arr.filter((value) => {
    return value.profession !== "admin"
  }) 
  console.log(arrWithoutAdmin);
}

function concatenateArray() {
  //Write your code here, just console.log
  // Make another array with 3 objects just like the one in the above given array.
  //The objects should be different, with different ids and all other paramters should be different too Then concatinate these 2 arrays, and console.log
  let arr2 = [{id:4,name:"bhusan",age:"26",profession:"sales"}, {id : 5, name : "hikari", age : "43", profession : "CEO"}, {id : 6, name : "eshan", age : "22", profession : "Java Developer"}]
  // Concatenate the original array with the new array
  let concatenatedArray = arr.concat(arr2);
  console.log(concatenatedArray)
}
