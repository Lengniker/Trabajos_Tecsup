console.log(`****** EJERCICIO 3.2 ******`);
// Realice un algoritmo para determinar el sueldo semanal de un trabajador con base en las horas trabajadas y el pago por hora,
// considerando que después de las 40 horas cada hora se considera como excedente  y  se  paga  el  doble.

let horas_trabajadas = +prompt(`Ingrese horas trabajadas`);
let pago_hora = 10;

let horas_extra = 0;
let sueldo_semanal = 0;
let sueldo_excedente = 0;
let sueldo_normal = 0;

// sueldo_normal = horas_trabajadas * pago_hora;
// sueldo_excedente = (horas_extra * pago_hora) * 2;

// sueldo_semanal = sueldo_normal + sueldo_excedente;

if (horas_trabajadas < 40) {
  sueldo_normal = horas_trabajadas * pago_hora;
  sueldo_semanal = sueldo_normal;
  // console.log(`Su Sueldo es: ${sueldo_semanal}`);
} else {
  horas_extra = horas_trabajadas - 40;
  sueldo_normal = 40 * pago_hora;
  sueldo_excedente = horas_extra * pago_hora * 2;
  sueldo_semanal = sueldo_normal + sueldo_excedente;
  // console.log(`Su Sueldo es: ${sueldo_semanal}`);
}

console.log(`Horas Trabajadas: ${horas_trabajadas}`);
console.log(`Sueldo Normal: ${sueldo_normal}`);
console.log(`Horas Extra: ${horas_extra}`);
console.log(`Sueldo Extra: ${sueldo_excedente}`);
console.log(`Su Sueldo Semanal es: ${sueldo_semanal}`);
console.log(`FIN DEL PROGRAMA`);

console.log(`****** EJERCICIO 3.3 ******`);
// El 14 de febrero una persona desea comprarle un regalo al ser querido que más aprecia en ese momento,
// su dilema radica en qué regalo puede hacerle, las alternativas que tiene son las siguientes:
// Tarjeta 10 a menos
// Chocolates 11 a 100
// Flores 101 a 250
// Anillo 251 a mas
// Se requiere un diagrama de flujo con el algoritmo que ayude a determinar qué regalo se le puede comprar
// a ese ser tan especial por el día del amor y la amistad.

let dinero = +prompt(`Dinero Disponible`);
let regalo = "";

if (dinero <= 10) {
  regalo = "Tarjeta";
} else if (dinero > 10 && dinero <= 100) {
  regalo = "Chocolates";
} else if (dinero > 100 && dinero <= 250) {
  regalo = "Flores";
} else {
  regalo = "Anillo";
}
console.log(`Le puede regalar: ${regalo}`);
console.log(`FIN DEL PROGRAMA`);

console.log(`***** EJERCICIO 3.4 ******`);
// El dueño de un estacionamiento requiere un diagrama de flujo con el  algoritmo  que  le  permita  determinar
// cuánto  debe  cobrar  por  el  uso del estacionamiento a sus clientes.
// Las tarifas que se tienen son las siguientes:
// Las dos primeras horas a $5.00 c/u.
// Las siguientes tres a $4.00 c/u.
// Las cinco siguientes a $3.00 c/u.
// Después de diez horas el costo por cada una es de dos pesos.

let horas = +prompt(`Ingrese cantidad de Horas`);
let tarifa1 = 5;
let tarifa2 = 4;
let tarifa3 = 3;
let tarifa4 = 2;
let horas_exceso = 0;
let total = 0;

if (horas <= 2) {
  total = horas * tarifa1;
} else if (horas > 2 && horas <= 5) {
  horas_exceso = horas - 2;
  total = 2 * tarifa1 + horas_exceso * tarifa2;
} else if (horas > 5 && horas <= 10) {
  horas_exceso = horas - 5;
  total = 2 * tarifa1 + 3 * tarifa2 + horas_exceso * tarifa3;
} else if (horas > 10) {
  horas_exceso = horas - 10;
  total = 2 * tarifa1 + 3 * tarifa2 + 5 * tarifa3 + horas_exceso * tarifa4;
}
console.log(`Su Pago total es: ${total}`);

console.log(`****** EJERCICIO 3.8 ******`);
// Cierta empresa proporciona un bono mensual a sus trabajadores, el cual puede ser por su antigüedad o bien por el monto
// de su sueldo (el que sea mayor), de la siguiente forma:
// Cuando la antigüedad es mayor a 2 años pero menor a 5, se otorga 20 % de su sueldo; cuando es de 5 años o más, 30 %.
// Ahora bien, el bono por concepto de sueldo, si éste es menor a $1000, se da 25 % de éste, cuando éste es mayor a $1000,
// pero menor o igual a $3500, se  otorga  15%  de  su  sueldo,  para  más  de  $3500.  10%.  Realice  el  algoritmo correspondiente
// para calcular los dos tipos de bono, asignando el mayor, y represéntelo con un diagrama de flujo y pseudo-código.

let sueldo = +prompt(`Ingrese Sueldo`);
let antiguedad = +prompt(`Ingrese Años de Antiguedad`);
let bono_sueldo = 0;
let bono_antiguedad = 0;
let bono = 0;

if (antiguedad > 2 && antiguedad < 5) {
  bono_antiguedad = sueldo * 0.2;
} else {
  bono_antiguedad = sueldo * 0.3;
}
if (sueldo < 1000) {
  bono_sueldo = sueldo * 0.25;
} else if (sueldo > 1000 && sueldo <= 3500) {
  bono_sueldo = sueldo * 0.15;
} else {
  bono_sueldo = sueldo * 0.1;
}
if (bono_antiguedad > bono_sueldo) {
  bono = bono_antiguedad;
} else {
  bono = bono_sueldo;
}

