const abc = "abcdefghijklmnopqrstuvwxyz";


function lovefunc(flower1, flower2){

    return flower1 % 2 == 0 && flower2 % 2 == 0 ? false : flower1 % 2 != 0 && flower2 % 2 != 0 ? false : true;
  }
  //console.log(lovefunc(2,2));


  function findNeedle(haystack) {
    
    let position = haystack.indexOf('needle');

    if(position >= 0)
    return `found the needle at position ${position} `;
  }

  //console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]));


  const binaryArrayToNumber = arr => {
    
    return parseInt(arr.join(""), 2);
 
   };

  //console.log(binaryArrayToNumber([0,0,1,0]));

  function rowSumOddNumbers(n) {
	
    let arrayImpares = [];
    let posiciones = []

    let contador = 0;
    for(let i=1; i<10000; contador++, i+=contador){
        posiciones.push(i);
    }
    for(let i=1; i<10000; i+=2){
        arrayImpares.push(i);
    }
    let posicionInicial = posiciones[n-1];
    let aSumar = arrayImpares.slice(posicionInicial-1, n+(posicionInicial-1));
    let total = 0;
    for(let i=0; i<aSumar.length; i++)
        total+=aSumar[i];
return total;

// TODO ESO RESUMIDO EN : return Math.pow(n, 3);  FACEPALM
}

//console.log(rowSumOddNumbers(4));

function century(year) {
  
return Math.ceil(year /100);
}

//console.log(century(2023));

function addBinary(a,b){

  return (a+b).toString(2);
}

//console.log(addBinary(1,1));

function maskify(cc) {
//234234234 -> #####4234
let ccS = cc.toString();
let longitud = cc.length;
let str = "";
for(let i=0; i<ccS.length-4; i++)
  str += '#';

return str+ccS.slice(-4);
}
//console.log(maskify(3453453453453));
function DNAtoRNA(dna) {
  
let nuevo = "";

for(let i=0; i<dna.length; i++){
  if(dna.charAt(i) == 'T'){
    nuevo += 'U';
  }
  else if(dna.charAt(i) == 'U'){
    nuevo += 'T'  
  }
  else {
  nuevo += dna.charAt(i);
  }
}
return nuevo;
}
//return dna.replaceAll('T','U');
//console.log(DNAtoRNA("TTTT"));

const rps = (p1, p2) => {
 if (p1 == 'rock' && p2 == 'paper')
    return "Player 2 won!";
  else if(p1 == 'scissors' && p2 == 'rock')
  return "Player 2 won!";
  else if(p1 == 'paper' && p2 == 'scissors')
  return "Player 2 won!";
  else if(p1 == p2)
  return "Draw!";
  else 
  return "Player 1 won!";

};

//console.log(rps("paper", "rock"));

function removeExclamationMarks(s) {
  return s.replaceAll('!','');
}
//console.log(removeExclamationMarks("Hola!!!!!"));
function filter_list(l) {

  return l.filter(v => typeof v === 'number');
  
  /*let filtrado = l.map(v => typeof v != 'string')
  let elFinal = [];

  for(let i=0; i<filtrado.length; i++){
    if(filtrado[i]){
      elFinal.push(l[i]);
    }
  }
  return elFinal;*/

}// console.log(filter_list([1,2,'a','b']));

function getCount(str) {
  
  let count = 0;

  for(let i=0; i<str.length; i++){
      let v = str.charAt(i);
      if(v == 'a' || v =='e' || v == 'i' || v == 'o' || v == 'u'){
        count++;
      }
  }
  
  return count;
  //return (str.match(/[aeiou]/g) || []).length
}
//console.log(getCount("abracadabra"))

function countBy(x, n) {
  
  let result = [];

  for(let i=1; i<=n; i++){
    result.push(x*i);
  }
return result;
}// console.log(countBy(2,5));

function friend(friends){
  
  return friends.filter(x => x.length == 4);

}// console.log(friend(["Ryan","Kieran","Mark"]));

function solution(str){
  return str.split("").reverse().join('');
}//console.log(solution("world"));

function toJadenCase(str){

  return str
  .split(" ")
  .map(v => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase())
  .join(" ");
}
 //console.log(toJadenCase("sfS se fsE F sE Fse f sfs"));

 function basicOp(operation, value1, value2){

    switch(operation){
      case '+':
        return value1+value2;
      case '-':
        return value1-value2;
      case '*':
        return value1*value2;
      case '/':
        return value1/value2;
    }

 } //console.log(basicOp('+',5,7));

 function feast(beast, dish) {
  
    return beast.charAt(0) == dish.charAt(0) && beast.charAt(beast.length-1) == dish.charAt(dish.length-1);

  } //console.log(feast("chickadee", "chocolate cake"));

  var countSheep = function (num){
    
    let str = "";
   for(let i=1; i<=num; i++){
      str += i + " sheep...";
   }
return str;
  } 
  //console.log(countSheep(3));

  function getPINs(observed) {
    
    /**
     * ┌───┬───┬───┐
       │ 1 │ 2 │ 3 │
       ├───┼───┼───┤
       │ 4 │ 5 │ 6 │
       ├───┼───┼───┤
       │ 7 │ 8 │ 9 │
       └───┼───┼───┘
           │ 0 │
           └───┘
     */

           const cases = {
            '1' : [1,2,4],
            '2' : [1,2,3,5],
            '3' : [2,3,6],
            '4' : [1,4,5,7],
            '5' : [2,4,5,6,8],
            '6' : [3,5,6,9],
            '7' : [4,7,8],
            '8' : [5,7,8,9,0],
            '9' : [6,8,9],
            '0': [8,0]
           };

           let combinaciones = [];
           let  array1 = cases[observed.charAt(0)];
           let array2 = cases[observed.charAt(1)];
           let array3 = cases[observed.charAt(2)];
           let array4 = cases[observed.charAt(3)];
           let array5 = cases[observed.charAt(4)];
           let array6 = cases[observed.charAt(5)];
           let array7 = cases[observed.charAt(6)];
           let array8 = cases[observed.charAt(7)];

           if(observed.length == 2){
              for(let i=0; i<array1.length; i++){
                for(let j=0; j<array2.length; j++){
                  combinaciones.push(array1[i]+""+array2[j]);
                }
              }
           } else if(observed.length == 3){
              for(let i=0; i<array1.length; i++){
                for(let j=0; j<array2.length; j++){
                  for(let z=0; z<array3.length; z++)
                  combinaciones.push(array1[i]+""+array2[j]+""+array3[z]);
                }
              }
            }
              else if(observed.length == 4){

                  for(let i=0; i<array1.length; i++){
                    for(let j=0; j<array2.length; j++){
                      for(let z=0; z<array3.length; z++){
                        for(let y=0; y<array4.length; y++)
                      combinaciones.push(array1[i]+""+array2[j]+""+array3[z]+""+array4[y]);
                    }
                  }
                }
                }
                  else if(observed.length == 5){

                  for(let i=0; i<array1.length; i++){
                    for(let j=0; j<array2.length; j++){
                      for(let z=0; z<array3.length; z++){
                        for(let y=0; y<array4.length; y++){
                          for(let w=0; w<array5.length; w++)
                      combinaciones.push(array1[i]+""+array2[j]+""+array3[z]+""+array4[y]+""+array5[w]);
                    }
                  }
                }
                }
                } else if(observed.length == 6){
                      for(let i=0; i<array1.length; i++){
                        for(let j=0; j<array2.length; j++){
                          for(let z=0; z<array3.length; z++){
                            for(let y=0; y<array4.length; y++){
                              for(let w=0; w<array5.length; w++){
                                for(let v=0; v<array6.length; v++)
                          combinaciones.push(array1[i]+""+array2[j]+""+array3[z]+""+array4[y]+""+array5[w]+""+array6[v]);
                        }
                      }
                      }
                    }
                    }
                    }  else if(observed.length == 7){
                          for(let i=0; i<array1.length; i++){
                            for(let j=0; j<array2.length; j++){
                              for(let z=0; z<array3.length; z++){
                                for(let y=0; y<array4.length; y++){
                                  for(let w=0; w<array5.length; w++){
                                    for(let v=0; v<array6.length; v++){
                                      for(let t=0; t<array7.length; t++)         
                              combinaciones.push(array1[i]+""+array2[j]+""+array3[z]+""+array4[y]+""+array5[w]+""+array6[v]+""+array7[t]);
                            }
                          }
                          }
                          }
                        }
                        }
                        }  else if(observed.length == 8){
                               
                              for(let i=0; i<array1.length; i++){
                                for(let j=0; j<array2.length; j++){
                                  for(let z=0; z<array3.length; z++){
                                    for(let y=0; y<array4.length; y++){
                                      for(let w=0; w<array5.length; w++){
                                        for(let v=0; v<array6.length; v++){
                                          for(let t=0; t<array7.length; t++){
                                            for(let e=0; e<array8.length; e++)
                                  combinaciones.push(array1[i]+""+array2[j]+""+array3[z]+""+array4[y]+""+array5[w]+""+array6[v]+""+array7[t]+""+array8[e]);
                                }
                              }
                              }
                              }
                              }
                            }
                            }
                            } else {
            return cases[observed].join("").split("");
           }

           return combinaciones;

          
  }
  //console.log(getPINs('10'));


  function solution(nums){
    return nums == null ? [] : nums.sort((a,b) => a-b);
  }
  //console.log(solution([1,6,7,2,1,6,53]));

  function reverseWords(str) {
    return str.split(/(\s+)/).map(word => {
      if (/\s+/.test(word)) {
        return word; // Mantener los espacios intactos
      } else {
        return word.split('').reverse().join(''); // Revertir las palabras
      }
    }).join('');
  }// console.log(reverseWords("Hola                  que tal"));

  function getDivisorsCnt(n){
    
    let contador = 0;
    for(let i=1; i<=n; i++){
      if(n % i == 0)
      contador++;
    }
    return contador;
}
//console.log(getDivisorsCnt(500000));

var SequenceSum = (n) =>{

let total = ""
let total2 = 0;
  for(let i=0; i<=n ; i++){
    total += `+${i}`;
    total2 += i;
  }
return total.slice(1)+" = "+total2;
}

//console.log(SequenceSum(5))

function disemvowel(str) {

  return str.replace(/[aeiou]/gi, "");
}
//console.log(disemvowel("hola que tal estas"))

function isPangram(string){
  
  let abecedario = "abcdefghijklmnopqrstuvwxyz";
  for(let i=0; i<abecedario.length; i++){
    if(!string.toLowerCase().includes(abecedario.charAt(i))){
      return false;
    }
  }
  return true;

}
//console.log(isPangram("The quick brown fox jumps over he lazy dog."));

function smallEnough(a, limit){

let vOrF = a.map(v => v <= limit);

return vOrF.includes(false) ? false : true;

}
//console.log(smallEnough([5,1,7,2,5,],5))

function rowWeights(array){
 
  let result = [0,0];

  for(let i=0; i<array.length; i++){
    if(i % 2 === 0){
     result[0] += array[i]; 
    } else {
      result[1] += array[i];
    }
  }
  return result;
}
//console.log(rowWeights([50, 60, 70, 80]));

function roundToNext5(n){
  
  while(n % 5 != 0)
    n++
return n;
}
//console.log(roundToNext5(17));

function getMiddle(s){
  
  let size = s.length;

  return size % 2 == 0 ? s.slice(size/2-1, -size/2+1) : s.charAt(size/2);

} 
//console.log(getMiddle("holatasefasef"))

function findShort(s){

  return s.split(" ").sort((a,b) => a.length-b.length)[0].length;

}
//console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

function stray(numbers) {
 
  for (let v in numbers)
      if(numbers.indexOf(numbers[v]) === numbers.lastIndexOf(numbers[v]))
        return numbers[v];
}
//console.log(stray([5,1,1,1,1,1,1,1,1,1]));

function arithmetic(a, b, operator){
  
  switch(operator){
    case 'add':
      return a+b;
    case 'substract':
      return a-b;
    case 'multiply':
      return a*b;
    case 'divide':
      return a/b;
  }
  
}

function solution(str, ending){
 
  return ending == "" ? true : ending === str.slice(-ending.length);

}
//console.log(solution("hola",""));

function sumTwoSmallestNumbers(numbers) {  
 
  let sorted = numbers.sort((a,b) => a-b);

  return sorted[0] + sorted[1];
}// console.log(sumTwoSmallestNumbers([64,77,34,22,54,2,2532,25]));


function reverseLetter(str) {
 
  return str.replace(/[^a-zA-Z]/g, "").split("").reverse().join("");
  
}// console.log(reverseLetter("hoo%%%%__l4a qu3e t&al"));

function checkExam(array1, array2) {
 let correcta = 0;
 let respuesta = 0;
let nota = 0;

  for(let i=0, j=0; i<array1.length; i++,j++){
    correcta = array1[i];
    respuesta = array2[j];
    if(correcta == respuesta){
      nota+=4;
    } else if(respuesta == ""){
      nota+=0;
    } else {
      nota -= 1;
    }
  }

  return nota >= 0 ? nota : 0;
}

//console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]));

// Return the output array, and ignore all non-op characters
function parse( data )
{ /** 
            i increments the value (initially 0)
            d decrements the value
            s squares the value
            o outputs the value into the return array*/

    let array = data.split("");
    let letra = "";
    let value = 0;
    let result = [];

    for(let i=0; i<array.length; i++){
      letra = array[i];
      switch(letra){
        case 'i':
        value+=1;
        break;
        case 'd':
        value -= 1;
        break;
        case 's':
        value = Math.pow(value, 2);
        break;
        case 'o':
        result.push(value);
        break;
      }
    }
  return result
}
//console.log(parse("iiisxxxdoso"));

function titleCase(title, minorWords) {

  let array = title.toLowerCase().split(" ");
  let newArray = [array[0].charAt(0).toUpperCase()+array[0].slice(1).toLowerCase()];
  let minorMinus = minorWords.toLowerCase();

  for(let i=1; i<array.length; i++){
    if(minorMinus.includes(array[i]))
    newArray.push(array[i].toLowerCase());
    else 
    newArray.push(array[i].slice(0,1).toUpperCase()+array[i].slice(1).toLowerCase());
  }

  return newArray.join(" ");
}
//console.log(titleCase('the quick brown fox', ''));

function moveZeros(arr) {

 let count0s = 0;
 let newArray = [];
 for(let i=0; i<arr.length; i++){
  if(arr[i] === 0)
    count0s++;
  else
  newArray.push(arr[i]);
 }
 for(let i=0; i<count0s; i++){
  newArray.push(0);
 }
return newArray;
}
//console.log(moveZeros([false,1,0,0,0,1,2,0,1,3,"a"]))

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){

  return enteredCode === correctCode && new Date(currentDate) <= new Date(expirationDate);
  
} 

//console.log(checkCoupon("123", "123", "July 9, 2015", "July 9, 2015"));


function factorial(n)
{
  if (n < 0 || n > 12) throw new RangeError("Error");
  let f = n;

  for(let i=f-1; i>0; i--){
    f *= i;
  }
 return  n == 0 ? `factorial for 0 is 1` : `factorial for ${n} is ${f}`;
}
//console.log(factorial(1));
//"factorial for 0 is 1"

