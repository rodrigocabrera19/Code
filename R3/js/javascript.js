//Abrir un modal en donde se reproducirá el video.
const reproducirVideo = document.querySelector('.video-container');
const containerModal = document.querySelector('.modal');
const sectionModal = document.querySelector('.sectionModal');
const video = document.querySelector('#video');
reproducirVideo.addEventListener('click', function(){
    containerModal.classList.add("is-visible");
    containerModal.classList.add("flex");
    video.play()
    
});


//Cerrar el modal presionando en el boton 'data-close'.

const closeModal = document.querySelector(".close-modal");
closeModal.addEventListener("click", function() {
    containerModal.classList.remove("is-visible");
    containerModal.classList.remove("none");
});

//Cerrar el modal presionando en el body.
document.addEventListener("click", e => {
    if (e.target == document.querySelector(".modal.is-visible")) {
      document.querySelector(".modal.is-visible").classList.remove("is-visible");
      containerModal.classList.remove("none");
    }
    
});

//Cerrar el modal presionando 'escape'.
window.onkeydown = (e)=>{
    if(e.keyCode === 27 && document.querySelector(".modal.is-visible")){
        document.querySelector(".modal.is-visible").classList.remove("is-visible");
        containerModal.classList.remove("none");
    }
};

