/*
 * @Author: Abel
 * @Date: 2025-04-29 14:27:02
 * @LastEditTime: 2025-04-29 14:43:27
 */
// 方式1
var oldConstructor = Function.prototype.constructor;

Function.prototype.constructor=function(func){
	if(func!="debugger"){
	return oldConstructor(func)
	};
	return function(){};
}

// 方式2
Function.prototype.__constructor_back = Function.prototype.constructor ;
Function.prototype.constructor = function() {
    if(arguments && typeof arguments[0]==='string'){
        //alert("new function: "+ arguments[0]);
        if( "debugger" === arguments[0]){
            //arguments[0]="consoLe.Log(\"anti debugger\");";
            //arguments[0]=";";
            return
    }
    }
    return Function.prototype.__constructor_back.apply(this,arguments);
};