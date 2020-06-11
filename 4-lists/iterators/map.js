const service = require('./service')

Array.prototype.myMap = function(callback) {
    const newMappedArray = []
    for (let index = 0; index <= this.length - 1; index++) { 
        const result = callback(this[index], index)
        newMappedArray.push(result)
    }
    return newMappedArray;
}

async function main(){
    try{
        const results = await service.getPeople(`a`)
        const names = []

        console.time('for-each-extension')
        results.results.forEach(function (item) {
            names.push(item.name)
        })
        console.timeEnd('for-each-extension')

        console.time('map-extension')
        const mapNames = results.results.myMap((item, index) => `[${index}] ${item.name}`)
        console.timeEnd('map-extension')

        console.log('names', mapNames)
    }
    catch(err){ 
        console.error('Bad Request', err)
    }
}
main()