const person = { name: "John", age: 30 };
const job = { role: "developer", company: "Acme Co." };

const employee = { ...person, ...job, location: "San Francisco" };
console.log(employee); // Output: { name: 'John', age: 30, role: 'developer', company: 'Acme Co.', location: 'San Francisco' }

const ciao = "ciao";
const name = "Barbara";

const phrase = [...ciao, ...name];
// console.log(phrase);

const sum = (x, y, z) => {
  return x + y + z;
};
const data = [1, 2, 3];
// console.log(sum(...data))

// console.log(...data, ...[3, 4, 5]);

const person1 = { name: "Jane", surname: "Doe" };
const person2 = { name: "John", surname: "Smith" };
const job1 = { job: "teacher" };

const data1 = { ...person1, ...job1 };
const data2 = { ...person2, ...job1 };
// console.log(data2);

const greeting = 'Hello';
const john = 'John';
// console.log([...greeting, ...john]);  // Output: ['H', 'e', 'l', 'l', 'o', 'J', 'o', 'h', 'n']

const string ="ciao belli"
// console.log(...string)

for (let char of string){
    // console.log(char)
}