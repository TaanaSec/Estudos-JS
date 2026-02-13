function LerDados(){
    let nome = prompt("Digite seu nome")
    let idade = prompt("Digite sua idade")
    return {nome:nome, idade:idade}
}

let dados = LerDados()
document.writeln(`Seu nome é ${dados.nome} e sua idade é ${dados.idade}`)
