const btn = document.getElementById('btn')
const sp = document.getElementById('cont')
const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890<>!"@#$%&/()=?¿¡[]{}-_,.'
let str = ''
let noDisponibles = []
let aleatorio
const caracteresEspeciales = '<>!"@#$%&/()=?¿¡[]{}-_,.'.split('')

function otraVez(){
    str = ''
    noDisponibles = []
    generadora()
}

function caracteresAleatorios(){

    do{
        aleatorio = Math.floor(Math.random()* caracteres.length)
    }
    while(
        noDisponibles.includes(aleatorio)
    )

    noDisponibles.push(aleatorio)
    return caracteres[aleatorio]
}


function tieneCarateresEspeciales(str){
   for(let i = 0; i< str.length; i++){
       if (caracteresEspeciales.includes(str[i])){
           return true
       }
   } 
}

function generadora(){
    while (str.length < 16){
        str += caracteresAleatorios()
    }

    if(tieneCarateresEspeciales(str)){
        return str
    }
    else if(false || undefined){
        otraVez()
    }
    
    return str

}

btn.addEventListener('click', function(){
    sp.style.backgroundColor = 'aquamarine'
    sp.textContent = generadora()
    str = ''
    noDisponibles = []    
})
