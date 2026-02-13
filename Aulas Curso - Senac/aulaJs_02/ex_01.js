//Crie um algoritmo que leia nomes de clientes enquanto o número de clientes cadastrados for menor que 10
let nome
let clientes = 0

while (clientes < 10){
    nome = prompt(`Digite o nome do ${clientes + 1}° cliente`)
    clientes++
}