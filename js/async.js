/**
 * 实现async 函数
 */
function sleep(msg, ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(msg);
        }, ms)
    })
}

function async(generator) {
    const iterator = generator();

    function handler(iteratorResult) {
        if (iteratorResult.done) return;

        if (iteratorResult.value instanceof Promise) {
            iteratorResult.value.then((res) => {
                handler(iterator.next(res))
            })
        }
    }


    try {
        handler(iterator.next());
    } catch(e) {
        iterator.throw(e)
    }
 
}

async(function *() {
    try {
        let res1 = yield sleep('1', 1000);
        console.log("res1: "  +  res1)
        let res2 = yield sleep(res1 + '2', 1000);
        console.log("res2: "  +  res2)
        let res3 = yield sleep(res2 + '3', 1000);
        console.log("res3: "  +  res3)
    } catch(e) {
        console.log(e)
    }
})