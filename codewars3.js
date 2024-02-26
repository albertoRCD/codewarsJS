// 1. https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

var maxSequence = function(arr){
   
    let max = 0;
    let aux = 0;

    for(let i=0; i<arr.length; i++){
        for(let j=i; j<arr.length; j++){
            aux += arr[j];
            if(aux > max){
                max = aux;
            }
        }
        aux = 0;
    }
    return max;
  }
  
  //console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// 2. https://www.codewars.com/kata/54599705cbae2aa60b0011a4/train/javascript

function one(arr, fun){
    
    return arr.filter(x => fun(x)).length == 1 ? true : false;

  }

  //console.log(one([1,2,3,4,5], function(item){ return item<2}));

// 3. https://www.codewars.com/kata/564e7fc20f0b53eb02000106/train/javascript

function consonantCount(str) {
    
    return str.split("").filter(x => /[^aeiouAEIOU\d\W_]/.test(x)).length;

  }

  //console.log(consonantCount('aeiouAEIOU'));


