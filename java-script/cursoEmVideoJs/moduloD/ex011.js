var agora = new Date()
var hora = agora.getHours()
var minutes = agora.getMinutes()

console.log(`Agora são exatamente ${hora}:${minutes}hs`)

if (hora > 5 && hora < 12) {
  console.log(`Bom dia!`)
} else if (hora >= 12 && hora < 18) {
  console.log(`Boa tarde!`)
} else if (hora >= 18 && hora < 24) {
  console.log(`Boa Noite!`)
} else {
  console.log(`Boa Madrugada!`)
}
