let names = ["Shubhra","Kashish","Muskan","Satyam","Karan"];

for(let name in names)
{
    console.log(name)
}

for(let name of names){
    console.log(name)
}
let sname = "Anupam";
// length of a string
let count = 0;
for(let n in sname){
    console.log(sname[n]);
    count++
}
console.log(sname," : ",count);
// Object 
let product = {
    id:1,
    pname:"Tea",
    price:10,
    qty:50
};
console.log(product);
for(let p in product)
{
    console.log(p);
    
}
