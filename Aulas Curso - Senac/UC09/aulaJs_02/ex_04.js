//Crie um algoritmo que leia nomes de funcionários e 
//repita até que 5 nomes tenham sido digitados. 
let nome
let funcionarios = 0

while (funcionarios < 5){
    nome = prompt(`Digite o nome do ${funcionarios + 1}° funcionario`)
    funcionarios++
}