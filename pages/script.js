// var button = document.querySelector('button');

// button.addEventListener("click", event =>{
//     alert("Funcionando!");
// })

function pesquisar(){

    const url = 'http://localhost:5000/api/Filmes';

    fetch(url)
        .then(response =>{
            return response.json();
        })
        .then(data =>{
        
            atribuir(data);
        })
        .catch(erro =>console.error(erro));



       


}

const createElement = (tag) => document.createElement(tag)
const createTextNode = (element, text) => {
const textNode = document.createTextNode(text)
        element.appendChild(textNode)
    }
const appendElements = (fatherElement, childElement) => fatherElement.appendChild(childElement)

const bodyTable = document.querySelector("#tbody")

/******************/


function atribuir(data){
        // divFilho.appendChild(createP);
        // element.titulo
        // element.idGeneroNavigation.nome
        data.forEach(element => {
        
            const tr = createElement("tr")

            const tituloFilm = createElement("td")
            createTextNode(tituloFilm, element.titulo)
            
            const generoFilme = createElement("td")
            createTextNode(generoFilme, element.idGeneroNavigation.nome)
            
            appendElements(tr, tituloFilm)
            appendElements(tr, generoFilme)

            appendElements(bodyTable, tr)   
            
        console.log(element.titulo);
        console.log(element.idGeneroNavigation.nome)
    });
}
//const btn = document.querySelector('button');

//let teste = alturaTable.style.height;
    
// btn.onclick = ()=>{

// let alturaTable = document.querySelector("table");
// let alturaTbody = document.querySelector("#tbody");
    
// let alturaMain = document.querySelector('main');
// let alturaSection = document.querySelector('section');
// 
// if(alturaSection.style.height > "20vh"){
//     alturaMain.style.height = 1 + "vh";
//     alert("Deu bom");
// }

//}




    



