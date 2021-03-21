const prompt = require('prompt-sync')()

function Kgoodness(phrase){
    let n = phrase.length
    let contributeToK = 0

    console.log("length: " + phrase.length)

    for(let i = 0; i < n/2; i++)
    {
        if(phrase[i] != phrase[n-i-1])
        {
            contributeToK++
        }
    }
    return contributeToK
}

const testNumber = prompt("Test quantity: ")

for(let i = 0; i < testNumber; i++)
{
    let temp = prompt("N and K: ")
    temp = temp.split(" ")
    let N = temp[0]
    let K = temp[1]

    let string = prompt("string: ")

    if(string.length != N || string != string.toUpperCase())
        return

    let goodness = Kgoodness(string)

    console.log("goodness: " + goodness)

    if(goodness == K)
        console.log(`Case #${i+1}: 0`)
    
    else if(goodness > K)
        console.log(`Case #${i+1}: ${goodness - K}`)
    
    else if(goodness < K)
        console.log(`Case #${i+1}: ${K - goodness}`)
}
