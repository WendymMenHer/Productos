const divProductos = document.getElementById('divProductos');
const alertError = document.getElementById('alertError');
const URLMain = 'https://fakestoreapi.com/products/';
const titleCard = document.getElementById('titleCard');
const txtCard = document.getElementById('txtCard');
const imgCard = document.getElementById('imgCard');

function getData(){
    fetch(URLMain).then( (response)=> {
        console.log(response); 
        response.json().then((res)=>{
            res.forEach((productos)=> {
            divProductos.insertAdjacentHTML("beforeend",`<div class="card" style="width: 18rem;">
            <img id= "imgCard" src="${productos.image}" class="card-img-top" ></img>
            <div class="card-body">
            <h5 class="card-title" id="titleCard">${productos.title}</h5>
            <p class="card-text" id="txtCard">${productos.description}</p>
            <p> Precio : $ ${productos.price} </p>
            </div>
            </div>`);
            })
        })         
    }).catch ((err)=> {
        console.log(err);
        alertError.innerHTML=`Problema al traer la información ${err}`
        alertError.style.display ='block';
    })
};
getData();





// async function fetchingData(){
//     try{
//         const res = await getData();
//         console.log(res,typeof(res));
//         divProductos.innerHTML=`<div class="card" style="width: 18rem;">
//             <img id= "imgCard" src="${res.imagen}" class="card-img-top" ></img>
//             <div class="card-body">
//             <h5 class="card-title" id="titleCard">${res.title}</h5>
//             <p class="card-text" id="txtCard">${res.description}</p>
//             <p> Precio : $ ${res.price} </p>
//             </div>
//             </div>`;
//     }  catch(err){
//         let alertError = document.getElementById('alertError');
//         alertError.innerHTML= `<strong> ${err}. </strong>`;
//         alertError.style.display ='block';
//     }//catch
// }//fetchingData



// function crearCards(res){
//     divProductos.insertAdjacentHTML('beforeend', 
//         res.forEach(element => {
//             response.json().then((res)=> {
//             divProductos.insertAdjacentHTML= 
//             `Título : ${res[0].title}
//             <br>
//             Precio = ${res[0].price}
//             <br>
//             Descripción = ${res[0].description}`;
//         })
//         })
//     )
// }