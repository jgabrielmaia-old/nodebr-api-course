const { getPeople } = require('./service')

Array.prototype.myReduce = function (callback, initialValue) {
    let finalValue = typeof initialValue !== undefined ? initialValue : this[0]
    for(let index = 0; index <= this.length -1; index++){
        finalValue = callback(finalValue, this[index], this)
    }
    return finalValue
}

async function main(){
    try{
        const { results } = await getPeople(`a`) 
        
        const heights = results.map(item => parseInt(item.height))
        console.log(heights)

        const total = heights.reduce((before, next) => {
            return before + next
        }, 0)

        const myList = [
            ['Erick','Wendel'],
            ['NodeBR', 'Nerdzao']
        ]

        const myTotal = myList.myReduce((before, next) => {
            return before.concat(next)
        }, [])
        .join(', ')

        console.log(`total`, total)

        console.log(`myTotal`, myTotal)
    }
    catch(err){
        console.error(`Internal Error: `, err)
    }
}

main()