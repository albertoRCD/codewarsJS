
let elementoMenor = (args) => {
    args.sort((a,b) => (a-b));
    return args[0];
    }   

console.log(elementoMenor([78,56,232,12,8]));

//-----------------------------------------------------------------

let calculaEdad = (a,b) => {

    if (a > b) {
        if ((a - b) > 1) {
            return "You will be born in " + (a - b) + " years.";
        } else if ((a - b) == 1) {
            return "You will be born in " + (a - b) + " year.";
        }
    } else if (a < b) {
        if ((b - a) > 1) {
            return "You are " + (b - a) + " years old.";
        } else if ((b - a) == 1) {
            return "You are " + (b - a) + " year old.";
        }
    } else {
        return "You were born this very year!";
    }
}

console.log(calculaEdad(3,4));

//----------------------------------------------------------------------

function esPalindromo(str){

    str = str.toLowerCase();
    if(str == "")
      return true;
    
      for(let i=0; i<str.length; i++){
          for(let j=str.length-1; j>=0; j--){
              if(str.charAt(i) != str.charAt(j))
                  return false;
              i++;
          }
      return true;
      }
  }

console.log(esPalindromo("Abba"));

//-------------------------------------------------------------------------

function dutyFree(normPrice, discount, hol){

    //1 botella = normprice
    //1 botella con descuento = normprice%discount
    //norprice - descuento * hol;

    let botellaConDescuento = (normPrice * discount) / 100;
    let total = hol / botellaConDescuento;
    return Math.floor(total);
}
console.log(dutyFree(17, 10, 500));

//---------------------------------------------------------------------------

function grow(x){
    let total = 1;
    for(let i=0; i<x.length; i++){
        total *= x[i];
    }
    return total;
  }
console.log(grow([1, 2, 3]));

//------------------------------------------------------------------------

function reverseF (str) {
    let r = "";
    for(let i=str.length-1; i>=0; i--){
        r += str.charAt(i);
    }
    return r;
}

/*function solution(str){
    return str.split('').reverse().join('');  
}*/

console.log(reverseF("hola"));

//---------------------------------------------------------------------------

class Ball {
    constructor(ballType = "regular") {
      this.ballType = ballType;
    }
  }

//--------------------------------------------------------------------------

let opposite = (n) => {
    return n * -1;
}
console.log(opposite(-35));

//------------------------------------------------------------------------

function firstNonConsecutive (arr) {

    let primerNumero = arr[0];

    for(let i=0; i<arr.length; i++, primerNumero++){
        if(arr[i] != primerNumero)
            return arr[i];
    }

    return null;
}

console.log(firstNonConsecutive([1,2,3,4,6,7,8]))

//---------------------------------------------------------------------

function toBinary (number) {
    return parseInt(number.toString(2));
}

console.log(toBinary(3));

//--------------------------------------------------------------------

function sumDigits(number) {

    let total = 0;
        let numString = number.toString();

    if(number > 0){
        for(let i=0; i<numString.length; i++){
            total += parseInt(numString.charAt(i));
        }
        return total;
    } else {
        for(let i=1; i<numString.length; i++){
            total += parseInt(numString.charAt(i));
        }
        return total;
    }


}

console.log(sumDigits(5535));

//--------------------------------------------------------------------------

function openOrSenior(data){
    // senior = 55+, handicap > 7
    //handicaps (-2 ---- 26)
    /*  [ [22,32],
            [23,55],
            [73,7]
    ]

    */
   let results = [];

    for(let i=0; i<data.length; i++){
            if(data[i][0] >= 55 && data[i][1] > 7){
                results.push("Senior")
            } else {
                results.push("Open");
            }
        
    }    
    return results;
  }
//return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
  console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));

  //------------------------------------------------

  function getMiddle(s)
  {
    let longitudPalabra = s.length-1;

    if(longitudPalabra % 2 == 0){
        return s.charAt(longitudPalabra/2);
    } else {
        return s.charAt(longitudPalabra/2)+s.charAt((longitudPalabra/2) + 1)
    }
  }

  console.log(getMiddle("testing"));

  //---------------------------------------------

  function findShort(s){

    let maximo = 999999;
    let sSplit = s.split(" ");
    for(let i=0; i<sSplit.length; i++){
        if(sSplit[i].length < maximo)
        maximo = sSplit[i].length;
    }

    return maximo;
} 
console.log(findShort("bitcoin take over the world maybe who knows perhaps"))

//------------------------------------------------------

function solution(str, ending){
    
    return ending == "" ? true : str.slice(-ending.length) === ending;

  }

  console.log(solution('abcde', 'cde'));

//--------------------------------------------------------

