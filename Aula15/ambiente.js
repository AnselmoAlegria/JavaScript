let num = [5, 8, 9, 3]
num[3]=6 // acrescenta um valor na posição 3
num.push(7) // acrescenta um valor independente de onde parou
num.length // atributo para saber o comprimento
num.sort() // organiza em ordem crescente

console.log(num)
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(4)
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}