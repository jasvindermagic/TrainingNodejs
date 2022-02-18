let array  = [1,2,3,4,5,6,7,8,9,10,11,12];
var a=[];
function sumCombination(numbers,target,sum,comb,idx)
{
    if(sum==target)
   {
       console.log(comb);
       return;
   }
   if(idx>=numbers.length)
   {
       return;
   }
   if(sum>target)
   {
       return;
   }
   let comb1=Array.from(comb);
   sumCombination(numbers,target,sum,comb1,idx+1);
   comb[comb.length]=numbers[idx];
   let comb2=Array.from(comb);
   sumCombination(numbers,target,sum+numbers[idx],comb2,idx+1);  
}
sumCombination(array,10,0,a,0);