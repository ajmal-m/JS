const items = [
    { id:1, name:"a"},
    { id:2, name:"b"},
    { id:1, name:"d"},
    { id:2, name:"c"},
    { id:3, name:"e"},
];


let res = [];
for(let i=0; i< items.length ; i++){
    const { id , name} = items[i];
    const index = res.findIndex((item) => item.id == id);
    console.log(index)
    if(index >=0 ){
        res[index] = { id , name:[ ...res[index].name , name ] };
    }else{
        res.push({ id , name:[ name ]})
    }

}
console.log(res)