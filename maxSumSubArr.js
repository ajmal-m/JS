

const MaxArraySum = (arr, k) => {
    let sumArr = 0;
    let maxSum;
    for(let i=0; i< k; i++){
        sumArr += arr[i];
    };
    maxSum = sumArr;
    for(let i=k; i< arr.length;i++){
        sumArr = sumArr + arr[k] - arr[i-k]
        maxSum = Math.max(maxSum, sumArr )
    };
    return maxSum;
};