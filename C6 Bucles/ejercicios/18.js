function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  let producto = 1;

  const inicio = Math.min(a, b);
  const fin = Math.max(a, b);

  for (let i = inicio; i <= fin; i++) {
    producto *= i;
  }

  return producto;
}

console.log(productoEntreNúmeros(2, 4));
console.log(productoEntreNúmeros(1, 5));
console.log(productoEntreNúmeros(3, 3));
console.log(productoEntreNúmeros(-7, 7));

module.exports = productoEntreNúmeros;