function carregar() 

{
    var msg = window.document.getElementById(`msg`)
    var foto = window.document.getElementById(`imagem`)
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    

msg.innerHTML = `Hora certa -> ${hora}:${minuto}`

    if (hora > 0 && hora < 13) {
        foto.src = 'manha.jpg'
        document.body.style.background = `#6EE9F0`
    } else if (hora >= 13 && hora <= 18) {
        foto.src = 'tarde.jpg'
        document.body.style.background = `#FA8A3F`
    } else {
        foto.src = 'noite.jpg'
        document.body.style.background = `#000000`
    }   

}
