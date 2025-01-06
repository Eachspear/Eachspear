async function nigga(){
    let p1=new Promise((resolve,reject)=>{
        setTimeout(()=>{
        resolve("Temp of mumbai is 25C");
     },3000) })
     let p2=new Promise((resolve,reject)=>{
        setTimeout(()=>{
        reject("Temp of delhi is 19C");
     },5000) })
     try{
     console.log("Fetching Delhi Tempreature please wait for nigga replie");
     let a=await p2;
     console.log("Delhi Temperature According to Niggaman: ",p2);
     }catch(error){
        console.error("Error Fetching")
     }
     try{
     console.log("Fetching Mumbai Tempreature please wait for nigga replie");
     let b=await p1;
     console.log("Mumbai Temperature According to Niggaman: ",p1);
     }catch(error){
        console.error("Error Fetching");
     }
}

let greeting=async ()=>{
    console.log("Temperature fetched Succesfully");
}

let main2= async ()=>{
    console.log("Welcome to nigga Weather Control");
    let nigg1=await nigga();
    let b=await greeting();
}
main2();