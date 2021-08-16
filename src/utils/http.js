/*
 * @Descripttion: 参数过滤请求
 * @version: 
 * @Author: 曾利锋[阿牛]
 * @Date: 2021-08-01 22:13:18
 * @LastEditors: 曾利锋[阿牛]
 * @LastEditTime: 2021-08-02 17:48:03
 */

/**
 * 数据是什么类型 string,object,array
 * @param {*} type 数据类型
 * @param {*} arr 数据源
 * @returns 返回结果ture false
 */
function typeData (type,arr) {
  let typeStr = Object.prototype.toString;
  var data = {
    'array':(arr)=>typeStr.call(arr) === '[object Array]',
    'string':(arr)=>typeStr.call(arr) === '[object String]',
    'object':(arr)=>typeStr.call(arr) === '[object Object]'
  }
  return data[type]&&data[type](arr);
}
 
/**
 * 校验数据类型
 * @param {*} data 数据源
 */
function getVlidate (data) { 
    if( typeData('object',data)){
      return getObject(data)
    } else if (typeData('array',data)) {
      return getArray(data)
    } else if (typeData('string',data)) {
      return getString(data)
    }else {
      return data
    }   
}

/**
 * 对string 字符串替换和转义
 * <>等符号转义
 *   前后空格去掉
 * @param {*} value 数据源
 */
function getString (value) {
   let symbol = {"&":'&amp;',"<":"&lt;",">":"&gtl;",'"':"&quot;","'":'&apos;'};
   let newValue = value || ""; 
   //空格符号和数据源的特殊符号转义
   let resetStr =  Object.keys(symbol).reduce((pre,key)=>{ 
            return pre?pre.replace(new RegExp(key, 'g'),symbol[key]):pre
          },newValue.trim()) 
     
   return resetStr
}

/**
 * 对象类型
 * @param {*} data 
 * @returns 
 */
function getObject (data) {
  Object.keys(data).forEach((item)=>{
    data[item] = getVlidate(data[item])
  }) 
  return data
}

/**
 * 数组类型
 * @data
 */
function getArray (data) {
    data.forEach((item,index)=>{
      data[index] = getVlidate(data[index])
    })  
  return data
}

export default getVlidate