function nameShuffler(str){
    
    let strSplit = str.split(" ");
    return strSplit[1] + " " + strSplit[0];

  }

  //return str.split(' ').reverse().join(' ')

  console.log(nameShuffler('Mary jeggins'));

  //-------------------------------------------------------------

  function mxdiflg(a1, a2) {

    let minimoa1 = a1.sort((a,b) => a.length-b.length)[0];
    let maximoa1 = a1.sort((a,b) => a.length-b.length)[a1.length-1];
    let minimoa2 = a2.sort((a,b) => a.length-b.length)[0];
    let maximoa2 = a2.sort((a,b) => a.length-b.length)[a2.length-1];

    if(minimoa1.length > minimoa2.length){
        return maximoa1.length - minimoa2.length;
    } else {
        return maximoa2.length - minimoa1.length;
    }

}

console.log(mxdiflg(["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"], ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]));

//-----------------------------------------------------------------

const sequenceSum = (begin, end, step) => {

    let total = 0;
    for(let i=begin; i<=end; i+=step){
      total+=i;
    }
  return total;
};

console.log(sequenceSum(1,5,1));

//-------------------------------------------------------------------

function removeSmallest(numbers) {
    let arrayNumbers = [...numbers];
    let minimo = arrayNumbers.sort((a,b) => a-b)[0];
    let nuevoArray = [];
    let contador = 1;
    for(let i=0; i<numbers.length; i++){
        if(numbers[i] == minimo && contador == 1){
            contador++
            continue;
        }
        else {
            nuevoArray.push(numbers[i]);
        }
    }
    
    return nuevoArray;
  }

  console.log(removeSmallest([5, 3, 2, 1, 4]));

  //----------------------------------------------------

  function hero(bullets, dragons){

    return dragons > bullets/2? false : true;  
    
  }
console.log(hero(10,5));
  
  //-----------------------------------------

  function checkExam(array1, array2) {

  let total = 0 ;
  
    for(let i=0, j=0; i<array1.length, j<array2.length; i++, j++){


        if(array1[i] == array2[j]){
            total += 4;
        } else if(array1[i] != array2[j]){
            if(array2[j] == "")
                total += 0;
            else
                total -= 1;
        } 
    }
    if(total < 0)
    return 0
    else 
    return total;
  }

  console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]));

  //-----------------------------------------

  function rowWeights(array){
    
    let team1 = array[0];
    let team2 = 0;

    for(let i=1; i<array.length; i++){
        if(i % 2 == 0){
            team1 += array[i];
        } else {
            team2 += array[i];
        }
    }

    let arrayWeights = [team1, team2];
    return arrayWeights;

  }

  console.log(rowWeights([13,27,49]));

  //---------------------------------------------------

  function factorial(n)
{
  if(n < 0 || n > 12)
   throw new RangeError("Error");

   let f = n;

   for(let i=n-1 ; i>1; i--){
    f *= i;
   }
   return f;
}

/*  if (n < 0 || n > 12) {
    throw new RangeError('Parameter must be between ' + 0 + ' and ' + 12);
  }
return n<2 ? 1 : n*factorial(n-1);
*/

console.log(factorial(5));

//----------------------------------------------------------

function problem(x){
    
    return typeof x === 'string' ? "Error" : x * 50 + 6;

  }

  console.log(problem("5"));

  //-----------------------------------------------------

  String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}

 // console.log(toAlternatingCase("oawdawda QueTak JEJE"))

  //---------------------------------------------------

  function asdf(nums){
    if(nums == [] || nums == null)
      return [];
    
    return nums.sort((a,b) => a-b);
  }

  console.log(asdf([5,2,6,1,5,1,523,5]));

  //-------------------------------------------------------

  function cupoNazo(enteredCode, correctCode, currentDate, expirationDate){

    return enteredCode == correctCode && new Date(currentDate) <= new Date(expirationDate);

  }

  console.log(cupoNazo(0,0,'September 5, 2012','October 1, 2014'))

  //---------------------------------------------------

  function distinct(array) {
  
    return array.filter((item, index) => array.indexOf(item) === index);
  }
  console.log(distinct([2,5,1,1,2,4,2,3,5]));

  //--------------------------------------------------

  function remove (string) {


    return string.charAt((string.length-1) == '!') ? string.slice(0,string.length-1) : string;
  }

  console.log(remove("!hi"));

  // ----------------------------------------

  function apple(x){

    return Math.pow(x,2) > 1000 ? "It's hotter than the sun!!" : "Help yourself to a honeycomb Yorkie for the glovebox.";
    
  }
  console.log(apple(4));

  //-----------------------------------------

  function derive(coefficient,exponent) {
    return (coefficient * exponent).toString()+"x^"+(exponent-1).toString();
  }

  console.log(derive(5,7));

  //--------------------------------------

  function sumStr(a,b) {
    if(a == "" || b == "")
    return NaN;
  if(a == "" && b == "")
    return NaN;
  
  let n1 = parseInt(a);
    let n2 = parseInt(b);
    let suma = n1+n2;
    return suma.toString();

  }

  console.log(sumStr("5"," "));

  //-----------------------------------------------

  function getDrinkByProfession(param){

    let p = param.toLowerCase();

    switch(p){
      case 'jabroni' :
        return "Patron Tequila"
      case 'school counselor':
        return "Anything with Alcohol"
      case 'programmer':
        return "Hipster Craft Beer"
      case 'bike gang member':
        return "Moonshine";
      case 'politician':
        return "Your tax dollars"
      case 'rapper':
        return "Cristal";
      default:
        return "Beer";
    }
  
}

