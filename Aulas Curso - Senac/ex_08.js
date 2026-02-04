let n1 = parseInt(prompt("Digite um numero"))
let n2 = parseInt(prompt("Digite outro numero"))

if (n1 > n2) {
    document.writeln("O primeiro numero é maior")
} else if (n2 > n1){
    document.writeln("O segundo numero é maior")
} else {
    document.writeln("Os numero sao iguais")
}