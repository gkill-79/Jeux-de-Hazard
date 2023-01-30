
// Les numéros de l'euromillion pris au hazard
let number1;
let number2;
let number3;
let number4;
let number5;

// Les étoiles pris au hazard
let star1;
let star2;


// Taleau des nombres
let arrayTmp1 = [];
// Tableau des étoiles
let arrayTmp2 = [];


// Tableau des numéros de l'euromillion
let numberEuromillion = [];


// Tableau des Valeurs nombres
numberPrime = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "50"];
let numberPrime2 = [];
let numberPrime3 = [];
let numberPrime4 = [];
let numberPrime5 = [];
let numberPrime6 = [];


// Tirage au sort du premier numéro
number1 = numberPrime [Math.floor(Math.random() * numberPrime.length)];
numberPrime2 = numberPrime.filter(function(f) { return f !== number1 });
console.log(numberPrime2);


// Tirage au sort du deuxième numéro
number2 = numberPrime2 [Math.floor(Math.random() * numberPrime2.length)];
numberPrime3 = numberPrime2.filter(function(f) { return f !== number2 });
console.log(numberPrime3);


// Tirage au sort du troisième numéro
number3 = numberPrime3 [Math.floor(Math.random() * numberPrime3.length)];
numberPrime4 = numberPrime3.filter(function(f) { return f !== number3 });
console.log(numberPrime4);


// Tirage au sort du quatrième numéro
number4 = numberPrime4 [Math.floor(Math.random() * numberPrime4.length)];
numberPrime5 = numberPrime4.filter(function(f) { return f !== number4 });
console.log(numberPrime5);


// Tirage au sort du cinquième numéro
number5 = numberPrime5 [Math.floor(Math.random() * numberPrime5.length)];
numberPrime6 = numberPrime5.filter(function(f) { return f !== number5 });
console.log(numberPrime6);


// Mettre les numéros pris au hazard dans un tableau
arrayTmp1.push(number1, number2, number3, number4, number5);
console.log(arrayTmp1);



// Tableau des Valeurs étoiles
starPrime = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];


// Tirage au sort de la première étoile
star1 = starPrime [Math.floor(Math.random() * starPrime.length)];
starPrime2 = starPrime.filter(function(f) { return f !== star1 });
console.log(numberPrime5);


// Tirage au sort de la deuxième étoile
star2 = starPrime2 [Math.floor(Math.random() * starPrime2.length)];
starPrime3 = starPrime2.filter(function(f) { return f !== star2 });
console.log(starPrime3);


// Mettre les numéros pris au hazard dans un tableau
arrayTmp2.push(star1, star2);
console.log(arrayTmp2);



// Concaténation du tableau number et du tableau star
numberEuromillion = [].concat(arrayTmp1, arrayTmp2);
console.log(numberEuromillion);


alert("Les cinq premier numéros de l'euromillion sont le " + number1 + " le " + number2 + " le " + number3 + " le " + number4 + " le " + number5 + " ainsi que les deux étoiles, la numéro " + star1 + " et la deuxième étoile est la numéro " + star2);