const { getPeople } = require('./service')

Array.prototype.myFilter = function (callback) {
    const list = []
    for(index in this) {
        const item = this[index]
        const result = callback(item, index, this)
        if(!result)  continue;
        list.push(item)
    }
    return list;
}

async function main(){
    try{
        const { results } = await getPeople('a')

        console.time('filter')
        const larsFamily = results.filter(item => item.name.toLowerCase().indexOf(`lars`) !== -1)
        console.timeEnd('filter')

        console.time('myfilter')
        const larsFamilyMyFilter = results.myFilter((item, index, list) => {
            // console.log(`[${index}]`, list.length)
            return item.name.toLowerCase().indexOf(`lars`) !== -1
        })
        console.timeEnd('myfilter')
        
        const names = larsFamilyMyFilter.map((person) => person.name)
        console.log(names)
    }
    catch(err){
        console.error(`Internal Error: `, err)
    }
}

main()