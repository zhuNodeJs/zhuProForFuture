{
    let arr = Array.of(3, 4, 5, 6, 9, 11);
    console.log(arr);

    let empty = Array.of();
    console.log(empty);
}

{
    let p = document.querySelectorAll('p');
    let pArr = Array.from(p);
    pArr.forEach(function(item) {
        console.log(item.textContent);
    })
    console.log(Array.from([1,2,3,4], function(item) {
            return item*2;
    }));
}

{
    console.log('fill-7', [1, 'a', undefined].fill(7));
    console.log('fill,pos', ['a', 'b', 'c'].fill(7, 1, 3)); // 3是长度
}

{
    for(let index of ['1', 'c', 'ks'].keys()) {
        console.log('keys',index);
    }
//    for(let value of ['1', 'c', 'ks'].values()) {
//        console.log('values', value);
//    }

    for(let [index, value] of ['1', 'c', 'ks'].entries()) {
        console.log(index+":"+value);
    }
}

{
    // 从哪个位置替换， 从哪个位置读取数据， 从哪个位置截止
    console.log([1, 2, 3, 4, 5].copyWithin(0, 3, 5));
}

{
    // 数值满足条件，只返回第一个符合条件的
    console.log([1,2,3,4,5].find(function(item){
        return item > 3;
    }));
    // 符合条件的下标 
    console.log([1,2,3,4,5,6].findIndex(function(item) {
        return item > 3;
    }));
}

{
    // 在ES5中NaN与NaN不相等
    console.log('number', [1, 2, NaN].includes(1));
    console.log('number', [1, 2, NaN].includes(NaN));
}
