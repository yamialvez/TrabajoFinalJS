const form = document.querySelector("form");
const buscarResultado = document.querySelector(".buscar");
const recetas = document.querySelector(".recetas");
let userQuery =  "";



const ID = "01075cfc";
const key = "d2fe06943e3d96d0ca2e42458d35ae9b";

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    userQuery = e.target.querySelector("input").value;
    console.log(userQuery);
    fetchData();
})

async function fetchData(){
    const urlBase =  `https://api.edamam.com/search?q=${userQuery}&$app_id=${ID}&app_key=${key}`;
    const respuesta = await fetch(urlBase);
    const data = await respuesta.json();
    createContent(data.hits);
    console.log(data);
}

function createContent(resultados){
    let initialContent = "";
    resultados.map(resultado => {
        initialContent += 
        
        `<div class="item">
        <img src="${resultado.recipe.image}" alt="">
        <div class="flex-container">
          <h3 class="card-title">${resultado.recipe.label}</h3>
          <a class="enlace" href="${resultado.recipe.url}">Ir al sitio</a>
        </div>
        <p class="recetaDesc">Fuente: ${resultado.recipe.source}</p>
       </div> `


    })

    buscarResultado.innerHTML = initialContent;
}