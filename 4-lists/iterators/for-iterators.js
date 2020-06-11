const service = require('./service')

async function main(){
    try{
        const result = await service.getPeople('Luke')
        const names = []

        console.time('for')

        for(let i=0; i<= result.results.length - 1; i++)
        {
            const person = result.results[i]
            names.push(person.name)
        }
        console.timeEnd('for')
        
        console.time('forIn')
        for(let i in result.results)
        {
            const person = result.results[i]
            names.push(person.name)
        }
        console.timeEnd('forIn')

        console.time('forOf')
        for(person in result.results)
        {
            names.push(person.name)
        }
        console.timeEnd('forOf')

        console.log(`names`, names)
    }
    catch(err){
        console.error(`Internal Error: `, err)
    }
}

main()