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


function init() {
    contentRef = document.getElementById('fotosContainer');
    for(let i =0; i<album.length; i++) {

        contentRef.innerHTML +=
        `
        <div>
                <img onclick="toggleOverlay(${i})" class="bilder" src="${album[i]}" alt="">
            </div>
        `;
        
    }
}

function toggleOverlay(i) {
    
    let overlayRef = document.getElementById('overlay');
    overlayRef.innerHTML = `
     <div id="cardview">
            <img src="${album[i]}" alt=""  class="bilder-gross">
            <button id="close">schließen</button>
        </div>

    `
    overlayRef.classList.toggle('d_none');
   
    
    
}
toggleOverlay()