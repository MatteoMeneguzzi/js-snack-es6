// // Es 1

// const bici1 = {
// 	nome: "Pantani",
// 	peso: 7,
// };

// const bici2 = {
// 	nome: "Bartali",
// 	peso: 6,
// };

// const bici3 = {
// 	nome: "Coppi",
// 	peso: 3,
// };

// let bici = [bici1, bici2, bici3];

// let pesoBiciLeggera = bici[0].peso;

// let nomeBiciLeggera = bici[0].nome;
// // let indicePesoMin = 0;
// // let indicePesoMax = 0;

// for (let i = 0; i < bici.length; i++) {
// 	if (bici[i].peso < pesoBiciLeggera) {
// 		pesoBiciLeggera = bici[i].peso;
// 		nomeBiciLeggera = bici[i].nome;
// 	}

// 	// if (bici[i].peso > bici[indicePesoMin].peso) {
// 	// 	indicePesoMin = i;
// 	// }

// 	// if (bici[i].peso > bici[indicePesoMax].peso) {
// 	// 	indicePesoMin = i;
// 	// }
// }

// document.getElementById("mainBike").innerHTML = `
//     <div class="weight">
//         <label for="weight">Nome:</label>
//         <strong>${nomeBiciLeggera}</strong>
//     </div>
//     <div class="weight">
//         <label for="weight">Peso:</label>
//         <strong>${pesoBiciLeggera} kg</strong>
//     </div>
//  `;
// // Es 2

// // Es 2.1
// let teams = [
// 	{
// 		nome: "Fiorentina",
// 		punti: 0,
// 		falli: 0,
// 	},
// 	{
// 		nome: "Sampdoria",
// 		punti: 0,
// 		falli: 0,
// 	},
// 	{
// 		nome: "Lazio",
// 		punti: 0,
// 		falli: 0,
// 	},
// 	{
// 		nome: "Milan",
// 		punti: 0,
// 		falli: 0,
// 	},
// 	{
// 		nome: "Napoli",
// 		punti: 0,
// 		falli: 0,
// 	},
// ];

// // Es 2.2

// // cloned teams

// let updatedTeams = [...teams];

// for (let i = 0; i < teams.length; i++) {
// 	// teams[i] = {
// 	// 	...teams[i],
// 	// 	punti: getRandomNumber(1, 100),
// 	// 	falli: getRandomNumber(1, 100),
// 	// };

// 	// if (i === 0) {    questo aggiorna solamente l'elemento a indice 0
// 	updatedTeams[i].punti = getRandomNumber(1, 100);
// 	updatedTeams[i].falli = getRandomNumber(1, 100);
// 	// }
// }

// console.table(teams);

// // es 2.3

// let newArrayResults = [];

// for (let i = 0; i < updatedTeams.length; i++) {
// 	newArrayResults.push({
// 		nome: updatedTeams[i].nome,
// 		punti: updatedTeams[i].punti,
// 	});
// }

// console.table(newArrayResults);

// // Funzioni

// function getRandomNumber(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// // jSnack 3

// scrivere un array di tot elementi
// scrivere una fnzione che accetti tre argomenti, un array e due numeri (a più piccolo di b,
// entrambi compresi tra la lunghezza minima e massima dell'array precedente)
// // la funzione ritorna un array nuovo con i valori che hanno la posizione compresa tra i due numeri

const myArray = ["paolo", "fabio", "marco", "lorenzo", "claudia", "matteo"];

let min = parseInt(prompt("insierisci un numero tra 0 e 5"));

while (isNaN(min) || min < 0 || min > myArray.length) {
	min = parseInt(prompt("errore, inserisci un numero tra 0 e 5"));
}

let max = parseInt(prompt("insierisci un numero tra " + min + " e 5"));

while (isNaN(max) || max <= min || max > myArray.length) {
	max = parseInt(prompt("errore, inserisci un numero tra " + min + " e 5"));
}

const newArray = [];

// // // Funzione

function filterArray(arr, min, max) {
	for (i = 0; i < arr.length; i++) {
		const element = arr[i];

		if (min <= i && max >= i) {
			newArray.push(element);
		}
	}
}

