function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  return num >= 100 && num <= 999 || num <= -100 && num >= -999
}

console.log(tieneTresDigitos(123));
console.log(tieneTresDigitos(45));
console.log(tieneTresDigitos(7890));
console.log(tieneTresDigitos(100));
console.log(tieneTresDigitos(-456));
console.log(tieneTresDigitos(-12));

module.exports = tieneTresDigitos;
