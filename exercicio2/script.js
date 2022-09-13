let numero=prompt("Digite um número:")
tabuada = [1,2,3,4,5,6,7,8,9,10]

console.log(`Vamos olhar a tabuada do ${numero}:`)
for (let i in tabuada)
console.log(`${numero} x ${tabuada[i]} = ${tabuada[i]*numero}`)
