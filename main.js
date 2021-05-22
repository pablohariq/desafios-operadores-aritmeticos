const pizarra = document.querySelector("#pizarra")

$("#boton2").click(function (){
    pizarra.innerHTML = operacionesVarias();
})

// const operacionesVarias = () => {
//     return "hola"
// }

function operacionesVarias() {
    // Ingreso de variables de parte del usuario 
    const n1 = +prompt("Ingrese el primer número (mayor que 0): ");

    // verificar que n1 cumpla el requisito >0
    const n2 = +prompt("Ingrese el segundo número (mayor que 0): ");
    // Condicional de validación de datos
    if (n1<=0 || n2 <=0) {
        // $("#pizarra").innerHTML="Error: Números ingresados no válidos";
        return "Error: Números ingresados no válidos"
    } else {
        // solo si los datos son válidos, ejecuta la función
        // $("#pizarra").innerHTML= calc(n1,n2);
        return calc(n1,n2)
    }
}

// función que crea el objeto con los resultados
const calc = function(n1,n2) {

    // cálculo de suma
    const suma = n1 + n2;
    
    // Cálculo de resta
    const resta = n1 - n2;
    
    // Cálculo de división
    const division = n1/n2;
    
    // Cálculo de multiplicación
    const mult = n1 * n2;
    
    // cálculo de módulo
    const mod = n1 % n2;
    
    // const resultado = {
    //              suma: suma,
    //              resta: resta ,
    //              division: division ,
    //              producto: mult,
    //              modulo: mod}
    const resultado2 = `La suma es: ${suma} <br>
                        La resta es: ${resta}<br>
                        La división es: ${division}<br>
                        La multiplicación es: ${mult}<br>
                        El módulo es ${mod}`;
    return resultado2;
}