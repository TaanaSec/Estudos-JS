let numero = parseFloat(prompt("Digite um numero"))
let desconto 

if (numero > 100) {
    desconto = numero - (numero * 0.1)
    document.writeln(`O preço final ficou em ${desconto}`)
} else {
    document.writeln(`O preço final ficou em ${numero}`)
}

