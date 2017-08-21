import $ from 'jquery';

class Base {
    /**
     * [initPlayList] 初始化奖金和玩法及说明
     * 
     */
    initPlayList() {
        this.play_list.set('r2', {
            bonus: 6,
            tip:'从01~11中任选2个或多个号码，所选号码与开奖号码任意两个号码相同，即中奖<em class="red">6</em>元',
            name: '任二'
        })
        .set('r3', {
            bonus: 19,
            tip: '从01~11中任选3个或多个号码, 选号与奖号任意三个号相同，即中奖<em class="red">19</em>元',
            name: '任三'
        })
    }
}