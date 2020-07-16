let dinero_diciembre = +prompt(`Ingrese Monto`);
let paqueteA = (`
Usted puede comprar:
* 1 Televisor
* 1 modular
* 3 Pares de zapatos
* 5 Camisas
* 5 Pantalones`);
let paqueteB = (`
Usted puede comprar:
* 1 Grabadora
* 3 Pares de Zapatos
* 5 Camisas
* 5 Pantalones`);
let paqueteC = (`
Usted puede comprar:
* 2 Pares de Zapatos
* 3  Camisas
* 3 Pantalones`);
let paqueteD = (`
Usted puede comprar:
* 1 Par de zapatos
* 2 Camisas
* 2 Pantalones`);

if (dinero_diciembre >= 50000) {
  console.log(paqueteA);
} else if (dinero_diciembre < 50000 && dinero_diciembre >= 20000) {
  console.log(paqueteB);
} else if (dinero_diciembre < 20000 && dinero_diciembre >= 10000) {
  console.log(paqueteC);
} else {
 console.log(paqueteD); 
}

console.log(`Feliz Navidad!!!`);
console.log(`FIN DEL PROGRAMA`);