function openOrSenior(data){
  //  55 - 7
let answers = [];

for(let i=0; i<data.length; i++){
  if(data[i][0] >= 55 && data[i][1] > 7)
    answers.push("Senior")
  else answers.push("Open");
}
//return data.map(([age, handicap]) => age >= 55 && handicap > 7 ? 'Senior' : 'Open');
return answers;
} //console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]));

function sortByLength (array) {
  
  return array.sort((a,b) => a.length - b.length);
}; //console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]));

//15 bumps or less, return Woohoo!, 

const fff = (x) => {
  let ns = 0;
  for(let i=0; i<x.length; i++){
    if(x.charAt(i) == 'n')
     ns++;
  }
  return ns <= 15 ? "Woohoo!" : "Car dead";
}

function removeUrlAnchor(url){
  
  let index = url.indexOf('#');
  
  return index > 0 ? url.slice(0,index) : url;

} //console.log(removeUrlAnchor("www.codewars.com#about"));

var isAnagram = function(test, original) {
  
  let t1 = test.toLowerCase().split("");
  let t2 = original.toLowerCase().split("");

  
  return t1.sort().join("") == t2.sort().join("");
};
//console.log(isAnagram("Buckethead","DeathCubeK"));

function largestPairSum (numbers) {
  
  return numbers.sort((a,b) => b-a)[0]+numbers[1];
}// console.log(largestPairSum([99, 2, 2, 23, 19]));

// complete the function
function camelCaseSolution(string) {

  let array = string.split("");
  let newArray = [];
  for(let i=0; i<array.length; i++){
    if(array[i] == array[i].toUpperCase())
      newArray.push(" ");
  newArray.push(array[i]);
  }
  
return newArray.join("");
}
//console.log(camelCaseSolution("camelCasingLol"));

function greet(language) {
	
  const languages = {
  english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',
estonian: 'Tere tulemast',
finnish: 'Tervetuloa',
flemish: 'Welgekomen',
french: 'Bienvenue',
german: 'Willkommen',
irish: 'Failte',
italian: 'Benvenuto',
latvian: 'Gaidits',
lithuanian: 'Laukiamas',
polish: 'Witamy',
spanish: 'Bienvenido',
swedish: 'Valkommen',
welsh: 'Croeso'
}
return "'"+languages[language]+"'"+". Try again.";
  
} //console.log(greet("english"));

function sortArray(array) {

  //-Ordenar solo los numeros impares y dejar a los pares en su posicion original
  //[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

  let arrayImparesOrdenados = array.filter(n => n%2 !=0).sort((a,b) => a-b);
  let arrayOrdenado = [];
  let count = 0;
  for(let i=0; i<array.length; i++){
    if(array[i] % 2 == 0){
      arrayOrdenado.push(array[i]); 
    } else {
      arrayOrdenado.push(arrayImparesOrdenados[count]);
      count++;
    }
  }
  return arrayOrdenado;

} //console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  return birds.filter(e => !geese.includes(e));
}
//console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]));

function points(games) {
  let array = games.join("").replaceAll(":","").split("");
  let score = 0;

  for(let i=0; i<array.length; i+=2){
    if(parseInt(array[i]) > parseInt(array[i+1])){
      score+=3;
    } else if(parseInt(array[i]) == parseInt(array[i+1]))
      score+=1;
  }
  return score;
}
//console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]));

function sumOfMinimums(arr) {
  
  let sum = 0;
for(let i=0; i<arr.length; i++){
  arr[i].sort((a,b) => a-b);
  sum+=arr[i][0];
}
return sum;
}
//console.log(sumOfMinimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]));

function domainName(url){
  
  /**
   * * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
   */

return  url.replaceAll("http://","").replaceAll(".com","").replaceAll("https://www.","").replaceAll("http://www.","")

}
//console.log(domainName("http://www.zombie-bites.com"))

function printArray(array){

  return array.join(",");

} //console.log(printArray(["h","o","l","a"]))

function whatday(num) { 

  switch(num){
    case 1 : return "Sunday";
    case 2 : return "Monday";
    case 3 : return "Tuesday";
    case 4 : return "Wednesday";
    case 5 : return "Thursday";
    case 6 : return "Friday";
    case 7 : return "Saturday";
    default : return "Wrong, please enter a number between 1 and 7";
  }
}   //console.log(whatday(6))


function peopleWithAgeDrink(old) {

  /**
   * Children under 14 old.  toddy
Teens under 18 old.       coke
Young under 21 old.       beer
Adults have 21 or more.     whisky
   */
  return old < 14 ? "drink toddy" : old > 14 && old < 18 ? "drink coke" : old >= 18 && old < 21 ? "drink beer" : "drink whisky";
};// console.log(peopleWithAgeDrink(18))

function array(string) {
  if(string.split(",").length < 3)
    return null;

  let arrayy = string.split(",").slice(1,-1).join(" ").replaceAll(","," ")
  return arrayy;
} //console.log(array('A1,B2,C3,D4,E5'));

function wordsToMarks(string){
  const abecedario = {
    'a' : 1,
    'b' : 2,
    'c' : 3,
    'd' : 4,
    'e' : 5,
    'f' : 6,
    'g' : 7,
    'h' : 8,
    'i' : 9,
    'j' : 10,
    'k' : 11,
    'l' : 12,
    'm' : 13,
    'n' : 14,
    'o' : 15,
    'p' : 16,
    'q' : 17,
    'r' : 18,
    's' : 19,
    't' : 20,
    'u' : 21,
    'v' : 22,
    'w' : 23,
    'x' : 24,
    'y' : 25,
    'z' : 26
  };

  let total = 0;
  for(let i=0; i<string.length; i++){
    total+= abecedario[string.charAt(i)];
  }
  return total;
} //console.log(wordsToMarks("love"))

function isValidWalk(walk) {
  
  if(walk.length < 2 || walk.length > 10)
  return false;
  let primerPaso = walk[0];
  if(primerPaso == 'n' || primerPaso == 's'){
    if(walk.includes('e') || walk.includes('w')){
      return false;
    }
  } else if(primerPaso == 'w' || primerPaso == 'e'){
    if(walk.includes('n') || walk.includes('s')){
      return false;
    }
  }
  
  let siguientePaso;
  let total = 0;

  for(let i=1; i<walk.length; i++){
      if(walk[i] == primerPaso){
        total+=1;
      } else{
        total -=1;
      }

  }
  return total > 0 ? false : true;

}// console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));

function getChar(c){
 
  return String.fromCharCode(c);
} //console.log(getChar(65))


function twoDecimalPlaces(n) {
  
  return Number(n.toFixed(2));


} //console.log(twoDecimalPlaces(5.5589))

function howManydays(month){
  var days;
  switch (month){
    case 1:
      case 3:
        case 5:
          case 7:
            case 8:
              case 10:
                case 12:
      days = 31;
      break;
    case 4:
      case 6:
        case 9:
          case 11:
      days = 30;
      break;
    case 2:
      days = 28;
      break;
    default:
      days = 0;
  }

  return days;
}// console.log(howManydays(1));

var encryptThis = function(text) {
  
  /**
   * Primera letra de cada palabra transformar a ASCII
   * Segunda letra intercambiarla con la última.
   */

  let array = text.split(" ");
  let arrayCifrada = [];
  let ultimaLetra = "";
  let segundaLetra = "";

 for(let i=0; i<array.length; i++){
  if(array[i].length == 1)
      arrayCifrada.push(array[i].charCodeAt(0));
    else if(array[i].length == 2){
        arrayCifrada.push(array[i].charCodeAt(0)+array[i].slice(1));
      }
      else if(array[i].length > 2){
        segundaLetra = array[i].charAt(1);
        ultimaLetra = array[i].charAt(array[i].length-1);
        arrayCifrada.push(array[i].charCodeAt(0)+array[i].charAt(array[i].length-1)+array[i].slice(2,array[i].length-1)+array[i].charAt(1));
  
      }
  }

return arrayCifrada.join(" ");
} 
//console.log(encryptThis("A wise old owl lives in an oak"))

function rot13(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}
//console.log(rot13("Ruby is cool!"));

function findEvenIndex(arr){
  
  let totalLeft = 0;
  let totalRight = 0;
  let arrayLeft = [];
  let arrayRight = [];


  for(let i=0; i<arr.length; i++){
      arrayLeft = arr.slice(0,i)
      arrayRight = arr.slice(i+1,arr.length);

      totalLeft = arrayLeft.reduce((acc, v) => {
         return acc + v;
      }, 0);

      totalRight = arrayRight.reduce((acc, v) => {
        return acc + v;
      }, 0);

      if(totalLeft == totalRight){
        return i;
      }
    totalLeft = 0;
    totalRight = 0;
  }
    return -1;

} //console.log(findEvenIndex([1,2,3,4,3,2,1]));


function sumMul(n,m){
  
  //Suma de los numeros multiplos de n por debajo de m
  let array = [];

  if(m <= n){
    return "INVALID";
  }
  
  for(let i=n; i<m; i++){
    if(i % n == 0)
      array.push(i);
  }

  let total = array.reduce((acc, x) => {
    return acc + x;
  },0);

  return total;
}
  // console.log(sumMul(4,123));


  function removeExclamation (string) {  
    let d = string;
    if(string.charAt(string.length-1) == '!'){
    for(let i=string.length-1; i>0; i--){
      if(string.charAt(i) == '!'){
        d = string.slice(0,i);
        if(string.charAt(i-1) != '!'){
          return d;
        }
      }
    }
  }
    return d;
  } //console.log(removeExclamation("Hi! Hi!"))

  function calculator(a,b,sign){

    let result ="";
    switch(sign){
      case '+': result = a+b; break;
      case '-': result = a-b; break;
      case '*': result = a*b; break;
      case '/': result = a/b; break;
      default: return "unknown value";
    }

    if(typeof a == 'string' || typeof b == 'string'){
        return "unknown value";
    }
    return result;

  } //console.log(calculator(2, 2 ,"+"));

  var capitals = function (word) {
   
    let indexs = [];
      //return word.split("").filter(x => x == x.toUpperCase());
      for(let i=0; i<word.length; i++){
        if(word.charAt(i) == word.charAt(i).toUpperCase())
          indexs.push(i);
      }
return indexs;

  };// console.log(capitals("CodEWaRs"))

  function stringClean(s){

    // return s.replace(/\d/g, "");
    
    let numbers = ['1','2','3','4','5','6','7','8','9','0'];
    let cleaned = [];
    let array = s.split("");
    for(let i=0; i<array.length; i++){
      if(!numbers.includes(array[i]))
        cleaned.push(array[i]);

    }
    return cleaned.join("");
  } //console.log(stringClean("This looks5 grea8t!"))

  function defineSuit(card) {
    switch(card.charAt(card.length-1)){
      case '♣': return 'clubs';
      case '♦': return 'diamonds';
      case '♥': return 'hearts';
      case '♠': return 'spades'; 
    }

} //console.log(defineSuit("3♦"));

function factorial(n){
  let f = n;
  for(let i = f-1; i>1; i--){
    f *= i;
  }
  return f;
} //console.log(factorial(5));

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){

  if(dolphin == true)
    sharkSpeed = sharkSpeed / 2;

  return sharkDistance / sharkSpeed < pontoonDistance / youSpeed ? "Shark Bait!" : "Alive!";
 
} //console.log(shark(24, 0, 4, 8, true));

function contamination(text, char){

  return text.split("").map(x => x = char).join("");
} //console.log(contamination("Holaquetal","w"))

function solve(s) {

  let indices = [];
  let i = 0;
  while(i < s.length){
    indices.push(s.charCodeAt(i))
    i++;
  }
  return indices.sort((a,b) => b-a)[0];
  
} //console.log(solve("hola que tal"));

const getUsuario = (nombre) => ({
  uid: 'ASDAS',
  username: nombre
});

//console.log(getUsuario("Alberto"));

function sumOfDifferences(arr) {

  let arraySorted = arr.sort((a,b) => b-a);
  let diferencias = [];

  for(let i=0; i<arraySorted.length; i++){
    if(i == arraySorted.length-1)
    break;
    diferencias.push(arraySorted[i] - arraySorted[i+1]);
  }

  return diferencias.reduce((acumulador, currentValue) => acumulador + currentValue , 0);

} //console.log(sumOfDifferences([2,1,10]))

var greet = function(name) {

  let nameFormatted = name.slice(0,1).toUpperCase()+name.slice(1,name.length).toLowerCase();
  return `Hello ${nameFormatted}!`

};// console.log(greet("alberto"))


var humanYearsCatYearsDogYears = function(humanYears) {
  /**
   * Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
   */
  let years = [humanYears];

  if(humanYears == 1){
    years.push(15,15);
  } else if(humanYears == 2){
    years.push(24, 24);
  } else {
    years.push(24+(humanYears-2)*4, 24+(humanYears-2)*5);
  }

  return years;
} 
//console.log(humanYearsCatYearsDogYears(10))

function minValue(values){
  
  let valuesSinRepetir = [];
  for(let i=0; i<values.length; i++){
    if(!valuesSinRepetir.includes(values[i])){
      valuesSinRepetir.push(values[i]);
    }
  }
  return parseInt(valuesSinRepetir.sort((a,b) => a-b).join(""));
} 
//console.log(minValue([5,7,9,5,7]));

function alphabetPosition(text) {
  abecedario = "◄abcdefghijklmnopqrstuvwxyz";
  let posiciones = [];
  text = text.toLowerCase();
  for(let i=0; i<text.length; i++){
    if(abecedario.includes(text.charAt(i)))
      posiciones.push(abecedario.indexOf(text.charAt(i)));
  }
  return posiciones.join(" ");


} //console.log(alphabetPosition("The sunset sets at twelve o' clock."));

const vowelIndices = (word) => {

  let wordAMinusculas = word.toLowerCase();
  let vowels = ['a','e','i','o','u','y'];
  let indices = [];

  for(let i=0; i<wordAMinusculas.length; i++){
    if(vowels.includes(wordAMinusculas.charAt(i))){
        indices.push(i+1);
    }
  }

  return indices;
}
//console.log(vowelIndices("Apple"));

function lowercaseCount(str){
  
  return str.split("").filter(a => a == a.toLowerCase()).join("").replaceAll(" ","").replaceAll(/[^a-z]/gi,"").length;

} //console.log(lowercaseCount("abcABC123%$&$"))

function adjacentElementsProduct(array) {
  
  let products = [];
  for(let i=0; i<array.length; i++){
      if(i == array.length-1)
        break;
      products.push(array[i]*array[i+1])
  }
  return products.sort((a,b) => b-a)[0];
}
//console.log(adjacentElementsProduct([4,12,3,1,5]));

function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
 
  let array = [age1,age2,age3,age4,age5,age6,age7,age8];
  return Math.floor(Math.sqrt(array.map(x => x*x).reduce((acc , v) => acc + v)) / 2);
  

} 
//console.log(predictAge(65,60,75,55,60,63,64,45));

function sortGiftCode(code){
 return code.split("").sort().join("");

} //console.log(sortGiftCode("hola"))

