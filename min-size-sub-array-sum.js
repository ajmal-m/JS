/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let minLength = Infinity;
    let start =0;
    let sum =0;
    let len = nums.length;
    for(let end =0; end < len; end++){
        sum += nums[end];
        while( sum >= target ){
            sum -= nums[start];
            minLength = Math.min(minLength, end-start+1);
            start++;
        }
    }
    return minLength === Infinity ? 0 : minLength;
};