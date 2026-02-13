//Faça um programa que solicite 12 valores 
//de faturamento mensal e calcule a soma total.
let valor = 0
let total = 0
let i 

for (i = 0;i < 12; i++){
    valor = parseFloat(prompt(`Digite o valor do faturamento | Total no momento = ${total} | ${i + 1}º valor`))
    total += valor
}
document.writeln(`A soma total foi de: ${total}`)