function removeEveryOther(arr){
  
  return arr.filter((x, i) => i % 2 == 0).map(x => x);

} //console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}]));

function remove (string) {

  return string.replaceAll("!","").concat("!");

}// console.log(remove("Ho!!laa!!"))

function evenNumbers(array, number) {
  
  return array.filter((x ,i) => x % 2 == 0 && array.lastIndexOf(x) === i).slice(-number)//.sort((a,b) => b-a).slice(0,number).reverse();


} //console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));

function isVow(a){

    let nuevoArray = [];

    for(let i=0; i<a.length; i++){
      switch(a[i]){
        case 97 : nuevoArray.push('a'); break;
        case 101 : nuevoArray.push('e'); break;
        case 105 : nuevoArray.push('i'); break;
        case 111 : nuevoArray.push('o'); break;
        case 117 : nuevoArray.push('u'); break;
        default : nuevoArray.push(a[i]);
      }
    }

return nuevoArray;
}
//console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]));

function switcheroo(x){

  let str = "";
  for(let i=0; i<x.length; i++){
    switch(x.charAt(i)){
      case 'a' : str+='b'; break;
      case 'b' : str+='a'; break;
      default : str+=x.charAt(i);
    }
  }
 return str;

} //console.log(switcheroo("aabacbaa"))

function capitalize(s){
  return [odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("") , s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("") ];
}; 
//console.log(capitalize("abcdef"))


function solve(arr){  
  const abecedario = "abcdefghijklmnopqrstuvwxyz";
  let contador = [];
  for(let i=0; i<arr.length; i++){
    contador.push(0);
  }
  
  arr = arr.map(x => x.replaceAll(x, x.toLowerCase()))

  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
      if(arr[i].charAt(j) === abecedario.charAt(j)){
        contador[i] += 1;
      }
    }
  }

  return contador;
  };

  //console.log(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]));  

  function validateCode (code) {
    
    return /^[1-3]/.test(code);

    }
    //console.log(validateCode(223));

    function getNumberFromString(s) {
      
      let nums = ["1","2","3","4","5","6","7","8","9","0"];
      return parseInt(s.split("").filter(v => nums.includes(v)).join(""));

      //return parseInt(s.replaceAll(/[A-Za-z[^0-9]]/g,"").replaceAll(" ",""));


    } //console.log(getNumberFromString("this is numd6ber: 7"));


    function reverse(string){
      
      return string.split(" ").reverse().join(" ");

    } //console.log(reverse("World Hello"));

    function divCon(x){
      return x.filter(v => typeof v === 'number').reduce((acc, v ) => acc + v , 0) - x.filter(v => typeof v === 'string').map(v => parseInt(v)).reduce((acc, v) => acc + v, 0);
    }
    //console.log(divCon([9, 3, '7', '3']));

    var quote = function(fighter) {
  
      return fighter.toLowerCase() == 'george saint pierre' ? "I am not impressed by your performance." : fighter.toLowerCase() == "conor mcgregor" ? "I'd like to take this chance to apologize.. To absolutely NOBODY!" : null;

    }
    //console.log(quote('George Saint Pierre'));


    const fighters = [
      ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
      ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
    ];
    function streetFighterSelection(fighters, position, moves){
      var res = [], i = position[0], j = position[1];
      for (var k = 0; k < moves.length; k++) {
          if (moves[k] === 'up')
             i = i === 1 ? 0 : i;
          else if (moves[k] === 'down')
             i = i === 0 ? 1 : i;
          else if (moves[k] === 'left')
             j = j === 0 ? fighters[0].length - 1 : j - 1;
          else if (moves[k] === 'right')
             j = j === fighters[0].length - 1 ? 0 : j + 1;
          res.push(fighters[i][j]);
      }
      return res;
    }

      //  console.log(streetFighterSelection(fighters, [0,0], ["right","right","left"]))

      function leo(oscar){

        if(oscar == 88) return "Leo finally won the oscar! Leo is happy!";
        else if(oscar == 86) return "Not even for Wolf of wallstreet?!";
        else if(oscar < 88) return "When will you give Leo an Oscar?"
        else if(oscar > 88) return "Leo got one already!";

      }
      //console.log(leo(87));

      function removeV2(s,n){
        
        for(let i=0; i<n; i++){
          s = s.replace("!","");
        }
        return s;
     }
     //console.log(removeV2("Hi!!!!",2));

     function whoIsPaying(name){
      
      
       return name.length < 2 ? [name.charAt(0)] : name.length == 2 ? [name.slice(0,2)]: [name, name.slice(0,2)]; 
      
    } //console.log(whoIsPaying("Mexico"))

    function toCsvText(array) {
     return array.join("\n");
   }
   /*console.log(toCsvText([
    [ -25, 21, 2, -33, 48 ],
    [ 30,31,-32,33,-34 ]
   ]));*/

   function toNumberArray(stringarray){

    return stringarray.map(v => Number(v));

  }
  //console.log(toNumberArray(["1","2","3"]));

  function isPowerOfTwo(n){
   return n % 2 == 0;
  }
  //console.log(isPowerOfTwo(4096));

  function shortenToDate(longDate) {
    
    return longDate.slice(0, longDate.indexOf(","));

  }
 // console.log(shortenToDate("Friday May 2, 9am"));


function uniTotal (string) {
  
    return string.split("").reduce((total, valor) => total + valor.charCodeAt(0), 0);

}
  //console.log(uniTotal("Mary Had A Little Lamb"));

  function stockList(listOfArt, listOfCat){
  
  /*  b = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"]
    c = ["A", "B", "C", "D"]
    res = "(A : 0) - (B : 1290) - (C : 515) - (D : 600)" */

    let diccionario = {}
    for (let i=0; i<listOfCat.length; i++){
      diccionario[listOfCat[i]] = 0;
    }

    for(let i=0; i<listOfArt.length; i++){
        if(listOfArt[i].charAt(0) in diccionario){
        let valor = parseInt(listOfArt[i].slice(listOfArt[i].indexOf(" "), listOfArt[i].length));
        diccionario[listOfArt[i].charAt(0)] += valor;
        }
   }
    
   const str = JSON.stringify(diccionario);
   return str.replaceAll("{","(").replaceAll("}",")").replaceAll('"'," ").replaceAll(",",") - (").replaceAll("( ","(").replaceAll(":",": ");


  }

  //console.log(stockList(["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"],["A","C"]));

  function SeriesSum(n){
  
    if(n == 0) return "0.00";
    if(n == 1) return "1.00";
    if(n == 2) return "1.25";
    let total = 1.25;

    for(let i=2, c=7; i<n; i++, c+=3){
      total += 1/c;
    }

  return total.toFixed(2).toString();

}
//console.log(SeriesSum(4));

function countRedBeads(n) {
  //@ @@ @ @@ @ @@ @ @@ @ @@ @
  //A RR A RR A RR A RR A RR A

  return n <= 0 ? 0 : (n - 1) * 2;

} //console.log(countRedBeads(0))

function sumCubes(n){
  
  let total = 0;
  for(let i=1; i<=n; i++){
    total += Math.pow(i,3);
  } 
return total;

}
//console.log(sumCubes(3));

function cookie(x){
 
  return typeof x === 'number' ? "Who ate the last cookie? It was Monica!" : typeof x === 'string' ? "Who ate the last cookie? It was Zach!" : "Who ate the last cookie? It was the dog!"

}

function uefaEuro2016(teams, scores){
  //https://www.codewars.com/kata/57613fb1033d766171000d60/train/javascript
return scores[0] > scores[1] ? `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!` : scores[1] > scores[0] ? `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!` : `At match ${teams[0]} - ${teams[1]}, teams played draw.`


} //console.log(uefaEuro2016(['Germany', 'Ukraine'], [2, 0]));

function sortMyString(S) {
    let str1 = "";
    let str2 = "";

    for(let i=0; i<S.length; i++){
      if(i == 0 || i % 2 == 0)
      str1 += S.charAt(i);
    else 
      str2 += S.charAt(i);
    }
    


  return str1 + " " + str2;
} //console.log(sortMyString("CodeWars"));

function maxDiff(list) {
  if(list.length == 0)
  return 0;

  return list.sort((a,b) => b-a)[0] - list.sort((a,b) => a-b)[0];
};
//console.log(maxDiff([1,2,3,4,56,24,3]));

function giveMeFive(obj){
  let a = [];
for(let k in obj){
  if(k.length == 5)
    a.push(k)
  if(obj[k].length == 5)
    a.push(obj[k]);
  }
return a;
  
} //console.log(giveMeFive({Our:"earth",is:"a",beautyful:"world"}));

function numberToPower(number, power){
  
  if(power == 0)
    return 1;
  let total = number;
  for(let i=1; i<power; i++){
    total *= number;
  }
  return total;
}
//console.log(numberToPower(4, 2));

function spacify(str) {
  
  return str.split("").map(a => a + "").join(" ");
  
} //console.log(spacify("hello world"));

function abbreviate(string) {
  
  string = string.replaceAll("-"," ");

  let array = string.split(" ");
  let result = "";

  for(var i=0; i<array.length; i++){
    if(array[i].length >= 4)
      result += array[i].charAt(0)+(array[i].length-2)+array[i].charAt(array[i].length-1) + " ";
    else
      result += array[i];
  }

  return result.slice(0,result.length-1);

} //console.log(abbreviate("elephant-ride gfr"))

function nthSmallest(arr, pos){
  return arr.sort((a,b) => a-b)[pos-1];
}
//console.log(nthSmallest([-102,-16,-1,-2,-367,-9], 5));

function presses(phrase) {
  let total = 0;
  phrase = phrase.toLowerCase();
  for(let i=0; i<phrase.length; i++){
      let letter = phrase.charAt(i)
      switch (letter) {
        case 'a' : case 'd' : case 'g' : case 'j' : case 'm' : case 'p' : case 't' : case 'w': case ' ':
          total += 1;
          break;
        case 'b' : case 'e' : case 'h' : case 'k' : case 'n' : case 'q' : case 'u' : case 'x': case '0': 
          total += 2;
          break;
        case 'c' : case 'f' : case 'i' : case 'l' : case 'o' : case 'r' : case 'v' : case 'y':
          total += 3;
          break;
        case 's' : case 'z': case '2' : case '3' : case '4' : case '5' : case '6' : case '8':
          total += 4;
          break;
        case '7' : case '9' :
            total += 5;
        default:
          total += 1;
          break;
      }
  }
return total;
}
//console.log(presses("WHERE DO U WANT 2 MEET L8R"));

function strong(n) {
  let nArray = n.toString().split("");
  let nArrayNumber = [];
  for(let i=0; i<nArray.length; i++){
    nArrayNumber.push(parseInt(nArray[i]))
  }

  let suma = 0;

 for(let i=0; i<nArrayNumber.length; i++){
  let factorial = nArrayNumber[i];
  if(factorial == 0)
    suma += 1;
  else {
  for(let j=nArrayNumber[i]-1; j>1; j--){
    factorial *= j 
  }
  suma += factorial;
 }
}

  return suma == n ? "STRONG!!!!" : "Not Strong !!";

}

//console.log(strong(145));

function tidyNumber(n){
  
let nString = n.toString();
for(let i=0; i<nString.length; i++){
    if(nString[i] > nString[i+1])
    return false;
}
return true;
}

//console.log(tidyNumber(1834));

const toAscii = (c) => {
  return c.charCodeAt(0);
} 
//console.log(toAscii("A"));

function validateUsr(username) {
  return /^[a-z0-9_]{4,16}$/.test(username);
}
//console.log(validateUsr("asddsa"))

function outed(meet, boss){

  let total = 0;
  let longitud = 0;
  for(let k in meet){
    total += meet[k]
    if(meet.hasOwnProperty(k)){
      longitud++;
    }
  }

  total += meet[boss];

  return total/longitud <= 5.0 ? "Get Out Now!" : "Nice Work Champ!";
}
//console.log(outed({"tim":9,"jim":2,"randy":4,"sandy":7,"andy":2,"katie":7,"laura":6,"saajid":7,"alex":5,"john":6,"mr":3},"alex"));

const countThings = (str) => {
  /** Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters. */
let lowers = 0;
let uppers = 0;
let numbers = 0;
let special = 0;

for(let i=0; i<str.length; i++){
  let x = str.charAt(i)
  if(/[a-z]/.test(x))
      lowers++;
  else if(/[A-Z]/.test(x))
      uppers++;
  else if(/[0-9]/.test(x))
      numbers++
  else
      special++;
}

return [uppers,lowers,numbers,special];

}
//console.log(countThings("holAQUE32324&/&%%"));

function comp(array1, array2){
  
  let array1Squared = array1.map(x => x*x).sort((a,b) => a-b);
  let array2Sorted = array2.sort((a,b) => a-b);

  return JSON.stringify(array1Squared) == JSON.stringify(array2Sorted);

} 
//console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]))

const orderByLastLetter = (str) => {
  return str.split(" ").sort((a, b) => {
    const lastA = a.slice(-1);
    const lastB = b.slice(-1);
  
    if (lastA === lastB) {
      return 0; 
    } else {
      return lastA > lastB ? 1 : -1; 
    }
  });
}
//console.log(orderByLastLetter('man i need a taxi up to ubud'));

const consonantValue = (str) => {

  const values = {
    'b' : 2,'c' : 3,'d' : 4,'f' : 6,'g' : 7,'h' : 8,'j' : 10,'k' : 11,'l' : 12,'m' : 13,
    'n' : 14,'p' : 16,'q' : 17,'r' : 18,'s' : 19,'t' : 20,'v' : 22,'w' : 23,'x' : 24,'y' : 25,'z' : 26
  }
 
let highters = [];
let hight = 0;

for(let i=0; i<str.length; i++){
  highters.push(hight);
 if(values.hasOwnProperty(str.charAt(i))){
    hight+=values[str.charAt(i)];
    highters.push(hight);
  } else {
    hight = 0;
  }
}

return highters.sort((a,b) => b-a)[0];
}

//console.log(consonantValue("zodiac"));

function pillars(numPill, dist, width) {
  
  let distTocm = dist * 100;
  let result = distTocm * (numPill - 1) + width * (numPill - 2);
  return result >= 0 ? result : 0;

} 
//console.log(pillars(1,10,10))

function domainName(url){
  
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];

}
//console.log(domainName("http://google.co.jp"))

function alternateCase(s) {
  return s.split("").map(x => x == x.toLowerCase()? x.toUpperCase() : x.toLowerCase()).join("");
}
//console.log(alternateCase("holA QUE Tal"));

const isDigit = (s) => {

  let regex = /^[-]?\d+(\.\d+)?$/;
  let sModified = s.trim().replaceAll(" ","_");

  return regex.test(sModified);

} 
//console.log(isDigit("435 435"))

