
const Queue = []

function defer(fn) {
    return Promise.resolve().then( fn )
}

async function flush() {
    let item
    while(item = Queue.shift()) {
        item && await item()
    }
}

export default function(fn) {
    if (Queue.length === 0) {
        defer(flush)
    }
    Queue.push(fn)
}
