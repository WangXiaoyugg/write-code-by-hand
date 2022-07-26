/**
 * 如何实现一个 flatMap 函数
 */

function flatMap(array, callback, thisArgs){
    return array.reduce((acc, value) => {
        return (acc = acc.concat(callback.call(thisArgs, value)))
    }, [])
}

const res = flatMap([1, 2, [3], 4], (x) => x + 1)
console.log(res)