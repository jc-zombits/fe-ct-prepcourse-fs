function esTipoDato(valor) {
  // La función recibe un argumento llamado valor.
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:
  return typeof valor; 
}

console.log(esTipoDato("Hola"));
console.log(esTipoDato(4));
console.log(esTipoDato(4.5));
console.log(esTipoDato(true));
console.log(esTipoDato(null));

module.exports = esTipoDato;