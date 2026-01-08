// JUMP Search Only For Sorted Array
// Time Complexity : O(sqrt(n))
const JumpSearch = (arr, target) => {
    let len = arr.length;
    let step = Math.floor(Math.sqrt(len));
    let prevStep = 0;
    while( arr[ Math.min(step,len)-1 ] < target ){
        prevStep = step;
        step += Math.floor(Math.sqrt(len));
        if( prevStep >= len ) return -1;
    }
    for(let i=prevStep; i< Math.min(step, len) ; i++){
        if(arr[i] === target ){
            return i;
        }
    }
    return -1;
};