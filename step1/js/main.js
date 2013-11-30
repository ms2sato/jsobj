$(function(){

    var $clock = $('#clock');

    // 時計情報モデルをインスタンス化
    var clock = new CLOCK.Clock();


    // 各イベントへの対応を定義
    clock.onTick = function(){
        digitalView.updateTime();
    };

    clock.onStart = function(){
        digitalView.updateTime();

        $clock.find('.trigger').text('ストップする');
        $clock.unbind().click(function(){
            clock.stop();
        });
    };

    clock.onStop = function(){
        $clock.find('.trigger').text('スタートする');
        $clock.unbind().click(function(){
            clock.start();
        });
    };

    // デジタル時計ビューを定義
    var digitalView = new CLOCK.DigitalView({
        clock: clock,
        $clock: $clock,
        title: 'サンプルデジタル時計'
    });

    // 時計start!
    clock.start();

});