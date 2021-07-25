//Longest substring without repeating characters

/*Given a string s, find the length of the longest substring without repeating characters.

 

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
*/

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if(s.length==0){//if length is 0, return 0
        return 0;
    }
    let max=1;//initialize max to hold the first character
    let set=new Set();//let the set keep track of the charcater seen
    let i=0;
    let j=0;//have two pointers to hold the beginning and the end of the substring
    
    while(j<s.length){//start from the j pointer to the end of the length of the substring, remember the j pointer is the faster one
        if(set.has(s[j])){//check if the set has the element at j, meaning we have seen it before, meaning we have to remove it from the set
            while(s[i]!=s[j]){//now we have a while loop to move the first pointer till we get to the same element as j 
                set.delete(s[i]);//we remove them from the set because we are looking for a substring
                i++;//then increment
                
            }
            set.delete(s[i]);//we get here when weve seen the character, we delete then increment
            i++;
            
        }
        set.add(s[j]);//if we have not seen it we just add to the set
        max=Math.max(max, j-i+1);//always check the max 
        j++;//then increment j
        
    }
    return max;
    
};