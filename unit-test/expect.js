/**
 * 单元测试， 是指对软件中的最小可测单元进行检查和验证
 */

/**
 * 测试函数具备的能力
 * 批量测试的能力
 * 多功能测试的能力
 * 测试报告的能力
 * 推荐使用jest的单元测试框架，主要特点是开箱即用，零配置就能提供钩子函数，mock工具，断言API, 测试覆盖率
 * 生成测试报告： npx jest --coverage
 * Stmts 语句覆盖率, 是不是每个语句都覆盖了
 * Branch 分支覆盖率，是不是每个if-else代码块都覆盖了
 * Funcs 函数覆盖率， 是不是每个函数都调用了
 * Lines 行覆盖率，是不是每一行都执行了
 */

function expect(result) {
    return {
        toBe: function(expectResult) {
            if (result !== expectResult) {
                throw Error(`预期${expectResult}, 但实际${result}!`)
            }
        },
        has: function(key) {
            if (Array.isArray(result)) {
                if (!result.includes(key)) {
                    throw Error(`${JSON.stringify(result)}, 不存在${key}!`)

                } 
            }
            if (typeof result === 'object' && result !== null) {
                if (!(key in result)) {
                    throw Error(`${JSON.stringify(result)}, 不存在${key}属性!`)
                }
            }
        }
    }
}

/**
 * 批量测试，只有都通过才会输出测试通过，只要有一个不通过，就输出测试失败
 * @param {*} title 
 * @param {*} fn 
 */
function it(title, fn) {
    try {
        fn()
        console.log(title, '测试通过')
    } catch(e) {
        console.log(e)
        console.error(title, '测试失败')
    }
}

module.exports = {
    expect,
    it
}