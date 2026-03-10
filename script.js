const songs = [

/* MORAT */

"Cómo Te Atreves – Morat",
"Besos en Guerra – Morat",
"Cuando Nadie Ve – Morat",
"Amor con Hielo – Morat",
"506 – Morat",
"Salir Con Vida – Morat",
"Mi Nuevo Vicio – Morat",
"A Dónde Vamos – Morat",

/* YATRA */

"Tacones Rojos – Sebastián Yatra",
"Pareja del Año – Sebastián Yatra",
"Traicionera – Sebastián Yatra",
"Robarte un Beso – Sebastián Yatra",
"Un Año – Sebastián Yatra",
"Dos Oruguitas – Sebastián Yatra",

/* ENRIQUE IGLESIAS */

"Bailando – Enrique Iglesias",
"Cuando Me Enamoro – Enrique Iglesias",
"Hero – Enrique Iglesias",
"El Perdón – Enrique Iglesias",
"Subeme La Radio – Enrique Iglesias",

/* LUIS FONSI */

"Despacito – Luis Fonsi",
"Aquí Estoy Yo – Luis Fonsi",
"No Me Doy Por Vencido – Luis Fonsi",
"Imagíname Sin Ti – Luis Fonsi",

/* SHAKIRA */

"Ojos Así – Shakira",
"La Bicicleta – Shakira",
"Hips Don't Lie – Shakira",
"Antología – Shakira",
"Estoy Aquí – Shakira",
"Waka Waka – Shakira",

/* CHINO & NACHO */

"Andas En Mi Cabeza – Chino & Nacho",
"Mi Niña Bonita – Chino & Nacho",
"El Poeta – Chino & Nacho",
"Tu Angelito – Chino & Nacho",

/* EMILIA */

"No Se Ve – Emilia",
"Como Si No Importara – Emilia",
"Exclusive – Emilia",
"La_Original – Emilia",

/* BEELE */

"Loco – Beéle",
"Morena – Beéle",
"Inolvidable – Beéle",
"Si Te Interesa – Beéle",

/* OTRAS POP LATINO */

"Me Rehúso – Danny Ocean",
"Vivir Mi Vida – Marc Anthony",
"Rayando el Sol – Maná",
"Colgando en tus manos – Carlos Baute",
"De Música Ligera – Soda Stereo",
"Labios Compartidos – Maná"

];

let votes = new Array(songs.length).fill(0);

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

function vote(choice){

const listener = document.getElementById("listener").value;

let weight = 1;

if(listener === "musico") weight = 2;

if(choice === 0){

votes[currentA] += weight;

}else{

votes[currentB] += weight;

}

updateRanking();
newBattle();

}

function updateRanking(){

let ranking = songs.map((song,index)=>{

return {song:song,score:votes[index]}

});

ranking.sort((a,b)=>b.score-a.score);

let html="";

ranking.slice(0,10).forEach((item,i)=>{

html += `<div class="rankItem">${i+1}. ${item.song} — ${item.score} votos</div>`

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

let data = songs.map((s,i)=>`${s},${votes[i]}`).join("\n");

let blob = new Blob([data],{type:"text/plain"});

let link = document.createElement("a");

link.href = URL.createObjectURL(blob);

link.download = "votos_pop.txt";

link.click();

}

newBattle();
updateRanking();transform:scale(1.05);

}

.vs{

font-size:24px;
color:#888;

}

.buttons{

margin-top:20px;

}

#rankingList{

margin-top:20px;

}

.rankItem{

background:#111;
padding:10px;
margin:6px;
border-radius:8px;

}
