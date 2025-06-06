function ejercicio1(){
    let numero = 20;
    let resultado = numero + 5;
    alert("El resultado es: " + resultado);
}

function ejercicio2(){
    let cadena1 = "Buenas";
    let cadena2 = "Tardes";
    let resultado = cadena1 + cadena2;
    alert("El resultado es: " + resultado);
}

function ejercicio3(){
    let num1 = parseFloat(prompt("Introduce el primer número:"));
    let num2 = parseFloat(prompt("Introduce el segundo número:"));

    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, introduce números válidos.");
    }else if (num1 == num2){
        alert("Los números son iguales.");
    }else if (num1 > num2){
        alert(num1 + " es mayor que " + num2);
    }else if (num1 < num2){
        alert(num1 + " es menor que " + num2);
    }
}

function ejercicio4(){
    let num = parseFloat(prompt("Introduce un número entre 1 y 10:"));
    
    if (isNaN(num) || num < 1 || num > 10) {
        alert("Por favor, introduce un número válido entre 1 y 10.");
    }

    switch (num) {
        case 1:
        case 2:
        case 3:
            alert("Grupo 1");
            break;
        case 4:
        case 5:
        case 6:
            alert("Grupo 2");
            break;
        case 7:
        case 8:
        case 9:
        case 10:
            alert("Grupo 3");
            break;
    }
}

function ejercicio5() {
    let suma = 0;

    for (let i = 0; i <= 10; i++) {
        suma = suma + i;
    }

    alert("La sumatoria de 0 a 10 es: " + suma);
}
function ejercicio6() {
    
    let array = new Array(10);
    producto = 1;
    
    for (let i = 0; i < 10; i++) {
        array[i] = parseFloat(prompt("Introduce un numero"));
    }

    for (let i = 0; i < 10; i++) {
        producto = producto * array[i];
    }

    alert(producto);
}

function ejercicio7(){
    let num1 = parseFloat(prompt("Ingrese un numero"));
    let num2 = parseFloat(prompt("Ingrese un numero"));

    alert(producto = num1 * num2);
}

function ejercicio8(){
    function concatenarCadenas(cadena1, cadena2) {
    return cadena1 + cadena2;
}

let texto1 = prompt("Ingresa la primera cadena:");
let texto2 = prompt("Ingresa la segunda cadena:");

let resultado = concatenarCadenas(texto1, texto2);
alert("Resultado: " + resultado);
}

function ejercicio10(){
    let cadena = "";
    let num = parseInt(prompt("Ingrese un numero:"));
    for (let i = 0 ; i < num; i++ ){
        cadena = "*" + cadena;
    }
    alert(cadena);
}

function ejercicio11(){
    
    let monto = parseFloat(prompt("Ingrese monto del producto:"));
    let pago = prompt("el medio de pago: C (tarjeta de crédito), E (efectivo) y D (tarjeta de débito):").toUpperCase();

    if(monto < 200){
        
        alert("El monto a abonar es: " + monto);

    }else if (monto >= 200 && monto <= 400){
        
        if(pago == "E"){
            monto = monto * 0.7;
        }
        if(pago == "D"){
            monto = monto * 0.8;
        }
        if(pago == "C"){
            monto = monto * 0.9;
        }
    }else if(monto > 400){
        
        monto = monto * 0.6;
    
    }

    alert("El monto a abonar es: " + monto);
}

function ejercicio12(){
    let altura = parseInt(prompt("Ingrese la altura del medio-árbol:"));

    if (isNaN(altura) || altura <= 0) {
        alert("Por favor, ingrese un número válido y mayor a 0.");
        return;
    }

    let resultado = "";

    for (let i = 1; i <= altura; i++) {
        resultado += "* ".repeat(i) + "\n";
    }

    alert(resultado);
}

function ejercicio13(){
    let dia = parseInt(prompt("Ingrese numero: "));
    switch(dia){
        case 1:
            alert("Lunes");
            break;
        case 2:
            alert("Martes");
            break;
        case 3:
            alert("Miercoles");
            break;
        case 4:
            alert("Jueves");
            break;
        case 5:
            alert("Viernes");
            break;
        case 6:
        case 7:
            alert("Fin de semana");
            break;
    }
}

function ejercicio14(){
    let suma = 0;
    let num1 = 0;
    let num = prompt("Ingrese la longitud del array: ");
    let array = new Array(num);

    for(let i=0; i < num; i++){
        num1 = parseInt(prompt("Ingrese el numero de la posicion 1: "));
        suma = suma + num1
        array[num] = num1
    }
    
    let resultado = suma / num;
    alert("El promiedo es: " + resultado);
}

function llamar() {
    let piso = parseInt(document.getElementById("piso").value);
    let dpto = parseInt(document.getElementById("dpto").value);
    let mensaje = document.getElementById("mensaje");

    if (isNaN(piso) || isNaN(dpto) || piso < 0 || piso > 48 || dpto < 1 || dpto > 6) {
        mensaje.textContent = "Piso o dpto inválido.";
        mensaje.style.color = "red";
    } else {
        // Mostrar piso con dos cifras (ej: 03)
        let pisoFormateado = piso.toString().padStart(2, "0");
        mensaje.textContent = "Llamando al piso " + pisoFormateado + ", dpto " + dpto;
        mensaje.style.color = "green";
    }
    }
function borrar() {
    document.getElementById("piso").value = "";
    document.getElementById("dpto").value = "";
    document.getElementById("mensaje").textContent = "";
}

const fila1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    const fila2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
    const fila3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
    const fila4 = ['Borrar', 'Backspace', 'Espacio'];

    const teclado = document.getElementById("teclado");
    const display = document.getElementById("display");

    function crearFila(teclas) {
      const divFila = document.createElement("div");
      divFila.classList.add("fila");

      teclas.forEach(tecla => {
        const boton = document.createElement("button");
        boton.textContent = tecla;
        boton.onclick = () => presionarTecla(tecla);
        divFila.appendChild(boton);
      });

      teclado.appendChild(divFila);
    }

    function presionarTecla(tecla) {
      if (tecla === 'Borrar') {
        display.value = '';
      } else if (tecla === 'Backspace') {
        display.value = display.value.slice(0, -1);
      } else if (tecla === 'Espacio') {
        display.value += ' ';
      } else {
        display.value += tecla;
      }
    }

    // Crear filas
    crearFila(fila1);
    crearFila(fila2);
    crearFila(fila3);
    crearFila(fila4);


