/*let a=document.getElementById("button1");
a.onclick=()=>{
    let b=document.getElementsByClassName("intro")[0];
    b.innerHTML="Welcome";
}*/

let btn=document.getElementById("button1");
//let a=prompt("Enter 1 or 2");
let x=function(e){
    alert("niggaman");

};
btn.addEventListener('click',x);
if(a==2)
{
    btn.removeEventListener('click',x);
}
// Ensure DOM elements are loaded before accessing them
document.addEventListener("DOMContentLoaded", function () {
    let a = document.getElementById("button2");
    let b = document.getElementById("button3");

    let z = function (e) {
        window.location.href = "https://google.com"; // Redirect to Google
    };

    let y = function (e) {
        window.location.href = "https://youtube.com"; // Redirect to YouTube
    };

    // Add event listeners
    a.addEventListener('click', z);
    b.addEventListener('click', y);
});

