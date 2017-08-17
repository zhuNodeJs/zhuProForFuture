{
    //什么是Iterator接口,不同的数据结构来达到相同的目标
    let arr = ['hello', 'world'];
    let map = arr[Symbol.iterator]();
    console.log(map.next());
    console.log(map.next());
    console.log(map.next());
    /**
     * ES6规定, 默认的Iterator接口部署在数据结构的Symbol.iterator属性,或者说，一个数据结构只要具有Symbol.iterator属性, 就可以
     * 认为是“可以遍历的(iterable)”.Symbol.iterator属性本身是一个函数，就是当前数据结构默认的遍历器生成函数.执行这个函数，就会返回
     * 一个遍历器。至于属性名Symbol.iterator,它是一个表达式，返回Symbol对象的iterator属性，这是一个预定义好的，类型为Symbol的特殊值
     * ,所以要放在括号内.
     * 数组默认有这个属性，而对象默认没人.
     */

     const obj = {
         [Symbol.iterator]: function() {
             return {
                 next: function() {
                     return {
                         value: 1,
                         done: true
                     }
                 }
             }
         }
     }
}

{
    let obj = {
        start: [1,3,2],
        end: [7,9,8],
        [Symbol.iterator] : function() {
            let self = this;
            let index = 0;
            let arr = self.start.concat(self.end);
            let len = arr.length;
            return {
                next() {
                    if(index < len) {
                        return {
                            value: arr[index++],
                            done: false
                        }
                    }else {
                        return {
                            value: undefined,
                            done: true
                        }
                    }
                }
            }
        }
     }

     let map = obj[Symbol.iterator]();
     console.log(map.next());
     console.log(map.next());
     console.log(map.next());
     console.log(map.next());
     console.log(map.next());
     console.log(map.next());
     console.log(map.next());
// 具有iterator接口是对象集合，可以使用for...of来遍历
     for(let key of obj) {
         console.log(key);
     }
}

{
    let arr = ['hello', 'world'];
    for(let value of arr) {
        console.log('value', value);
    }
}