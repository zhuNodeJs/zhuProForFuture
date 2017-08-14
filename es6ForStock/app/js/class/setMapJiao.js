// Map与Array的对比, Set与Array的对比
{
    // 数据结构的横向对比：增，查， 改，删
    let map = new Map();
    let array = [];

    // 增
    map.set('t',1);
    array.push({"t": 1});

    console.info(map, array);

    // 查
    let map_exist = map.has('t');
    let array_exist = array.find(item => item.t);
    console.log(map_exist, array_exist);

    // 改
    map.set('t', 2);
    array.forEach(item => item.t ? item.t = 2 : '')
    console.log(map, array);

    // 删
    map.delete('t');
    let index = array.findIndex(item => item.t);
    array.splice(index, 1);
    console.log(map, array);
}

{
    // set和Array的比较
    let set = new Set();
    let array = [];

    // 增
    set.add({"t":1});
    array.push({"t":1});
    console.log(set, array);

    // 查
    let set_exist = set.has({"t":1}); //注意此时的false，因为对象的存在的是地址的引用
    let array_exist = array.find(item => item.t);
    console.log(set_exist, array_exist);

    // 改
    set.forEach(item => item.t? item.t = 2 : '');
    array.forEach(item => item.t ? item.t *= 2 : '');
    console.log(set, array);

    // 删1
    set.forEach(item => item.t ? set.delete(item) : '');
    let index = array.findIndex(item => item.t);
    array.splice(index, 1);
    console.log(set, array);
}
// Map与Object的对比，Set和Object的对比
{
    // map, set, object的对比
    let item = {"t": 1};
    let map = new Map();
    let set = new Set();
    let obj = {};

    // 增
    map.set('t',1);
    set.add(item);
    obj['t'] = 1;

    console.log(map, set, obj);

    // 查
    console.info({
        map_exist: map.has('t'),
        set_exist: set.has(item),
        obj_exist: 't' in obj
    })

    // 改
    map.set('t', 2);
    set.forEach(item => item.t ? item.t = 2 : '');
    obj['t'] = 2;
    console.log(map, set, obj);

    // 删
    map.delete('t');
    set.delete(item);
    delete obj['t'];
    console.log(map, set, obj);
}