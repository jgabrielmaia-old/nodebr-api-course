const { readFile, writeFile } = require('fs')
const { promisify } = require('util')
const { parse } = require('path')

const readFileAsync = promisify(readFile)
const writeFileAsync = promisify(writeFile)

class Database {

    constructor() {
        this.FILENAME = 'heroes.json'
    }

    async getDataFromFile() {
        const file = await readFileAsync(this.FILENAME, 'utf8')
        return JSON.parse(file.toString())
    }

    async writeFile(data) {
        await writeFileAsync(this.FILENAME, JSON.stringify(data))
        return true
    }

    async create(hero){ 
        const data = await this.getDataFromFile()
        const id = hero.id <= 2? hero.id : Date.now()
        const toSave = [ data, { id, ...hero } ]
        const result = await this.writeFile(toSave)
        return result
    }

    async show(id) {
        const data = await this.getDataFromFile()
        const filteredData = data.filter(item => (id ? (item.id === id) : true))
        return filteredData
    }

    async remove(id) {
        if(!id){
            return true
        }
        
        const data = await this.getDataFromFile()
        const index = data.findIndex(item => item.id === parseInt(id))
        if(!index) {
            throw Error('Informed user don\'t exist')
        }
        data.splice(index, 1)
        
        return this.writeFileAsync(data)
    }
}

module.exports = new Database()