filterArray(myArray, min, max);

console.log(newArray);

const newFilteredArray = myArray.filter((element, index) => {
	return min <= index && max >= index;
});

console.log(newFilteredArray);

function filterArray(min, max) {
	myArray.forEach((element, index) => {
		if (min <= index && max >= index) {
			newArray.push(element);
		}
	});
}

filterArray(min, max);

console.log(newArray);

// jsnack 4 (Map)
// Dato un'array con dei capi d'abbigliamento - oggetti che contengono informazioni su nome modello, tipologia e colore -
// si aggiunga a ciascun elemento una ulteriore proprietà che indichi il costo del prodotto.
// Per inserire il costo del singolo prodotto si scriva una funzione che generi un numero random da 10 a 50
// (potete sfruttare il map per aggiungere la nuova proprietà)

// const arrayObj = [
// 	{
// 		nome: "Poppy",
// 		type: "t-shirt",
// 		color: "red",
// 	},
// 	{
// 		nome: "Manny",
// 		type: "pantaloni",
// 		color: "green",
// 	},
// 	{
// 		nome: "lucy",
// 		type: "occhiali",
// 		color: "white",
// 	},
// 	{
// 		nome: "alex",
// 		type: "scarpe",
// 		color: "yellow",
// 	},
// ];

// const newArrayObj = arrayObj.map((element) => {
// 	const newElement = {
// 		...element,
// 		position: randomNumber(0, 5),
// 	};
// 	return newElement;
// });

// function randomNumber(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1) + min);
// }

// console.log(newArrayObj);

// jsnack 3
// Si scriva una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri
// inseriti dall'utente (è possibile usare, ad esempio, for/foreach/filter

// jsnack 4
// Dato un'array con dei capi d'abbigliamento - oggetti che contengono informazioni su nome modello, tipologia e colore - si aggiunga a ciascun elemento una ulteriore proprietà che indichi il costo del prodotto.
// Per inserire il costo del singolo prodotto si scriva una funzione che generi un numero random da 10 a 50 (potete sfruttare il map per aggiungere la nuova proprietà)

// var array1 = [1, 2, 3];
// for (var i = 1; i <= array1.length; i++) {
// 	console.log(i);
// }

// var array2 = [1, 2, 3];
// array2.forEach(function (i) {
// 	console.log(i);
// });

// var txt = "";
// var numbers = [45, 4, 9, 16, 25];
// var numbers2 = numbers.filter(myFunction);

// function myFunction(value) {
// 	return value > 10;
// }

// console.log(numbers2);

// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

var bici = [
	{
		nome: "Bianchi",
		peso: 10,
	},
	{
		nome: "Rossi",
		peso: 13,
	},
	{
		nome: "Bartali",
		peso: 20,
	},
];

let biciLeggera = bici[0];

// const { nome, peso } = biciLeggera;

// console.log(`la bici leggera è la ${nome}`);

for (let i = 0; i < bici.length; i++) {
	if (bici[i].peso < biciLeggera.peso) {
		biciLeggera = bici[i];
	}
}

// let biciLeggera = bici.filter((element) => {
// 	return bici[0].peso > element.peso;
// });

// console.log(
// 	`La bici più leggera è la bici ${biciLeggera[0].nome} con un peso di ${biciLeggera[0].peso} kg`
// );
const { nome, peso } = biciLeggera;
console.log(
	`La bici più leggera è la bici ${bici[0].nome} con un peso di ${bici[0].peso} kg`
);

// const newFilteredArray = myArray.filter((element, index) => {
// 	return min <= index && max >= index;
// });

// console.log(newFilteredArray);

// let lessWeightIndex = 0;
// for (let i = 0; i < bici.length; i++) {
// 	if (bici[i].peso < bici[0].peso) {
// 		lessWeightIndex = i;
// 	}

// 	const { nome, peso } = bici[i];
// 	console.log(nome, peso);
// }

// console.log("La bici col peso minore è la bici: ", bici[lessWeightIndex]);

// let biciLeggera = bici[0];

// // const { nome, peso } = biciLeggera;
// // console.log(`${biciLeggera}, ${peso}`);

