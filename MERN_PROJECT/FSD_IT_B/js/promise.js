//resolve reject pending
const mypromise=new Promise(
    (resolve,reject)=>{
        console.log("execute promise");
        //resolve();
        reject("network error");
    }
);
mypromise.then(()=>{
    console.log("all set");

}).catch((err)=>{
    console.log("error is:",err);
}).finally(()=>{
    console.log("executed final block");
});
