export function formatDate (date, fmt) {
 2   if(/(y+)/.test(fmt)){
 3     fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
 4   };
 5   let o = {
 6     'M+': date.getMonth() + 1,
 7     'd+': date.getDate(),
 8     'h+': date.getHours(),
 9     'm+': date.getMinutes(),
10     's+': date.getSeconds()
11   };
12   for (let k in o) {
13     if (new RegExp(`(${k})`).test(fmt)) {
14       let str = o[k] + ''
15       fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str))
16     }
17   };
18   return fmt
19 }
20 
21 function padLeftZero (str) {
22   return ('00' + str).substr(str.length)
23 }