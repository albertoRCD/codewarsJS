// 1. https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript

var maxSequence = function (arr) {

  let max = 0;
  let aux = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      aux += arr[j];
      if (aux > max) {
        max = aux;
      }
    }
    aux = 0;
  }
  return max;
}

//console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// 2. https://www.codewars.com/kata/54599705cbae2aa60b0011a4/train/javascript

function one(arr, fun) {

  return arr.filter(x => fun(x)).length == 1 ? true : false;

}

//console.log(one([1,2,3,4,5], function(item){ return item<2}));

// 3. https://www.codewars.com/kata/564e7fc20f0b53eb02000106/train/javascript

function consonantCount(str) {

  return str.split("").filter(x => /[^aeiouAEIOU\d\W_]/.test(x)).length;

}

//console.log(consonantCount('aeiouAEIOU'));

// 4. https://www.codewars.com/kata/5938f5b606c3033f4700015a/train/javascript

function alphabetWar(fight) {

  const pointsLeft = {
    'w': 4,
    'p': 3,
    'b': 2,
    's': 1
  };
  const pointsRight = {
    'm': 4,
    'q': 3,
    'd': 2,
    'z': 1
  };

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

function removeParentheses(s) {

  while (/\([^()]*\)/.test(s)) {
    s = s.replace(/\([^()]*\)/g, '');
  }
  return s;
}

//console.log(removeParentheses("a(b(c))"));

// 6. https://www.codewars.com/kata/545993ee52756d98ca0010e1/train/javascript

function none(arr, fun) {

  return arr.every(x => !fun(x));

}

//console.log(none([1,2,3,4,5],function(item){ return item > 5 }));

// 7. https://www.codewars.com/kata/55ea5650fe9247a2ea0000a7/train/javascript

function unscrambleEggs(word) {

  return word.replaceAll('egg', "");

}
//console.log(unscrambleEggs("ceggodegge heggeregge"))

// 8. https://www.codewars.com/kata/56fcfad9c7e1fa2472000034/train/javascript

function evil(n) {

  return n.toString(2).split("").filter(x => x == '1').length % 2 == 0 ? "It's Evil!" : "It's Odious!";

}
//console.log(evil(11));

// 9. https://www.codewars.com/kata/59f7fc109f0e86d705000043/train/javascript

function divisibleByThree(str) {

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
  if (posA + 1 == arr.indexOf(b) || posA - 1 == arr.indexOf(b)) {
    return true;
  }
  return false;
}
//console.log(consecutive([1, 3, 5, 7], 3, 1));

function spacey(array) {

  let result = [array[0]];
  for (let i = 0, j = 1; i < array.length - 1; i++) {
    result.push(result[i] + array[i + 1]);
  }
  return result;
}

//console.log(spacey(['kevin', 'has','no','space']));

var flatten = function (array) {

  return [].concat(...array);
}

//console.log(flatten([[1,2,3],["a","b","c"],[1,2,3]]));

function dominator(arr) {

  let contador;
  let numero;
  let maximo = 1;

  for (let i = 0; i < arr.length; i++) {

    contador = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        contador++;
        if (contador > maximo) {
          maximo = contador;
          numero = arr[i];
        }
      }
    }
  }
  return maximo > arr.length / 2 ? numero : -1;
}

//console.log(dominator([3,4,3,2,3,1,3,3]));

function splitTheBill(x) {

  let keys = Object.keys(x);
  let total = 0;
  keys.forEach(element => {
    total += x[element];
  });

  let toPay = total / keys.length;

  let result = {};

  keys.forEach(element => {
    let difference = x[element] - toPay;

    let roundedDifference = parseFloat(difference.toFixed(2));

    result[element] = roundedDifference;
  })

  return result;

}
//console.log(splitTheBill({A: 20, B: 15, C: 10}));

