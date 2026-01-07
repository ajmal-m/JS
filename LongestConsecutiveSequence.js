
const LongestConsecutiveSequence = (nums) => {
    if(nums.length ===0 ) return 0;
    const numSets = new Set(nums);
    let maxLength = 0;
    for(let num of nums){
        if( ! numSets.has(num-1)){
            let currentElement = num;
            let currentLength = 1;
            while( numSets.has(currentElement+1) ){
                currentElement = currentElement+1;
                currentLength++;
            }
            maxLength = Math.max(maxLength, currentLength);
        }
    }
    return maxLength;
}