{
    let obj = {
        time: '2017-08-10',
        name:'set',
        _r: 123
    }
    let monitor = new Proxy(obj, {
        // 拦截对象属性的获取
        get(target, key) {
            return target[key].replace('2017', '2018');
        },
        // 拦截对象设置属性
        set(target, key, value) {
            if(key === 'name') {
                return target[key] = value;
            }else {
                return target[key];
            }
        },
        // 拦截Key in object操作
        has(target, key) {
            if(key === 'name') {
                return target[key];
            }else {
                return false;
            }
        },
        // delete拦截属性
        deleteProperty(target, key) {
            if(key.indexOf("_") > -1) {
                delete(target[key]);
                return true;
            }else {
                return false;
            }
         },
        // 拦截Object.keys, Object.getOwnPropertySymbols, Object.getOwnPropertyNames
        ownKeys(target, key) {
            return Object.keys(target).filter(item => item != 'time');
        }

    });

    console.log('get',monitor.time);
    monitor.time = '2018';
    monitor.name = 'xiaozhu';
    console.log('get',monitor.time, monitor);
    console.log('has', 'name', 'name' in monitor, 'time' in monitor);
    // console.log('delete', delete monitor._r, monitor);  
    console.log('ownKeys', Object.keys(monitor));

}

{
    let obj = {
        time: '2017-08-10',
        name:'set',
        _r: 123
    }
    console.log('Reflect get', Reflect.get(obj, 'name'));
    Reflect.set(obj, 'name', 'xiaozhu');
    console.log(obj);
    console.log('has', Reflect.has(obj, 'name'));
}

{
    // proxy 和 Reflect适用的场景是数据的校验
    function validator(target, validator) {
       return new Proxy(target, {
           _validator: validator,          
           set(target, key, value, proxy) {
               if(target.hasOwnProperty(key)) {
                    let va = this._validator[key];
                    if(!!va(value)) {
                        return Reflect.set(target, key, value, proxy);
                    }else {
                        throw Error(`不能设置${key}到${value}`);
                    }
               }else {
                    throw Error(`${key}不存在`);
               }
           }
       })
    }

    const personValidators = {
        name(val) {
            return typeof val === 'string'
        },
        age(val) {
            return typeof value === 'number' && val > 18
        }
    }

    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            return validator(this, personValidators);
        }
    }

    const person = new Person('lili', 18);
    person.name = 'xiaoxiao';
}