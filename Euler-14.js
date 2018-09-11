function fun1(num){
  if( num % 2 )
    return num * 3 + 1;
  return num / 2;
}

var max = 1, ans = 1;
var nums = [ 1 ];
for(var i = 1; i < 1000000; i++){
  var num = i, count = 1;
  for( ; num != 1; count++){
    num = fun1(num);
     if( i > num ){
       nums[i] = nums[num] + count;
     }
  }
  if( max < count){
    max = count;
    ans = i;
  }
}
ans;
