function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'Imagens/manha.jpg'
        document.body.style.background = "#e2cd97"
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde!
        img.src = 'Imagens/tarde.jpg'
        document.body.style.background = "#b9846f"
    } else {
        //Boa noite!
        img.src = 'Imagens/noite.jpg'
        document.body.style.background = "#515154"
    }
}

/*
var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
//var hora = 23
console.log(`Agora são exatamente ${hora}h:${minutos}m.`)
if (hora <= 05) {
    console.log('Boa madrugada!')
} else if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}
*/