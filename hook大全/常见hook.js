/*
 * @Author: Abel
 * @Date: 2025-04-29 14:43:48
 * @LastEditTime: 2025-04-29 14:43:49
 */
// hook跳转
window.addEventListener('beforeunload', function(event) {
    debugger;  // 在页面跳转前触发调试器
    // 可以选择添加提示信息，显示给用户
    event.returnValue = '你确定要离开吗？';  // 提示框内容
});

