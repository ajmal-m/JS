


let arr = [
    {
        id:1,
        name:"AJMAL M",
        phone:"98787675645",
        email:"AJMALM@GMAIL.COM"
    },
    {
        id:2,
        name:"NAJIYA M",
        phone:"9087867464",
        email:"najiyam@GMAIL.COM"
    },
     {
        id:4,
        name:"NEJLA M",
        phone:"9097946363",
        email:"nejlam@GMAIL.COM"
    },
];

const item = {
    id:3,
    name:"AHIYAN M",
    phone:"9898676434",
    email:"Ahiyanm@gmail.com"
};


const addItemToArray = (arr, item) => {
    let start = 0;
    let end = arr.length-1;
    let lastIndex = -1;
    while( start <= end ){
        const mid = Math.floor((start+end)/2);
        if( arr[mid].id > item.id ){
            end = mid-1;
            lastIndex = mid;
        }else{
            start = mid+1;
        }
    }
    arr.splice(lastIndex,0, item);
    return arr
};