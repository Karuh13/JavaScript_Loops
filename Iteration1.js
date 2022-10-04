/* Haz un bucle y muestra por consola todos aquellos valores del array
que incluyan la palabra "Camiseta". Usa la función .includes de javascript. */

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

products.forEach(elem => {
    if (elem.includes("Camiseta")) {
        console.log(elem);
    }
});

/* let regex = /Camiseta/
products.forEach(elem => {
    if (regex.test(elem)) {
        console.log(elem);
    }
}); */