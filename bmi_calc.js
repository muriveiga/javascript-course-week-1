let weight
let height
let bmi
let bmiType

weight = prompt('Peso')
height = prompt('Altura em metros (Ex: 1.74)')

bmi = weight / (height * height)

if (bmi < 18.5 && bmi >= 0) {
  bmiType = 'MAGREZA'
} else if (bmi >= 18.5 && bmi <= 24.99) {
  bmiType = 'NORMAL'
} else if (bmi >= 25 && bmi <= 29.99) {
  bmiType = 'SOBREPESO'
} else if (bmi >= 30 && bmi <= 39.99) {
  bmiType = 'OBESIDADE'
} else if (bmi >= 40) {
  bmiType = 'OBESIDADE GRAVE'
} else {
  bmiType = 'ERRO AO CALCULAR O IMC'
}

alert(`IMC:${bmi}.\n${bmiType} `)
