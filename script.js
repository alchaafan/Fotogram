function grossmachen(img) 
{
 img.style.transform = "scale(1.5)";
 innerHeight.style.transform = "transform 0.3s ease-in-out";   
}
const bilder = document.querySelectorAll('.fotos');
let grossesBild = null;
bilder.forEach(bild => {bild.addEventListener('click', function(){
    this.style.transform = "scale(1.5)";
    this.style.transition = "transform 0.3s ease-in-out";
})});