// // Perchè questo non funziona?
// // console.log(`La bici col peso minore è la bici ${bici}`);

// for (let i = 0; i < bici.length; i++) {
// 	if (bici[i].peso < biciLeggera.peso) {
// 		biciLeggera = bici[i];
// 		// console.log(`${biciLeggera}`);
// 	}

// 	// const { nome, peso } = bici[i];
// 	// console.log(`${nome}, ${peso}`);
// }

// const { nome, peso } = biciLeggera;
// // console.log(`${nome}, ${peso}`);

// // console.log("La bici col peso minore è la bici: ", biciLeggera);
// console.log(
// 	`La bici col peso minore è la bici ${nome} con un peso di ${peso} kg`
// );

// ÷÷÷÷÷÷
// IMPORTANTE
//
// IL TEMPLATE LITERAL SI PUò USARE SOLO DOPO AVER FATTO DESTRUCTURING!!!
// ÷÷÷÷÷÷

// let biciLeggera = bici[0];

// bici.forEach((element) => {
// 	// console.log(`
// 	// ${element.nome} pesa ${element.peso}
// 	// `);
// 	let biciLeggera = bici[0];
// 	// console.log(element.peso);

// 	if (element.peso < biciLeggera.peso) {
// 		biciLeggera = element;
// 		console.log(biciLeggera);
// 	}
// });

// Snack 2
// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà:
// Punti fatti e falli subiti
// Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti
// stampiamo tutto in console.

const teams = [
	{
		nome: "Ajax",
		punti: 0,
		falli: 0,
	},
	{
		nome: "Barcellona",
		punti: 0,
		falli: 0,
	},
	{
		nome: "PSG",
		punti: 0,
		falli: 0,
	},
	{
		nome: "Milan",
		punti: 0,
		falli: 0,
	},
];

// let updatedTeams = [];
// console.log("I nuovi dati sui team sono: ");

// for (let i = 0; i < teams.length; i++) {
// 	const updatedTeams = {
// 		...teams[i],
// 		punti: getRandomNumber(1, 100),
// 		falli: getRandomNumber(1, 100),
// 	};
// 	const { nome, punti, falli } = updatedTeams;
// 	console.table(`${nome}, ${punti}, ${falli} `);
// }

let updatedTeams = [...teams];

for (let i = 0; i < updatedTeams.length; i++) {
	updatedTeams[i] = {
		...teams[i],
		punti: getRandomNumber(1, 100),
		falli: getRandomNumber(1, 100),
	};
}

console.log(updatedTeams);

let newResultsArray = [];

for (let i = 0; i < updatedTeams.length; i++) {
	const newArrayResults = {
		nome: updatedTeams[i].nome,
		falli: updatedTeams[i].falli,
	};

	console.log(newArrayResults);
}

// function sum(x, y, z) {
// 	return x + y + z;
// }

// const numbers = [1, 2, 3];

// console.log(sum(...numbers));
// // expected output: 6

// function myFunction(v, w, x, y) {
// 	return x + y + v + w;
// }
// const args = [2, 1, 4, 2];

// console.log(myFunction(...args));

// console.log(updatedTeams);

// console.log(updatedTeams);
// // Es 2

// // // Es 2.1
// let teams = [
// 	{
// 		nome: "Fiorentina",
// 		punti: 0,
// 		falli: 0,
// 	},
// 	{
// 		nome: "Sampdoria",
// 		punti: 0,
// 		falli: 0,
// 	},
// 	{
// 		nome: "Lazio",
// 		punti: 0,
// 		falli: 0,
// 	},
// 	{
// 		nome: "Milan",
// 		punti: 0,
// 		falli: 0,
// 	},
// 	{
// 		nome: "Napoli",
// 		punti: 0,
// 		falli: 0,
// 	},
// ];

// Es 2.2

// cloned teams

// let updatedTeams = [...teams];

// for (let i = 0; i < updatedTeams.length; i++) {
// 	updatedTeams[i] = {
// 		...updatedTeams[i],
// 		punti: getRandomNumber(1, 100),
// 		falli: getRandomNumber(1, 100),
// 	};

