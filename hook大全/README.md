<!--
 * @Author: Abel
 * @Date: 2025-04-29 14:44:19
 * @LastEditTime: 2025-04-29 14:46:07
-->
# Hook大全

### 无限Debugger

#### 方式1

```javascript
var oldConstructor = Function.prototype.constructor;

Function.prototype.constructor=function(func){
	if(func!="debugger"){
	return oldConstructor(func)
	};
	return function(){};
}
```

#### 方式2

```javascript
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
```

### Hook页面跳转

```javascript
window.addEventListener('beforeunload', function(event) {
    debugger;  // 在页面跳转前触发调试器
    // 可以选择添加提示信息，显示给用户
    event.returnValue = '你确定要离开吗？';  // 提示框内容
});
```