function moveTen(s) {

  let abecedario = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";

  let r = "";

  for (let i = 0; i < s.length; i++) {
    let index = abecedario.indexOf(s[i]) + 10;
    r += abecedario[index];
  }
  return r;
}

//console.log(moveTen("testcase"));

function solution123(fullText, searchText) {

  let count = 0;
  let index = 0;

  while ((index = fullText.indexOf(searchText, index)) !== -1) {
    count++;
    index += searchText.length;
  }

  return count;
}

//console.log(solution123('abcabc','abc'));

function numObj(s) {

  let arr = [];

  for (let i = 0; i < s.length; i++) {
    let obj = {};
    obj[s[i].toString()] = String.fromCharCode(s[i]);
    arr.push(obj);
  }

  return arr;
}

//console.log(numObj([118,117,120]));

function dotCalculator(equation) {

  let firstSpace = equation.indexOf(" ");
  let lastSpace = equation.lastIndexOf(" ");
  let firstDots = equation.slice(0, firstSpace).length;
  let lastDots = equation.slice(lastSpace, -1).length

  for (let i = 0; i < equation.length; i++) {
    if (equation[i] !== '.' && equation[i] !== " ") {
      switch (equation[i]) {
        case '+':
          return ".".repeat(firstDots + lastDots);
        case '-':
          return ".".repeat(firstDots - lastDots);
        case '/':
          return ".".repeat(firstDots / lastDots);
        case '*':
          return ".".repeat(firstDots * lastDots);
      }
    }
  }
}
//console.log(dotCalculator('..... + ...............'));

function gordon(a) {
  return a.toUpperCase().replaceAll('A', '@').replaceAll(/[EIOU]/g, '*').split(" ").map(x => x + "!!!!").join(" ");
}

//console.log(gordon('What feck damn cake'));

function broken(x) {
  return x.split("").map(x => x == '0' ? '1' : '0').join("");
}

//console.log(broken('0010101010100000000'))

function rotate(str) {

  // => ["elloH", "lloHe", "loHel", "oHell", "Hello"]

  if (str == "") return [];

  let array = [str.slice(1, ) + [str[0]]];

  for (let i = 0; i < str.length - 1; i++) {
    let w = array[i].slice(1, ) + [array[i].charAt(0)];
    array.push(w);
  }
  return array;
}

//console.log(rotate("Hello"));

function sorterBooks(textbooks) {
  return textbooks.sort();
}
//console.log(sorterBooks(['Algebra', 'History', 'Geometry', 'English']));

function toTime(seconds) {

  let hours = seconds / 3600;
  let resto = seconds % 3600;
  let minutes = resto / 60;

  return `${parseInt(hours)} hour(s) and ${parseInt(minutes)} minute(s)`;

}
//console.log(toTime(323500));

function multiplyAll2(arr, v) {

  let f = arr.map(x => x * v);

  return f;
}

//console.log(multiplyAll2([1, 2, 3], 2));

function reverseBits(n) {

  if (n == Number.MAX_SAFE_INTEGER) return Number.MAX_SAFE_INTEGER;

  let binN = n.toString(2);
  let reverseBin = parseInt(binN.split("").reverse().join(""));

  return parseInt(reverseBin, 2);
}
//console.log(reverseBits(Number.MAX_SAFE_INTEGER));

function lastDigit(n, d) {

  if (d <= 0) return [];

  let r = n.toString().slice(-d).split("");

  return r.map(x => x = parseInt(x));

}

//console.log(lastDigit(12345,3));

function alternate(n, firstValue, secondValue) {

  let array = [];

  for (let i = 0; i < n; i++) {
    if (i % 2 == 0)
      array.push(firstValue);
    else
      array.push(secondValue);
  }
  return array;
}

//console.log(alternate(20, 'blue', 'red'));

