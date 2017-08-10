{
    // 二进制和八进制表示法
    console.log('B', 0B111110111);
    console.log('B', 0o767);
}

{
    // isFinite 有限数, isNaN 是否是NaN
    console.log('15', Number.isFinite(15)); // true
    console.log('NaN', Number.isFinite(NaN)); // false
    console.log('1/0', Number.isFinite(1/0)); // false
    console.log('NaN', Number.isNaN(NaN)); // true
    console.log('0', Number.isNaN(0)); // false    
}

{
    console.log('25', Number.isInteger(25)); // true
    console.log('25.0', Number.isInteger(25.0)); // true
    console.log('25.0', Number.isInteger(25.0)); // true
    console.log('25.1', Number.isInteger(25)); // true
}

{
    console.log(Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER);
    console.log('10', Number.isSafeInteger(10)); // true
    console.log('10', Number.isSafeInteger('a')); // false
}

{
    // Math.trunc方法用于去除一个数的小数部分，返回整数部分， 不四舍五入
    console.log(4.1, Math.trunc(4.1)); // 4
    console.log(4.9, Math.trunc(4.9));  // 4
}

{
    // Math.sign()方法用来判断一个数是正数，负数，还是零。对于非数值，会先将其转化为数值。
    // 参数为整数， 返回+1
    // 参数为负数， 返回-1
    // 参数为0， 返回 +0
    // 参数为-0， 返回 -0
    // 参数为其他值，返回NaN
    console.log('-5', Math.sign(-5)); // -1
    console.log('0', Math.sign(0));  // 0
    console.log('5', Math.sign(5)); // +1
    console.log('50', Math.sign('50')); // +1
    console.log('foo', Math.sign("foo")); // NaN
}

{
    // Math.cbrt()方法用于计算一个数的立方根
    console.log('-1', Math.cbrt(-1)); // -1
    console.log('8', Math.cbrt(8)); // 2
}