console.log(`Bono Sueldo: ${bono_sueldo}`);
console.log(`Bono Antiguedad: ${bono_antiguedad}`);
console.log(`Su bono es: ${bono}`);
console.log(`FIN DEL PROGRAMA`);

console.log(`****** EJERCICIO 3.9 ******`);
// Una compañía de seguros para autos ofrece dos tipos de póliza: cobertura  amplia  (A)  y  daños  a  terceros  (B).
// Para  el  plan  A,  la  cuota  base es de $1,200, y para el B, de $950.
// A ambos planes se les carga 10% del costo si la persona que conduce tiene por hábito beber alcohol, 5% si utiliza lentes,
// 5% si padece alguna enfermedad como deficiencia cardiaca o diabete,  y si tiene más de 40 años, se le carga 20%,
// de lo contrario sólo 10%. Todos estos cargos se realizan sobre el costo base.
// Realice diagrama de flujo y diagrama N/S que repre-sente el algoritmo para determinar cuánto le cuesta a una persona contratar una póliza.

alert(`Ingrese Poliza A/B`);
let poliza = prompt(`Ingrese Tipo de Poliza`);
let edad = +prompt(`Ingrese su Edad`);
let cuota = 0;
// let cargos = 0;
let cargos1 = 0;
let cargos2 = 0;
let cargos3 = 0;
let cargos_edad = 0;
let contrato_total = 0;

alert("Responda Si/No");
let habito1 = prompt(`Usted Bebe?`);
let habito2 = prompt(`Usted usa lentes?`);
let habito3 = prompt(`Padece de una enfermedad cardiaca o diabetes?`);

if (poliza === "A" || poliza === "a") {
  cuota = 1200;
} else if (poliza === "B" || poliza === "b") {
  cuota = 950;
} else {
  console.log(`Ingrese poliza nuevamente`);
}
if (edad > 40) {
  cargos_edad = cuota * 0.2;
} else {
  cargos_edad = cuota * 0.1;
}
if (habito1 === "SI" || habito1 === "si") {
  cargos1 = cuota * 0.1;
} else if (habito1 === "NO" || habito1 === "no") {
  cargos1 = 0;
}
if (habito2 === "SI" || habito2 === "si") {
  cargos2 = cuota * 0.05;
} else if (habito2 === "NO" || habito2 === "no") {
  cargos3 = 0;
}
if (habito3 === "SI" || habito3 === "si") {
  cargos3 = cuota * 0.05;
} else if (habito3 === "NO" || habito3 === "no") {
  cargos3 = 0;
}

contrato_total = cuota + cargos_edad + cargos1 + cargos2 + cargos3;

console.log(`Poliza Tipo ${poliza}: ${cuota}`);
console.log(`Cargo por Edad: ${cargos_edad}`);
console.log(`Cargo por Alcohol: ${cargos1}`);
console.log(`Cargo por usar lentes: ${cargos2}`);
console.log(`Cargo por Enfermedad: ${cargos3}`);

console.log(`Total: ${contrato_total}`);
console.log(`FIN DEL PROGRAMA`);

console.log(`****** EJERCICIO 3.11 ******`);
// Se  les    dará  un  bono  por  antigüedad  a  los  empleados  de  una  tienda.
// Si tienen un año, se les dará $100;
// si tienen 2 años, $200, y así sucesivamente  hasta  los  5  años.
// Para  los  que  tengan  más  de  5,  el  bono será de $1000.
// Realice un algoritmo y represéntelo mediante el diagrama de flujo, el pseudocódigo y diagrama N/S que permita determinar
// el bono que recibirá un trabajador.

let anio = +prompt(`Ingrese años de antiguedad`);
let bono_tienda = 0;

// debugger;
if (anio == 1) {
  bono_tienda = 100;
} else if (anio == 2) {
  bono_tienda = 200;
} else if (anio == 3) {
  bono_tienda = 300;
} else if (anio == 4) {
  bono_tienda = 400;
} else if (anio == 5) {
  bono_tienda = 500;
} else {
  bono_tienda = 1000;
}

console.log(`Su bono es: ${bono_tienda}`);
console.log(`FIN DEL PROGRAMA`);

console.log(`****** EJERCICIO 3.17 ******`);
// Realice un algoritmo y represéntelo mediante el diagrama de flujo, el  pseudocódigo  y  el  diagrama  N/S  que  permitan
// determinar  qué  paquete  se  puede  comprar  una  persona  con  el  dinero  que  recibirá  en diciembre, considerando lo siguiente:
// • Paquete A. Si recibe $50,000 o más se comprará una televisión, un modular, tres pares de zapatos, cinco camisas y cinco panta-lones.
// •  Paquete  B.  Si  recibe  menos  de  $50,000  pero  más  (o  igual)  de  $20,000,  se  comprará  una  grabadora,  tres  pares  de  zapatos,
//    cinco camisas y cinco pantalones.
// •  Paquete  C.  Si  recibe  menos  de  $20,000  pero  más  (o  igual)  de  $10,000, se comprará dos pares de zapatos, tres camisas y tres pantalones.
// • Paquete D. Si recibe menos de $10,000, se tendrá que confor-mar con un par de zapatos, dos camisas y dos pantalones.

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