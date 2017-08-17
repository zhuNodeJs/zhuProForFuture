{
    // Decorator是一个函数是用来修改类的行为；
    // 函数，扩展类的功能 ， 只在类的范畴内有用
    // 首先要安装额外的插件, babel-plugin-transform-decorators-legacy
    //在.babelrc中添加""plugins":["transform-decorators-legacy"]
    /**
     * 修饰器 代码复用性 可维护性
     */
}

{
    let readonly = function(target, name, descriptor) {
        descriptor.writable = false;
        return descriptor;
    }

    class Test {
        @readonly
        time() {
            return '2017-08-09'
        }
    }

    let test = new Test();
    // time函数不可修改
    // test.time = function() {
    //     console.log('reset time');
    // }

    console.log(test.time());
}

{
    let typename = function(target, name, descriptor) {
        target.myname = 'hello'
    }

    // 此时一定要放在类的上面紧邻class, myname是类的静态属性
    @typename
    class Test {

    }
    console.log(Test.myname);
}

{
    // 第三方的库的修饰器的js库：core-decorators.js
    // 实例：日志系统
    let log = (type) => {
        return function(target, name, descriptor) {
            let src_method = descriptor.value;
            descriptor.value = (...arg) => {
                src_method.apply(target, arg);
                console.info(`log ${type}`);
            }
        }
    }

    class AD {
        @log('show')
        show() {
            console.info('ad is show');
        }
        @log('click')
        click() {
            console.log('ad is click');
        }
    }

    let ad = new AD();
    ad.show();
    ad.click();
}

