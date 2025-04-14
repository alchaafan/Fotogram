
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

function init() {
    let fotosRef = document.getElementById('overlay');
for (let index =0; index <album.length; index++) {
    fotosRef.innerHTML += `
      <div id="cardview">
                <div id="fotos">
                
                <img  id="bilder" class="bilder-gross" src="${album[index]}" alt="">
            </div>
                
                <button>Schließen</button>
            </div>
    
    
    `
}

}


function toggleOverlay(index) {
    let overlayRef = document.getElementById('overlay');
    overlayRef.classList.toggle('overlay');
    
}
