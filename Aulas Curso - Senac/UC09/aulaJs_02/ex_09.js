//Desenvolva um algoritmo que leia 10 notas de 
//alunos e calcule a média geral da turma.
let nota = 0
let media = 0
let soma = 0
let i 

for (i=0;i<10;i++){
    nota = parseFloat(prompt(`Digite a ${i + 1}° nota`))
    soma += nota
}
media = soma / i
document.writeln(`A media da turma foi: ${media}`)