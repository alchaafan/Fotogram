
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

const bilder = document.getElementById('fotosContainer');
let imagesHTML = "";

function init() {
// Die Bilder vom album in HTML Container einblenden
for (let i=0; i<album.length; i++) {
    imagesHTML+= `<img src="${album[i]}" style="cursor: pointer;" onclick="this.classList.toggle('bilder-gross')">`; 
}
bilder.innerHTML = imagesHTML;
}

// Die Klasse von CSS hier eingefügt
document.getElementById('fotosContainer').classList.add('bilder'); 

function bigFoto() {
    

}


 








   