// 	//  questo aggiorna solamente l'elemento a indice 0
// 	// if (i === 0) {
// 	// 	updatedTeams[i].punti = getRandomNumber(1, 100);
// 	// 	updatedTeams[i].falli = getRandomNumber(1, 100);
// 	// }
// }

// let updatedTeams = [...teams];

// for (let i = 0; i < updatedTeams.length; i++) {
// 	updatedTeams[i] = {
// 		...updatedTeams[i],
// 		punti: getRandomNumber(1, 100),
// 		falli: getRandomNumber(1, 100),
// 	};
// }

// let updatedTeams = [];

// for (var i = 0; i < teams.length; i++) {
// 	const updatedTeams = {
// 		...teams[i],
// 		punti: getRandomNumber(1, 100),
// 		falli: getRandomNumber(1, 100),
// 	};
// 	console.table(updatedTeams);
// }
// console.table(teams);

// console.table(updatedTeams);

// es 2.3

// let newArrayResults = [];

// for (let i = 0; i < updatedTeams.length; i++) {
// 	newArrayResults.push({
// 		nome: updatedTeams[i].nome,
// 		falli: updatedTeams[i].falli,
// 	});
// }

// let newArrayResults = [];

// for (let i = 0; i < updatedTeams.length; i++) {
// 	newArrayResults.push({
// 		nome: updatedTeams[i].nome,
// 		falli: updatedTeams[i].falli,
// 	});
// }

// let newArrayResults = [...teams];

// for (let i = 0; i < updatedTeams.length; i++) {
// 	const newArrayResults = {
// 		nome: updatedTeams[i].nome,
// 		falli: updatedTeams[i].falli,
// 	};

// console.table(newArrayResults);
// }

// // // Funzione gen num random

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

// // jSnack 3

// scrivere un array di tot elementi
// scrivere una fnzione che accetti tre argomenti, un array e due numeri (a più piccolo di b,
// entrambi compresi tra la lunghezza minima e massima dell'array precedente)
// // la funzione ritorna un array nuovo con i valori che hanno la posizione compresa tra i due numeri

const myArray = ["paolo", "fabio", "marco", "lorenzo", "claudia", "matteo"];

let min = parseInt(prompt("insierisci un numero tra 0 e 5"));

while (isNaN(min) || min < 0 || min > myArray.length) {
	min = parseInt(prompt("errore, inserisci un numero tra 0 e 5"));
}

let max = parseInt(prompt("insierisci un numero tra " + min + " e 5"));

while (isNaN(max) || max <= min || max > myArray.length) {
	max = parseInt(prompt("errore, inserisci un numero tra " + min + " e 5"));
}

const newArray = [];

// // // Funzione

function filterArray(arr, min, max) {
	for (i = 0; i < arr.length; i++) {
		const element = arr[i];

		if (min <= i && max >= i) {
			newArray.push(element);
		}
	}
}

filterArray(myArray, min, max);

console.log(newArray);

const newFilteredArray = myArray.filter((element, index) => {
	return min <= index && max >= index;
});

console.log(newFilteredArray);

function filterArray(min, max) {
	myArray.forEach((element, index) => {
		if (min <= index && max >= index) {
			newArray.push(element);
		}
	});
}

filterArray(min, max);

console.log(newArray);

// jsnack 4 (Map)
// Dato un'array con dei capi d'abbigliamento - oggetti che contengono informazioni su nome modello, tipologia e colore -
// si aggiunga a ciascun elemento una ulteriore proprietà che indichi il costo del prodotto.
// Per inserire il costo del singolo prodotto si scriva una funzione che generi un numero random da 10 a 50
// (potete sfruttare il map per aggiungere la nuova proprietà)

const arrayObj = [
	{
		nome: "Poppy",
		type: "t-shirt",
		color: "red",
	},
	{
		nome: "Manny",
		type: "pantaloni",
		color: "green",
	},
	{
		nome: "lucy",
		type: "occhiali",
		color: "white",
	},
	{
		nome: "alex",
		type: "scarpe",
		color: "yellow",
	},
];

const newArrayObj = arrayObj.map((element) => {
	const newElement = {
		...element,
		position: randomNumber(0, 5),
	};
	return newElement;
});

function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(newArrayObj);
