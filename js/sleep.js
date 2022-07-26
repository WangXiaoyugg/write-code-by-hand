/**
 * 实现 sleep 函数
 * type sleep = (s: number) => Promise<void>
 */

// 实现一个 delay 函数格式如下，在 N 毫秒之后执行函数，并以函数结果作为返回值
function sleep(func, seconds, ...args) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Promise.resolve(func(...args))
                .then(resolve)
                .catch(reject)
        }, seconds)
    }, )
} 

async function test() {
   const res1 = await sleep(str => str, 3000, 'hello world')
   console.log('res1: ', res1)
   const res2 = await sleep((str) => Promise.resolve(str), 3000, 'hello vue')
   console.log('res2: ', res2)
}

test()