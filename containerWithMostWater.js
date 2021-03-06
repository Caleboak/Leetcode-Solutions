//Container with most water

/*Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.

 

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
*/

var maxArea = function(height) {
    let max=0;//create a max to hold the maximum
    let i=0;
    let j=height.length-1;//two pointers one at beginning, other at the end
    let cur=0;//to hold the current weight during every iteration
    
    while(i<j){
        cur=(j-i)*Math.min(height[i], height[j]);//think of this like height * length - length is difference between j and i, while the height is the minmum of the two elements because the lower one deteremines the height
        if(height[i]<height[j]){
            i++;
        }
        else{
            j--;
        }
        max=Math.max(max, cur);//update the max after every iteration
        
        
    }
    return max;
    
};