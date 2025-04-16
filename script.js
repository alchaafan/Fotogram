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

// um die Bilder beim Laden anzublenden
function init() {
    contentRef = document.getElementById('fotosContainer');
    // Die Bilder werden mithilfe von for Schleife itiriert(wiederholt)
    for(let i =0; i<album.length; i++) {
         
        contentRef.innerHTML +=
        //Die Bilder werden in einem HTML Container gerendert und werden durch ${album[i]}" angezeigt
        `
        <div>
                <img onclick="toggleOverlay(${i})" class="bilder" src="${album[i]}" alt="">
            </div>
        `;
        
    }
}

let currentIndex = 0;

function toggleOverlay(i) {
    currentIndex = i;
    let overlayRef = document.getElementById('overlay');
    let imageName = album[currentIndex]
    overlayRef.innerHTML = `
     <div id="cardview" onclick="event.stopPropagation()">
            <img id="bigImage" src="${album[i]}" alt=""  class="bilder-gross">
             <p id="imageName">${imageName}</p>
            <button onclick="closeBtn()" id="close">X</button>
             <div>
        <button class="naviBtn" onclick="showPrev()">&#8592;</button>
        <button class="naviBtn" onclick="showNext()">&#8594;</button>
        </div>
        </div>

    `
    overlayRef.classList.toggle('d_none');
   
    
    
}

function closeOverlay() {
    let overlayRef = document.getElementById('overlay');
    overlayRef.classList.add('d_none')
}

//Diese Funktion ist für den Schließbutton
function closeBtn() {
    let closeRef = document.getElementById('overlay');
    closeRef.classList.add('d_none')
}

//Navigationsbutton nächstes Bild
function showNext() {
    if (currentIndex <album.length -1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    document.getElementById('bigImage').src = album[currentIndex];
    document.getElementById('imageName').textContent = album[currentIndex]
}


// Navigationsbutton vorheriges Bild
function showPrev() {
    if (currentIndex >0) {
        currentIndex--;
    } else {
        currentIndex = album.length - 1;;
    }
    document.getElementById('bigImage').src = album[currentIndex];
    document.getElementById('imageName').textContent = album[currentIndex]
}



