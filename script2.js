function loadScript(src,callback){
    let script=document.createElement("script");
    script.src=src;
    script.onload=function(){
        console.log("Script loaded successfully");
        callback(null,src);
    }
    script.onerror=function(){
        console.log("Error "+src);
        callback(new Error("src got Some error"))
    }
    setTimeout(function(){
        document.body.appendChild(script);
        console.log("Script appended successfully");
    },3000);
    
}

function greet(error,src){
    if(error){
        alert(error);
    }
    alert("whats up my nigga "+src);
}
loadScript("https://cdn.jsdelivr.net/npm/popper.js@1.14.7/dist/umd/popper.min.js",greet);