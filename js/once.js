/**
 * 只执行一次
 */

function once(fn) {
    let result = null;
    let invoked = false;
    return function (...args) {
        if (invoked) return result;
        result = fn.call(this,...args);
        invoked = true;
        return result;
    }
    
}

 const f = (x) => x;

 const onceF = once(f);
 
 //=> 3
 let res1 = onceF(3);
 console.log('res1: ', res1)
 //=> 3
 let res2 = onceF(4);
 console.log('res2: ', res2)

 