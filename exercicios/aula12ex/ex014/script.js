function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // BOM DIA! f2e5c2
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#f2e5c2'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE! 9d532c
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#9a5b3aff'
    } else {
        //BOA NOITE! 002122
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#001112ff'
    }
        
} 
