

const user = {
    name:"Username",
    age:30,
    getInfo(){
        console.log("This is info of user ", this.name, this.age)
    }
};

const admin = {
    name:"Adminname",
    age:33,
    getInfo:() =>{
        // Here this is = {}
        console.log(this);
    }
};

function func(){
    return (
        {
            name:"Alex",
            place:"US",
            ref: function(){ return this }
        }
    )
}



const step = {
    step : 0,
    up(){
        this.step++;
        return this;
    },
    down(){
        this.step--;
        return this;
    },
    show(){
        console.log(this.step);
        return this;
    }
};


const calculator = {
    read(a,b){
        this.a = a;
        this.b = b;
        return this;
    },
    sum(){
        return this.a+this.b;
    },
    mul(){
        return this.a*this.b;
    }
}

const cal = calculator.read(2,3);

console.log( cal.sum() )
console.log( cal.mul() )
