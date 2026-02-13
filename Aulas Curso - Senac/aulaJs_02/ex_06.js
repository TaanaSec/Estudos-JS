//Desenvolva um algoritmo que leia valores de despesas e 
//repita até que o total seja maior que R$ 5.000.
let valor = 0
let total = 0

while (total <= 5000){
    valor = parseFloat(prompt(`Digite o valor da despesa abaixo | Total no momento = ${total}`))
    total += valor
}