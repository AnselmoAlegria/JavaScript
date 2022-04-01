function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var bom = document.getElementById('bom')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}h:${minutos}m.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        bom.innerHTML = `Bom dia!`
        img.src = 'Imagens/manha.jpg'
        document.body.style.background = "#eecfb2"
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde!
        bom.innerHTML = `Boa tarde!`
        img.src = 'Imagens/tarde.jpg'
        document.body.style.background = "#6c6158"
    } else {
        //Boa noite!
        bom.innerHTML = `Boa noite!`
        img.src = 'Imagens/noite.jpg'
        document.body.style.background = "#05244a"
    }
}