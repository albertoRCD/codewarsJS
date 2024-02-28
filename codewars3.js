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

// 4. https://www.codewars.com/kata/5938f5b606c3033f4700015a/train/javascript

function alphabetWar(fight){
  
  const pointsLeft = { 'w': 4, 'p': 3, 'b': 2, 's': 1 };
  const pointsRight = { 'm': 4, 'q': 3, 'd': 2, 'z': 1 };

  // Function to handle bomb explosions
  const explodeBombs = (arr, index) => {
    // Explode left side
    if (index > 0 && arr[index - 1] !== '*') arr[index - 1] = '_';
    // Explode right side
    if (index < arr.length - 1 && arr[index + 1] !== '*') arr[index + 1] = '_';
  };

  let fightArray = fight.split("");

  // Handle bomb explosions
  for (let i = 0; i < fightArray.length; i++) {
    if (fightArray[i] === '*') {
      explodeBombs(fightArray, i);
    }
  }

  let scoreLeft = 0;
  let scoreRight = 0;

  // Calculate scores
  for (let i = 0; i < fightArray.length; i++) {
    if (pointsLeft.hasOwnProperty(fightArray[i])) {
      scoreLeft += pointsLeft[fightArray[i]];
    }
    if (pointsRight.hasOwnProperty(fightArray[i])) {
      scoreRight += pointsRight[fightArray[i]];
    }
  }

return scoreLeft > scoreRight ? "Left side wins!" : scoreRight > scoreLeft ? "Right side wins!" : "Let's fight again!";

}

//console.log(alphabetWar("x*s*leyx***r*"));

// 5. https://www.codewars.com/kata/5f7c38eb54307c002a2b8cc8/train/javascript

function removeParentheses(s){

  let first = s.indexOf("(");
  let last = s.lastIndexOf(")");
  let difference = last - first;
  let result = s.split("");

  for(let i=0; i<result.length; i++){
    if(i==first){
      result.splice(first, difference+1);
    }
  }
  return result.join("");

 } 
 
 //console.log(removeParentheses("a (bc d)e"));

 // 6. https://www.codewars.com/kata/545993ee52756d98ca0010e1/train/javascript

 function none(arr, fun){
  
  return arr.every(x => !fun(x));

}

//console.log(none([1,2,3,4,5],function(item){ return item > 5 }));

