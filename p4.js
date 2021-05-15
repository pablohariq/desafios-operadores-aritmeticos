const input_dias = +prompt("Número de días: ")

const anyos = Math.floor(input_dias/365);
const dias_sobrantes = input_dias % 365;
const semanas = Math.floor(dias_sobrantes/7);
const dias = dias_sobrantes % 7;

document.write(`
<p>Años: ${anyos}</p>
<p>Semanas: ${semanas}</p>
<p>Dias: ${dias}</p>
`);