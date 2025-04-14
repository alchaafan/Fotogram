
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

let currendIndex = 0;


const bilder = document.getElementById('fotosContainer');
const overlay = document.getElementById('overlay');
let imagesHTML = "";

function init() {
// Die Bilder vom album in HTML Container einblenden
for (let i=0; i<album.length; i++) {
    imagesHTML+= `<img src="${album[i]}" style="cursor: pointer;" onclick="this.classList.toggle('bilder-gross'); toggleOverlay();">`
  
}

bilder.innerHTML = imagesHTML;
bilder.classList.add('bilder')

}


function toggleOverlay() {
    let overlayRef = document.getElementById('overlay');
    overlayRef.classList.toggle('d_none');
    document.getElementById('close').classList.toggle('d_none');
    document.getElementById('rechts').classList.toggle('d_none');
    document.getElementById('links').classList.toggle('d_none');
}

