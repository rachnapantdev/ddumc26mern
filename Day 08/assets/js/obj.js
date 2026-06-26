// Array Of Objects
let projects = [
    {
        pid:1,
        pname:"Astro App",
        developer : "David"
    },
    {
        pid:2,
        pname:"Fintech App",
        developer:"Shubh"
    }
];

console.log(projects)
for(let pro of projects){
        console.log(pro.pname," : ",pro.developer);
    
}