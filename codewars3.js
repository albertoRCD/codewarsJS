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

// 7. https://www.codewars.com/kata/55ea5650fe9247a2ea0000a7/train/javascript

function unscrambleEggs(word){
  
  return word.replaceAll('egg',"");

}
//console.log(unscrambleEggs("ceggodegge heggeregge"))

// 8. https://www.codewars.com/kata/56fcfad9c7e1fa2472000034/train/javascript

function evil(n) {
  
  return n.toString(2).split("").filter(x => x == '1').length % 2 == 0 ? "It's Evil!" : "It's Odious!";

}
//console.log(evil(11));

// 9. https://www.codewars.com/kata/59f7fc109f0e86d705000043/train/javascript

function divisibleByThree(str){

  let strArray = str.split("").map(x => parseInt(x)).reduce((x, acc) => x + acc);
  return strArray % 3 == 0 ? true : false;

}
//console.log(divisibleByThree("8409"));

function duplicates(arr) {
  let seen = {}; // Objeto para rastrear las ocurrencias de cada elemento
  let duplicates = [];

  // Recorrer el arreglo original
  for (let i = 0; i < arr.length; i++) {
    let currentItem = arr[i];
    let itemString = JSON.stringify(currentItem); // Convertir el elemento a cadena

    // Verificar si ya hemos visto este elemento (considerando su representación como cadena)
    if (seen[itemString]) {
      // Si es un duplicado y aún no se ha agregado a la lista de duplicados
      if (!duplicates.includes(currentItem)) {
        duplicates.push(currentItem);
      }
    } else {
      seen[itemString] = true; // Marcar el elemento como visto por primera vez
    }
  }

  return duplicates;
}
//console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]));

function binaryToString(binaryString) {

  if (binaryString.length === 0) {
    return ''; // Return empty string for empty input
  }

  let decodedText = '';
  // Loop through the binary string in increments of 8 characters
  for (let i = 0; i < binaryString.length; i += 8) {
    // Extract a segment of 8 characters (1 byte)
    let byte = binaryString.slice(i, i + 8);
    // Convert the binary byte to a decimal number
    let charCode = parseInt(byte, 2);
    // Convert the decimal number to its corresponding ASCII character
    let char = String.fromCharCode(charCode);
    // Append the character to the decoded text
    decodedText += char;
  }

  return decodedText;
}

//console.log(binaryToString("01001011"));

function consecutive(arr, a, b) {
 
    let posA = arr.indexOf(a);
    if(posA+1 == arr.indexOf(b) || posA-1 == arr.indexOf(b)){
      return true;
    } 
    return false;
}
//console.log(consecutive([1, 3, 5, 7], 3, 1));

function spacey(array) {
  
  let result = [array[0]];
  for(let i=0, j=1; i<array.length-1; i++){
    result.push(result[i]+array[i+1]);
  }
return result;
}

//console.log(spacey(['kevin', 'has','no','space']));

function tailSwap(arr) {
  // your code here
  return arr;
}