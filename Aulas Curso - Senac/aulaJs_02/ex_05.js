//Faça um programa que solicite senhas de acesso e 
//repita até que a senha correta seja informada. 
let senha_digitada = ""
let senha_correta = "1234"

while (senha_correta == "1234"){
    senha_digitada = prompt(`Digite a senha correta abaixo`)
    
    if (senha_digitada == senha_correta){
        document.writeln("Login efetuado")
        senha_correta = ""
    }
}