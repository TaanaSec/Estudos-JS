let salario = parseFloat(prompt("Digite o salario do funcionario"))
let bonus

if (salario < 2000) {
    bonus = salario * 1.20
} else {
    bonus = salario * 1.10
} 

document.writeln(`O salario final ficou em ${bonus}`)