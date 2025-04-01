
let album = [
    "img/img1.jpg",
    "img/img2.jpg",
    "img/img3.jpg",
    "img/img4.jpg",
    "img/img5.jpg",
    "img/img6.jpg",
    "img/img7.jpg",
    "img/img8.jpg",
    "img/img9.jpg",
    "img/img10.jpg",
    "img/img11.jpg",
    "img/img12.jpg"
];

let fotosContainer = document.getElementById('fotosContainer');


for (let i = 0; i < album.length; i++) {
    fotosContainer.innerHTML += `<img src="${album[i]}" alt="bild ${i +1}" class="bild">`;
}
