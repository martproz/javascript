function valorCuotas(){

    let deuda = document.getElementById('deuda').value;

    let CFT = document.getElementById('cft').value;

    let meses = document.getElementById('meses').value;

    var resultado = (+deuda + +CFT) / meses; 

    const mResult = document.querySelector('.mresult')

    mResult.addEventListener('click', (e) => {
        e.preventDefault()
        console.log(resultado)
        document.getElementById('resultado').innerHTML 
    }) 
    }
 

    
    
    