function flickSwitch(arr) {

  //['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]

  let a = [];
  let found = false;

  arr.forEach(element => {
    if (element != 'flick' && !found) {
      a.push(true);
    } else if (element != 'flick' && found) {
      a.push(false);
    } else if (element == 'flick' && !found) {
      a.push(false)
      found = true;
    } else if (element == 'flick' && found) {
      a.push(true);
      found = false;
    }

  });

  return a;
}

//console.log(flickSwitch(["codewars", "flick", "code", "wars"]));

function multiply2(number) {
  if (number < 0) {
    return number * Math.pow(5, Math.abs(number).toString().length);
  }
  return number * Math.pow(5, number.toString().length);
}

//console.log(multiply2(-32010480));

function calculate3(str) {
  return eval(str.replaceAll('plus', '+').replaceAll('minus', '-')).toString();
}
//console.log(calculate3("1plus2plus3plus4"));

function scrollingText(text) {
  let array = [];
  for (let i = 0; i < text.length; i++) {
    array.push(text.toUpperCase().slice(i, text.length + 1) + text.toUpperCase().slice(0, i));
  }
  return array;
}
//console.log(scrollingText('codewars'));

function numPrimorial(n) {

  const isPrime = (x) => {
    if (x < 2) return false;
    for (let i = 2; i <= Math.sqrt(x); i++) {
      if (x % i === 0) return false;
    }
    return true;
  }

  let f = [];
  let i = 2; // Comenzar a buscar desde el primer número primo

  while (f.length < n) {
    if (isPrime(i)) {
      f.push(i);
    }
    i++;
  }

  // Calcular el primorial
  return f.reduce((acc, curr) => acc * curr, 1);
}

//  console.log(numPrimorial(3));


function whoIsWinner(piecesPositionList) {

  let d = {};
  for (let i = 0; i < piecesPositionList.length; i++) {

    let element = piecesPositionList[i];

    if (d[element]) {
      d[element]++;
    } else {
      d[element] = 1;
    }

    if (d[element] == 4) {
      return element.slice(2, );
    }
  };

  return "Draw";
}

/*console.log(whoIsWinner(["A_Yellow",
  "B_Red",
  "B_Yellow",
  "C_Red",
  "G_Yellow",
  "C_Red",
  "C_Yellow", 
  "D_Red",
  "G_Yellow",
  "D_Red",
  "G_Yellow",
  "D_Red",
  "F_Yellow",
  "E_Red",
  "D_Yellow"]));*/

function remove3(string) {
  return string.replace(/([a-zA-Z])!+/g, '$1');
}
//console.log(remove3("hi!! hi! !hii"));

function balance(left, right) {

  let resultL = 0;
  let resultR = 0;

  for (let i = 0; i < left.length; i++) {
    if (left[i] == '!') resultL += 2;
    else if (left[i] == '?') resultL += 3;
  }

  for (let i = 0; i < right.length; i++) {
    if (right[i] == '!') resultR += 2;
    else if (right[i] == '?') resultR += 3;
  }

  return resultL > resultR ? 'Left' : resultL < resultR ? 'Right' : 'Balance';

}

//console.log(balance('??!', '!!?'));

const findAll = (array, n) => {
  let asd = [];
  array.map((x, i) => x == n && asd.push(i));
  return asd;
}
//console.log(findAll([6, 9, 3, 4, 3, 82, 11], 3));

function sumNoDuplicates(numList) {

  let norespes = [];

  for (let i = 0; i < numList.length; i++) {
    if (numList.indexOf(numList[i]) == numList.lastIndexOf(numList[i])) {
      norespes.push(numList[i]);
    }
  }
  return norespes.reduce((x, acc) => x + acc);
}
//console.log(sumNoDuplicates([5, 6, 10, 3, 10, 10, 6, 7, 0, 9, 1, 1, 6, 3, 1]));

