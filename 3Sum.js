//3sum
//This was pretty hard, i had spme edge cases i couldnt figure out


var threeSum = function(nums) {
    let res=[];
    if(nums.length<3){
        return res;
    }
    nums.sort((a,b)=>a-b);
    let i=0;
    for(let i=0; i<nums.length-2; i++){
        let j=i+1;
        let k=nums.length-1
        if(i>0&&nums[i]==nums[i-1]){
            continue;
        }
        while(j<k){
            if(nums[i]+nums[j]+nums[k]==0){
                res.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while(j<k&&nums[j]==nums[j-1]){
                    j++;
                }
                while(j<k&&nums[k]==nums[k+1]){
                    k--;
                }
            }
            else if(nums[i]+nums[j]+nums[k]>0){
                k--;
            }
            else if(nums[i]+nums[j]+nums[k]<0){
                j++;
            }
        }
    }
    return res;
};