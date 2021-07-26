let agencia;
let conta;
let cartao;
let emprestimos;
let negativado;

agencia = prompt("Agência: ");
conta = prompt("Conta: ");
cartao = prompt("Número do Cartão: ");
emprestimos = prompt("Empréstimos: ");
negativado = prompt("O nome consta no SPC? ")

if (negativado =="Sim" || negativado== "sim") {
    negativado = true;  
}else if(negativado == "Não" || negativado=="não"){
    negativado = false;
}else{
    negativado = "Erro ao ler situação cadastral!"
}

alert(`Agência: ${agencia} \n
Conta: ${conta} \n
Número do Cartao: ${cartao} \n
Empréstimos: ${emprestimos} \n
Negativado : ${negativado}`);
