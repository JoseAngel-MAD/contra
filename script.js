const btn = document.getElementById('btn')
const p = document.getElementById('cont')
const caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890<>!"@#$%&/()=?¿[]{}-_,.'
let str = ''
let noDisponibles = []
let aleatorio
let regEx = /(?=.*[^A-Za-z0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/


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


function generadora(){
    while (str.length < 16){
        str += caracteresAleatorios()
    }

    if(regEx.test(str)){ 
        return str
    }

    else if(regEx.test(str) === false || undefined){
        str = ''
        noDisponibles = []
        return generadora()
    }

}

btn.addEventListener('click', function(){
    p.style.backgroundColor = 'aquamarine'
    p.textContent = generadora()
    str = ''
    noDisponibles = []    
})

p.addEventListener('click', () => {
    if (document.selection) { 
      const range = document.body.createTextRange();
      range.moveToElementText(p);
      range.select();
    } else if (window.getSelection) {
      const range = document.createRange();
      range.selectNode(p);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }
  })