console.log(getDrinkByProfession("school counSelor"))

//------------------------------------------------------

function sortByLength(array){

  return array.sort((a,b) => a.length-b.length);
}
 //console.log(sortByLength("Telescopes", "Glasses", "Eyes", "Monocles"));


 //------------------------------------------------------

 function tablaMultiplicar(num){

  let str = "";
  for(let i=1; i<=10; i++){
      str += i + " * " + num + " = " + (i*num) +"\n"; 
  }

return str.toString();
 }
 console.log(tablaMultiplicar(5));

 //------------------------------------------------------------

 function twoSum(numbers, target){

  for(let i=0; i<numbers.length-1; i++){
    for(let j=i+1; j<numbers.length; j++){
      if((numbers[i] + numbers[j]) == target){
          return [i, j];
      }
    }
  }
 }
 console.log(twoSum([1,2,3], 4));

 //--------------------------------------------------------

 function uniqueInOrder(list){

  let array = [...list];
  let nuevoArray = []

  for(let i=0; i<array.length; i++){
      if(array[i] != array[i+1]){
        nuevoArray.push(array[i]);
    }
  }
return nuevoArray;

 }
 console.log(uniqueInOrder([1,2,2,2,3,3,3,3]));

 //----------------------------------------------------------
 function move (position, roll) {
  
  return roll * 2 + position;

}
console.log(move(3,6));
//-----------------------------------------------------------

function maps(x){

  return x.map(v => v*2);
}

console.log(maps([1,2,3]));

//---------------------------------------------------------

function wave(str){
  let arrayWaves = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      let newStr = str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1);
      arrayWaves.push(newStr);
    }
  }

  return arrayWaves;
}
console.log(wave("hello amparo"));

//------------------------------------------------------------

const reverseOrder = (array) => {

  return array.reverse();

}
console.log(reverseOrder([9,2,0,7]));

//----------------------------------------------------------

function deleteNth(arr,n){
  new_arr = []
  arr.forEach((element) => {
    if (new_arr.filter(i => i === element).length < n){
      new_arr.push(element);
    }
  })
  return new_arr;
}

console.log(deleteNth([20,37,20,21], 1));

//------------------------------------------------

function calculateYears(principal, interest, tax, desired) {
  
  if(principal >= desired)
    return 0;

   let years = 0; 
  while(principal < desired){
    principal += (principal*interest) * (1 - tax);
    years++;
  }
  return years;
}

console.log(calculateYears(1000,0.05,0.18,1100));

//-----------------------------------

function position(letter){

  let abecedario = "abcdefghijklmnopqrstuvwxyz";

  return "Position of alphabet: " + (abecedario.indexOf(letter) + 1);

} 
console.log(position("g"));

//---------------------------------------------------

function findUniq(arr) {

 for(let i=0; i<arr.length; i++){
      if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i]))
        return arr[i];
 }
}
console.log(findUniq([1,1,1,2,1,1]));

//-----------------------------------------------------

function removeUrlAnchor(url){
  
  let indiceDeAnchor = url.indexOf("#");
  if(indiceDeAnchor > -1)
    return url.slice(0,indiceDeAnchor);

  return url;
}

console.log(removeUrlAnchor("www.codewars.com#about"));

//-------------------------------

function gimme (triplet) {

  let copia = [...triplet];
  //devuelve el indice del numero del numero que está entre el más pequeño y el mayor.

  triplet.sort((a,b) => a-b)[1];


  return copia.indexOf(triplet.sort((a,b) => a-b)[1]);
  
}
console.log(gimme([2,3,1]));

//---------------------------------------

function checkForFactor (base, factor) {
  return base % factor == 0;
}
console.log(checkForFactor(10,2));

//-------------------------------------------------

function getGrade (s1, s2, s3) {
  
let score = (s1 + s2 + s3) / 3;


  if (score >= 90 && score <= 100)
    return 'A';
  if (score >= 80 && score < 90)
    return 'B';
  if (score >= 70 && score < 80)
    return 'C';
  if (score >= 60 && score < 70)
    return 'D';
   if (score >= 0 && score < 60)
    return 'F';
}


