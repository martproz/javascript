
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


function IsEmpty() {
    if (document.forms['frm'].nombre.value === "") {
      console.log("Por favor, complete los campos");
      return false;
    } else if (document.forms['frm'].apellido.value === "") {
    return false;
  } else if (document.forms['frm'].email.value === "") {
    return false;
} else if (document.forms['frm'].deuda.value === "") {
    return false;
} else if (document.forms['frm'].cft.value === "") {
    return false;
} else if (document.forms['frm'].meses.value === "") {
    return false;
} else {
    return true
}
}


formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    e.IsEmpty()

    let nombre = document.getElementById('idNombre').value; 
    let apellido = document.getElementById('idApellido').value; 
    let email = document.getElementById('idEmail').value;
    let deuda = parseInt(document.getElementById('idDeuda').value); 
    let cft = parseInt(document.getElementById('idCft').value);
    let meses = parseInt(document.getElementById('idMeses').value);
    let resultado = (+deuda + +cft) / meses; 
    document.getElementById("resultadoTexto").value = resultado;

    });


    if(!arrayClientes.some(usuarioEnArray => usuarioEnArray.email == email)) {
        const cliente = new Cliente(nombre, apellido, email, deuda, cft, meses, resultado)
        arrayClientes.push(cliente)
        localStorage.setItem('usuarios', JSON.stringify(arrayClientes))
        formulario.reset()
    }


botonMostrarUsuarios.addEventListener('click', () => {
    arrayClientes.forEach((usuarioEnArray, indice)  => {
        divUsers.innerHTML += `
            <div class="card" id="user${indice}" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title col">Usuario: ${usuarioEnArray.nombre}</h5>
                    <p class="card-text col">Apellido: ${usuarioEnArray.apellido}</p>
                    <p class="card-text col">Email: ${usuarioEnArray.email}</p>
                    <p class="card-text col">Deuda: ${usuarioEnArray.deuda}</p>
                    <p class="card-text col">CFT: ${usuarioEnArray.cft}</p>
                    <p class="card-text col">Meses: ${usuarioEnArray.meses}</p>
                    <p class="card-text col">Cuota mensual: ${usuarioEnArray.resultado}</p>
                    <button id="boton${indice}" class="btn btn-danger">Eliminar</button>
                </div>
            </div>
        
        `
    })
})