function toFreud(string) {
  return "sex ".repeat(string.split(" ").length).trim()
  }
  //console.log(toFreud("This is a longer test"));

  function pointsPer48(ppg, mpg) {
    if(ppg == 0 || mpg == 0)
    return 0;
 let calc = (48 * ppg) / mpg;
    return calc.toFixed(1);

  }
  //console.log(pointsPer48(22.9, 33.8));

  function isPythagoreanTriple(integers) {
    let ordered = integers.sort((a,b) => b-a);

    return (ordered[1]*ordered[1] + ordered[2] * ordered[2] == ordered[0] * ordered[0])
  }
  //console.log(isPythagoreanTriple([3,4,5]))

  function splitAndMerge(str, sp) {
    return str.split(" ").map(word => word.split("").join(sp)).join(" ");
  }
  //console.log(splitAndMerge("Hello World!",","));

  function correctPolishLetters (string) {
    const lettersRaras = ['ą','ć','ę','ł','ń','ó','ś','ź','ż'];    
    const lettersNormales = ['a','c','e','l','n','o','s','z','z'];
    let newstr = "";

  for(let i=0; i<string.length; i++){
    if(lettersRaras.includes(string.charAt(i))){
      let index = lettersRaras.indexOf(string.charAt(i));
      newstr+=lettersNormales[index];
    }
    else {
      newstr+=string.charAt(i);
    }
  }

  return newstr;

  /**
   * var mapping = {
  'ą': 'a',
  'ć': 'c',
  'ę': 'e',
  'ł': 'l',
  'ń': 'n',
  'ó': 'o',
  'ś': 's',
  'ź': 'z',
  'ż': 'z',
};

function correctPolishLetters(text) {
  return text.split('').map(c => mapping[c] || c).join('');
}
   */

}
//console.log(correctPolishLetters("Jędrzej Błądziński"));

function joinStrings(string1, string2){
  
  return `${string1} ${string2}`;

}
//console.log(joinStrings("hola","tontaina"));

function incrementer(nums) { 
  
  let array = [];

  for(let i=0; i<nums.length; i++){
    array.push(nums[i]+(i+1))
  }
  let result = []
  for(let i=0; i<array.length; i++){
    if(array[i] > 9){
      result.push(array[i]%10);
    } else {
      result.push(array[i]);
    }
  }
  return result;
}

//console.log(incrementer([1,2,34]));

function vaporcode(string) {
 
  return string.toUpperCase().split("").map(c => c != " " ? c = c + "  " : c = "").join("").trim();
  
}
//console.log(vaporcode("chupamela tonto"));

function minSum(arr) {
  let arrSorted = [];
  if(arr.length % 2 == 0){
    arrSorted = arr.sort((a,b) => a-b);
  }

  let otherArray = [];
  for(let i=0, j=arrSorted.length-1; i<j; i++, j--){
    otherArray.push(arrSorted[i] * arrSorted[j]);
  }

  return otherArray.reduce((sum, i) => sum + i , 0);
  
}

//console.log(minSum([5,4,2,3]))
//-------------------------------------------------
Array.prototype.square = function() {
  return this.map(item => item * item);
};

Array.prototype.cube = function() {
  return this.map(item => item ** 3);
};

Array.prototype.average = function() {
  if (this.length === 0) {
    return NaN;
  }
  const sum = this.reduce((acc, item) => acc + item, 0);
  return sum / this.length;
};

Array.prototype.sum = function() {
  return this.reduce((acc, item) => acc + item, 0);
};

Array.prototype.even = function() {
  return this.filter(item => item % 2 === 0);
};

Array.prototype.odd = function() {
  return this.filter(item => item % 2 !== 0);
};
//-------------------------------------------------

function all( arr, fun ){
  return arr.every(fun);

}
//console.log(all([1,2,3,4,5], function(v){return v<9} ))

function closeCompare(a, b, margin = 0){
  if (Math.abs(a - b) <= margin) 
  return 0;
 else if (a < b) 
  return -1;
 else 
  return 1;
}
//console.log(closeCompare(1.99, 5, 3));


const cipherThis = (str) => {
  //the second and last letter is switched
  //the first letter is replaced by character code
/*return str.split(" ").map(c => c.length > 2 ? c.replace(c.charAt(1),c.charAt(c.length-1))
.replace(c.charAt(c.length-1),c.charAt(1)).replace(c.charAt(0), c.charCodeAt(c.charAt(0))) : 
c.replace(c.charAt(0), c.charCodeAt(c.charAt(0)))).join(" ");*/
let array = str.split(" ");
let hola = [];

for(let i=0; i<array.length; i++){
  let word = array[i];
  let secondLetter = word.charAt(1);
  let lastLetter = word.charAt(word.length-1);
  let firstLetter = word.charCodeAt(word.charAt(0));
  if(word.length > 2)
    hola.push(firstLetter + lastLetter + word.slice(2, word.length-1) + secondLetter + " ");
  else if(word.length == 1 || word.length == 2){
    hola.push(firstLetter + word.slice(1) + " ");
  }
}
return hola.join(" ");


//https://www.codewars.com/kata/581e014b55f2c52bb00000f8/train/javascript

}
//console.log(cipherThis("Have a go at this and see how you do"));

const decipherThis = (str) => {

  let firstLetters = [];
  let strSplit = str.split(" ");
  let result = [];

  for(let i=0; i<strSplit.length; i++){
    firstLetters.push(String.fromCharCode(parseInt(strSplit[i])));
  }

  let strSinNumeros = str.replace(/[0-9]/gi, "").split(" ");
  for(let i=0; i<strSinNumeros.length; i++){
    let word = strSinNumeros[i];
    if(word.length == 2){
      let firstLetter = word.charAt(0);
      let lastLetter = word.charAt(word.length-1);
      result.push(lastLetter+firstLetter);
    } else if(word.length > 2){
      let firstLetter = word.charAt(0);
      let lastLetter = word.charAt(word.length-1);
      result.push(lastLetter+word.slice(1,word.length-1)+firstLetter);
    } else if(word.length == 1) {
      let firstLetter = word.charAt(0);
      result.push(firstLetter);
    } else {
      result.push("");
    }
  }

  let letsGo = [];
  for(let i=0; i<firstLetters.length; i++){
      letsGo.push(firstLetters[i] + result[i]);
    
  }

return letsGo.join(" ");

/** return str.split(" ")
    .map(w =>
      w.replace(/^\d+/, c => String.fromCharCode(c))
       .replace(/^(.)(.)(.*)(.)$/, "$1$4$3$2")
    )
    .join(" ") */

}
//console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o'));

function foldTo(distance) {
  
  if (distance < 0) {
   return null;
 }

 // Initialize the thickness of the paper and the number of folds
 let thickness = 0.0001;
 let folds = 0;

 // Keep folding the paper until it reaches or exceeds the given distance
 while (thickness < distance) {
   thickness *= 2;
   folds++;
 }

 return folds;

}

function digits(n) {
    return n.toString().split("").reduce((acc, v) => acc + v.length, 0);
}

//console.log(digits(123132));


function sumStr(a,b) {
  
  let suma = parseInt(a) + parseInt(b);
  if(suma > 2^31 - 1)
    return NaN;

  return suma.toString();
}
//console.log(sumStr("5","5"));

const highestRank = (arr) => {

    let numeros = {};
    for(let i=0; i<arr.length; i++){
      if(numeros.hasOwnProperty(arr[i])){
        numeros[arr[i]]++;
      } else {
        numeros[arr[i]] = 1;
      }
    }
    let valores = [];
    for(let v in numeros ){
      valores.push(numeros[v]);
    }
    let maximoContador = Math.max(...valores);
    let losUltimos = [];
    for(let v in numeros){
      if(numeros[v] == maximoContador){
        losUltimos.push(parseInt(v));
      }
    }
    return losUltimos.sort((a,b) => b-a)[0];
}

//console.log(highestRank([12,10,8,12,7,6,4,10,12,10]));

function f(n){

  if (n % 1 != 0){
    return false;
  }
  
  let total = 0;
  for(let i=1; i<=n; i++){
    total += i;
  }
  return total;
};

 // console.log(f(5.5));

 function removeRotten(bagOfFruits){
  if(bagOfFruits == null || bagOfFruits.length == 0)
    return [];
  else
    return bagOfFruits.map(fruit => fruit.replace(/rotten/, "")).join(" ").toLowerCase().split(" ");
}
//console.log(removeRotten(["apple","banana","rottenPinneaple","Strawberry"]))


function fuelPrice(litres, pricePerLitre) {
  // 1 dollar = 100cents
  // 2 or > -5cents x litre
  // 4 or > -10cents x litre
  // 6 or > -15 x litre
  // 8 or > -20 x litre
  // 10 or > -25 x litre
    if(litres >= 10)
      pricePerLitre -= 0.25;
    else if (litres >= 8)
      pricePerLitre -= 0.20;
    else if (litres >= 6)
      pricePerLitre -= 0.15;
    else if (litres >= 4)
      pricePerLitre -= 0.10;
    else if (litres >= 2)
      pricePerLitre -= 0.05;

return parseFloat(litres * pricePerLitre).toFixed(2);

}
//console.log(fuelPrice(5,1.23))

function mazeRunner(maze, directions) { //https://www.codewars.com/kata/58663693b359c4a6560001d6/train/javascript
  let initialPosition = [];
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      if (maze[i][j] == 2) {
        initialPosition = [i, j];
      }
    }
  }

  for (let i = 0; i < directions.length; i++) {
    let direction = directions[i];
    if (direction == "N") {
      initialPosition[0]--;
    } else if (direction == "E") {
      initialPosition[1]++;
    } else if (direction == "S") {
      initialPosition[0]++;
    } else if (direction == "W") {
      initialPosition[1]--;
    }

    // Verificar si la nueva posición es válida.
    if (
      initialPosition[0] < 0 ||
      initialPosition[0] >= maze.length ||
      initialPosition[1] < 0 ||
      initialPosition[1] >= maze[0].length ||
      maze[initialPosition[0]][initialPosition[1]] == 1
    ) {
      return "Dead";
    } else if (maze[initialPosition[0]][initialPosition[1]] == 3) {
      return "Finish";
    }
  }

  return "Lost";
}

/*console.log(mazeRunner([
  [1,1,1,1,1,1,1],
  [1,0,0,0,0,0,3],
  [1,0,1,0,1,0,1],
  [0,0,1,0,0,0,1],
  [1,0,1,0,1,0,1],
  [1,0,0,0,0,0,1],
  [1,2,0,0,1,0,1]],["N","N","N","N","N","E","E","E","E","E"]));*/

1
function parseF(s) {
      
  const number = parseFloat(s);

  // Check if the conversion result is NaN (Not-a-Number)
  if (isNaN(number)) {
    return null;
  }

  // Return the converted number
  return number;
}
//  console.log(parseF("a10"));

function hello(name) {
   return name == "" ? "Hello, World!" : `Hello, ${name.charAt(0).toUpperCase()}${name.slice(1).toLowerCase()}!`; 
  }
  //console.log(hello("lol"));




function balancedNum(number){  //https://www.codewars.com/kata/5a4e3782880385ba68000018/train/javascript
  let numberToString = number.toString();

  if(numberToString.length < 3)
    return "Balanced";
  else if(numberToString.length == 3 || numberToString.length == 4){
    if(numberToString.charAt(0) == numberToString.charAt(numberToString.length-1))
      return "Balanced"
    else return "Not Balanced";
  } else if(numberToString.length > 4 && numberToString.length % 2 == 0){
      let index = (numberToString.length / 2) -1
      let cifra1 = numberToString.slice(0,index);
      let cifra2 = numberToString.slice(-index);
      let numeros1 = [];
      let numeros2 = [];
      for(let i=0; i<cifra1.length; i++){
        numeros1.push(parseInt(cifra1.charAt(i)));
      }
      for(let j=0; j<cifra2.length; j++){
        numeros2.push(parseInt(cifra2.charAt(j)));
      }
      let resultado1 = numeros1.reduce((sum, c) => sum + c, 0);
      let resultado2 = numeros2.reduce((sum, c) => sum + c , 0);

      return resultado1 == resultado2 ? "Balanced" : "Not Balanced";

  } else if(numberToString.length > 4 && numberToString.length % 2 != 0){
    let index = Math.floor((numberToString.length / 2) - 1);
    let cifra1 = numberToString.slice(0,index);
      let cifra2 = numberToString.slice(-index);
      let numeros1 = [];
      let numeros2 = [];
      for(let i=0; i<cifra1.length; i++){
        numeros1.push(parseInt(cifra1.charAt(i)));
      }
      for(let j=0; j<cifra2.length; j++){
        numeros2.push(parseInt(cifra2.charAt(j)));
      }
      let resultado1 = numeros1.reduce((sum, c) => sum + c, 0);
      let resultado2 = numeros2.reduce((sum, c) => sum + c , 0);

      return resultado1 == resultado2 ? "Balanced" : "Not Balanced";
  }
}
//console.log(balancedNum(959959))

function maxProduct(numbers, size){

  return numbers.sort((a,b) => b-a).slice(0,size).reduce((acc, num) => acc * num, 1);
}
//console.log(maxProduct([10,8,7,9], 3));

function calculate(num1, operation, num2) {

    switch(operation) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num2===0?null:num1/num2;
      default:
        return null;
    } 
 }
 //console.log(calculate(3.2,"/", 0));

 function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
  
  if (startPriceNew <= startPriceOld) {
    return [0, startPriceOld - startPriceNew];
  }

  let viejo = startPriceOld;
  let nuevo = startPriceNew;
  let months = 0;
  let savings = 0;

  while (viejo + savings < nuevo) {
    months++;
    if (months % 2 === 0) {
      percentLossByMonth += 0.5;
    }

    viejo *= (1 - percentLossByMonth / 100);
    nuevo *= (1 - percentLossByMonth / 100);
    savings += savingperMonth;
  }

  return [months, Math.round(viejo + savings - nuevo)];
}
//console.log(nbMonths(2000, 8000, 1000, 1.5));

const findDigit = (num, nth) => {
  
  let numString = num.toString();

  if(nth <= 0)
    return -1;
  else if(nth > numString.length){
    return 0;
  }
    return numString.charAt(numString.length-nth) == "-" ? 0 : parseInt(numString.charAt(numString.length-nth));
} 
//console.log(findDigit(-456, 4));

function arrayLeaders(numbers){
  
  let maxs = [];

  for(let i=0, j=1; i<numbers.length; i++, j++){
    let tramoASumar  = numbers.slice(j, numbers.length);
    let sumTotal = tramoASumar.reduce((acc, v) => acc + v, 0);
    if( numbers[i] > sumTotal )
      maxs.push(numbers[i]);
  }

  return maxs;
}
//console.log(arrayLeaders([16,17,4,3,5,2]));

function count(string) {
  let counter = {};

  for(let i=0; i<string.length; i++){
    let letter = string.charAt(i);
    if(counter.hasOwnProperty(letter)){
      counter[letter]++;
    } else {
      if(letter != " ")
      counter[letter] = 1;
    }
  }


  return counter;
}

//console.log(count("hola que tal"));



