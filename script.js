
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

function render() {
    let contentRef = document.getElementById('fotosContainer');
    let html = '';
    for (let i =0; i <album.length; i++) {
        html += `<img src="${album[i]}" class="bild" alt ="Foto" onclick="showPopup('${album[i]}')">`;
    }
    contentRef.innerHTML=html;
}
function showPopup(photo) {
    const popup = document.getElementById('popup');
    const popupimg = document.getElementById('popupImg');
    popupimg.src = photo;
    popup.style.display='block';
}
function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display='none';
}
function togglePopup() {
    let popupRef = document.getElementById('popup');
    popupRef.classList.toggle('d_none');
}

function showPrev () {
    currentIndex = (currentIndex - 1 + album.length) % album.length;
    document.getElementById('popupImg').src = album[currentIndex];
}

function showNext() {
    currentIndex = (currentIndex + 1) % album.length;
    document.getElementById('popupImg').src=album[currentIndex];
}


