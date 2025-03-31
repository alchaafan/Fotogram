const bild = document.createElement("img");
bild.src = "img/img1.jpg";
bild.alt = "Das Bild";
bild.id = "bild";
bild.alt = "anklickbares Bild"


const container = document.getElementById("fotosContainer");
container.appendChild(bild);

bild.addEventListener("click", function(){
    bild.classList.toggle("groß")
});

