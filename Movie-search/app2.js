
const container = document.querySelector(".container");

runEventListener();

async function runEventListener(){
    const value = sessionStorage.getItem("value");
    const myKey = "d8b2f19f";

    const response = await fetch(`http://www.omdbapi.com/?apikey=${myKey}&t=${value}`);
    if(!response.ok){
        alert("İstek basarisiz oldu");
        return;
    }
    const data = await response.json();

    addNewDetails(data);
}

function addNewDetails(data){
    const img = document.createElement("img");
    img.src = data.Poster;

    const div1 = document.createElement("div");
    div1.classList = "containerChild1";

    const div2 = document.createElement("div");
    div2.classList = "containerChild2";

    const p = document.createElement("p");
    p.classList = "abstract";
    p.textContent = data.Plot;

    const ul = document.createElement("ul");
    ul.classList = "list";

    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    const li4 = document.createElement("li");
    const li5 = document.createElement("li");
    const li6 = document.createElement("li");
    const li7 = document.createElement("li");
    const li8 = document.createElement("li");
    const li9 = document.createElement("li");
    const li10 = document.createElement("li");

    li1.textContent = `Film Adı : ${data.Title}`;
    li2.textContent = `Yıl : ${data.Year}`;
    li3.textContent = `Süre : ${data.Runtime}`;
    li4.textContent = `Kategori : ${data.Genre}`;
    li5.textContent = `Yönetmen : ${data.Director}`;
    li6.textContent = `Yazar : ${data.Writer}`;
    li7.textContent = `IMDB : ${data.imdbRating}`;
    li8.textContent = `Oyuncular : ${data.Actors}`;
    li9.textContent = `Ülke : ${data.Country}`;
    li10.textContent = `Tür : ${data.Type}`;

    ul.appendChild(li1);
    ul.appendChild(li7);
    ul.appendChild(li3);
    ul.appendChild(li2);
    ul.appendChild(li5);
    ul.appendChild(li4);
    ul.appendChild(li8);
    ul.appendChild(li9);
    ul.appendChild(li6);
    ul.appendChild(li10);

    div1.appendChild(img);
    div2.appendChild(p);
    div2.appendChild(ul);

    container.appendChild(div1);
    container.appendChild(div2);

}


