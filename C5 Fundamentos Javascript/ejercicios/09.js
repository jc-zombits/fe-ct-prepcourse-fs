function esNuloOIndefinido(valor) {
  // La función recibe un argumento llamado valor.
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // null ---> true 
  // undefined ---> true 
  // 22 ---> false
  // "texto" ---> false
  // Tu código:
  if (valor === undefined) {
    return true;
  } else if (valor === null) {
    return true;
  } else {
    return false;
  }
}

esNuloOIndefinido(undefined)
esNuloOIndefinido(null)
esNuloOIndefinido(4)
esNuloOIndefinido("cadena")

module.exports = esNuloOIndefinido;