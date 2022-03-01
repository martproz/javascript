
class Cliente {
    constructor(nombre, apellido, deuda, cft, meses, resultado) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.deuda = deuda;
        this.cft = cft;
        this.meses = meses;
        this.resultado = resultado;
    }
}

let arrayClientes = []

if(localStorage.getItem('clientes')) {
    arrayClientes = JSON.parse(localStorage.getItem('clientes'))
} else {
    localStorage.setItem('clientes', JSON.stringify(arrayClientes))
}
    
    let formDcmr = document.getElementById("formDcmr")
    let botonConsultarClientes = document.getElementById("botonConsultarClientes")
    let divClientes = document.getElementById("divClientes")

    formDcmr.addEventListener('botonConsultarClientes', (e) => {
        e.preventDefault()
    
        let nombre = document.getElementById('nombre').value
        let apellido = document.getElementById('apellido').value
        let deuda = document.getElementById('deuda').value
        let cft = document.getElementById('cft').value
        let meses = document.getElementById('meses').value
    
    
        if(!arrayClientes.some(clienteEnArray => clienteEnArray.apellido == apellido)) {
            const cliente = new Cliente(nombre, apellido, deuda, cft, meses)
            arrayClientes.push(cliente)
            localStorage.setItem('clientes', JSON.stringify(arrayClientes))
            formDcmr.reset()
        }
        
    })

    botonConsultarClientes.addEventListener('click', () => {
        arrayClientes.forEach((clienteEnArray, indice)  => {
            divClientes.innerHTML += `
                <div class="card" id="user${indice}" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">Nombre ${clienteEnArray.nombre}</h5>
                        <p class="card-text">Apellido: ${clienteEnArray.apellido}</p>
                        <p class="card-text">Apellido: ${clienteEnArray.deuda}</p>
                        <p class="card-text">Apellido: ${clienteEnArray.cft}</p>
                        <p class="card-text">Apellido: ${clienteEnArray.meses}</p>
                        <button id="boton${indice}" class="btn btn-danger">Eliminar</button>
                    </div>
                </div>
            
            `
        }) //cierre del forEach
    }) //cierre del CLICK

    function valorCuotas(){ 

        let nombre = document.getElementById('nombre').value; 
    
        let apellido = document.getElementById('apellido').value; 
    
        let nomAP = nombre + "" + apellido
    
        let deuda = parseInt(document.getElementById('deuda').value); 
    
        let CFT = parseInt(document.getElementById('cft').value); 
    
        let meses = document.getElementById('meses').value;
    
        var resultado = (+deuda + +CFT) / meses; 
    
        document.getElementById("resultadoTexto").value = resultado;
    
        console.log(nomAP)
    
        }
    
    

