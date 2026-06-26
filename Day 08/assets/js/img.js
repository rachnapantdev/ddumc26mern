let images = [
    "https://cdn.pixabay.com/photo/2016/04/30/21/45/tulips-1364024_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/03/30/15/52/gerbera-7101430_1280.jpg",
    "https://cdn.pixabay.com/photo/2013/05/11/20/44/spring-flowers-110671_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/04/29/09/11/flower-7958117_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/05/14/16/43/flower-4202825_1280.jpg"
]

document.write(` <div class="grid-container">`)

for(let img of images){
    document.write(`  <div class="grid-image">
                <img src=${img} alt="">
            </div>`)
}

document.write(`</div>`)