/*
 Obter um usuario
1 Obter o numero de telefone a partir do ID
2 Obter o endereco do usuario pelo ID
*/

function getUser(){
    return new Promise((resolve, reject) => {
        setTimeout(() => { 
            return resolve({
                id: 1,
                name: 'Aladin',
                birthDate: new Date()
            })
        }, 1000)
    })  
}

function getPhoneInfo(idUsuario){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                phoneNumber: '95184848',
                stateCode: 32,
                countryCode: 55
            })
        }, 2000)
    })
}

function getAddress(idUsuario){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve({
                street: 'fools',
                number: 0
            })
        }, 2000)
    })
}

async function main() { 
    try { 
        console.time('measure-promise')
        
        const user = await getUser()
        const result = await Promise.all([
            getPhoneInfo(user.id),
            getAddress(user.id)
        ])
        const phoneInfo = result[0];
        const address = result[1];
        
        console.timeEnd('measure-promise')

        console.log(`\tNome: ${user.name}`+
                    `\n\tAddress: ${address.street}, ${address.number}`+
                    `\n\tPhone Number: + ${phoneInfo.countryCode} ${phoneInfo.stateCode} ${phoneInfo.phoneNumber} `)
    }
    catch(err) {
        console.log('Bad Request', err)
    }
}

main()