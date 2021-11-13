// 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un console.log(). Para ello, es necesario que crees un .html y un .js.

fetch('https://api.agify.io?name=michael')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });

//   2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando fetch() para hacer una consulta  la api cuando se haga click en el botón, pasando como parametro de la api, el valor del input. 
//const baseUrl = 'https://api.nationalize.io';

let valorInput = document.querySelector('input')
let clicBoton = document.querySelector('button')

clicBoton.addEventListener('click', function(evento){
    console.log (valorInput.value);
    let param = valorInput.value;
    fetch (`https://api.nationalize.io?name=${param}`)
.then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });
})

