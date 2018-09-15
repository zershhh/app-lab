//Challenge 1
let max=5
let line = "#"
let space = ' '
let num = 3

String.prototype.times = function(n) {  
    return Array.prototype.join.call({length:n+1}, this);  
};  

for (let i=1;i<max; i++){
    console.log(space.times(num)+line+space.times(num));

    if (num !== 0){
        num = num -1};

    line= line+'##'
}

//Challenge 2

let standatdtime=3;
let time=0


let customers = [
    {name: '1', holdingPhone:true,isAlone:true},
    {name: '2', holdingPhone:true,isAlone:false},
    {name: '3', holdingPhone:false,isAlone:true},
    {name: '4', holdingPhone:false,isAlone:false},
]


for (let i=0;i<customers.length; i++) {
    if(customers[i].holdingPhone==true){
        time= standatdtime*0.5
    }
    if(customers[i].isAlone==true){
        time= time*0.8
    }
    
    console.log(`customer ${customers[i].name} Estimated drink time:  ${time}minutes`)
    time=standatdtime
}