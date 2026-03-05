function toggleProfile(){
document.getElementById("profilePanel").classList.toggle("active");
}

let score=0;

function startGame(){

const ghost=document.getElementById("ghost");

function move(){

let x=Math.random()*(window.innerWidth-100);
let y=Math.random()*(window.innerHeight-100);

ghost.style.left=x+"px";
ghost.style.top=y+"px";

}

ghost.onclick=function(){
score++;
document.getElementById("score").innerText=score;
move();
}

setInterval(move,1200);
move();
}

function spawnGhosts(){

for(let i=0;i<8;i++){

let g=document.createElement("div");
g.innerHTML="👻";
g.className="floating";

g.style.left=Math.random()*100+"%";
g.style.animationDuration=(5+Math.random()*10)+"s";

document.body.appendChild(g);

}

}

window.onload=spawnGhosts;