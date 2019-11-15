console.log('destructuring');

const person = {
  name: 'Max',
  age: 28,
  location: {
    city: 'Windsor',
    temp: 'cold'
  }
};

const {name, age, location} = person;
const {city, temp} = person.location;

console.log(city);
