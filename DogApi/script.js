// https://dog.ceo/api/breeds/image/random
const dogImageDiv=document.getElementById('dogimg');
function img(){
fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
      dogImageDiv.innerHTML = `<img src='${json.message}' height=300 width=300/>`
    })
}

const btn=document.getElementById('dogButton');

btn.onclick=()=>{
    img();
}