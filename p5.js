n1 = +prompt("Ingrese el primer número: ");
n2 = +prompt("Ingrese el segundo número: ");
n3 = +prompt("Ingrese el tercer número: ");
n4 = +prompt("Ingrese el cuarto número: ");
n5 = +prompt("Ingrese el quinto número: ");
// nota: al parecer el +prompt convierte el input vacio en 0 (o quizas lo hace Number())

// metodo 1: bam bam
suma = n1 + n2 + n3 + n4 + n5;
promedio = suma/5;

console.log(suma,promedio);
