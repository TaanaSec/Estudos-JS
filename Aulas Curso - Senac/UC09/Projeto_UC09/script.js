let ficha = {
  nome: "",
  estadoCivil: "",
  nomeConjuge: "",
  endereco: "",
  bairro: "",
  cidade: "",
  uf: "",
  email: "",
  idade: 0,
  dataNasc: 0,
  numero: 0,
  cep: 0,
  telefone: [0, 0, 0]
};

let iniciar_sistema = confirm("Bem-Vindo - Deseja iniciar Sistema de Cadastro?")

if(iniciar_sistema == true){
  ficha.nome = prompt("Digite o nome da pessoa ou FIM para encerrar o cadastro")

  if(ficha.nome == "FIM" || ficha.nome == "fim" || ficha.nome == "Fim" ){
    document.writeln("<h1>Você encerrou o sistema</h1>")
  }
  
  while(ficha.nome != "FIM" && ficha.nome != "fim" && ficha.nome && "Fim" ){
    ficha.idade = prompt("Digite a idade da pessoa")
    ficha.dataNasc = prompt("Digite a data de nascimento da pessoa")
    ficha.estadoCivil = prompt("Digite o estado civil da pessoa, Casado, solteiro, viúvo")

    if(ficha.estadoCivil != "solteiro" && ficha.estadoCivil != "SOLTEIRO" && ficha.estadoCivil != "Solteiro"){
      ficha.nomeConjuge = prompt("Digite o nome do cônjuge da pessoa")
    }

    ficha.endereco = prompt("Digite o endereço da pessoa")
    ficha.numero = prompt("Digite o número da residência da pessoa")
    ficha.bairro = prompt("Digite o bairro onde a pessoa reside")
    ficha.cidade = prompt("Digite o nome da cidade onde a pessoa mora")
    ficha.uf = prompt("Digite a sigla do estado onde a pessoa mora")
    ficha.cep = prompt("Digite o CEP da rua onde a pessoa reside")
    ficha.email = prompt("Digite o e-mail da pessoa")
    ficha.telefone[0] = prompt("Digite o primeiro telefone para contato com a pessoa")
    ficha.telefone[1] = prompt("Digite o segundo telefone para contato com a pessoa")
    ficha.telefone[2] = prompt("Digite o terceiro telefone para contato com a pessoa")
    ficha.nome = prompt("Digite o nome da pessoa ou FIM para encerrar o cadastro")
    
    if(ficha.nome == "FIM" || ficha.nome == "fim" || ficha.nome == "Fim" ){
      document.writeln("<h1>Você encerrou o sistema</h1>")
      document.writeln("Dados Cadastrados com Sucesso")
    }

  }

} else {
  document.writeln("<h1>Sistema Não Iniciado!!!</h1>")
}





