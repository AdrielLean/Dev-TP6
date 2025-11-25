document.getElementById("submit1").addEventListener("click", function (e) {
    // Evita el envío automático del formulario
    e.preventDefault();

    // Obtiene todos los radios con name="mate"
    const radios = document.querySelectorAll('input[name="mate"]');
    let seleccionado = false;
    let valorSeleccionado = "";

    // Recorre los radios para ver si alguno está seleccionado
    radios.forEach((radio) => {
        if (radio.checked) {
            seleccionado = true;
            valorSeleccionado = radio.nextElementSibling.textContent; // texto del label
        }
    });

    // Si está seleccionado, ejecuta acción
    if (seleccionado) {
        // Ejemplo: mostrar mensaje
        console.log(valorSeleccionado)
        document.getElementById("primera-etapa").style.display = "none";
        document.getElementById("segunda-etapa").style.display = "block";
        document.getElementById("tercera-etapa").style.display = "none";

        document.getElementById("barra-estado").style.background = "linear-gradient(to right, #016099 0%, #016099 50%, #9BBDD5 51%, #9BBDD5 100%)";
        document.getElementById("seg").style.backgroundColor = "#016099";
        document.getElementById("ter").style.backgroundColor = "#9BBDD5";

        document.getElementById("no-ver").style.display = "none";
        document.getElementById("hola").style.display = "inline-block";

        const elementos = document.querySelectorAll(".errores");
        elementos.forEach((el) => {
            el.style.display = "none";
        });
    } else {
        console.log("NO HAY MATERIA SELECCIONADA");
        const elementos = document.querySelectorAll(".errores");
        elementos.forEach((el) => {
            el.style.display = "block";
        });
    }
});

document.getElementById("submit2").addEventListener("click", function (e) {
    e.preventDefault(); // evita envío automático

    // Lista de grupos de radios que deben estar seleccionados
    const grupos = ["mat1", "mat2", "mat3"];
    let todoSeleccionado = true;

    grupos.forEach((grupo) => {
        const radios = document.querySelectorAll(`input[name="${grupo}"]`);
        let seleccionado = false;

        radios.forEach((radio) => {
            if (radio.checked) {
                seleccionado = true;
            }
        });

        if (!seleccionado) {
            todoSeleccionado = false;
        }
    });

    if (todoSeleccionado) {
        // Acción si hay selección
        document.getElementById("primera-etapa").style.display = "none";
        document.getElementById("segunda-etapa").style.display = "none";
        document.getElementById("tercera-etapa").style.display = "block";

        document.getElementById("barra-estado").style.background = "linear-gradient(to right, #016099 0%, #016099 50%, #016099 51%, #016099 100%)";
        document.getElementById("seg").style.backgroundColor = "#016099";
        document.getElementById("ter").style.backgroundColor = "#016099";
        document.getElementById("hola").style.display = "none";
    } else {
        console.log("NO HAY COMISION SELECCIONADA");

        console.log("NO HAY MATERIA SELECCIONADA");
        const elementos = document.querySelectorAll(".errores");
        elementos.forEach((el) => {
            el.style.display = "block";
        });
    }
});

document.getElementById("atras2").addEventListener("click", function (e) {
    e.preventDefault();

    // Acción al volver atrás
    document.getElementById("primera-etapa").style.display = "block";
    document.getElementById("segunda-etapa").style.display = "none";
    document.getElementById("tercera-etapa").style.display = "none";

    document.getElementById("barra-estado").style.background = "linear-gradient(to right, #9BBDD5 0%, #9BBDD5 50%, #9BBDD5 51%, #9BBDD5 100%)";
    document.getElementById("seg").style.backgroundColor = "#9BBDD5";
    document.getElementById("ter").style.backgroundColor = "#9BBDD5";

    document.getElementById("no-ver").style.display = "inline-block";
    document.getElementById("hola").style.display = "none";
});

document.querySelectorAll('input[name="turno"]').forEach((radio) => {
    radio.addEventListener("change", function () {
        let index = null;

        if (this.id === "a") index = 0; // Mañana
        if (this.id === "b") index = 1; // Tarde
        if (this.id === "c") index = 2; // Noche
        if (this.id === "d") index = "all"; // Todas

        // --- Lógica para mostrar/ocultar comisiones ---
        document.querySelectorAll(".materia").forEach((materia) => {
            const comisiones = materia.querySelectorAll(".comi");

            comisiones.forEach((comi, i) => {
                if (index === "all") {
                    comi.style.display = "block";
                } else {
                    comi.style.display = (i === index) ? "block" : "none";
                }
            });
        });

        // --- ACA VAN LOS CAMBIOS DE ESTILOS ---
        // Ejemplo: cambiar fondo del contenedor según filtro
        const titulos = document.querySelectorAll(".materia h2");
        if (index === 0 || index === 1 || index === 2) {
            titulos.forEach((titulo) => {
                console.log(titulo);
                titulo.style.height = "50px";
                titulo.style.lineHeight = "50px";
            });
        }
        if (index === "all") {
            titulos.forEach((titulo) => {
                titulo.style.height = "150px";
                titulo.style.lineHeight = "150px";
            });
        }
    });
});






