/**
 * 20个令人惊叹的JavaScript一行代码
 */

// 检测用户是否处于暗模式
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// 打乱数组
const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());

// 获取用户选定的文本
const getSelectionText = () => window.getSelection().toString();

// 检查数组是否为空
const isNotEmpty = arr => Array.isArray(arr) && arr.length > 0;

// 翻转字符串
const reverse = str => str.split('').reverse().join('');

// 回到顶部
const goToTop = () => window.scrollTo(0, 0);

// 求平均值
const average = (...args) => args.reduce((a, b) => a + b / args.length);

// 确认奇偶数
const isEven = num => num % 2 === 0;

// 从日期获取时分秒格式的时间
const timeFromDate = date => date.toTimeString().slice(0,8);

// 从URL获取查询参数
const getQueryParams = () => Object.fromEntries(new URLSearchParams(window.location.search))

// 数组去重
const removeDuplicate = (arr) => [...new Set(arr)]

// 将字符串首字母大写
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

// 复制到剪切板
const copyToClipboard = (text) => navigator.clipboard.writeText(text);

// 检查日期是否有效
const isDateValid = (...val) => !Number.isNaN(new Date(...val).valueOf())

// 生成随机的16进制
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, '0')}`

// 清除所有的cookie, 只能在 cookie 设置可读可写的情况下
function clearAllCookie() {
    var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
    if (keys) {
        for (var i = keys.length; i--;)
            document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
    }
}

// 计算两天之间相差的天数
const dayDiff = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)

// 找出一年中的某一天
const dayOfYear = (date) => Math.floor(date - new Date(date.getFullYear(),0,0) / 86400000)

// 获取cookie的值
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();

// 将RGB转化为16进制
const rgbToHex = (r, g, b) =>  '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

