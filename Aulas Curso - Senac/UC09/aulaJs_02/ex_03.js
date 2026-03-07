//Desenvolva um algoritmo que leia códigos de produtos 
//enquanto o usuário não digitar o código "000".
let codigo 
let user
while (codigo != "000"){
    user = prompt(`Digite o codigo do produto ou "000" para sair | Codigo anterior: ${user}`)
    if (user == "000"){
        codigo = user
    }
}