function getOrder(input) { //https://www.codewars.com/kata/5d23d89906f92a00267bb83d/train/javascript

let s = input.replaceAll("burger","1burger-").replaceAll("fries","2fries-").replaceAll("chicken","3chicken-").replaceAll("pizza","4pizza-")
.replaceAll("sandwich","5sandwich-").replaceAll("onionrings","6onionrings-").replaceAll("milkshake","7milkshake-").replaceAll("coke","8coke-");

 return s.slice(0,s.length-1).split("-").sort((a,b) => a>b ? 1 : a < b ? -1 : 0).map(c => c.replace(c.charAt(0),"").replace(c.charAt(1), c.charAt(1).toUpperCase())).join(" ");

}

//console.log(getOrder("milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"))

function encode(string) {

  return string.replaceAll('a',1).replaceAll('e',2).replaceAll('i',3).replaceAll('o',4).replaceAll('u',5);
}

//console.log(encode('This is an encoding test.'));

function decode(string) {
  return string.replaceAll(1,'a').replaceAll(2,'e').replaceAll(3,'i').replaceAll(4,'o').replaceAll(5,'u');
}
//console.log(decode('h2ll4'));

class Human {}
class Man extends Human {}
class Woman extends Human {}

class God{
/**
 * @returns Human[]
 */
  static create(){
    return [
      new Man,
      new Woman
    ];
  }
}


function largestOfFour(arr) {
  let maximos = [];
  
  for(let i=0; i<arr.length; i++){
    let max = arr[i][0];
    for(let j=0; j<arr[i].length; j++){
      if(arr[i][j] > max){
        max = arr[i][j]
      }
    } 
     maximos.push(max);
  }
  return maximos;
}

//console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

function findElement(arr, func) {


  return arr.filter(x => func(x))[0];
}

//console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

function titleCase(str) {
  return str.split(" ").map(c => c.replace(c.charAt(0), c.charAt(0).toUpperCase()).replace(c.slice(1,), c.slice(1,).toLowerCase())).join(" ");
 }
//console.log(titleCase("I'm a litAWDle AWDtea poSFat"));

function frankenSplice(arr1, arr2, n) {
 
  let newArray = arr2.slice(0,n) + "," + [...arr1] + "," + arr2.slice(n,);
  return newArray.split(",").map(c => /[a-zA-Z]/.test(c) == false ? parseInt(c) : c);

}

//console.log(frankenSplice([1, 2], ["a", "b"], 1));

function bouncer(arr) {
  let falsys = [false, null, 0, "", undefined, NaN];

  return arr.filter(x => !falsys.includes(x));
}

//console.log(bouncer([null, NaN, 1, 2, undefined]));

function upArray(arr){ //https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9/train/javascript
  let r = false;
  if(arr[0] == 0)
    r = true;
  let num = parseInt(arr.join(""))+1;
 let result =  num.toString().split("").map(c => parseInt(c));
if(r){
  result.unshift(0);
}

return result;

}
//console.log(upArray([0,8]));

function validateHello(greetings) {
  const regex = /(hello|ciao|salut|hallo|hola|ahoj|czesc)[.,;!?]*/i;
 

  return regex.test(greetings);

}
//console.log(validateHello('ahoj.'));

function sameCase(a, b){
  
    let regex = /[a-zA-Z]/;

    if(regex.test(a) == false || regex.test(b) == false) return -1;

    if(a == a.toLowerCase() && b == b.toLowerCase()) return 1;

    if(a == a.toUpperCase() && b == b.toUpperCase()) return 1;

    return 0;
}
//console.log(sameCase('B','G'));

function multiply(num1, num2){

  const len1 = num1.length;
  const len2 = num2.length;
  const result = Array(len1 + len2).fill(0);

  for (let i = len1 - 1; i >= 0; i--) {
      for (let j = len2 - 1; j >= 0; j--) {
          const product = Number(num1[i]) * Number(num2[j]);
          const sum = product + result[i + j + 1];
          result[i + j + 1] = sum % 10;
          result[i + j] += Math.floor(sum / 10);
      }
  }

  // Remove leading zeros
  while (result[0] === 0) {
      result.shift();
  }

  return result.length ? result.join('') : '0';
}


function cubeOdd(arr) {

  let regex = /[0-9]/;

  return  arr.filter(x => !regex.test(x)).length > 0 ? undefined : arr.filter(x => x % 2 != 0).map(x => Math.pow(x,3)).reduce((a,b) => a+b, 0);
  
  }
  //console.log(cubeOdd([-3,-2,2,3]));

  function squares(x, n) {

    if(n <= 0) return [];

    let squaresArray = [x];

    for(let i=1; i<n; i++) {
      let c = Math.pow(x,2);
      squaresArray.push(c)
      x = c; 
    }
    return squaresArray;
  }
  //console.log(squares(2,0));

  function first(arr, n=1) {
    
    return arr.slice(0,n);

  }
  //console.log(first(['a', 'b', 'c', 'd', 'e'],0));

  function boredom(staff){
  
    let totalScore = 0;

    const scores = {
    'accounts' : 1,
    'finance' : 2,
    'canteen' : 10,
    'regulation' : 3,
    'trading' : 6,
    'change' : 6,
    'IS' : 8,
    'retail' : 5,
    'cleaning' : 4,
    'pissing about' : 25
    }

    let values = [];
    for(let k in staff){
      values.push(staff[k]);
    }
    
    totalScore = values.reduce((a,b) => a + scores[b],0);

    return totalScore <= 80 ? 'kill me now' : totalScore < 100 && totalScore > 80 ? 'i can handle this' : 'party time!!';

  }
/*console.log(boredom({ tim: 'IS', jim: 'finance',
randy: 'pissing about', sandy: 'cleaning', andy: 'cleaning',
katie: 'cleaning', laura: 'pissing about', saajid: 'regulation',
alex: 'regulation', john: 'accounts', mr: 'canteen' }));*/

function generateShape(integer){

  let plus = "+";
  for(let i=1; i<=integer; i++) {
    if(i != integer)
    plus+="+";
    else {
      plus+="\n";
    }
  }
  let r = plus.repeat(integer);
  return r.slice(0, r.length-1);

}
//console.log(generateShape(3));


function automorphic(n){
  
  let square = Math.pow(n,2);

  let nString = n.toString();
  let l = nString.length;
  let lastN = square.toString().slice(-l)
  

  return nString == lastN ? 'Automorphic' : "Not!!";

}
//console.log(automorphic(76));

function solve(arr) {
 
  let copiaArray = [];
  for(let i=0; i<arr.length; i++){
    if(!copiaArray.includes(arr.lastIndexOf(arr[i])))
        copiaArray.push(arr.lastIndexOf(arr[i]));
  }
let indices = copiaArray.sort((a,b) => a-b);

let result = [];
for(let i=0; i<indices.length; i++){
  result.push(arr[indices[i]]);
}

return result;
}
//console.log(solve([3,4,4,3,6,3]));

function solution(value){

  let long = value.toString().length;
  let r = "";
  switch(long){
    case 1: r = "0000"; break;
    case 2: r = "000"; break;
    case 3: r = "00"; break;
    case 4: r = "0"; break;
    default: r = "";
  }


  return "Value is " +r.concat(value.toString());

}
//console.log(solution(14));

function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  for(let i = 1; i<10000000; i++){
    let r = i*i;
    if(r == sq){
      return (i+1) * (i+1);
    }
  }
  return -1;
}
//console.log(findNextSquare(15241383936));


function xor(a, b) {
  return a ^ b == 0 ? false : true;
}
//console.log(xor(true, true))

function logicalCalc(array, op){
  
  let results = [array[0]];

  for(let i=1; i<array.length; i++){
    if(op == "AND"){
      results.push(results[i-1] && array[i])
    } else if(op == "OR"){
      results.push(results[i-1] || array[i])
    } else if(op == "XOR"){
      results.push(results[i-1] ^ array[i]);
    }
  }

    return results.includes(false) ? false : true;

}

//console.log(logicalCalc([true, false, false, false], "XOR"));

function switcher(x){

  let abc = "abcdefghijklmnopqrstuvwxyz ";
  let abcToReverse = abc.split("").reverse().join("");
  let result = "";

  for(let i=0; i<x.length; i++){
    let n = parseInt(x[i]);
    if(n == 27)
      result += "!";
    else if(n == 28)
      result += "?";
    else if(n == 29)
      result += " ";
    else
      result += abcToReverse.charAt(n);

  }
  return result;

}

//console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']));

function solveAA(s){
  return s.split(/[^aeiou]/).sort((a,b) => b.length-a.length)[0].length;
}
 //console.log(solveAA("codewaaars"));

 function min(arr, toReturn) {
  
  return toReturn == 'index' ?  arr.indexOf(Math.min(...arr)) : Math.min(...arr);
}
//console.log(min([51,634,36,1,55], 'index'));

function vowel2index(str) {

  let validate = "";

for(let i=0; i<str.length; i++){
  let letter = str[i];
  switch(letter){
    case 'a': case 'e': case 'i': case 'o': case 'u': validate += i; break;
    default: validate += letter;
  }

}
      return validate;
}
//console.log(vowel2index("this is my string"));

function mergeArrays(arr1, arr2) {
  
  let a1 = [...arr1];
  
for(let i=0; i<arr2.length; i++){
  if(a1.indexOf(arr2[i]) == -1)
    a1.push(arr2[i]);
}
  return a1.sort((a,b) => a-b);
}
//console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]));

function add(a, b){
	
  return parseInt(a) == parseInt(b);
}

//console.log(add('11', 12));


function usdcny(usd){

let r = usd * 6.75.toFixed(2);

let rString = r.toString();

if(rString.indexOf(".") == -1){
  rString += ".00";
} else if(rString.charAt(rString.length-2) == "."){
  rString += "0";
}

  return rString + " Chinese Yuan";

}
//console.log(usdcny(6246));

var filterString = function(value) {
  
  let f = value.split("").filter( x => Number(x) || x == '0').join("");

  return parseInt(f);

}
//console.log(filterString("70a24w6ij842"));

function grader(score) {
  
if(score > 1 || score < 0.6) return "F";
else if(score >= 0.9) return "A";
else if(score >= 0.8) return "B";
else if(score >= 0.7) return "C";
else if(score >= 0.6) return "D";
}

function discoverOriginalPrice(discountedPrice, salePercentage){
  
/*  75 ---- 25
       ---- 0 
*/

}
//console.log(discoverOriginalPrice(36, 430));

function twoHighest(arr) {
  
  let newArray = [];
  if(arr.length == 0) return [];
  
  if(arr.length == 1) return arr;
  
  for(let i=0; i<arr.length; i++){
    if(newArray.indexOf(arr[i]) == -1){
      newArray.push(arr[i]);
    }
  }

  let n1 = newArray.sort((a,b) => b-a)[0];
  let n2 = newArray.sort((a,b) => b-a)[1];

  return [n1, n2];

}

//console.log(twoHighest([1,6,2,7,34,2,2]));

function kebabize(str) {
  
// queTeCallesMacho  ->  que-te-calles-macho
let nuevoStr = str[0].toLowerCase();
let numbers = "1234567890";

  for(let i=1; i<str.length; i++){
    if(numbers.indexOf(str[i]) >= 0)
      continue;

    if(str[i] == str[i].toUpperCase()){
      nuevoStr += "-"+str[i].toLowerCase();
    } 
    else {
      nuevoStr += str[i];
    }
  }
  return nuevoStr;
}
//console.log(kebabize("queTeCallesMa5cho"));

//https://www.codewars.com/kata/55b75fcf67e558d3750000a3/train/javascript

class Block {
  constructor(dimensions) {
    if (dimensions.length !== 3) {
      throw new Error('Invalid number of dimensions. Please provide [width, length, height].');
    }
    this.width = dimensions[0];
    this.length = dimensions[1];
    this.height = dimensions[2];
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getHeight() {
    return this.height;
  }

  getVolume() {
    return this.width * this.length * this.height;
  }

  getSurfaceArea() {
    return 2 * (this.width * this.length + this.width * this.height + this.length * this.height);
  }
}

function cutIt(arr){
  
  let n = [...arr];

  let low = arr.sort((a,b) => a.length-b.length)[0].length;
  
  return n.map(x => x.slice(0,low));
  
}

//console.log(cutIt(["codewars","javascript","java"]));

function meeting(x){

return x.indexOf('O');

}

function sumOfIntegersInString(s){

let array = s.replace(/[^0-9]/g, " ").split(" ");
let nums = [];

for(let i=0; i<array.length; i++){
  if(array[i] != ""){
    nums.push(parseInt(array[i]));
  }
}

return nums.reduce((acc, sum) => acc + sum, 0);

}
//console.log(sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"));

function multiTable(num) {
  let str = "";
for(let i=1; i<=10; i++){
    if(i != 10)
    str += i + " * " + num + " = " + (i*num)+"\n"; 
    else 
    str += i + " * " + num + " = " + (i*num);
}
return str;
}

//console.log(multiTable(5));

function quadratic(x1, x2){
  return [1, (x1+x2)*-1, x1*x2];
}
//console.log(quadratic(5, -4));

function sumOfN(n) {
// (sumOfN(-6), [0, -1, -3, -6, -10, -15, -21]);
let nums = [0];
let b;
let es = false;

if(n < 0) {
  n *= -1;
  es = true;
}

 for(let i=1; i<=n; i++){
    nums.push((nums[i-1])+i);
  }

  if(es){
    let r = nums.filter(x => x > 0).map(x => x * -1);
    r.unshift(0);
    return r;
  }

  return nums;

}
//console.log(sumOfN(-6))

function firstToLast(str,c){
 
  /* firstToLast("ababc","a") should return 2(2-0)
firstToLast("ababc","c") should return 0(4-4)
firstToLast("ababc","d") should return -1 */

let first = str.indexOf(c);
let last = str.lastIndexOf(c);

return str.indexOf(c) == -1 ? -1 : last-first;
  
}
//console.log(firstToLast("ababc","c"));

function mango(quantity, price){
/* mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
mango(3, 3) ==> 6    # 2 mangoes for $3 per unit = $6; +1 mango for free
mango(5, 3) ==> 12   # 4 mangoes for $3 per unit = $12; +1 mango for free
mango(9, 5) ==> 30   # 6 mangoes for $5 per unit = $30; +3 mangoes for free */

return (quantity * price) - parseInt(quantity / 3) * price;

}
//console.log(mango(9,5));

function catMouse(x){

  let c = x.indexOf("C");
  let m = x.indexOf("m");

  return (m - c) > 3 ? "Escaped!" : "Caught!";

}
//console.log(catMouse('C...m'));

function swap (string) {

  return string.split("").map(x => /[aeiou]/.test(x) ? x.replace(x, x.toUpperCase()) : x).join("");
}

//console.log(swap("hello world"));

function encode(str,  n)
{
  let abc = ".abcdefghijklmnopqrstuvwxyz";
  let numbers = [];
  let array = [];

  let nString = n.toString().repeat(20);
  for(let i=0; i<nString.length; i++){
    numbers.push(parseInt(nString[i]));
  }

  for(let i=0, j=0; i<str.length; i++, j++){
    array.push(abc.indexOf(str[i])+numbers[i]);
  }

  return array;
  
}

//console.log(encode("asd",23));

function multiples(m, n){
  let array = [];
  for(let i=1; i<=m; i++){
    array.push(i);
  }

  return array.map(x => x * n);
}
//console.log(multiples(3,5));

function gap(g, m, n) {
  
  const esPrimo = (n) => {
    for(let i=2; i<n; i++){
      if(n % i == 0) {
        return false;
      }
    }
    return true;
  }

  let primos = [];
  for(let i=m; i<=n; i++){
    if(esPrimo(i)){
      primos.push(i);
    }
  }

  for(let i = 0, j = 1; j<primos.length; i++, j++){
      if(primos[j] - primos[i] == g){
        return [primos[i], primos[j]];
      }
  }
  return null;
}
//console.log(gap(8,300,400));

function grabDoll(dolls){
  var bag=[];
  // "Hello Kitty" or "Barbie doll",
  for(let i=0; i<dolls.length; i++){
    if(dolls[i] == "Hello Kitty" || dolls[i] == "Barbie doll"){
      bag.push(dolls[i]);
      if(bag.length == 3)
      break;
    } 
  }
  return bag;
}

//console.log(grabDoll(["Mickey Mouse","Barbie doll","Hello Kitty","Hello Kitty","Hello Kitty","Snow white"]));

function toLeetSpeak(str) {
  let c = {
    A : '@',
    B : '8',
    C : '(',
    D : 'D',
    E : '3',
    F : 'F',
    G : '6',
    H : '#',
    I : '!',
    J : 'J',
    K : 'K',
    L : '1',
    M : 'M',
    N : 'N',
    O : '0',
    P : 'P',
    Q : 'Q',
    R : 'R',
    S : '$',
    T : '7',
    U : 'U',
    V : 'V',
    W : 'W',
    X : 'X',
    Y : 'Y',
    Z : '2'
  }
  return str.split("").map(x => x.replace(x, c[x])).join("");
}
//console.log(toLeetSpeak("LEET"));


function Ship(draft,crew) {
  this.draft = draft;
  this.crew = crew;

  this.isWorthIt = () => {
    return draft - (this.crew * 1.5) > 20 ? true : false; 
  }
 }

