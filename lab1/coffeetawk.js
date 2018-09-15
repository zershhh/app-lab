//CoffeeTawk — by Zexing Li — applab, lab 1, 2018
//Challenge 1:
//1. Larger demand  in Shanghai than New York
//2. 1 more minite to take order and 5 minite to get the drink
//3. Most people use Alipay/Wechat, so payment is quick
//4. Most people know what to order before entering
//5. Customers are unhappy about the queue.
//6. Baristas are handling both ordering and making coffee. 

//Challenge 2 :
//Determine how many staff for making coffee by order list.
//If waiting time is more than 5 minites, we will have one more staff dealing with coffee making.


//Challenge 3 :
let totaltime =0;
let staff= 1;
let time=0;
let orderlist=[
    {coffee:'mocha'},
    {coffee:'natte'},
    {coffee:'mocha'},
    {coffee:'american'},
    {coffee:'natte'},
]


for (let i=0;i<orderlist.length; i++) {
    console.log(orderlist[i].coffee);
    if (orderlist[i].coffee == 'mocha')
        {totaltime +=2;};
    if (orderlist[i].coffee == 'american') 
        {totaltime +=0.5};
    if (orderlist[i].coffee == 'natte') 
        {totaltime +=1};


}
time=totaltime/staff
console.log( `total time is ${time}`);
console.log(`total staff is ${staff}`);

if (time > 5){
    console.log(`need one more staff`);
    staff+=1
    time=totaltime/staff
}
console.log(`new time for each staff is ${time}`)