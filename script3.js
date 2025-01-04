let promise=new Promise(function(resolve,reject){
    console.log("Promise pending ");
    setTimeout(()=>{alert("Niggaman whats up");
   // resolve(true);
   reject(new Error("I am rejectd"));
}
    ,5000);
})
console.log(promise);

promise.then((value)=>
{
    console.log(value);
},
(error)=>{
    console.log(error);
})