const prevMultOfThree = n => {

  if (n % 3 == 0) return n;
  if (n.toString().length == 1) {
    if (parseInt(n) % 3 != 0) return null;
  }
  let l = n.toString();
  let cut = l.length - 1;

  do {
    l = l.slice(0, cut);
    if (parseInt(l) % 3 == 0) return parseInt(l);
    if (l.length == 1) {
      if (parseInt(l) % 3 != 0) return null;
    }
    cut--;

  } while (true);

}
//console.log(prevMultOfThree(2));

function evenChars(string) {

  if (string.length < 2 || string.length > 100) return "invalid string";
  return string.split("").map((x, i) => ++i % 2 == 0 ? x : 0).filter(x => x != 0);

}
//console.log(evenChars("1234"));

function mergeArrays(a, b) {

  return [...new Set([...a, ...b])].sort((x, y) => x - y);
}
//console.log(mergeArrays([4, 8, 1, 6], [2, 4, 40, -1, 3, 6]));

function findOddNames(list) {

  let names = [];
  let validNames = [];
  for (let i = 0; i < list.length; i++)
    names.push(list[i].firstName);

  for (let i = 0; i < names.length; i++) {
    let suma = 0;
    for (let j = 0; j < names[i].length; j++) {
      suma += names[i].charCodeAt(j);
    }
    suma % 2 != 0 && validNames.push(names[i]);
  }

  let resultado = [];
  for (let i = 0; i < list.length; i++) {
    if (validNames.includes(list[i].firstName)) {
      resultado.push(list[i]);
    }
  }
  return resultado;
}

list1 = [{
    firstName: 'Aba',
    lastName: 'N.',
    country: 'Ghana',
    continent: 'Africa',
    age: 21,
    language: 'Python'
  },
  {
    firstName: 'Abb',
    lastName: 'O.',
    country: 'Israel',
    continent: 'Asia',
    age: 39,
    language: 'Java'
  },
  {
    firstName: 'Abb',
    lastName: 'O.',
    country: 'Israel',
    continent: 'Asia',
    age: 39,
    language: 'Java'
  }
];

//console.log(findOddNames(list1));

function wordSearch(query, seq) {

  let indices = [];
  let queryM = query.toLowerCase();
  for (let i = 0; i < seq.length; i++) {
    if (seq[i].toLowerCase().includes(queryM))
      indices.push(i);
  }

  let r = [];
  for (let i = 0; i < seq.length; i++) {
    if (indices.includes(i)) {
      r.push(seq[i]);
    }
  }
  return r.length != 0 ? r : ['Empty'];
}

//console.log(wordSearch("ab", ["za", "aB", "Abc", "zAB", "zbc"]));

function isIntArray(arr) {
  return !arr.some(x => !Number(x));
}
//console.log(isIntArray([]));

function nextItem(xs, item) {

  if (typeof xs === 'string') {
    xs = xs.split('');
  }

  for (let i = 0; i < xs.length; i++) {
    if (xs[i] === item) {
      return xs[i + 1];
    }
  }
  return undefined
}
//console.log(nextItem('asd', 'a'));

function mean(lst) {

  let numbers = lst.filter(x => Number(x));
  let letters = lst.filter(l => !Number(l) && l != '0');

  return [parseFloat(numbers.map(x => x * 0.1).reduce((x, acc) => x + acc).toFixed(1)), letters.join('')];
}
//console.log(mean(["u", "6", "d","1","i", "w", "6", "s", "t", "4", "a", "6", "g", "1", "2", "w", "8", "o", "2", "0"]));

function stringMerge(string1, string2, letter) {

  let index = string1.indexOf(letter);
  let index2 = string2.indexOf(letter);
  return string1.slice(0, index) + string2.slice(index2);
}
//console.log(stringMerge("apowiejfoiajsf","iwahfeijouh", "j"));

function typeOfSum(a, b) {
  let r = a + b;
  return typeof (r);
}
//console.log(typeOfSum('a', 4 ));

