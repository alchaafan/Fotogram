
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

let currentIndex = 0;


const bilder = document.getElementById('fotosContainer');
let imagesHTML = "";

function init() {
// Die Bilder vom album in HTML Container einblenden
for (let i=0; i<album.length; i++) {
    imagesHTML+= `<img src="${album[i]}" style="cursor: pointer;" onclick="this.classList.toggle('bilder-gross'); toggleOverlay();">`
  
}

bilder.innerHTML = imagesHTML;
bilder.classList.add('bilder')


const popupRef = document.getElementById('popupFoto');
popupRef.innerHTML =`
<button id="prevButton"> links</button>
<button id="nextButton"> rechts</button>
`;

document.getElementById('prevButton').addEventListener('click', showPreviousImage);
document.getElementById('nextButton').addEventListener('click', showNextImage);

}
function toggleOverlay() {
    let overlayRef = document.getElementById('overlay');
    overlayRef.classList.toggle('d_none');
}

function showPreviousImage() {
    if (currentIndex>0) {
        currentIndex--;
    } else {
        currendIndex = album.length -1;
    }
    updatePopupImage();
}


function showNextImage() {
    if (currentIndex < album.length -1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updatePopupImage();
}
function updatePopupImage() {
    const popupRef = document.getElementById('popupFoto');
    popupRef.innerHTML = `
    <img src="${album[currentIndex]}" style="width: 100%; height: auto;">
        <button id="prevButton">links</button>
        <button id="nextButton">rechts</button>
`;

document.getElementById('prevButton').addEventListener('click', showPreviousImage);
document.getElementById('nextButton').addEventListener('click', showNextImage);

}

window.onload = init;

