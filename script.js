const songs = [

"Despacito – Luis Fonsi",
"Bailando – Enrique Iglesias",
"La Bicicleta – Shakira",
"Tacones Rojos – Sebastián Yatra",
"Pareja del Año – Sebastián Yatra",
"Cómo Te Atreves – Morat",
"Besos en Guerra – Morat",
"Cuando Nadie Ve – Morat",
"Mi Nuevo Vicio – Morat",
"Un Año – Sebastián Yatra",
"Traicionera – Sebastián Yatra",
"Me Rehúso – Danny Ocean",
"Rayando el Sol – Maná",
"Colgando en tus manos – Carlos Baute",
"Labios Compartidos – Maná",
"Andas en Mi Cabeza – Chino & Nacho",
"Mi Niña Bonita – Chino & Nacho",
"Morena – Beéle",
"Loco – Beéle",
"No Se Ve – Emilia",
"Como Si No Importara – Emilia"

];

let votes = new Array(songs.length).fill(0);

let currentA = 0;
let currentB = 1;


function newBattle(){

currentA = Math.floor(Math.random() * songs.length);
currentB = Math.floor(Math.random() * songs.length);

while(currentA === currentB){
currentB = Math.floor(Math.random() * songs.length);
}

document.getElementById("optionA").innerText = songs[currentA];
document.getElementById("optionB").innerText = songs[currentB];

}


function vote(choice){

if(choice === 0){
votes[currentA] += 1;
}else{
votes[currentB] += 1;
}

updateRanking();
newBattle();

}


function updateRanking(){

let ranking = songs.map((song,index)=>{
return {
song:song,
score:votes[index]
}
});

ranking.sort((a,b)=>b.score - a.score);

let html = "";

ranking.slice(0,10).forEach((item,i)=>{

html += `
<div class="rankItem">
<span>${i+1}. ${item.song}</span>
<span>${item.score}</span>
</div>
`;

});

document.getElementById("rankingList").innerHTML = html;

}


function showTop(){
updateRanking();
}


function resetVotes(){

votes = new Array(songs.length).fill(0);
updateRanking();

}


function exportVotes(){

let data = songs.map((song,i)=> song + "," + votes[i]).join("\n");

let blob = new Blob([data], {type:"text/plain"});

let link = document.createElement("a");

link.href = URL.createObjectURL(blob);
link.download = "pop_votes.txt";

link.click();

}


window.onload = function(){

newBattle();
updateRanking();

}
