//Crie um algoritmo que leia e exiba os nomes de 5
//clientes usando um contador de 1 até 5. 
let i
let nomes = []
for(i = 0;i < 5;i++){
    nomes[i] = prompt(`Digite o nome da ${i + 1}° pessoa`)
}
for(i = 0;i < 5;i++){
    document.writeln(nomes[i])
}