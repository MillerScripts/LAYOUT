// Menu nav - animation  

document.querySelector(".menu-query").addEventListener('click', () => {
    document.querySelector('.menu-nav').classList.toggle('activo')
});


// scrool lntersection Observer 

const imagen1 = document.getElementById("imagen");
const imagen2 = document.getElementById('imagen2');
const imagen3 = document.getElementById('imagen3');
const imagen4 = document.getElementById('imagen4');
const imagen5 = document.getElementById('imagen5');
const imagen6 = document.getElementById('imagen6');
const imagen7 = document.getElementById('imagen7');
const imagen8 = document.getElementById('imagen8');


const cargarImagen = (entradas) => {
    
    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add("visible")
        }else{
            entrada.target.classList.remove("visible")
        }
    })

};

const observador = new IntersectionObserver(cargarImagen, {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 1.0
})

//ejecutacion

observador.observe(imagen1);
observador.observe(imagen2);
observador.observe(imagen3);
observador.observe(imagen4);
observador.observe(imagen5);
observador.observe(imagen6);
observador.observe(imagen7);
observador.observe(imagen8);
