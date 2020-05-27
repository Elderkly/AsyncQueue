import AsyncQueue from './AsyncQueue.js'

!(async function() {
    console.log('create',new Date().getTime());
    //  初始
    // [...Array(10)].map((e,index) => createTimeout(index))

    //  实现
    // let item
    // const arr = [];
    function createTimeout(index) {
        return new Promise(resolve => setTimeout(() => {
            console.log('回调' + index, new Date().getTime())
            resolve()
        },1000))
    }
    //
    //  [...Array(10)].map(async (e,index) => {
    //     arr.push(() => createTimeout(index))
    // })
    //
    // while(item = arr.shift()) {
    //     await item()
    // }
    //
    [...Array(10)].map((e,index) => {
        AsyncQueue(() => createTimeout(index))
    })
})()
