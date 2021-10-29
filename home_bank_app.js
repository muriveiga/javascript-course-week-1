let agency
let account
let card
let loans
let credit

agency = prompt('Agência: ')
account = prompt('Conta: ')
card = prompt('Número do Cartão: ')
loans = prompt('Empréstimos: ')
credit = prompt('O nome consta no SPC? ')

if (credit == 'Sim' || credit == 'sim') {
  credit = true
} else if (credit == 'Não' || credit == 'não') {
  credit = false
} else {
  credit = 'Erro ao ler situação cadastral!'
}

alert(`Agência: ${agency} \n
Conta: ${account} \n
Número do Cartao: ${card} \n
Empréstimos: ${loans} \n
Negativado : ${credit}`)