function findMissingNumber(sequence) {

  if (sequence.length == 0) return 0;
  let valid = true;
  if ((/[a-zA-Z]/).test(sequence)) return 1;


  let ordered = sequence.split(" ").map(x => parseInt(x)).sort();
  let firstNumber = ordered[0];
  let lastNumber = ordered[ordered.length - 1];

  for (let i = firstNumber, o = 0; i <= lastNumber; i++, o++) {
    if (i != ordered[o]) {
      valid = false;
      return i;
    }
  }

  if (valid && firstNumber != 1) return 1;
  else if (valid && firstNumber == 1) return 0;
}

//console.log(findMissingNumber("1 2 3 4 5"));

String.prototype.isLetter = function () {
  return /^[a-zA-Z]$/.test(this);
}

function beggars(values, n) {
  var outputValues = [];
  for (var i = 0; i < n; i++) {
    var sum = 0;
    for (var j = i; j < values.length; j += n) {
      sum += values[j];
    }
    outputValues.push(sum);
  }
  return outputValues;
}
//console.log(beggars([1,2,3,4,5],1));

function solve(arr) {
  let r = [];

  for (let i = 0; i < arr.length; i++) {
    let highNumber = Math.max(...arr.slice(i));
    if (highNumber == arr[i]) {
      r.push(highNumber);
    }
  }
  return Array.from(new Set(r));
}
//console.log(solve([16,17,14,3,14,5,2]));

sortme = function (names) {
  /* Explicación:
arr.slice(): Crea una copia superficial del array original.
sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())):
Convierte cada cadena a minúsculas usando toLowerCase() dentro de la función de comparación.
Luego, localeCompare() compara las cadenas, ignorando las diferencias entre mayúsculas y minúsculas. */
  return names.slice().sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
}
//console.log(sortme(["Hello", "there", "I'm", "fine"]));

function capital(capitals) {

  return "The capital of " + capitals[0]['state'] + " is " + capitals[0]['capital'];
}
//console.log(capital([{state: 'Maine', capital: 'Augusta'}]));

function circleArea(radius) {
  if (radius <= 0) {
    throw new Error("Radius must be a positive number.");
  }
  return parseFloat((Math.PI * Math.pow(radius, 2)).toFixed(3));
}
//console.log(circleArea(68));

function sumSquares(array) {
  return array.map(x => Math.pow(x, 2)).reduce((x, acc) => x + acc);
}
//console.log(sumSquares([1,2,3,4,5]));

function freqSeq(str, sep) {
  let d = {};
  for (let i = 0; i < str.length; i++) {
    if (d[str[i]]) {
      d[str[i]]++;
    } else {
      d[str[i]] = 1;
    }
  }
  let r = "";

  for (let i = 0; i < str.length; i++) {
    if (d.hasOwnProperty(str[i])) {
      r += d[str[i]] + sep;
    }
  }
  return r.slice(0, r.length - 1);
}
//console.log(freqSeq('hello world', '-'));

//https://www.codewars.com/kata/58c9322bedb4235468000019/javascript

function isVeryEvenNumber(n) {

  let nstring = n.toString();
  let r = 0;

  for (let i = 0; i < nstring.length; i++) {
    r += parseInt(nstring[i]);
  }
  while (r >= 10) {
    if (r >= 10) {
      nstring = r.toString();
      r = 0;
      for (let i = 0; i < nstring.length; i++) {
        r += parseInt(nstring[i]);
      }
    }
  }
  return r % 2 == 0 && true;
}
//console.log(isVeryEvenNumber(856));

function nicknameGenerator(name) {
  if (name.length <= 3) return "Error: Name too short";
  const vogels = ['a', 'e', 'i', 'o', 'u'];
  return vogels.indexOf(name.charAt(2)) >= 0 ? name.slice(0, 4) : name.slice(0, 3);
}
//console.log(nicknameGenerator('Robert'));

function twoArePositive(a, b, c) {
  return [a,b,c].filter(x => x > 0).length == 2;
}
//console.log(twoArePositive(4, 6, 0));

