//com.eg.android.AlipayGphone:tools
//frida -H 127.0.0.1:1100 -l 1.js 支付宝
//conda activate python
function hook_getUnifiedSign() {

    Java.perform(function () {
		console.log('start=============');
		
		var Activity = Java.use('com.alipay.mobile.nebulaappproxy.api.H5AppProxyUtil');
	    Activity.getLoginToken.implementation = function (){
			var result = this.getLoginToken();
			console.log("result:" + result);
			return result;
        }
		console.log("console:"+Activity.getLoginToken());
		
		var Activity2 = Java.use('com.alipay.mobile.pubsvc.app.util.i');
		console.log("b:" + Activity2.b());
		

    });


}

function main() {
    hook_getUnifiedSign();
}

setImmediate(main);