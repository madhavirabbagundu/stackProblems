var arr = [4,7,1,8,5]
var stk = [arr[arr.length-1]]
var out = []
for(var i = arr.length-1; i >= 0; i--){
   while(stk[stk.length-1] <= arr[i]){
    stk.pop()
   }
   if(stk.length === 0){
    out.push(-1)
    stk.push(arr[i])
   }
   else if(stk.length!==0){
    out.push(stk[stk.length-1])
    stk.push(arr[i])
   }
}
console.log(out.reverse())