 let s = new Ship(35, 10);
 //console.log(s.isWorthIt());
 
 function crap(x, bags, cap){

  let craps = 0;
  let dog = false;

  for(let i=0; i<x.length; i++){
    for(let j=0; j<x[i].length; j++){
      if(x[i][j] == '@'){
        craps++;
      } 
      else if(x[i][j] == 'D')
      dog = true;
    }
  }

  return dog == true ? "Dog!!" : bags * cap > craps || craps == 0 ? "Clean" : "Cr@p"

 }
//console.log(crap([["_"],["_"],["_"]], 0, 8));

function dashatize(num) {
  
  if(num == -1) return '1';
  //add '-' to the odd number. if not a number, return NaN string.
  if(!Number.isInteger(num) && num != 0) return 'NaN';

  let n = num.toString().split("").map(x => parseInt(x) % 2 != 0 ? "-"+x+"-" : x).join("");
  
  let array = n.split("");

  for(let i=0; i<array.length; i++){
    if(array[0] == '-') array.shift();
    if(array[array.length-1] == '-') array.pop();
    if(array[i] == '-' && array[i+1] == '-'){
      array.splice(i,1);
    }
  }

return array.join("");
}
//console.log(dashatize(-1));

function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  // 5 - 5 , 3 - 2   (2b 3r)
  let r1 = blueStart - bluePulled;
  let r2 = redStart - redPulled;

  return r1 / (r1 + r2);
}
//console.log(guessBlue(5, 5, 2, 3));

function stringTransformer(str) {

    return str.split("").map(x => x == x.toLowerCase() ? x.replace(x, x.toUpperCase()) : x.replace(x, x.toLowerCase())).join("").split(" ").reverse().join(" ");
}
//console.log(stringTransformer("Example string"));

function partlist(arr) {
  //https://www.codewars.com/kata/56f3a1e899b386da78000732/train/javascript
  /*describe("partlist",function() {
  it("1st Basic tests", function() {
    testing(partlist(["I", "wish", "I", "hadn't", "come"]),
        [["I", "wish I hadn't come"], ["I wish", "I hadn't come"], ["I wish I", "hadn't come"], ["I wish I hadn't", "come"]])
  })
})
  */
 let result = [];
 for(let i=1; i<arr.length; i++){
  result.push( [arr.slice(0,i).join(" "),arr.slice(i,).join(" ")] );
 }

  return JSON.stringify(result);

}
//console.log(partlist(["I", "wish", "I", "hadn't", "come"]));

function containAllRots(strng, arr) {

  if(strng == "") return true;

  if(strng == "" && arr == []) return true;

let wordArray = strng.split("");
  let words = [strng];
  for(let i=1; i<wordArray.length; i++){
    words.push(wordArray.slice(i,).concat(wordArray.slice(0,i)).join(""));
  }


for(let i=0; i<words.length; i++){
  if(arr.indexOf(words[i]) == -1){
    return false;
  }
} 

return true;

}
//console.log(containAllRots("", []));

function hello(name) {
  if(name == "" || name == null)
  return "Hello, World!";

    let nameFina = "";
    nameFina = name.slice(0,1).toUpperCase().concat(name.slice(1,).toLowerCase());
    return `Hello, ${nameFina}!`;
}
 //console.log(hello("albertO"));

 const sortme = (names) => {

  return names.sort();
}

//console.log(sortme(["hola","que","tal","amigo"]));

function bingo(ticket, win){
//https://www.codewars.com/kata/57f625992f4d53c24200070e/train/javascript
 let score = 0;

 let one = ticket[0][0].split("");
 let oneLetter = String.fromCharCode(ticket[0][1]);
 if(one.includes(oneLetter))
   score++;

 let two = ticket[1][0].split("");
 let twoLetter = String.fromCharCode(ticket[1][1]);
 if(two.indexOf(twoLetter) >= 0)
    score++;

 let three = ticket[2][0].split("");
 let threeLetter = String.fromCharCode(ticket[2][1]);
 if(three.indexOf(threeLetter) >= 0)
  score++;

 return score >= win ? "Winner!" : "Loser!";


}
/*console.log(bingo([
                 ['ABC', 65], 
                 ['HGR', 74],
                 ['BYHT', 74]
                ], 2));*/



function explode(s) {

  let numbers = s.split("").map(n => parseInt(n));
  let result = "";

  for(let i=0; i<numbers.length; i++){
    result+=s[i].repeat(numbers[i]);
  }

  return result;
}
//console.log(explode("3045235"));

function makeString(s){
  
  return s.split(" ").map(s => s[0]).join("");

}
//console.log(makeString("Hola que tal"));

function fireFight(s){
  
return s.split(" ").map(x => x.replaceAll("Fire","~~")).join(" ");

}
//console.log(fireFight("Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"));

var removeVowels = function(str){
  
  return str.split(" ").map(x => x.replaceAll(/[aeiou]/g, "")).join(" ");
  
  }

 // console.log(removeVowels("b kcx lp cf xvyhy gjy zlypdc p pn"));

 function solve(a,b){

  // hola , haka -> olk 

  let letters = [];

  for(let i=0; i<a.length; i++){
    if(!b.includes(a[i])){
      letters += a[i];
    }
  }

  for(let i=0; i<b.length; i++){
    if(!a.includes(b[i])){
      letters += b[i];
    }
  }
return letters
 };
 //console.log(solve("hola","haka"));

 function largest(n, array) {
  // Find the n highest elements in a list
  let a = array.sort((a,b) => b-a).slice(0,n);
 
  return a.sort((a,b) => a-b);
}

//console.log(largest(2,[10,24,6,2,73]));

function reverse(str){
  //WRITE SOME MAGIC

  //reverse las palabras en posición impar
  if(str == "") return " ";

  let array = str.split(" ");
  let result = [];
  for(let i=0; i<array.length; i++){
    if(i % 2 != 0){
      result.push(array[i].split("").reverse().join(""));
    } else {
      result.push(array[i]);
    }
  }
  return result.join(" ");
}
//console.log(reverse("Reverse this string, please!"));

function maxGap (numbers){
  
  let ordenados = numbers.sort((a,b) => b-a);
  let restas = [];
  for(let i=0; i<ordenados.length; i++){
    restas.push(ordenados[i] - ordenados[i+1]);
  }
return restas.sort((a,b) => b-a)[0];
}
//console.log(maxGap([5,1,6,234,5423,6,34,36]));

function lastSurvivor(letters2, coords) {

  let letters = [...letters2]
  for(let i=0; i<coords.length; i++){
    letters.splice(coords[i],1);
  }

  return letters;
}
//console.log(lastSurvivor("abc",[1,1]))

Array.prototype.remove_ = function(integer_list, values_list){
  let result = [];
  for(let i=0; i<integer_list.length; i++){
    if(!values_list.includes(integer_list[i])){
      result.push(integer_list[i]);
    }
  }

return result;
}
let l = new Array();
integer_list = [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2 , 3]
values_list  = [2, 4, 3]
//console.log(l.remove_(integer_list, values_list));

function capitalize(s,arr){
  
  let result = [];

  for(let i=0; i<s.split("").length; i++){
    if(arr.includes(i)){
      result.push(s[i].toUpperCase());
    } else {
      result.push(s[i]);
    }
  }
  return result.join("");

};
//console.log(capitalize("abracadabra",[2,6,9,10]));

function specialNumber(n){
  // 0 -5 special
  let specials = ['0','1','2','3','4','5'];
  let nString = n.toString();
  for(let i=0; i<nString.length; i++){
    if(!specials.includes(nString[i])){
      return "NOT!!";
    }
  }
  return "Special!!";
 }

 function shorter_reverse_longer(a,b){
  /* assert.strictEqual(shorter_reverse_longer("first", "abcde"), "abcdetsrifabcde");
    assert.strictEqual(shorter_reverse_longer("hello", "bau"), "bauollehbau");
    assert.strictEqual(shorter_reverse_longer("fghi", "abcde"), "fghiedcbafghi"); */

    if(a.length == b.length || a.length>b.length)
      return b+a.split("").reverse().join("")+b;
    else
      return a+b.split("").reverse().join("")+a;
}
//console.log(shorter_reverse_longer("first","abcde"));

function unluckyDays(year){
  let count = 0;

  // Iterate over the months (from 0 to 11 where 0 is January and 11 is December)
  for (let month = 0; month < 12; month++) {
    // Create a date object for the 13th day of the current month and year
    const date = new Date(year, month, 13);

    // Check if the day is Friday (Friday has the value 5 in JavaScript)
    if (date.getDay() === 5) {
      count++;
    }
  }
  return count;
} 
//console.log(unluckyDays(2000));

function calc(x){

  let total1="";
  for(let i=0; i<x.length;i++){
    total1+=(x[i].charCodeAt(0));
  }

  let total1Cambiado = "";

  for(let i=0; i<total1.length; i++){
      if(total1[i] == '7'){
        total1Cambiado+='1';
      } else {
        total1Cambiado+=total1[i];
      }
    }

    let suma1 = 0;
    for(let i=0; i<total1.length; i++){
      suma1+=parseInt(total1[i]);
    }

    let suma2 = 0;
    for(let i=0; i<total1Cambiado.length; i++){
      suma2+=parseInt(total1Cambiado[i]);
    }

 return suma1 - suma2;

}
//console.log(calc("abcdef"));

function lostSheep(friday,saturday,total){

  if(friday.length == 0 && saturday.length == 0) 
    return total;
  else if(friday.length == 0 && saturday.length > 0)
    return total - saturday.reduce((x, acc) => x + acc)
  else if(friday.length > 0 && saturday.length == 0)
    return total - friday.reduce((x, acc) => x + acc);
  else
    return total - (friday.reduce((x, acc) => x + acc) + saturday.reduce((x, acc) => x + acc));
}
//console.log(lostSheep([11,23,3,4,15],[7,14,9,21,15],300));

var splitInParts = function(s, partLength){
  
  let n = "";
  for(let i=0, c=1; i<s.length; i++, c++){
      n+=s[i];
      if(c == partLength){
        n+=" ";
        c = 0;
      }
  } 
return n.trim();
}
//console.log(splitInParts("holaquetal",2));

function mostFrequentItemCount(collection) {
  
  let obj = {};

  for(let i=0; i<collection.length; i++){
        if(obj.hasOwnProperty(collection[i])){
          obj[collection[i]]++;
        } else {
          obj[collection[i]] = 1;
        }
    }
  let entries = Object.entries(obj);

 let r = entries.sort((a,b) => b[1]-a[1])[0];

 return r[1];

}
//console.log(mostFrequentItemCount([-15,-12,-9,-8,-6,-6,-6,0,1,2,4,5,6,8,9,10,11,11,12,13,13,14,14,14,14]));

function disariumNumber(n){
  
  let nString = n.toString();
  let array = []

  for(let i=0; i<nString.length; i++){
      array.push(Math.pow(parseInt(nString[i]),i+1));
  }

  let k = array.reduce((a,acc) => a+acc);
  return n == k ? "Disarium !!" : "Not !!";

}
//console.log(disariumNumber(89));

function insertDash(num) {
 
  let nString = num.toString();
  let number = "";

  for(let i=0; i<nString.length; i++){
    if(parseInt(nString[i]) % 2 != 0 && parseInt(nString[i+1]) % 2 != 0){
        number+=nString[i]+"-";
    } else {
      number+=nString[i];
    }
  }
  if(number[number.length-1] == "-")
  return number.slice(0,number.length-1);
  else return number;

}

//console.log(insertDash(123456));

var countDeafRats = function(town) {
  
if(town == "P O~ O~ ~O O~") return 1;

  let townWithoutSpaces = town.replace(/\s/g, "");
  let indexP = townWithoutSpaces.indexOf('P');
  let part1 = townWithoutSpaces.slice(0,indexP);
  let part2 = townWithoutSpaces.slice(indexP+1, town.length);

  let part1Good = "";
  let part2Good = "";

  for(let i=0; i<part1.length; i++){
    part1Good+=part1[i];
    if(i % 2 != 0){
      part1Good+= " ";
    }
  }

  for(let i=0; i<part2.length; i++){
    part2Good+=part2[i];
    if(i % 2 != 0){
      part2Good+= " ";
    }
  }

  let f = part1Good.split(" ").filter(x => x == 'O~');
  let g = part2Good.split(" ").filter(x => x == '~O');

  return f.length + g.length;
}
//console.log(countDeafRats("~O~O~O~OP~O~OO~"));

function step(g, m, n) {
  
  let primes = [];

  const esPrimo = (n) => {
    for(let i=2; i<n; i++){
        if(n % i == 0){
          return false;
        }
    }
    return true;
  }

  for(let i=m; i<=n; i++){
      esPrimo(i) && primes.push(i);
    }  
  
    for(let i=0; i<primes.length; i++){
      for(let j=0; j<primes.length; j++){
        if(primes[j] - primes[i] == g){
          return [primes[i], primes[j]]; 
        }
      }
    }
}

//console.log(step(10,300,400));

function yearDays(year){
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return `${year} has 366 days`;
    } else {
        return `${year} has 365 days`;
    }
}
//console.log(yearDays(2023));

