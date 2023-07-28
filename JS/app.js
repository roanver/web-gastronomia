const botonFiltro = document.getElementById("r__icon");
const filtro = document.getElementById('r-sort');
const botonCerrarFiltroApply = document.getElementById('apply-colapse'); 
const botonCerrarFiltroReset = document.getElementById('reset-colapse');
const recipesContainer = document.getElementById("r__container");

if (window.matchMedia("(max-width: 480px)").matches) {

    let rotacion = 0;
    let isShow = false; 
    recipesContainer.style.marginTop = "5rem";
    filtro.style.display = "none";
    

    botonFiltro.addEventListener("click", () => {
        rotacion += 180
        botonFiltro.style.transform = `rotate(${rotacion}deg)`;
        isDrop = filtro.style.display = "grid";

        if (rotacion >= 360) {
            rotacion = 0;
        }

        isShow = !isShow; // Variable con una valor diferente

        if (isShow) {
            filtro.style.display = "grid";
            recipesContainer.style.marginTop = "110rem";
        } else {
            filtro.style.display = "none";
            recipesContainer.style.marginTop = "5rem";
        }

        // programa para cambiar entre displays
    });

    botonCerrarFiltroApply.addEventListener("click", () => {
        filtro.style.display = "none";
        botonFiltro.style.transform = `rotate(0deg)`;
        recipesContainer.style.marginTop = "5rem";
    })

    botonCerrarFiltroReset.addEventListener("click", () => {
        filtro.style.display = "none";
        botonFiltro.style.transform = `rotate(0deg)`;
        recipesContainer.style.marginTop = "5rem";
    })
}


// VERSIÓN PARA LA VISTA DE TABLETS



if (window.matchMedia("(min-width: 768px)").matches) {
    let rotacion = 0;
    let isShow = false; 
    recipesContainer.style.marginTop = "2rem";
    filtro.style.display = "none";
    

    botonFiltro.addEventListener("click", () => {
        rotacion += 180
        botonFiltro.style.transform = `rotate(${rotacion}deg)`;
        isDrop = filtro.style.display = "grid";

        if (rotacion >= 360) {
            rotacion = 0;
        }

        isShow = !isShow; // Variable con una valor diferente

        if (isShow) {
            filtro.style.display = "grid";
            recipesContainer.style.marginTop = "10rem";
        } else {
            filtro.style.display = "none";
            recipesContainer.style.marginTop = "2rem";
        }

        // programa para cambiar entre displays
    });

    botonCerrarFiltroApply.addEventListener("click", () => {
        filtro.style.display = "none";
        botonFiltro.style.transform = `rotate(0deg)`;
        recipesContainer.style.marginTop = "2rem";
    })

    botonCerrarFiltroReset.addEventListener("click", () => {
        filtro.style.display = "none";
        botonFiltro.style.transform = `rotate(0deg)`;
        recipesContainer.style.marginTop = "2rem";
    })
}

// NO LE DES MUCHA IMPORTANCIA A ESA PARTE. ES ÚNICAMENTE PARA QUE SE MANTENGA EL FILTRO EN LA VERSIÓN DE COMPUTADORAS.


if (window.matchMedia("(min-width: 992px)").matches) {
    let rotacion = 0;
    let isShow = false; 
    recipesContainer.style.marginTop = "0rem";
    filtro.style.display = "grid";
    

    botonFiltro.addEventListener("click", () => {
        rotacion += 180
        botonFiltro.style.transform = `rotate(${rotacion}deg)`;
        isDrop = filtro.style.display = "grid";

        if (rotacion >= 360) {
            rotacion = 0;
        }

        isShow = !isShow; // Variable con una valor diferente

        if (isShow) {
            filtro.style.display = "grid";
            recipesContainer.style.marginTop = "0rem";
        } else {
            filtro.style.display = "grid";
            recipesContainer.style.marginTop = "0rem";
        }

        // programa para cambiar entre displays
    });

    botonCerrarFiltroApply.addEventListener("click", () => {
        filtro.style.display = "grid";
        botonFiltro.style.transform = `rotate(0deg)`;
        recipesContainer.style.marginTop = "0rem";
    })

    botonCerrarFiltroReset.addEventListener("click", () => {
        filtro.style.display = "grid";
        botonFiltro.style.transform = `rotate(0deg)`;
        recipesContainer.style.marginTop = "0rem";
    })
}