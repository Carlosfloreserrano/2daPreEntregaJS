// BIENVENIDA AL BANCOCODER
alert("Bienvenido al BancoCoder");

// MIS DATOS! CARLOS FLORES
let clientes = [
    {
        nombre: "Carlos",
        apellido: "Flores",
        dni: "12345678",
        saldo: 1000,
    },
];

// !!!!SOLO SON 3 INTENTOS!!!
function validarClave() {
    let intentos = 3;

// !!!!!!!!!!!!IMPORTANTE LA CLAVE ES "carlosflores"¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡

    do {
        let claveIngresada = prompt("Ingresa tu clave:");
        if (claveIngresada === "carlosflores") {
            alert("Clave correcta. Bienvenido, Carlos Flores.");
            return true;
        } else {
            intentos--;
            alert(`Clave incorrecta. Te quedan ${intentos} intentos.`);
        }
    } while (intentos > 0);

    alert("Demasiados intentos incorrectos. Operación cancelada.");
    return false;
}

function procesarClientes(operacion) {
    for (let i = 0; i < clientes.length; i++) {
        alert(`Procesando cliente ${i + 1}: ${clientes[i].nombre} ${clientes[i].apellido}`);
        operacion(clientes[i]);
    }
}

function realizarRetiro(cliente) {
    do {
        let retiro = parseInt(prompt("Ingrese el monto a retirar:"));
        if (isNaN(retiro)) {
            alert("Por favor, ingrese un valor numérico.");
        } else if (retiro === 0 || retiro < 1) {
            alert("El monto de retiro debe ser mayor que 0. Ingrese otro monto.");
        } else if (retiro > cliente.saldo) {
            alert("Su saldo es insuficiente para realizar esta transacción. Su saldo actual es: " + cliente.saldo + " USD. Ingrese otro monto.");
        } else {
            cliente.saldo -= retiro;
            alert("Retiro exitoso, su saldo actual es de: " + cliente.saldo + " USD");
            break;
        }
    } while (true);
}

if (validarClave()) {
    procesarClientes(realizarRetiro);
}