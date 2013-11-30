// common.jsで作成したネームスペース関数。CLOCKというネームスペースを作れる
JSOBJ.ns('CLOCK')(function(exports){

    /**
     * start、stopのメソッドを持つ。
     * 一秒ごとに、自身の持つ現在時刻（now）が更新されるようにして下さい。
     *
     * onStart、onStop、onTickのメソッドを定義しましょう（呼ばれる事が確認できれば中身は空で良いです）。
     * それぞれ、スタートした時、ストップしたとき、現在時刻が更新されたときに呼ばれます。
     *
     * @constructor
     */

    function Clock(){
    }

    var p = Clock.prototype;

    /**
     * 時計開始
     */
    p.start = function(){
        var self = this;

        this.timer = setInterval(function(){
            tick.call(self);
        }, 1000);

        this.now = new Date();
        this.onStart();
    };

    /**
     * 時計停止
     */
    p.stop = function(){

        if(this.timer){
            clearInterval(this.timer);
            this.timer = null;
        }

        this.onStop();
    };

    /**
     * 時計が開始したのを伝えるイベント
     */
    p.onStart = function(){};

    /**
     * 時計が停止したのを伝えるイベント
     */
    p.onStop = function(){};

    /**
     * 時刻が更新したのを伝えるイベント
     */
    p.onTick = function(){};


    /**
     * 外部に公開されないfunction。
     * Clockのインスタンスでcallまたはapplyで使うこと。
     */
    function tick(){
        this.now = new Date();
        this.onTick(this.now); // thisを正しく設定していないとエラー
    }


    // CLOCK.Clockとして外部へ公開
    exports.Clock = Clock;
});