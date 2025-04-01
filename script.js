const bildQuellen = ["img/img1.jpg",
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
    "img/img12.jpg",
];

const container = document.getElementById("fotosContainer")

bildQuellen.forEach((bildQuellen) => {
    const bild = document.createElement("img");
    bild.src = bildQuellen;
    bild.classList.add("albumBild");
    bild.addEventListener("click", function (event) {
        event.stopPropagation();
        bild.classList.toggle("groß");
    });

    container.appendChild(bild)

});


document.body.addEventListener("click", function () {
    const alleBilder = document.querySelectorAll(".albumBild.groß"); 
    alleBilder.forEach((bild) => bild.classList.remove("groß")); 
});



