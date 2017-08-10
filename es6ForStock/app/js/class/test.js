{
    let a, b, c, rest;
    [a, b, c=9] = [1, 2];
    console.log("1.>>",a,b,c);
}

{
    function f() {
        return [3, 4];
    }
    let a, b;
    [a, b] = f();
    console.log("2.>>", a, b);
}

{
    let a = 4;
    let b = 9;
    [a, b] = [b, a];
    console.log('3.>>', a, b);
}


{
    function f() {
        return [1, 2, 3, 4, 5]
    }
    let a, b, c;
    [a,,,b] = f();
    console.log('4.>>>', a, b);
}

{
    function f() {
        return [1, 2, 3, 4, 5]
    }
    let a, b, c;
    [a,...b] = f();
    console.log('5.>>>', a, b);
}

{
    let o = { p: 42, q: true};
    let {p, q} = o;
    console.log("6.>>>", p, q);
}

{
    let metaData = {
        title: 'abc',
        test: [
            {title:'test', desc: 'description'}
        ]
    }
    let { title:esTitle, test:[ { title:cnTitle } ]} = metaData;
    console.log('7.>>>', esTitle, cnTitle);
}

{
    let regx = new RegExp('xyz', 'i');
    let regx2 = new RegExp(/xyz/i); // 此处的i,只能是单个单词，不能是复合的， 如：ig

    console.log(regx.test('xyz123'), regx2.test('xyz123')); // true true

    let regx3 = new RegExp(/xyz/ig, 'i'); // es6的情况下可以使用复合的写法
    console.log(regx3.flags); // i  此处进行了覆盖
}

{
    // y, u 是es6新增的修饰符
    let s = 'bbb_bb_b';
    let a1 = /b+/g;
    let a2 = /b+/y; // 粘连特性
// 都是全局匹配，g从上一次匹配的位置即可，不强调从第一个字符开始，y修饰符必须‘_bb’就开始匹配, 一开始就不符合
    console.log("one", a1.exec(s), a2.exec(s)); // 匹配到['bbb']， 匹配到['bbb']
    console.log("one", a1.exec(s), a2.exec(s)); // 匹配到['bb'] ， 匹配到null

    console.log(a1.sticky, a2.sticky); // false true 表示是否开启了粘连模式
}


{
    //u 可以理解为unicode , 处理正则中有大于两个字节的字符时，要使用u
    console.log('u-1',/^\uD83D/.test('\uD83D\uDC2A')); // true
    console.log('u-2',/^\uD83D/u.test('\uD83D\uDC2A')); // false

    console.log(/\u{61}/.test('a')); // false
    console.log(/\u{61}/u.test('a')); // true 只有使用u修饰符时，才能识别到把61和‘a’相匹配，两者相等

    // 点(.)字符不能识别码点大于0xFFFF的Unicode字符，表示两个字节以上的字符时，必须加上u修饰符。
    console.log(`\u{20BB7}`); // 𠮷 这个字符大于两个字节
    console.log('u-1', /^.$/.test('\u{20BB7}')); // false
    console.log('u-2', /^.$/u.test('\u{20BB7}')); // true

    console.log('test-1', /𠮷{2}/.test('𠮷𠮷')); // false
    console.log('test-2', /𠮷{2}/u.test('𠮷𠮷')); // true

}