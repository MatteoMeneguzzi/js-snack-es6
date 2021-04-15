// Es 1

const bici1 = {
	nome: "Pantani",
	peso: 7,
};

const bici2 = {
	nome: "Bartali",
	peso: 6,
};

const bici3 = {
	nome: "Coppi",
	peso: 8,
};

var bici = [bici1, bici2, bici3];

let indicePesoMin = 0;
let indicePesoMax = 0;

for (let i = 0; i < bici.length; i++) {
	if (bici[i].peso < bici[indicePesoMin].peso) {
		indicePesoMin = i;
	}

	if (bici[i].peso > bici[indicePesoMax].peso) {
		indicePesoMin = i;
	}
}

console.log(bici[indicePesoMin]);

// Es 2

// Es 2.1
let teams = [
	{
		nome: "Fiorentina",
		punti: 0,
		falli: 0,
	},
	{
		nome: "Sampdoria",
		punti: 0,
		falli: 0,
	},
	{
		nome: "Lazio",
		punti: 0,
		falli: 0,
	},
	{
		nome: "Milan",
		punti: 0,
		falli: 0,
	},
	{
		nome: "Napoli",
		punti: 0,
		falli: 0,
	},
];

// Es 2.2

// cloned teams

let updatedTeams = [...teams];

for (let i = 0; i < teams.length; i++) {
	// teams[i] = {
	// 	...teams[i],
	// 	punti: getRandomNumber(1, 100),
	// 	falli: getRandomNumber(1, 100),
	// };

	// if (i === 0) {    questo aggiorna solamente l'elemento a indice 0
	updatedTeams[i].punti = getRandomNumber(1, 100);
	updatedTeams[i].falli = getRandomNumber(1, 100);
	// }
}

console.table(teams);

// es 2.3

let newArrayResults = [];

for (let i = 0; i < updatedTeams.length; i++) {
	newArrayResults.push({
		nome: updatedTeams[i].nome,
		punti: updatedTeams[i].punti,
	});
}

console.table(newArrayResults);

// Funzioni

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
