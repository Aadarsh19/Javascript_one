
let myDate = new Date()
//console.log(myDate)
 //console.log(myDate.toString());
 //console.log(myDate.toDateString());
 //console.log(myDate.toLocaleString());
//console.log(typeof myDate);

 //let myCreatedDate = new Date(2023, 0, 23)
 let myCreatedDate = new Date(2023, 0, 23, 5, 3)
 //let myCreatedDate = new Date("2023-01-14")
// myCreatedDate = new Date("01-14-2023")
 //console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
 //console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() );
console.log(newDate.getDay());

 console.log(`${newDate.getDay()} and the  `)

newDate.toLocaleString('default', {
    weekday: "long",
    
})

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);
console.log(typeof anotherId)