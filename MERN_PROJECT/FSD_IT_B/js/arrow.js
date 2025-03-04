function hello(){
    console.log("hello");
}
hello();
//arrow function without parameter
const hello1=()=>console.log("arrow function:hello1");
hello1();
function add(a,b){
    return(a+b);
}
const sum=add(34,54);
console.log("SUM=",sum);
const add1=(a,b=0)=>(a+b);
const sum1=add1(134);
console.log("Arrow function SUM=",sum1);