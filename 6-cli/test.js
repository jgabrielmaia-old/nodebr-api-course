const { deepEqual, ok } = require('assert')  
const database = require('./database')

const DEFAULT_REGISTER_ITEM = {
    name: 'Flash',
    power: 'Speedster',
    id: 1
}


describe('Heroes handling suite', () => {
    
    before(async() => {
        await database.create(DEFAULT_REGISTER_ITEM)
    })

    it('should search hero in files given an id', async () => {
        const expected = DEFAULT_REGISTER_ITEM
        const [result] = await database.show(expected.id)
        deepEqual(result, expected)
    })
    
    it('should register hero using files', async () => {
        const expected = DEFAULT_REGISTER_ITEM
        const result = await database.create(DEFAULT_REGISTER_ITEM)

        ok(result)
        const [actual] = await database.show(DEFAULT_REGISTER_ITEM.id)

        deepEqual(actual, expected)
    })
    
    it.only('should remove a hero per id', async () => {
        const expected = true
        const result = await database.remove(expected.id)
        deepEqual(result, expected)
    })
})