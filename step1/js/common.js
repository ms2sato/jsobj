(function (global) {


    global.JSOBJ = {};

    function ns(path) {

        if (!global[path]) {
            global[path] = {};
        }

        return (function (defFunc) {
            defFunc(global[path]);
        });
    }

    /**
     * 下記のように使える。
     *
     * <code>
     * JSOBJ.ns('CLOCK')(function(exports){
     *   //ネームスペースの定義
     *
     *   exports.test = 123; //CLOCK.testとして外部へ公開
     * });
     * </code>
     *
     * @type {Function}
     */
    global.JSOBJ.ns = ns;

})(this);
