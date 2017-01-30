/*
* @Author: HAO
* @Date:   2017-01-26 17:13:59
* @Last Modified by:   Marte
* @Last Modified time: 2017-01-28 21:45:55
*/

'use strict';
function haos(){

}
haos.prototype = {
//artTemplate框架封装******************************************************************************
//source为通过template拼接的dom的变量名
//data传过来的json数据
bindTemplate:function(source,Data){
    var redom = template.compile(source);
    var html = redom(Data);
    return html;
},
//简单的数据绑定使用formatestring*******************************************************************
formateString:function(str, data){
    return str.replace(/@\((\w+)\)/g, function(match, key){
        return typeof data[key] === "undefined" ? '' : data[key]});
}
//复制对象,target为要创建的对象，source为原始对象
extend:function(target,source){
    for(var i in source){
        target[i] = soures[i];
    }
    return target;
}

}



var $$ = new haos();