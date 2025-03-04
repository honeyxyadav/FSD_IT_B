const res=fetch("https://api.github.com/users/honeyxyadav");
res.then((data)=>{
    return data.json();
}).then((d)=>{
    console.log(d);
}).catch((err)=>{
    console.log("error is:",err);
});
