//Visibilizar información disponible.

let cuentas = [
    {nombre: "Mali", DNI: 1, saldo: 200, password: 'h' },
    {nombre: "Gera", DNI: 90123456, saldo: 290, password: 'l33t' },
    {nombre: "Maui", DNI: 78901234, saldo: 67, password: '123' }
    ];


//Obteniendo elementos HTML mediante sus ID.

//Inicio de sesión
const container = document.querySelector('.contenedor');
const dniInfo = document.getElementById('dni');
const contrasenaInfo = document.getElementById('contrasena');
const buttonIngreso = document.getElementById('ingreso');
const mensajeAlert = document.getElementById('mensaje');
const mensajeIncorrecto = document.querySelector('.mensaje_incorrecto');

//menu principal/con los tres botones
const menu = document.querySelector('.menu');
const regresarBoton = document.getElementById('button_regresar');


//consultar saldo
const consultaSaldo = document.getElementById('consultar_saldo');
const saldoConsulta = document.getElementById('saldo_consulta');
const saldoContainer = document.querySelector('.saldoContainer');

//ingresar monto
const ingresarMonto = document.getElementById ('ingresar_monto')
const ingresoMonto = document.querySelector('.ingreso_dinero');
const añadirDinero = document.getElementById('ingresar_dinero');
const nuevoSaldo = document.querySelector('.ingresar_saldoActual');
const buttonAñadir = document.getElementById('button_añadir');

const retorno = document.getElementById('button_deposito_regresar');


//retirar monto
const retirarMonto = document.getElementById('retirar_monto');
const contendedorRetiro = document.querySelector('.retirar_dinero');
const retirarDinero = document.querySelector('.retirarMontoDinero');
const colocarDinero = document.getElementById('retirar_cantidad');
const buttonRetirar = document.getElementById('button_retirar');
const mensajeRetiro = document.querySelector('.retiro_saldoActual');
const retirarDineroRegresar = document.getElementById('button_retirar_regresar');
const retiroErroneo = document.querySelector('.retiro_erroneo')

let cuentaElegida = null;
let saldo = 0;

//--------------------------------------------------------------------------------------

//Iniciando sesión

function mostrarMensaje(mensaje) {
    alert(mensaje);
}

buttonIngreso.addEventListener('click', () => {
    const dni = dniInfo.value;
    const contrasena = contrasenaInfo.value;
    let inicioSesion = false;

    //Recorreremos el arreglo de la variable cuentas:

    for(let i = 0; i < cuentas.length; i++) {
        const cuenta = cuentas[i];
        if (cuenta.DNI == dni && cuenta.password === contrasena) {
            cuentaElegida = cuenta;
            menu.style.display = 'block';
            container.style.display = 'none';
            inicioSesion = true;
            saldo = cuentas[i].saldo
        }
        else{
            mensajeIncorrecto.style.display = 'block'
        }
    }

});


//Consultando saldo

consultaSaldo.addEventListener('click', () => {

    if (cuentaElegida) {
        saldoConsulta.textContent = `Su saldo actual es de ${saldo}`
        menu.style.display = 'none';
        saldoContainer.style.display = 'block';
    }
    else {
        ('Debe iniciar primero sesión en su cuenta.');
    }
});

//Aplicando evento al botón regresar:

regresarBoton.addEventListener('click', () => {
    saldoContainer.style.display = 'none';
    menu.style.display = 'block';
});


//Ingresar monto en el cajero virtual.

const montoIngresado = 0;

ingresarMonto.addEventListener('click', () => {
    menu.style.display = 'none';
    ingresoMonto.style.display = 'block';
})


buttonAñadir.addEventListener('click', () => {
    const montoIngresado = parseInt(añadirDinero.value) + saldo
    saldo = montoIngresado
    nuevoSaldo.textContent = `Su saldo actual es de $${montoIngresado}`; 
    console.log(montoIngresado)
    nuevoSaldo.style.display = 'block';  
});

//ahora, vamos a regresar al menu una vez finalizada la opción de ingreso de dinero.

retorno.addEventListener('click', () => {

    menu.style.display = 'block';
    ingresoMonto.style.display = 'none'
});


//Finalmente, vamos a incorporar la funcionalidad de retiro de dinero.

const montoRetirar = 0;

retirarMonto.addEventListener('click', () => {
    menu.style.display = 'none';
    contendedorRetiro.style.display = 'block';
})

buttonRetirar.addEventListener('click', () => {
    const montoRetirar = parseInt(colocarDinero.value)

    if(montoRetirar >= 10 && montoRetirar <= 990) {
    const nuevoSaldo = parseInt(saldo - colocarDinero.value)
    mensajeRetiro.textContent = `Su monto retirado fue de $${colocarDinero.value} y su saldo actual es de $${nuevoSaldo}`;
    retiroErroneo.style.display = 'none';
    }

    else{
        retiroErroneo.textContent = 'El monto a retirar no cumple con las reglas del negocio.Recuerde que no debe retirar menos de $10.00 ni más de $990.00. Intente con otro monto'
    }
})


retirarDineroRegresar.addEventListener('click', () => {
    contendedorRetiro.style.display = 'none';
    menu.style.display = 'block';
})

