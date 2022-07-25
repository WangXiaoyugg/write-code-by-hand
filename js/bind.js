/**
 * JS 如何实现bind
 */

// 最简单的实现 ES5
// Function.prototype.fakeBind = function (context, ...outArgs) {
//     const fn = this;
//     return function (...innerArgs) {
//         return  fn.apply(context, [...outArgs, ...innerArgs])
//     }
// }

// // 最简单的实现 ES6
// Function.prototype.fakeBind = function (context, ...args) {
//     return (...rest) => this.call(context, ...args, ...rest)
// }

// Javascript 权威指南 P191 ES3 实现
Function.prototype.fakeBind = function (o) {
    var self = this, boundArgs = arguments;
    return function () {
        var i, args = [];
        for (i = 1; i < boundArgs.length; i++) {
            args.push(boundArgs[i])
        }
        for (i = 0; i < arguments.length; i++) {
            args.push(arguments[i])
        }
        return self.apply(o, args);
    }
}

// bind 的 优化版本，考虑bind 后返回的 构造函数 可被 new;
Function.prototype.fakeBind = function (context, ...args) {
    const self = this;
    
    const fn = function (...newArgs) {
        console.log('this: ', this, this instanceof fn);
        self.apply(this instanceof fn ? this : context, args.concat(newArgs));
    }

    fn.prototype = Object.create(this.prototype);
    return fn;
}




 function f(b) {
    console.log(this.a, b);
    this.c = 100
  }


  
  //=> 3, 4
  f.fakeBind({ a: 3 })(4);
  
  //=> 3, 10
  f.fakeBind({ a: 3 }, 10)(11);

  let o = new f();


  function Point(x, y) {
    this.x = x;
    this.y = y;
  }
  
  Point.prototype.toString = function() {
    return this.x + ',' + this.y;
  };
  
  var p = new Point(1, 2);
  p.toString(); // '1,2'

  var emptyObj = {};
var YAxisPoint = Point.fakeBind(emptyObj, 0/*x*/);
var axisPoint = new YAxisPoint(5);
console.log(axisPoint.toString()); // '0,5'