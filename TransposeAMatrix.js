//create an empty 2d array with same size as the sample matrix;
//loop through each row column pair and and swap the numbers of i and j and put into the result e.g [i][j] becomes [j][i]
//Then return;
//time complexity is O(mn);
//space complexity is also O(mn);
var transpose = function(matrix) {
    let m=matrix.length;
    let n=matrix[0].length;
    
    let result= new Array(n).fill(0).map(()=>new Array(m).fill(0));
    for (let i=0; i<result.length; i++){
        for(let j=0; j<result[i].length; j++){
            result[i][j]=matrix[j][i];
            
        }
    }
    return result;
    
};

let test = [[1,2,3,4],[2,4,6,8],[5,7,2,4],[9,5,9,2]]
console.log(transpose(test))==[[1,2,5,9],[2,4,7,5],[3,6,2,9],[4,8,4,2]]