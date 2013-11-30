function zerofill(num){
    return (num < 10)? '0' + num : num;
}

// 即時関数で中で作成した変数が公開されないようになる。
(function(){

    // ネームスペース
    if(typeof(CLOCK) == "undefined"){
        CLOCK = {};
    }

    /**
     * デジタル時計
     * @params params.clock 時計情報モデル
     * @params params.$clock 時計UIのjQueryObject
     */
    function DigitalView(params){
        this.params = params;

        // 下記二点のサンプル
        // underscore.jsを利用したテンプレートの利用
        // HTMLのscriptで埋め込んだ長い文字列の利用
        var digitalTpl = _.template($('#digitalTpl').html());
        var digitalTxt = digitalTpl({
            title: this.params.title
        });

        $(digitalTxt).appendTo(this.params.$clock);
    }

    DigitalView.prototype.updateTime = function(){
        var self = this;

        var $clock = this.params.$clock;
        var clock = this.params.clock;

        // メソッドの中で定義したfunction
        function setNumber(selector, value){
            // ここのselfはDigitalViewのインスタンスを指す
            self.params.$clock.find(selector).text(zerofill(value));
        }

        $clock.find('.hour').text(zerofill(clock.now.getHours()));
        //以下は上記と同じ事をfunctionを利用して行った
        setNumber('.minute', clock.now.getMinutes());
        setNumber('.second', clock.now.getSeconds());
    };


    // CLOCKは公開されているので、CLOCK.DigitalViewとしてクラスを公開
    CLOCK.DigitalView = DigitalView;

})();