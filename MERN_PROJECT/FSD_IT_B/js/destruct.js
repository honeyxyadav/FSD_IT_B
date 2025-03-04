//object destructuring 
const person={
    name:"xyz",
    age:20,
    salary:100034.50,
}

const {name,age,salary}=person;
console.log(name);
console.log(age);
console.log(salary);

//array destructuring
const emp=["abc",23,100023,"ghz"];
const [n,a,s,c]=emp;
console.log(a);