Object.defineProperty(Array.prototype, 'numberOfOccurrences',{ 
  value : function numberOfOccurrences(element) {
    return this.filter(x => x === element).length;
  }
});
//console.log(numberOfOccurrences([1,2,3,4,5], 3));

var AmIAfraid = function(day, num){
    switch(day){
      case 'Monday':
        return num == 12 && true;
      case 'Tuesday':
        return num > 96 && true;
      case 'Wednesday':
        return num == 34 && true;
      case 'Thursday':
        return num == 0 && true;
      case 'Friday':
        return num % 2 == 0 && true;
      case 'Saturday':
        return num == 56 && true;
      case 'Sunday':
        return num == 666 || num == -666 && true;
      default: return false; 
    }
}
//console.log(AmIAfraid('Monday', 12));

function mean(town, strng) {
  // Encontrar los datos para la ciudad especificada
  const townData = strng.split('\n').find(row => row.startsWith(town + ':'));
  if (!townData) return -1;

  // Extraer los valores de precipitación
  const rainfalls = townData.match(/[\d.]+/g);
  if (!rainfalls || rainfalls.length === 0) return -1;

  // Calcular la media
  const sum = rainfalls.map(Number).reduce((acc, curr) => acc + curr, 0);
  return sum / rainfalls.length;
}

function variance(town, strng) {
  // Obtener la media de la ciudad
  const avg = mean(town, strng);
  if (avg === -1) return -1;

  // Encontrar los datos para la ciudad especificada
  const townData = strng.split('\n').find(row => row.startsWith(town + ':'));
  if (!townData) return -1;

  // Extraer los valores de precipitación
  const rainfalls = townData.match(/[\d.]+/g);
  if (!rainfalls || rainfalls.length === 0) return -1;

  // Calcular la varianza
  const variance = rainfalls.map(Number).reduce((acc, curr) => acc + Math.pow(curr - avg, 2), 0) / rainfalls.length;
  return variance;
}


const data = 
     "Rome:Jan 81.2,Feb 63.2,Mar 70.3,Apr 55.7,May 53.0,Jun 36.4,Jul 17.5,Aug 27.5,Sep 60.9,Oct 117.7,Nov 111.0,Dec 97.9" + "\n" +
     "London:Jan 48.0,Feb 38.9,Mar 39.9,Apr 42.2,May 47.3,Jun 52.1,Jul 59.5,Aug 57.2,Sep 55.4,Oct 62.0,Nov 59.0,Dec 52.9" + "\n" +
     "Paris:Jan 182.3,Feb 120.6,Mar 158.1,Apr 204.9,May 323.1,Jun 300.5,Jul 236.8,Aug 192.9,Sep 66.3,Oct 63.3,Nov 83.2,Dec 154.7" + "\n" +
     "NY:Jan 108.7,Feb 101.8,Mar 131.9,Apr 93.5,May 98.8,Jun 93.6,Jul 102.2,Aug 131.8,Sep 92.0,Oct 82.3,Nov 107.8,Dec 94.2" + "\n" +
     "Vancouver:Jan 145.7,Feb 121.4,Mar 102.3,Apr 69.2,May 55.8,Jun 47.1,Jul 31.3,Aug 37.0,Sep 59.6,Oct 116.3,Nov 154.6,Dec 171.5" + "\n" +
     "Sydney:Jan 103.4,Feb 111.0,Mar 131.3,Apr 129.7,May 123.0,Jun 129.2,Jul 102.8,Aug 80.3,Sep 69.3,Oct 82.6,Nov 81.4,Dec 78.2" + "\n" +
     "Bangkok:Jan 10.6,Feb 28.2,Mar 30.7,Apr 71.8,May 189.4,Jun 151.7,Jul 158.2,Aug 187.0,Sep 319.9,Oct 230.8,Nov 57.3,Dec 9.4" + "\n" +
     "Tokyo:Jan 49.9,Feb 71.5,Mar 106.4,Apr 129.2,May 144.0,Jun 176.0,Jul 135.6,Aug 148.5,Sep 216.4,Oct 194.1,Nov 95.6,Dec 54.4" + "\n" +
     "Beijing:Jan 3.9,Feb 4.7,Mar 8.2,Apr 18.4,May 33.0,Jun 78.1,Jul 224.3,Aug 170.0,Sep 58.4,Oct 18.0,Nov 9.3,Dec 2.7" + "\n" +
     "Lima:Jan 1.2,Feb 0.9,Mar 0.7,Apr 0.4,May 0.6,Jun 1.8,Jul 4.4,Aug 3.1,Sep 3.3,Oct 1.7,Nov 0.5,Dec 0.7";

