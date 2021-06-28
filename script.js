function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`
if(hora >= 0  && hora  < 12) {
    //BOM DIA!
    img.src = 'file:///C:/javascript/oie_jpg.png'
    document.body.style.background = '#e5d600'
} else if(hora >= 12  &&  hora < 18) {
    //BOA TARDE!
    img.src = 'file:///C:/javascript/oie_jpg%20(1).png'
    document.body.style.background = '#bd4c5d'
} else {
    //BOA NOITE!
    img.src = 'file:///C:/javascript/oie_jpg%20(2).png'
    document.body.style.background = "#215374"
}
}

