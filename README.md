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

![Before](https://github.com/Elderkly/ImgRepository/blob/master/AsyncQueue/1.gif)

## After
```javascript
    import AsyncQueue from './AsyncQueue.js'
    //  将异步任务通过AsyncQueue封装达到有序进行的效果
    [...Array(10)].map((e,index) => AsyncQueue(() => createTimeout(index)))
```

![Before](https://github.com/Elderkly/ImgRepository/blob/master/AsyncQueue/2.gif)

## LICENSE

AsyncQueue is open source software licensed as
[MIT.](https://github.com/Elderkly/AsyncQueue/blob/master/LICENSE)
