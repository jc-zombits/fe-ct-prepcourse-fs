function esVerdadero(valor) {
  // Si "valor" es verdadero, retorna "Soy verdadero".
  // Caso contrario, retorna "Soy falso".
  // Tu código:
  return valor ? "Soy verdadero" : "Soy falso";
}

console.log(esVerdadero(true));
console.log(esVerdadero(false));

module.exports = esVerdadero;
