let number = 20
console.log(number > 18)
if(number > 18){
    console.log("Você é maior de idade")
}
let condicaoHumana = true
if(condicaoHumana){
    console.log("Você não é um robô")
}else{
    console.log("Você não é humano")
}
let meuAniversario = "Dezembro"
if(meuAniversario == "Dezembro" || meuAniversario == "Janeiro"){
    console.log("O seu aniversário é no verão")
}else{
    console.log("O seu aniversário não é no verão")
}
let nome = "Bárbara"
if(nome.substring(0, 1) == "R"){
    console.log(`${nome}, o seu nome começa com a letra R`)
}else{
    console.log(`${nome}, o seu nome não começa com a letra R`)
}
if(nome.length > 6 || nome.substring(0, 1) == "E"){
    console.log(`${nome}, o seu nome tem mais do que 6 letras ou começa com a letra E`)
}else{
    console.log(`${nome}, o seu nome tem menos do que 6 letras ou não começa com a letra E`)
}