//console.log(mean("Tokyo", data));

function rakeGarden(garden) {
  let r = [];
  let g = garden.split(" ");
    for(let i=0; i<g.length; i++){
      if(g[i] == 'gravel'){
        r.push('gravel');
      } else if(g[i] == 'rock'){
        r.push('rock');
      }
      else {
        r.push('gravel');
      }
    }
    return r.join(" ");

}
//console.log(rakeGarden('slug spider rock gravel gravel gravel gravel gravel gravel gravel ant snail'));

function countWords(str) {
  
  if(str == "") return 0;
  return str.trim().split(/\s+/).length;
}
//console.log(countWords(""));

function unusedDigits(...k) {
  let nums = ['0','1','2','3','4','5','6','7','8','9'];
  let nums2 = k.join("").split("");
  let r = "";
  for(let i=0; i<nums.length; i++){
    if(!nums2.includes(nums[i])){
      r+= nums[i];
    }
  }
  return r;
}
//console.log(unusedDigits(12, 34, 56, 78));

function solveNums(arr){

  arr.sort((a, b) => a - b);

  let nums = [];
  while (arr.length) {
    if (arr.length) nums.push(arr.pop()); // Add the max value
    if (arr.length) nums.push(arr.shift()); // Add the min value
  }
  return nums;
}
//console.log(solveNums([78,79,52,87,16,74,31,63,80]));

function killer(suspectInfo, dead) {
  let r = {};
  for(let k in suspectInfo){
    for(let i=0; i<dead.length; i++){
      if(suspectInfo[k].includes(dead[i])){
        if(r[k]) r[k]++;
        else r[k] = 1;
      }
    }
  }
  for(let s in r){
    if(r[s] == dead.length){
      return s;
    }
  }
}
/*console.log(killer({'James': ['Jacob', 'Bill', 'Lucas'],
  'Johnny': ['David', 'Kyle', 'Lucas'],
  'Peter': ['Lucy', 'Kyle']},['Lucas', 'Bill']));*/

  function mergeArrays(a, b) {

    let r = [];
      for(let i=0; i<a.length; i++){
          if(a[i] != undefined)
            r.push(a[i]);  
        for(let j=i; j<b.length; j++){
          r.push(b[j]);
          break;
        }
      }
      if(b.length > a.length){
        r.push(...b.slice(a.length));
      }
      return r;
  }
  //console.log(mergeArrays(['b', 'r', 'a', 'u', 'r', 's', 'e', 'q', 'z'], [2, 5, 8, 23, 67, 6,2, 5, 8, 23, 67, 6,2, 5, 8, 23, 67, 6]));

  function HQ9(code) {
    let phrase = "99 bottles of beer on the wall, 99 bottles of beer. \n";
 
   for(let i=98; i>1; i--){
     phrase += "Take one down and pass it around, "+ i + " bottles of beer on the wall. \n" + i + " bottles of beer on the wall, " + i + " bottles of beer. \n";  
   }
  
   phrase += "Take one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.";
 
   return code == 'H' ? 'Hello World!' : code == 'Q' ? 'Q' : code == '9' ? phrase : undefined;
 }
 //console.log(HQ9('9'));

 