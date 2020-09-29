import '../css/components.css';

export const saludar = (nombre, pais) => {
    console.log('creando etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre} como estas? Todo bien por ${pais}?`; 

    document.body.append(h1);
}
