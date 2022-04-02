function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            if (idade <= 10){
                genero = 'menino'
            } else if (idade <= 24) {
                genero = 'adolescente homem'
            } else if (idade <= 65) {
                genero = 'adulto'
            } else {
                    genero = 'idoso'
            }  
            if (idade <= 10) {
                //Criança
                img.setAttribute('src', 'Imagens/bebemenino.png')
            } else if (idade <= 24) {
                //Jovem
                img.setAttribute('src', 'Imagens/jovemhomem.png')
            } else if (idade <= 65) {
                //Adulto
                img.setAttribute('src', 'Imagens/adultohomem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'Imagens/idosohomem.png')
            }
            
        } else if (fsex[1].checked) {
            if (idade <= 10){
                genero = 'menina'
            } else if (idade <= 24) {
                genero = 'adolescente mulher'
            } else if (idade <= 65) {
                genero = 'adulta'
            } else {
                    genero = 'idosa'
            }
            if (idade <= 10) {
                //Criança
                img.setAttribute('src', 'Imagens/bebemenina.png')
            } else if (idade <= 24) {
                //Jovem
                img.setAttribute('src', 'Imagens/jovemmulher.png')
            } else if (idade <= ) {
                //Adulto
                img.setAttribute('src', 'Imagens/adultomulher.png')
            } else {
                //Idoso
                img.setAttribute('src', 'Imagens/idosomulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}