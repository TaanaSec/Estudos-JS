//Faça um programa que leia valores de vendas enquanto o total não ultrapassar R$ 10.000.
let valor = 0
let total = 0

while (total < 10000){
    valor = parseFloat(prompt(`Digite o valor da venda abaixo | Total no momento = ${total}`))
    total += valor
}