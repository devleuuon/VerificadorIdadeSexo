function verificar () {
    var data = new Date ()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('nasc')
    var res = window.document.querySelector('div#res') //maneira mais moderna
    if (fano.value.length === 0 || Number(fano.value > ano)) //number converte string por number
    window.alert('incorreto')

    var fsex = window.document.getElementsByName('sexo')
    var idade = ano - Number(fano.value) //.value procura valor dentro do input
    var img = document.createElement('img') //criando imagem por js e não pelo html.
    img.setAttribute('id', 'foto') //criando um id para imagem
    var genero = '' //genero sem valor, vai depender do else if
    if (fsex[0].checked){
        genero = 'Homem'
        if (idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', './imagens/bbmenino.jpg')
        } else if (idade < 21){
            //jovem
            img.setAttribute('src', './imagens/homemjovem.jpg')
        } else if (idade < 51){
            //adulto
            img.setAttribute('src', './imagens/homemadulto.jpg')
        } else {
            //idoso
            img.setAttribute('src', './imagens/homemidoso.jpg')
        }
    } else if (fsex[1].checked) { //[0 ou 1] vai buscar name no html, input radio.
        genero ='Mulher'
        if (idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', './imagens/bbmenina.jpg')
        } else if (idade < 21){
            //jovem
            img.setAttribute('src', './imagens/jovemmulher.jpg')
        } else if (idade < 51){
            //adulto
            img.setAttribute('src', './imagens/mulheradulta.jpg')
        } else {
            //idoso
            img.setAttribute('src', './imagens/mulheridosa.jpg')
        }
    }

    res.style.textAlign = 'center' // deixa texto centralizado
    res.innerHTML = `Detectamos que o(a) ${genero} tem ${idade} anos!`
    res.appendChild(img) //add imagem 
}