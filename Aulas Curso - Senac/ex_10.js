let n1 = parseInt(prompt("Digite o primeiro numero"))
let n2 = parseInt(prompt("Digite o segundo numero"))
let n3 = parseInt(prompt("Digite o terceiro numero"))
let maior

if (n1 > n2 && n1 > n3) {
    maior =  n1
} else if (n2 > n1 && n1 > n3){
    maior = n2
} else {
    maior = n3
}

document.writeln(`O maior numero é ${maior}`)