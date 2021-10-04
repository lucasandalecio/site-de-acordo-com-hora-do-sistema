function carregar() {
  var msg = window.document.querySelector('div#msg')
  var img = window.document.querySelector('img#imagemManha')
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora > 0 && hora < 12) {
    img.src = 'manha1.jpg'
    document.body.style.background = '#02cd9f'
  } else if (hora >= 12 && hora < 18) {
    img.src = 'tarde1.jpg'
    document.body.style.background = '#b9846f'
  } else {
    img.src = 'noite1.jpg'
    document.body.style.background = '#515154'
  }
}
