//Librería AnimeJS, animación tres círculos superiores
anime({
  targets: '.circulo',
  translateX: 500,
  delay: anime.stagger(200, {start: 1000}), 
  background: "#0000FF",
  direction: "reverse"

})

function reinitializaStorage() {
localStorage.clear();
}
window.onload = reinitializaStorage()


class Cliente {
  constructor(nombre, apellido, email, deuda, cft, meses, resultado) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.email = email;
      this.deuda = deuda;
      this.cft = cft;
      this.meses = meses;
      this.resultado = resultado;
  }
}

let arrayClientes = []

if(localStorage.getItem('usuarios')) {
  arrayClientes = JSON.parse(localStorage.getItem('usuarios'))
} else {
  localStorage.setItem('usuarios', JSON.stringify(arrayClientes))
}

let formulario = document.getElementById("idForm")

let botonMostrarUsuarios = document.getElementById("botonMostrarUsers")

let divUsers = document.getElementById("divUsuarios") 


formulario.addEventListener('submit', (e) => {
  e.preventDefault()

  let nombre = document.getElementById('idNombre').value; 
  let apellido = document.getElementById('idApellido').value; 
  let email = document.getElementById('idEmail').value;
  let deuda = parseInt(document.getElementById('idDeuda').value); 
  let cft = parseInt(document.getElementById('idCft').value);
  let meses = parseInt(document.getElementById('idMeses').value);
  let resultado = (+deuda + +cft) / meses;
  document.getElementById("resultadoTexto").value = resultado;
  
var valueArr = arrayClientes.map(function(item){ return item.email });

if(valueArr.includes(email)) {
  swal("Elemento existente en la base de datos.");
      return
}

else if (  (nombre == "" || nombre == NaN) || (apellido == "" || apellido == NaN) || (email == "" || email == NaN) ||(deuda == "" || deuda == NaN) || (cft == "" || cft == NaN) || (meses == "" || meses == NaN)) {
      swal("Por favor, complete todos los campos.");
      formulario.reset()
      return
  } else {
      const cliente = new Cliente(nombre, apellido, email, deuda, cft, meses, resultado)
      arrayClientes.push(cliente)
      localStorage.setItem('usuarios', JSON.stringify(arrayClientes))
      console.log(resultado) 
      return true
  }


})

function deleteElement(i) {

  arrayClientes.splice(i, 1);

  localStorage.setItem('usuarios', JSON.stringify(arrayClientes));

  console.log(i);

  var div = document.getElementById('user' + i);

  div.remove()
}


botonMostrarUsuarios.addEventListener('click', () => {

document.getElementById('divUsuarios').innerHTML = "";
  arrayClientes.forEach((usuarioEnArray, indice)  => {
      divUsers.innerHTML += `
      
          <div class="card text-dark bg-warning mb-3 ms-3" id="user${indice}" style="width: 18rem;">
              <div class="card-body">
                  <h5 class="card-title col">Nombre: ${usuarioEnArray.nombre}</h5>
                  <p class="card-text col">Apellido: ${usuarioEnArray.apellido}</p>
                  <p class="card-text col">Email: ${usuarioEnArray.email}</p>
                  <p class="card-text col">Deuda: ${usuarioEnArray.deuda}</p>
                  <p class="card-text col">CFT: ${usuarioEnArray.cft}</p>
                  <p class="card-text col">Meses: ${usuarioEnArray.meses}</p>
                  <p class="card-text col">Cuota mensual: ${usuarioEnArray.resultado}</p>
                  <button onclick="deleteElement(${indice})" id="${indice}" class="btn btn-danger">Eliminar</button>
                  </div>
          </div>
      `
  })
})

const btnMostrarJson = document.getElementById('mjson')
btnMostrarJson.onclick = function mosJson(){

  let respuestaDiferida = (delay = 2000) => {
      return new Promise((resolve, reject) => {
          setTimeout(resolve, delay);
      });
  };
  
  respuestaDiferida(2000).then(() => {
      console.log("Usted ha obtenido los valores del dólar al día de la fecha.");
  });
  fetch("https://criptoya.com/api/dolar")
  .then(response => response.json()) 
  .then(data => {
      let {oficial, solidario, blue} = data
      valorDolar.innerHTML = `
          <p> Oficial: ${oficial} </p>
          <p> Solidario: ${solidario} </p>
          <p> Blue: ${blue} </p>
      `
  })
};

