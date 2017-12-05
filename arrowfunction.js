
const cities = ['Campo Grande', 'Dourados', 'Coxim', 'Anastacio'];

let greatCiteis = cities.map(function (city){
    return `${city} is a great city! `
})

let greatCiteisArrow = cities.map( (city) => {
    return `${city} is a great city! `
});

let greatCiteisOneLine = cities.map( city => `${city} is a great city! `);

let capitalFilter = (city) => city === 'Campo Grande';
let concatMessage = city => `${city} is the great Capital!`;

let greatCapital = 
  cities.filter(capitalFilter)
        .map(concatMessage)

console.log(greatCapital);