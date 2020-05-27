# AsyncQueue
让异步任务有序进行

## Before
```javascript
    //  我们通过setTimeout来模拟请求
    function createTimeout(index) {
        return new Promise(resolve => setTimeout(() => {
            console.log('回调' + index, new Date().getTime())
            resolve()
        },1000))
    }

    console.log('create',new Date().getTime());

    //  模拟十个请求
    [...Array(10)].map((e,index) => createTimeout(index))
```

## After
```javascript
    import AsyncQueue from './AsyncQueue.js'
    //  将异步任务通过AsyncQueue封装达到有序进行的效果
    [...Array(10)].map((e,index) => AsyncQueue(() => createTimeout(index)))
```
