
const suscripcion = () => {
    
    let nombre = '';
    let modalidad = '';
    let precio = 0;
    let meses = 0;
    let pagoFinal = 0;
    let cambiarMeses = false;
    let datos = false;

    do {
        nombre = prompt ("Bienvenido al Gimnasio OpenBox ¿Cual es tu nombre?");
        modalidad = prompt ("Hola " +nombre +"\nTenemos 3 tipos de suscripcion mensual en funcion de los dias a entrenar:" + "\nPrincipiante: 3 Veces por semana, una sola clase por dia" + "\nIntermedio: 4 Veces por semana, una sola clase por dia" + "\nAvanzado: Toda la semana, dos clases por dia" + "\n¿Cual deseas?", "Ej: Principiante");

        switch (modalidad) {
            case "Principiante":
                precio = 2000;
                break;
            case "Intermedio":
                precio = 3000;
                break;
            case "Avanzado":
                precio = 4000;
                break;
            default:
                alert("Alguno de los datos ingresados no es correcto");
                precio= 0;
        }

        datos = confirm("¿Deseas volver a introducir tus datos?");
    } while (datos)

    do {
        meses = parseInt(prompt ("Dependiendo de la cantidad de meses que desees pagar tendras un descuento" +"\n3 meses: 10% de descuento" + "\n6 meses: 20% de descuento" + "\n1 año o mas: 30% de descuento" + "\n¿Cuantos meses deseas pagar?"));

        let mesesValidados = validarMeses(meses);
        pagoFinal = aplicarDescuento(mesesValidados, precio) * mesesValidados;
        
        cambiarMeses = confirm("¿Deseas cambiar la cantidad de meses para obtener un mejor descuento?");

    } while (cambiarMeses)
    
    
    alert("El total de tu suscripcion en OpenBox es de $" + pagoFinal);
}

const validarMeses = (meses) => {
    while (Number.isNaN(meses) || meses === 0) {
        if (meses !== 0) {
            alert('Debes agregar un número.')
        } else {
            alert('Debes agregar un número distinto de cero.')
        }
        meses = parseInt(prompt ("¿Cuantos meses deseas pagar?"));
    }

    return meses;
};

const aplicarDescuento = (meses, precio) => {
    let precioConDescuento = 0;

    if ((meses >= 3) && (meses < 6)) {
        precioConDescuento = precio * 0.9;
        return precioConDescuento;
    } 
    
    if ((meses >= 6) && (meses < 12)) {
        precioConDescuento = precio * 0.8;
        return precioConDescuento;
    } 

    if (meses >= 12) {
        precioConDescuento = precio * 0.7;
        return precioConDescuento;
    } 
    
    else {
        return precio;
    }
}


const totalCompra = suscripcion();



