let pararButton = document.getElementById('parar')
let reproducir = document.getElementById('reproducir')
let header = document.getElementById('splide')
let video = document.getElementById('video')
console.log(video)
// window.reproducir = function() {
//     document.getElementById("video").play();
// }
reproducir.addEventListener("click", function(){
    document.getElementById("video").play();
    header.classList.add("none")
    video.classList.remove("none")
    pararButton.classList.remove("none")
    reproducir.classList.add("none")
})

window.pausar = function() {
    document.getElementById("video").pause();
    header.classList.remove("none")
    pararButton.classList.add("none")
    reproducir.classList.remove("none")
    video.classList.add("none")
};
