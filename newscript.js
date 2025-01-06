
let p1=new Promise((resolve,reject)=>{  
    setTimeout(()=>{
        resolve("Promise 1 resolved")
    },Math.ceil(Math.random()*3000))
})

let p2=new Promise((resolve,reject)=>{  
    setTimeout(()=>{
        reject("Promise 2 rejected")
    },Math.ceil(Math.random()*3000))
})

let p3=new Promise((resolve,reject)=>{  
    setTimeout(()=>{
        resolve("Promise 3 resolved")
    },Math.ceil(Math.random()*3000))
})

let All=Promise.allSettled([p1,p2,p3]);
All.then((value)=>
{
    console.log(value);
})
let All2=Promise.any([p1,p2,p3]);
All2.then((value)=>
{
    console.log(value);
})