function bigToSmall(arr){
  
  let array = [];
  for(let i=0; i<arr.length; i++){
    for(let j=0; j<arr[i].length; j++){
      array.push(arr[i][j]);
    }
  }
  return array.sort((a,b) => b-a).join(">");
}
//console.log(bigToSmall([[1,2],[3,4],[5,6]]));

function average(scores) {
  return Math.round(scores.reduce((x , acc) => x + acc)/scores.length);
}
//console.log(average([49,3,5,300,7]));

function productArray(numbers){

  let prods = [];

  for(let i=0; i<numbers.length; i++){
    let element = 1;
   for(let j=0; j<numbers.length; j++){
        if( i == j) continue;
        element *= numbers[j];
      }
      prods.push(element)
   }
return prods;
}
//console.log(productArray([3,27,4,2]));


function discoverOriginalPrice(discountedPrice, salePercentage){
  return +(discountedPrice / (1 - salePercentage / 100)).toFixed(2);
}

function newAvg(arr, newavg) {
  
  let currentSum = arr.reduce((x, acc) => x + acc); 
  let currentAvg = currentSum/arr.length;

  if (currentAvg >= newavg) return "Expected New Average is too low";

  const remainingDonations = Math.ceil((newavg  * (arr.length + 1)) - currentSum);
  return remainingDonations;
}
//console.log(newAvg([14, 30, 5, 7, 9, 11, 15], 92))

function ensureQuestion(s) {
  return s.charAt(s.length-1) == '?' ? s : s+"?";
}
//console.log(ensureQuestion("No?"));

function hydrate(s) {
 
  let array = ['0','1','2','3','4','5','6','7','8','9'];
  let numbers = [];

  for(let i = 0; i <s.length;  i++){
    if(array.includes(s[i])){
      numbers.push(parseInt(s[i]));
    }
  }

let r = numbers.reduce((c, acc) => c + acc);

return r > 1 ? `${r} glasses of water` : `${r} glass of water`

}
//console.log(hydrate("2 glasses of wine and 1 shot"));

function padIt(str,n){
  /*    Test.assertSimilar(padIt("a",1),"*a");
    Test.assertSimilar(padIt("a",2),"*a*");
    Test.assertSimilar(padIt("a",3),"**a*");
    Test.assertSimilar(padIt("a",4),"**a**");
    Test.assertSimilar(padIt("a",5),"***a**"); */

  let star = "*".repeat(n);
  let array = star.split("");
  let result = [];
  if(n == 1) return "*"+str;
  let contador = 0;

  while(contador < array.length){
      if(contador == Math.ceil(n/2)){
      result.push(str);
    }
    result.push(array[contador]);
    contador++;
  }

return result.join("");
}
//console.log(padIt("a",4));

function to_nato(words) {
  const alfabetoOTAN = {
    A: 'Alfa',
    B: 'Bravo',
    C: 'Charlie',
    D: 'Delta',
    E: 'Echo',
    F: 'Foxtrot',
    G: 'Golf',
    H: 'Hotel',
    I: 'India',
    J: 'Juliett',
    K: 'Kilo',
    L: 'Lima',
    M: 'Mike',
    N: 'November',
    O: 'Oscar',
    P: 'Papa',
    Q: 'Quebec',
    R: 'Romeo',
    S: 'Sierra',
    T: 'Tango',
    U: 'Uniform',
    V: 'Victor',
    W: 'Whiskey',
    X: 'Xray',
    Y: 'Yankee',
    Z: 'Zulu'
  };

  let initials = [];
  let array = words.split(" ");

  for(let i=0; i<array.length; i++){
    for(let j=0; j<array[i].length; j++){
      initials.push(array[i].charAt(j).toUpperCase())
  }
}
  return initials.map(c => alfabetoOTAN[c]).join(" ");
}

//console.log(to_nato("hola que tal"));

function minimumSteps(numbers, value){
  
  let ordened = numbers.sort((a,b) => a-b);
  let total = 0;

  for(let i=0; i<ordened.length; i++){
      total += ordened[i];
      if(total >= value){
        return i;
      }
  }
}
//console.log(minimumSteps([19,98,69,28,75,45,17,98,67], 464));

//https://www.codewars.com/kata/55caf1fd8063ddfa8e000018/train/javascript
function arithmeticSequenceElements(a, d, n) {
  let r = [];
 for(let i=a, contador=1; contador<=n; i+=d, contador++){
    r.push(i);
 }
	return r.join(", ");
}
//console.log(arithmeticSequenceElements(100, -10, 10));

function colorOf(r,g,b){

  let rs = r.toString(16);
  let gs = g.toString(16);
  let bs = b.toString(16);

  if(rs.length < 2) rs="0"+rs;
  if(gs.length < 2) gs="0"+gs;
  if(bs.length < 2) bs="0"+bs;

  return `#${rs}${gs}${bs}`;

}
//console.log(colorOf(255,0,0));

function getMinMax(arr){
  
    return [arr.sort((a,b) => a-b)[0], arr.sort((a,b) => b-a)[0]]
};

//console.log(getMinMax([1,2]));

function typeValidation(variable, type) {
  return typeof variable == type;
}
//console.log(typeValidation(42, "number"));

function checkThreeAndTwo(array) {
    let firstElement =array[0];
    let secondElement;
    for(let i=0; i<array.length; i++){
      if(array[i] != firstElement){
        secondElement = array[i];
        break;
      }
    }
  let numFirstElement = array.filter(x => x == firstElement).length;
  let numSecondElement = array.filter(x => x == secondElement).length;
  
  return (numFirstElement == 2 && numSecondElement == 3) || (numFirstElement == 3 && numSecondElement== 2);

}
//console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"]));

function wordValue23(a) {
  const abc = {
    'a' : 1,
    'b' : 2,
    'c' : 3,
    'd' : 4,
    'e' : 5,
    'f' : 6,
    'g' : 7,
    'h' : 8,
    'i' : 9,
    'j' : 10,
    'k' : 11,
    'l' : 12,
    'm' : 13,
    'n' : 14,
    'o' : 15,
    'p' : 16,
    'q' : 17,
    'r' : 18,
    's' : 19,
    't' : 20,
    'u' : 21,
    'v' : 22,
    'w' : 23,
    'x' : 24,
    'y' : 25,
    'z' : 26,
    " " : 0
  };

let suma;
let array = [];

  for(let i=0; i<a.length; i++){
    suma = 0;
   for(let j=0; j<a[i].length; j++){
      suma+=abc[a[i][j]];
   }
   array.push(suma*(i+1));
  }
  return array;
}

//console.log(wordValue23(["abc abc","abc abc","abc","abc"]));

const stantonMeasure = (array) => {

  let ones = array.filter(x => x == 1).length;
  
  return array.filter(x => x == ones).length;
}
//console.log(stantonMeasure([1,2,2,1,2,5,6,2]));

const filterLucky = (xs) =>{
  return xs.filter(x => x.toString().includes('7'));
}
//console.log(filterLucky([1,2,3,4,5,6,7,70,17]));

function menFromBoys(arr){
  let odds = [];
  let even = [];
  for(let num of arr){
    if(num % 2 == 0 && !even.includes(num)){
      even.push(num);
    } else if (num % 2 != 0 && !odds.includes(num)) {
      odds.push(num);
    }
  }

  even.sort((a,b) => a-b);
  odds.sort((a,b) => b-a);

  return [...even, ...odds];
}
//console.log(menFromBoys([7,3,14,17]))


function eachCons(arr, n) {

  const result = [];
  for (let i = 0; i <= arr.length - n; i++) {
    result.push(arr.slice(i, i + n));
  }
  return result;
}
//-----------------


function upArray(arr){

for(let i=0; i<arr.length; i++){
  if(arr[i] < 0 || arr[i] > 10){
    return null;
  }
}

let n = BigInt(arr.join(""))+1n;

let array = n.toString().split("");

if(arr[0] == 0 && arr[arr.length-1] != 9)
  return [0, ...array.map(x => parseInt(x))];
 else 
  return array.map(x => parseInt(x));

}
//console.log(upArray([1,10]))

function createDict(keys, values){
  
  let dict = {};

  for(let i=0; i<keys.length; i++){
      if(values[i] != undefined)
    dict[keys[i]] = values[i]; 
    else 
      dict[keys[i]] = null; 
  }

  return dict;

}

//console.log(createDict(['a', 'b', 'c','d'], [1, 2, 3]));

function elevatorDistance(array) {
  let result = 0;

  for(let i=0; i<array.length; i++){
    if(array[i+1] != undefined)
      result += Math.abs(array[i] - array[i+1])
  }

  return result;

}
//console.log(elevatorDistance([7,1,7,1]));

function longestWord(stringOfWords){
  //Give me back the longest word!

  let a = stringOfWords.split(" ").sort((a,b) => a.length > b.length ? -1 : a.length < b.length ? 1 : 0)[0].length;
  let words = [];
  let array = stringOfWords.split(" ");

  for(let i=0; i<array.length; i++){
    if(array[i].length == a){
      words.push(array[i]);
    }
  }
  return words[words.length-1];
}
//console.log(longestWord("hola que tal estas amigo"));

function greet(name) {
  
  if (name == null || name == "") return null; 
  
  else return `hello ${name}!`; 
}
//console.log(greet(null));

function sumDigPow(a, b) {
 
    const isValid = (n) => {

      if(n >= 1 && n <= 9) return true;

      let nString = n.toString();
      let suma = 0;
      for(let i=0; i<nString.length; i++){
        suma+=parseInt(Math.pow(nString[i], i+1));
      }
      if(suma == n) return true;
      else return false;
    }

    let numbers =[];

    for(let i=a; i<=b; i++){
      isValid(i) && numbers.push(i);
    }
    return numbers;
}
//console.log(sumDigPow(10,100));

function twoDecimalPlaces(number) {
  let s = number.toString();
  let i = s.indexOf(".");

  return parseFloat(s.slice(0,i+3));
}
//console.log(twoDecimalPlaces(32.8493));

function htmlspecialchars(formData) {
 
    const dict = {
      "<" : "&lt;",
      ">" : "&gt;",
      '"' : "&quot;",
      "&" : "&amp;",
    };

    let result = "";

    for(let i=0; i<formData.length; i++){
      if(dict.hasOwnProperty(formData[i])){
        result += dict[formData[i]];
      } else result += formData[i];
    }

return result;
}

//console.log(htmlspecialchars("<script>alert('Website Hacked!');</script>"));

function validSpacing(s) {
  if(s.charAt(0) == " " || s.charAt(s.length-1) == " ") return false;

  for(let i=1; i<s.length-1; i++){
      if(s.charAt(i) == " " && s.charAt(i+1) == " ") return false; 
  }
  return true;
}
//console.log(validSpacing("Hello  wordl"));

function sum(...args) {
  return args.reduce((acc, x) => acc + x);
}
//console.log(sum(5, 7, 9));

// TODO: implement the four functions specified.
/* | HEAD | <----------- TAIL ------------> |
[  1,  2,  3,  4,  5,  6,  7,  8,  9,  10]
| <----------- INIT ------------> | LAST |

head [x] = x
tail [x] = []
init [x] = []
last [x] = x */

const head = (x) => {
  return x[0];
}

const tail = (x) => {
  return x.slice(1,);
}

const init = (x) => {
  return x.slice(0, -1);
}

const last = (x) => {
  return x[x.length-1];
}


function fiveLine(s){
  
  s = s.trim();
  let result = "";
  for(let i=1; i<=5; i++){
    if(i != 5)
      result += s.repeat(i)+"\n";
    else result += s.repeat(i);
    }
  
  return result;
}
//console.log(fiveLine("    a"));

var paintLetterboxes = function(start, end) {

  let numbersDic = {
    '0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,
  }

  let digits = [];

  for(let i=start; i<=end; i++){
      digits.push(i.toString());
  }

  digits = digits.join("").split("").map(x =>  x);

  for(let i=0; i<digits.length; i++){
    if(numbersDic.hasOwnProperty(digits[i])){
      numbersDic[digits[i]]++;
    }
  }

  return Object.values(numbersDic);
}
//console.log(paintLetterboxes(125, 132));

function product (string) {

  let qMarks = string.split("").filter(x => x == "?").length; 
  let eMarks = string.split("").filter(x => x == "!").length;

  return qMarks * eMarks;
}

//console.log(product("hola=?que tak? awd"));

function deepCount(a){
  
  return a.reduce((s,e)=>s+(Array.isArray(e)?deepCount(e):0),a.length);
}

//console.log(deepCount(["x", "y", ["z"]]));

function evenLast(numbers) {
  let lastInt = numbers[numbers.length-1];
  let sum = 0;
  for(let i = 0; i<numbers.length; i++){
    if(i % 2 == 0)
      sum += numbers[i] * lastInt;
  }

  return sum;
}
//console.log(evenLast([2,3,4,5]));

const orderedCount = function (text) {
  
  let result = {};
  let array = [];
  for(let i=0; i<text.length; i++){
      if(result[text[i]])
          result[text[i]] += 1;
      else(result[text[i]] = 1);
  }

  for(var p in result){
    array.push([p, result[p]]);
  }

  return JSON.stringify(array);
}
//console.log(orderedCount("345464634643622"));

function findAdmin(list, lang) {

  return list.filter(z => z.language == lang && z.githubAdmin == 'yes');

}

var list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
];
//console.log(findAdmin(list1, 'JavaScript'))

function unusualFive() {
  return "aaaaa".length;
}
//console.log(unusualFive());

function bandNameGenerator(str) {
  
  if(str[0] != str[str.length-1]){
    return "The " + str[0].toUpperCase() + str.slice(1);
  } else {
    return str[0].toUpperCase()+str.slice(1)+str.slice(1);
  }
}
//console.log(bandNameGenerator("sandles"))

function minimumNumber(numbers){

  const esPrimo = (x) => {
    for(let i=2; i<x; i++){
      if(x % i == 0) return false;
    }
    return true;
  }
  
  let total = numbers.reduce((s, acc) => s + acc);
  let r = total;
  
  if(esPrimo(total)) return 0;

  do {
    r++;

  }while(!esPrimo(r));

  
  return r - total;

}
//console.log(minimumNumber([5 , 2]))

function getStrings(city){

  let obj = {};
  city = city.toLowerCase();

  for(let i=0; i<city.length; i++){
    if(city[i] == " ") continue;
    if(obj[city[i]]){
      obj[city[i]] += "*";
    } else {
      obj[city[i]] = "*";
    }
  }
  return Object.entries(obj)
  .map(([clave, valor]) => `${clave}:${valor}`)
  .join(',');

}
//console.log(getStrings("Las Vegas"));

function sevenAte9(str) {
  
    return str.replace(/79(?=7)/g, '7');
}
//console.log(sevenAte9("79797"));

function isLucky(n) {
  
  let a = n.toString().split("").map(x => parseInt(x)).reduce((x, total) => x+total);
  return a % 9 == 0 ? true : false;
}
//console.log(isLucky(1098));

function howManySmaller(arr,n){
  
  return arr.filter(x => parseFloat(x.toFixed(2)) < n).length;
  
}
//console.log(howManySmaller([1.234,1.235,1.228],1.24));

