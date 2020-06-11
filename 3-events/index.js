const EventEmmiter = require('events')

class MyEmitter extends EventEmmiter { 

}

const emitter = new MyEmitter()
const nameEvent = 'user:click'

emitter.on(nameEvent, function userClicked(click) {
    console.log('A user clicked', click)
})

// emitter.emit(nameEvent, 'at the scrollbar')
// emitter.emit(nameEvent, 'at Ok')

// let count = 0
// setInterval(() => {
//     emitter.emit(nameEvent, 'one more time: ' + (count++))
// }, 1000)

const stdin = process.openStdin()

stdin.addListener('data', function userWrote(value) {
    console.log(`Clone: ${value.toString().trim()}`)
})