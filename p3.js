tempcelsius = +prompt("Ingrese la temperatura en celsius: ")

tempkelvin = tempcelsius + 273.15;

tempfahr = tempcelsius * (9/5) + 32;

// alert(`La temperatura equivalente en Kelvin es ${tempkelvin} K. La temperatura equivalente en grados Fahrenheit es ${tempfahr} °F)`);
document.write(`<p>La temperatura equivalente en Kelvin es ${tempkelvin} K.</p> 
<p>La temperatura equivalente en grados Fahrenheit es ${tempfahr} °F.</p>`);