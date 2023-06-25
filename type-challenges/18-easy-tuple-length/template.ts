type Length<T extends readonly any[]> = T["length"];
//T有没有lenth 做判断 -> 约束

//JS
function getLength(arr) {
  //检测是否是一个数组
  if (!Array.isArray(arr)) return;
  return arr.length;
}

//知识点
//什么是 tuple类型
//tuple 和普通的数组有什么区别
