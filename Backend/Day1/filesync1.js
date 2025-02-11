const fs=require("node:fs");
function myReadFile(){
try{
const data=fs.readFileSync("dummy.txt","utf-8");
console.log("File Data:",data.toString());
}
catch(err){
    console.log("File Reading error:",err.message);
}}
const myWriteFile=(data)=>{
    try{
        fs.writeFileSync("dummy.txt",data)
        console.log("succesfully write file");
    }
    catch(err){
        console.log("File Writing Error:",err.message);
    }
}
const myAppendFile=(data)=>{
    try{
        fs.appendFileSync("dummy.txt",data)
        console.log("appended data successfully ")
    }
    catch(err){
        console.log("file appending err:",err.message)
    }
}
const myDeleteFile=(filename)=>{
    try{
        fs.unlinkSync(filename);
        console.log("successfullydeleted file:",filename);
    }
    catch(err){
        console.log("file deleting err:",err.message)
    }
}

module.exports={
    myReadFile:myReadFile,
    myWriteFile:myWriteFile,
    myAppendFile:myAppendFile,
    myDeleteFile:myDeleteFile,
    username:"HONEY",
}