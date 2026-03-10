const songs = [

"Despacito – Luis Fonsi",
"Bailando – Enrique Iglesias",
"La Bicicleta – Shakira & Carlos Vives",
"Robarte un Beso – Carlos Vives & Sebastián Yatra",
"Tacones Rojos – Sebastián Yatra",
"Eres – Café Tacvba",
"Me Rehúso – Danny Ocean",
"Vivir Mi Vida – Marc Anthony",
"Rayando el Sol – Maná",
"Colgando en tus manos – Carlos Baute",
"Cuando Me Enamoro – Enrique Iglesias",
"Ojos Así – Shakira",
"Corazón Espinado – Santana & Maná",
"De Música Ligera – Soda Stereo",
"Labios Compartidos – Maná"

];

let scores = new Array(songs.length).fill(0);

let currentA;
let currentB;

function newBattle(){

currentA = Math.floor(Math.random()*songs.length);
currentB = Math.floor(Math.random()*songs.length);

while(currentA === currentB){

currentB = Math.floor(Math.random()*songs.length);

}

document.getElementById("optionA").innerText = songs[currentA];
document.getElementById("optionB").innerText = songs[currentB];

}

function choose(option){

if(option === 0){

scores[currentA]++;

}else{

scores[currentB]++;

}

newBattle();

}

function showRanking(){

let ranking = songs.map((song,index)=>{

return {

song:song,
score:scores[index]

};

});

ranking.sort((a,b)=>b.score-a.score);

let html = "<h2>Ranking de Pop en Español</h2>";

ranking.forEach((item,i)=>{

html += `
<div class="rankItem">
${i+1}. ${item.song} — ${item.score} votos
</div>
`;

});

document.getElementById("ranking").innerHTML = html;

}

newBattle();
