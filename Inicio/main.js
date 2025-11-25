document.querySelectorAll('.opciones.desplegar').forEach(drop => {
    const btn = drop.querySelector('.seccion');
    const menu = drop.querySelector('.menu');

    let timeout;


    drop.addEventListener('mouseenter', () => {
        clearTimeout(timeout);
        drop.classList.add('open');
    });

    drop.addEventListener('mouseleave', () => {
        timeout = setTimeout(() => drop.classList.remove('open'), 150);
    });

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (drop.classList.contains('open')) {
            drop.classList.remove('open');
        } else {
            drop.classList.add('open');
        }
    });
});


document.addEventListener('click', (e) => {
    if (!e.target.closest('.opciones.desplegar')) {
        document.querySelectorAll('.opciones.desplegar.open').forEach(d => d.classList.remove('open'));
    }
});


const botonesCarrera = document.querySelectorAll('.carrera-titulo');
botonesCarrera.forEach(btn => {
    btn.addEventListener('click', () => {
        botonesCarrera.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const carrera = btn.getAttribute('data-carrera');
        document.querySelectorAll('#infoCarrera ul').forEach(ul => ul.style.display = 'none');
        document.querySelector('#infoCarrera .' + carrera).style.display = 'flex';
    });
});