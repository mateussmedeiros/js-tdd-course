function sum(a, b) {
  return a + b;
}

// named export
// ter vários exports dentro do msm arquivo
// só pode chamar com msm nome
// precisa das chaves
export function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

export { mult as multiplicacao, div };

// método principal
// só pode ter um default por arquivo
// importar com qualquer nome
// não precisa de chaves
export default sum;
