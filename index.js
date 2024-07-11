// 9. EMPLEADOS EMPRESA
// Una empresa conoce de sus empleados los siguientes datos: nombre, sexo ((M)asculino
// (F)emenino). Se desea que realice un algoritmo que permite determinar e imprimir: Cantidad
// de hombres que trabajan en la empresa y porcentaje de mujeres que trabajan en la empresa.
// Se dispone de los siguientes datos de varios empleados: (nombre, sexo) (Mary, ‘F’),
// (José, ‘M’), (Carlos, ‘M’), (Pedro, ‘M’)
// Cantidad de hombres que trabajan en la empresa: 3
// Porcentaje de mujeres que trabajan en la empresa: 25% 

import Empleado from "./classes/empleado.js";
import GrupoEmpleados from "./classes/grupoEmpleados.js";



let _empleado1=new Empleado("Mary","f");
let _empleado2=new Empleado("Jose","M");
let _empleado3=new Empleado("Carlos","m");
let _empleado4=new Empleado("Pedro","M");


let _grupo=new GrupoEmpleados()

_grupo.procesarEmpleado(_empleado1)
_grupo.procesarEmpleado(_empleado2)
_grupo.procesarEmpleado(_empleado3)
_grupo.procesarEmpleado(_empleado4)




document.body.innerHTML=`
<br>
Cantidad de Hombres que trabajan en la empresa: ${_grupo.contHombres}
<br>
Porcentaje de mujeres que trabajan en la empresa: ${_grupo.porcentajeMujeres()}%


`