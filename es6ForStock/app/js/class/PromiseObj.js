{
    // 基本定义
    let ajax = function(callback) {
        console.log('执行');
        setTimeout(function() {
            callback && callback.call();
        }, 1000)
    }
    ajax(function() {
        console.log('timeout1');
    })
}

{
    let ajax = function() {
        console.log('执行2');
        return new Promise(function(resolve, reject) {
            setTimeout(function () {
                resolve();
            }, 1000);
        })
    }

    ajax().then(function() {
        console.log('promise', 'timeout2');
    })
}

{
    let ajax = function () {
        console.log('执行3');
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve();
            }, 5000)
        })
    }

    ajax()
        .then(function() {
            return new Promise(function(resolve, reject) {
                setTimeout(function(){
                    resolve();
                }, 6000)
            })            
        })
        .then(function() {
            console.log('timeout3');
        })
}

{
    let ajax = function(num) {
        console.log('执行4');
        return new Promise(function(resolve, reject) {
            if(num > 5) {
                resolve();
            }else {
                throw new Error('出错了');
            }
        })
    }

    ajax(6)
        .then(function() {
            console.log('log', 6);
        });
    ajax(3)
        .then(function() {
            console.log('log', 3);
        })
        .catch(function() {
            console.log('catch', 3);
        })
}

{
    // 所有的图片加载完成再添加到页面, 全部加载完成再执行then
    function loadImg(src) {
        return new Promise((resolve, reject) => {
            let img = document.createElement('img');
            img.src = src;
            img.onload = function() {
                resolve(img);
            }
            img.onerror = function() {
                reject(err);
            }
        })
    }

    function showImgs(imgs) {
        imgs.forEach(function(img) {
            document.body.appendChild(img);   
        });
    }

    Promise.all([
        loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
        loadImg('http://t-1.tuzhan.com/e86940aa6436/c-2/l/2013/04/26/16/fcef8e3da9f045bd977a45314cd11fab.png'),
        loadImg('http://online.sccnn.com/icon/1093/076.png')
    ])
        .then(showImgs);
}

{
    // Promise.race()：先到先得
    function loadImg(src) {
        return new Promise((resolve, reject) => {
            let img = document.createElement('img');
            img.src = src;
            img.onload = function() {
                resolve(img);
            }
            img.onerror = function() {
                reject(err);
            }
        })
    }

    function showImgs(img) {
        let p = document.createElement('p');
        p.appendChild(img);
        document.body.appendChild(p);
    }

    Promise.race([
        loadImg('http://i4.buimg.com/567571/df1ef0720bea6832.png'),
        loadImg('http://t-1.tuzhan.com/e86940aa6436/c-2/l/2013/04/26/16/fcef8e3da9f045bd977a45314cd11fab.png'),
        loadImg('http://online.sccnn.com/icon/1093/076.png')
    ])
        .then(showImgs);
}
    