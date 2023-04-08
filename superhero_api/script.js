//https://superheroapi.com/api/508167901125499
const SUPERHERO_TOKEN = '508167901125499'
const BASE_URL = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`
let btn=document.getElementById('btn');
const heroimg=document.getElementById('heroImg');
const input=document.getElementById('inp');
const searchbtn=document.getElementById('search');
const getSuperhero=(id)=>{

    fetch(`${BASE_URL}/${id}`).then(Response=>Response.json()).then(json=>{
        console.log(json);
        showHeroInfo(json);
        const name=`<h2>${json.name}</h2>`
        // heroimg.innerHTML+=`${name}<img src="${json.image.url}" height=200;width=200;/>`;
        // heroimg.innerHTML+=`<img src="${json.image.url}" height=200;width=200;/>`;
}
    );
}
const searchHero=(name)=>{
    fetch(`${BASE_URL}/search/${name}`)
    .then(response => response.json())
    .then(json => {
        console.log(json)
            if(json.response=='error'){
                heroimg.innerHTML=`<h1>This SupreHero not exit in data base</h1>`
                return;
            }
        
      const hero = json.results[0]
        console.log(hero);
        showHeroInfo(hero)
        // heroimg.innerHTML+=`<img src="${hero.image.url}" height=200;width=200;/>`;
}
    );
}

const statToEmoji = {
    intelligence: '🧠',
    strength: '💪',
    speed: '⚡',
    durability: '🏋️‍♂️',
    power: '📊',
    combat: '⚔️',
  }

const showHeroInfo = (character) => {
    const name = `<h2>${character.name}</h2>`
  
    const img = `<img src="${character.image.url}" height=200 width=200/>`
    
    const stats = Object.keys(character.powerstats).map(stat => {
      return `<p>${statToEmoji[stat]} ${stat.toUpperCase()}: ${character.powerstats[stat]}</p>`
    }).join('')
    
    heroimg.innerHTML += `${name}${img}${stats} <br>`
  }
// getSuperhero(20);
// const img ="https://www.superherodb.com/pictures2/portraits/10/100/1390.jpg";
// document.querySelector('body').innerHTML+=`<img src="${img}" height=200;width=200;/>`;


const num=()=>{
    return Math.floor(Math.random()*730)+1;
}
 btn.onclick=()=>{
    
    getSuperhero(num());
}
searchbtn.onclick=()=>searchHero(input.value)