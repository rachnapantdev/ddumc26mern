async function fetchProducts() {
    let resp= await fetch("https://jsonplaceholder.typicode.com/todos");
    resp = await  resp.json();

    // console.log(resp);
    for(let res of resp){
        console.log(res.title);
        console.log(res.completed);
        console.log(res.userId);
    
        document.getElementById("pro").innerHTML += `<div class="box">
            <div class="card-header">
                ${res.userId}
            </div>
            <div class="card-body">
                ${res.title}
            </div>
            <div class="card-footer">
                ${res.completed ? "Completed" : "Note Completed"}
            </div>
        </div>`
    }
    
}
fetchProducts();