//TODO 导入依赖库
var exec = require('cordova/exec');
var platform = require('cordova/platform');

module.exports = {
    // TODO JS 中调用的 js方法，参数列表可根据业务需求定
    startActivity: function (className) {
        //TODO 参数（回调方法,null,类名，方法名，[参数1，参数2，……]）
        exec(null,null, "ActivityPlugin", "startActivity", [className]);
    },
    startApp: function (className) {
        //TODO 参数（回调方法,null,类名，方法名，[参数1，参数2，……]） 被启动的Activity 做以下配置 cn.com.ths.hzdatacenter.zwb
        //    <action android:name="cn.com.ths.hzdatacenter.zwb" />
       // <category android:name="android.intent.category.DEFAULT" />
        exec(null,null, "ActivityPlugin", "startApp", [className]);
    }

}