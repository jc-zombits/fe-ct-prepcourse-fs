function estaEnRango(num) {
  // Retorna true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:
  return num < 50 && num > 20 ? true : false;
}

console.log(estaEnRango(34));
console.log(estaEnRango(52));
console.log(estaEnRango(12));

module.exports = estaEnRango;
