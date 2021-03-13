let container = document.querySelector("main");
let n=15;
function setStage(){
let d=700/n;
let htmlLine="";
for(let i=0;i<n;i++){
htmlLine+='<div class="grid" style="width:'+d+'px;height:'+d+'px"></div>';
}
htmlLine+='<br>'
for(let i=0;i<n;i++){
container.innerHTML+=htmlLine;
}
}
setStage();
button = document.querySelector("#size-asker");
button.addEventListener('click',ask);
function ask(){
let p=prompt("What size do you want??");
if(p<65 && p>0){
n=p;
container.innerHTML="";
setStage();
setGrids();
}else{
alert("Enter Values between 1 and 64");
}
}
function setGrids(){			
let grids=document.querySelectorAll(".grid");
for(let i=0;i<grids.length;i++){
grids[i].addEventListener('mouseover',function(){
displayRandom(grids[i])
});
}
}
setGrids();
function displayRandom(grid) {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
console.log(grid);
  grid.style.backgroundColor=color;
}