console.log(getGrade(58,62,70));

//--------------------------------------------------
function solve(s){
  
  let contadorUpper = 0;
  let contadorLower = 0;

  for(let i=0; i<s.length; i++){
    if(s.charAt(i).toUpperCase() == s.charAt(i))
        contadorUpper++;
    else
      contadorLower++;
  }

  if (contadorLower >= contadorUpper){
    return s.toLowerCase();
  } else {
    return s.toUpperCase();
  }

}
console.log(solve("aaWD"));

//---------------------------------------

function addLength(str) {
  
  let strSplit = str.split(" ");
  let newArray = [];

  for(let i=0; i<strSplit.length; i++){
    newArray.push(strSplit[i] + " " + strSplit[i].length);
  }
return newArray;
  }

  // return str.split(" ").map(s => `${s} ${s.length}`)
console.log(addLength("apple ban"));  

//-------------------------------------------

function rainAmount(mm){
  if (mm < 40) 
       return `You need to give your plant ${40 - mm}mm of water`;
  else 
       return "Your plant has had more than enough water for today!"
  
}

console.log(rainAmount(24));

//-----------------------------------------------

function hello(name) {
  
  return name == "" ? "Hello, World!" : `Hello, ${name.charAt(0).toUpperCase()}${name.slice(1).toLowerCase()}!`; 
}

console.log(hello("aMparo HJose"));

//-------------------------------------------------------------

function spEng(sentence){
  
  return sentence.toLowerCase().includes('english');

  }

console.log(spEng("jajenglishda"));

//----------------------------------------------------

function noOdds( values ){

  let array = [...values];
  let arrayNoOdds = [];

  for(let i=0; i<array.length; i++){
    if(array[i] % 2 == 0){
        arrayNoOdds.push(array[i]);
    }
  }

return arrayNoOdds;
// return values.filter(x => x%2==0);
}
console.log(noOdds([2,4,6,5,6,7,8]));

//----------------------------------

function remainder(n, m){
  // Divide the larger argument by the smaller argument and return the remainder
return n > m ? n % m : m % n;
}
console.log(remainder(10,3));

//----------------------------------------

function betterThanAverage(classPoints, yourPoints) {
 
  let total = 0;
  for(let i=0; i<classPoints.length; i++){
      total += classPoints[i];
  } 

  let avg = total / classPoints.length;

  return yourPoints > avg;

}
console.log(betterThanAverage([10,101,1010,23], 10));

//--------------------------------------

function findMultiples(integer, limit) {
 
  let multiplos = []

  for(let i=1; i<=limit; i++){
    let result = integer * i;
    if(result <= limit)
    multiplos.push(result);
  }
  return multiplos;
}
console.log(findMultiples(5,25));

//----------------------------------------

function expressionMatter(a, b, c) {
  
  let resultsArray = [];
  let result = a * (b+c);
  resultsArray.push(result);
  let result2 = a * b * c;
  resultsArray.push(result2);
  let result3 = a + b * c;
  resultsArray.push(result3);
  let result4 = (a+b) * c;
  resultsArray.push(result4);
  let result5= a + b + c;
  resultsArray.push(result5);

  return resultsArray.sort((a, b) => a-b)[resultsArray.length-1];
}

console.log(expressionMatter(1, 10, 1));

//------------------------------------------

var min = function(list){
    
  return list.sort((a,b) => (a-b))[0];
}

var max = function(list){
  
  return list.sort((a,b) => (a-b))[list.length-1];
}

console.log(min([-52, 56, 30, 29, -54, 0, -110]));
console.log(max([-52, 56, 30, 29, -54, 0, -110]));

//-----------------------------------------------

function isSortedAndHow(array) {

  let copiaArray = [...array];
  let arrayAscentende = copiaArray.sort((a,b) => a-b);
  let copiaAscendente = [...arrayAscentende];
  let arrayDescendete = copiaAscendente.reverse();

  return JSON.stringify(array) === JSON.stringify(arrayAscentende) ? "yes, ascending" : JSON.stringify(array) === JSON.stringify(arrayDescendete) ? "yes, descending" : "no";

}

console.log(isSortedAndHow([5,4,2]));

//-------------------------------------------------

function finalGrade(exam, projects){

  if(exam > 90 || projects > 10)
    return 100;
  else if(exam > 75 && projects > 4)
    return 90;
  else if(exam > 50 && projects > 1)
  return 75;
  else return 0;
}

console.log(finalGrade(85,5));

//---------------------------------------------------------

function nbYear(p0, percent, aug, p) {
  
  let years = 0;
  while(p0 < p){

    p0 += Math.floor((p0 * percent) / 100 + aug);
    years++;
  }


return years;
}

console.log(nbYear(2003741.1037720907, 0.25 ,-1000 ,2000000));

//-----------------------------------------------


