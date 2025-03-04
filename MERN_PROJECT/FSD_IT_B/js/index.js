const person={
    name:"xyz",
    age:30,
}
const newPerson={...person,name:"ABC"};    //spreading
console.log(person);
// newPerson.age=35;
// console.log(newPerson);
const emp=["xyz",45,12345.50];
const newEmp=[...emp];
console.log(emp);
console.log(newEmp);

//data types