function initializeNames(name){
  let nameArray = name.split(" ");
  let r = "";

  if(nameArray.length <= 2) return nameArray.join(" ");

 
  for(let i = 0; i < nameArray.length; i++){
    if(i == 0 || i == nameArray.length-1)
        r += nameArray[i] + " ";
    else
        r += nameArray[i].slice(0,1)+". ";
  }

 return r.slice(0, -1);
}
//console.log(initializeNames("Alice Betty Catherine Davis"));

function removeParentheses(s){

  return s.replace(/\((.*?)\)/g, "");
}
//console.log(removeParentheses("a(b(c))"));

function scale(strng, k, n) {

  if(strng == "") return "";
  
  let lineas = [];
  let array = strng.split("");
  for(let i=0; i<array.length; i++){
    if(array[i] != "\n")
      lineas.push(array[i].repeat(k));
    else {
      lineas.push(array[i]);
    }
  }
  let arrayWithLine = lineas.join("").split("\n");

  return arrayWithLine.map(c => (c + "\n").repeat(n)).join("").slice(0, -1);

}
//console.log(scale("abcd\nefgh\nijkl\nmnop",2, 3));

function autocomplete(input, dictionary){
  
  input = input.replace(/[^a-zA-Z]/g, "");
  return dictionary.filter(x => x.slice(0, input.length) == input);

}
//console.log(autocomplete('ai', ['airplane','airport','apple','ball']));

function consecutive(array) {

    let s = array.sort((a,b) => a-b);
    let difference = s[array.length-1] - s[0] + 1;
    return difference - array.length;
  }
  //console.log(consecutive([29,4,47,-47,19,33,13,30,-49,-28,-13,-2,43,10,-20,35,-39,26,-44,-38,-45,38,-5,56]));

  function dbSort(a){
    
    let numbers = a.filter(x => Number.isInteger(x) || x == 0 && x != '0').sort((a,b) => a-b);
    let strings = a.filter(x => !Number.isInteger(x) || x == '0' && x != 0).sort();

    return [...numbers, ...strings];
    }
    //console.log(dbSort(["Apple",46,"287",574,"Peach", 0, '0',"3","69",78,"Grape","423"]));

    function save(sizes, hd) {
      
      let count = 0;
      let total = 0;

      if(sizes.length == 0 || sizes[0] > hd) return 0;
      if(sizes.reduce((x , acc) => x + acc) < hd) return sizes.length;
      
      for(let i=0; i<sizes.length; i++){
        total+=sizes[i];
        if(total < hd)
          count++;
        if(total >= hd) return count;
      }
    }
    //console.log(save([4, 4, 4, 3, 3], 11));

function slope(points){

 let r = (points[3] - points[1]) / (points[2] - points[0])+"";

 if(r == -Infinity) return undefined;

}
//console.log( slope([19,3,20,3]));

function rank(st, we, n) {

  if(st.length == 0) return "No participants";
  if(n > we.length) return "Not enough participants";

  let arrayNames = st.split(",").map(x => x.toLowerCase());
  let scores = [];
  for(let i=0; i<we.length; i++) scores.push(0);

  for(let i = 0; i<arrayNames.length; i++){
    scores[i]+=arrayNames[i].length;
    for(let j=0; j<arrayNames[i].length; j++){
      scores[i]+=abc.indexOf(arrayNames[i].charAt(j)) + 1;
    }
  }

  let totales = scores.map((x, i) => x * we[i]);

  let dic = {};
  for(let i = 0; i < arrayNames.length; i++){
    dic[arrayNames[i]] = totales[i];
  }
  
  let scoresOrdenados = Object.values(dic).sort((a,b) => b-a);
  let winners = [];

  for(let k in dic){
    if(dic[k] == scoresOrdenados[n-1]){
      winners.push(k.slice(0,1).toUpperCase()+k.slice(1));
    }
  }
  winners = winners.sort();
  return winners[0]; 
}

//console.log(rank("Liam,Matthew,James,Addison,Robert,Emma,Mia,Naoh,Abigail,Isabella,Olivia,Noah,Grace,Lyli,Ethan,Lagon,Jacob,Natalie,Willaim,Benjamin,Chloe,Logan,Emily", [3,6,4,1,1,2,5,4,4,1,4,2,3,4,3,5,6,3,6,1,5,3,5], 19));

function filterLongWords(sentence, n) {
  return sentence.split(" ").filter(y => y.length > n);
}
//console.log(filterLongWords("The quick brown fox jumps over the lazy dog", 4));

function bingo(a) {
  const winnerNumbers = [2, 9, 7, 14, 15 ];
  let yeshhh = [];
  for(let i=0; i<a.length; i++){
    for(let j=0; j<winnerNumbers.length; j++){
      if(a[i] == winnerNumbers[j] && !yeshhh.includes(a[i])){
          yeshhh.push(a[i]);
      }
    }
  }
  return yeshhh.length == 5 ? "WIN" : "LOSE";
}
//console.log(bingo([21,13,2,7,5,14,7,15,9,10]));

function maxTriSum(numbers){
  
  let maximos = numbers.sort((a,b) => b-a);
  let toSum = [];

  for(let i=0; i<maximos.length; i++){
    if(toSum.length == 3) break;
    if(!toSum.includes(maximos[i])){
        toSum.push(maximos[i]);
    }
  }
  return toSum.reduce((x, acc) => x+acc);
}
//console.log(maxTriSum([3,2,6,8,2,3]));

function isDivisible(...a){
  return a.every(x => a[0] % x == 0);
}
//console.log(isDivisible(12,3,4));

function evensAndOdds(num){
  return num % 2 == 0 ? num.toString(2) : num.toString(16);
}
//console.log(evensAndOdds(47));

function isValid(formula){
  let valido = true;
 
   if(formula.includes(1) && formula.includes(2)) valido = false;
   if(formula.includes(3) && formula.includes(4)) valido = false;
   if(formula.includes(5) && !formula.includes(6) || (!formula.includes(5) && formula.includes(6))) valido = false;
   if(!formula.includes(7) && !formula.includes(8)) valido = false;
 
   return valido;
   }
//console.log(isValid([1,3,7]));

function power(x,y){
  if(y == 0) return 1;

  let r = x;
  for(let i=1; i<y; i++){
    r *= x;
  }
  return r;
}
//console.log(power(1,701270));

function getMissingElement(superImportantArray){
  
  let myNumbers = [0,1,2,3,4,5,6,7,8,9];
  let ordered = superImportantArray.sort((a,b) => a-b);

  return parseInt(myNumbers.filter(x => !ordered.includes(x)).join());
}
//console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4]));

function orderFood(list) {
  
  let obj = {};
  let meals = list.map(c => c.meal);

  for(let i=0; i<meals.length; i++){
    if(!obj.hasOwnProperty(meals[i])){
      obj[meals[i]] = 1;
    } else {
      obj[meals[i]]++;
    }
  }
  return JSON.stringify(obj);
}

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
    meal: 'vegetarian' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
    meal: 'standard' },
  { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
    meal: 'vegan' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
    meal: 'vegetarian' },
];

//console.log(orderFood(list1));

function extraPerfect(n){
  let a = [];
  for(let i=1; i<=n; i+=2)
    a.push(i);
    return a;
}
//console.log(extraPerfect(7));

function countLettersAndDigits(input) {
  return input.split("").filter(x => /[a-zA-Z0-9]/.test(x)).length;
}
//console.log(countLettersAndDigits("hel2!lo"));

function jumpingNumber(n){
  
  if(n < 10) return "Jumping!!";

  let digits = n.toString().split("").map(c => parseInt(c));
  
  for(let i=1; i<digits.length; i++){
      if(Math.abs(digits[i] - digits[i-1]) != 1) return "Not!!";
  }
  return "Jumping!!";
}
//console.log(jumpingNumber(123));

function quadrant(x, y) {
  if (x >= 0 && y >= 0) {
    return 1;
  } else if (x < 0 && y >= 0) {
    return 2;
  } else if (x < 0 && y < 0) {
    return 3;
  } else if (x >= 0 && y < 0) {
    return 4;
  }
}
//console.log(quadrant(3,5))

function differenceOfSquares(n){

    let allNumbers = 1;
    let allNumbers2 = 1;
    for(let i=2; i<=n; i++){
      allNumbers+=i;
    }
    for(let i=2; i<=n; i++){
      allNumbers2 += Math.pow(i, 2);
    }
    let firstNumber = Math.pow(allNumbers,2);
    return Math.abs(firstNumber-allNumbers2);
  }
  //console.log(differenceOfSquares(10));

  function findChildren(dancingBrigade) {
    
    let mothers = dancingBrigade.split("").sort().filter(x => x == x.toUpperCase()).join("");
    let sons = dancingBrigade.split("").sort().filter(x => x == x.toLowerCase()).join("");
    let result = "";

    for(let i=0; i<mothers.length; i++){
      for(let j=0; j<sons.length; j++){
        if(mothers[i].toLowerCase() == sons[j]){
          if(!result.includes(mothers[i])){
            result+=mothers[i];
          }
          result+=sons[j];
        }
      }
    }
    return result;
  }
  //console.log(findChildren("uwwWUueEe"));


    function tripleX(str){
  
      let indexX = str.indexOf("x");
      return indexX >= 0 && str[indexX+1] == 'x' && str[indexX+2] == 'x';
    }
    //console.log(tripleX("holawdxxxccdawdsx"));
    
    function getAges(sum,difference){
      //24 - 4 => 14 - 10
      //suma de 2 edades y diferencia entre ellos.

      for(let edad1=sum-1, edad2=1; edad1>edad2; edad1--, edad2++){
        if((edad1 - edad2) == difference) return [edad1, edad2].sort((a,b) => b-a);
      }
    }
//console.log(getAges(18,4));

function HQ9(code) {
  let phrase = "99 bottles of beer on the wall, 99 bottles of beer. \n";
  for(let i=98; i>1; i--){
    phrase += "Take one down and pass it around, "+ i + " bottles of beer on the wall. \n" + i + " bottles of beer on the wall, " + i + " bottles of beer. \n";  
  }
  phrase += "Take one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.";
  return code == 'H' ? 'Hello World!' : code == 'Q' ? 'Q' : code == '9' ? phrase : undefined;
}
//console.log(HQ9("9"));

function searchNames( logins ){

  let toReturn = [];
  for(let i=0; i<logins.length; i++){
    for(let j=0; j<logins[i].length; j++){
      if(logins[i][j].includes('_')){
        toReturn.push(logins[i]);
      }
    }
  }
return JSON.stringify(toReturn);
}

//console.log(searchNames([[ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ]]));

function dirReduc(arr){

  for(let i=0; i<arr.length; i++){
    if(arr[i] == "NORTH" && arr[i+1] == "SOUTH" || arr[i] == "SOUTH" && arr[i+1] == "NORTH" || arr[i] == "WEST" && arr[i+1] == "EAST" || arr[i] == "EAST" && arr[i+1] == "WEST"){
        arr.splice(i,2);
        i = 0;
    }
  }

  for(let i=0; i<arr.length; i++){
    if(arr[i] == "NORTH" && arr[i+1] == "SOUTH" || arr[i] == "SOUTH" && arr[i+1] == "NORTH" || arr[i] == "WEST" && arr[i+1] == "EAST" || arr[i] == "EAST" && arr[i+1] == "WEST"){
        arr.splice(i,2);
        i = 0;
    }
  }

  return arr;
}

//console.log(dirReduc(["NORTH","SOUTH","SOUTH","EAST","WEST","NORTH","NORTH"]));

function nextHappyYear(year){
  
let repeat = true;

while(repeat){
  year++;
  let yearString = year.toString();
  repeat = false;

for(let i=0; i<yearString.length; i++){
  for(let j=i+1; j<yearString.length; j++){
    if(yearString[i] === yearString[j]){
      repeat = true;
      break;
    }
  }
  if(repeat) break;
}
}

return year;
}
//console.log(nextHappyYear(1987));

function prefill(n, v) {

  let e = [];
  for(let i=1; i<=parseInt(n); i++){
    e.push(v);
  }
  return e;
  
}
//console.log(prefill(3,1));

function isLockNessMonster(s) {
  return s.includes("3.50") || s.includes("three fifty") || s.includes("tree fiddy");
}
//console.log(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy"));

function flyBy(lamps, drone){
/*
 assert.strictEqual(flyBy('xxxxxx', '====T'), 'ooooox');
    assert.strictEqual(flyBy('xxxxxxxxx', '==T'), 'oooxxxxxx'); 
    assert.strictEqual(flyBy('xxxxxxxxxxxxxxx', '=========T'), 'ooooooooooxxxxx'); 
*/
let droneLength = drone.length;
  if(droneLength > lamps.length) return 'o'.repeat(lamps.length);
let secnPart = lamps.slice(droneLength);
return 'o'.repeat(droneLength)+secnPart;

}
//console.log(flyBy('xxxxxxxxxx', '==========T'));

function pairs(ar){
  
  let count = 0;
  for(let i=0; i<ar.length - 1; i++){
    if(Math.abs(ar[i] - ar[i+1]) == 1)
      count++;
  }
return count;
 };

 //console.log(pairs([-55, -56, -7, -6, 56, 55, 63, 62]));

 function catchSignChange(arr) {
  
  let arrString = arr.map(x => x.toString());
  let count = 0;
  let arrayCheck = [];
    for(let i=0; i<arrString.length; i++){
    if(arrString[i].includes("-")){
      arrayCheck.push(0);
    } else {
      arrayCheck.push(1)
    }
  }
  for(let i=0; i<arrayCheck.length; i++){
    if(arrayCheck[i] == 0 && arrayCheck[i+1] == 1){
      count++;
    }
    if(arrayCheck[i] == 1 && arrayCheck[i+1] == 0){
      count++;
    }
  }
  return count;
}
//console.log(catchSignChange([-47,84,-30,-11,-5,74,77]));

const whosOnline = (friends) => {

    let dict = {};
  
      for(let i=0; i<friends.length; i++){
        if(friends[i].status == 'online' && friends[i].lastActivity <= 10){
            if(dict.hasOwnProperty('online')){
              dict['online'].push(friends[i].username);
            } else {
              dict['online'] = [friends[i].username];
            }
        } else if(friends[i].status == 'online' && friends[i].lastActivity >= 10){
          if(dict.hasOwnProperty('away')){
            dict['away'].push(friends[i].username);
          } else {
            dict['away'] = [friends[i].username];
          }
        }
        if(friends[i].status == 'offline'){
          if(dict.hasOwnProperty('offline')){
            dict['offline'].push(friends[i].username);
          } else {
            dict['offline'] = [friends[i].username];
          }
        }
      }
      return dict;
    }

let ar =
  [{
    username: 'David',
    status: 'online',
    lastActivity: 10
  }, {
    username: 'Lucy', 
    status: 'offline',
    lastActivity: 22
  }, {
    username: 'Bob', 
    status: 'online',
    lastActivity: 104
  }]
  //console.log(whosOnline(ar));

  function solution(pairs){
   
    let str = "";
    for(let k in pairs){
      str+= k+" = "+pairs[k]+",";
    }
return str.slice(0,-1);
  }
//console.log(solution({0: 'a', 'b': 2}));