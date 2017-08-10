{
    // 码值大于0xFFFF时，要使用{}括起来
    console.log('a', '\u0061');
    console.log('s', '\u20bb7'); // 当成了4个字节，2个字符    

    console.log('s', '\u{20bb7}');
}

{
    // 每2个字节一个长度,当字符为4个字节，codePointAt第一个2字节是正确的，第二个2字节是错误的。
    let s = "𠮷";
    console.log('length', s.length);
    console.log('0', s.charAt(0));
    console.log('1', s.charAt(1));
    console.log('at0', s.charCodeAt(0));
    console.log('at1', s.charCodeAt(1));

    let s1 = '𠮷a';
    console.log('length', s1.length);
    console.log('code0', s1.codePointAt(0));
    console.log('code0', s1.codePointAt(0).toString(16));
    console.log('code1', s1.codePointAt(1));
    console.log('code2', s1.codePointAt(2));
}

{
    // 由码值到字符
    console.log(String.fromCharCode('0x20bb7'));
    console.log(String.fromCodePoint('0x20bb7'));
}

{
    // 遍历接口
    let str = '\u{20bb7}abc';
    for(let i = 0; i < str.length; i++) {
        console.log('es5', str[i]);
    }
    for(let code of str) {
        console.log('es6', code)
    }
}

{
    // 判断字符串是否包含某个字符
    let str = 'string';
    console.log('includes', str.includes('c')); // false
    console.log('start', str.startsWith('str')); // true
    console.log('end', str.endsWith('ng')); // true
}

{
    // 重复，一个字符串重复2次
    let str = 'abc';
    console.log(str.repeat(2));
}

{
    // 模板字符串，非常有意义
    let name = 'list';
    let info = 'hello world';
    let m = `i am ${name}, ${info}`;
    console.log(m);
}

{
    console.log('1'.padStart(2, '0'));
    console.log('1'.padEnd(2, '0'));
}

{
    // 标签模板，作用一，防止xss攻击，作用二，多语言转化
    let user = {
        name: 'list',
        info: 'hello world'
    }
    console.log(abc`i am ${user.name}, ${user.info}`);
    function abc(s, v1, v2) {
        console.log(s, v1, v2);
        return s + v1 + v2;
    }
}

{
    // String.raw, 对所有的'\'进入转义
    console.log(String.raw`Hi \n ${1+2}`);
    console.log(`Hi\n${1+2}`);
}


{
    function SaferHTML(templateData) {
        let s = templateData[0];
        for(let i = 1; i< arguments.length; i++) {
            var arg = String(arguments[i]);
            s += arg.replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;'); 
            s += templateData[i];
        }
        return s;
    }
    var sender = '<script>alert("abc")</script>';
    var message = SaferHTML`<p>${sender} has send you a message.</p>`;
    console.log(message);
}