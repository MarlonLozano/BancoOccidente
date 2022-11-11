"use strict";

/**
   * Funcion encargada de dar solucion al reto propuesto en la prueba
   * del proceso de seleccion para el cargo de DESARROLLADOR BACKEND. 
  --------------------------------VARIABLES-----------------------------------
    * numeros - JSON - Variable que recibe el cuerpo de la peticion (request).
    * arr - Array - Convierte el String del request en un arreglo.
    * mayor - Numero - Valor mayor del arreglo.
    * suma - Numero - Suma de todos los valores del arreglo.
    * values - Arreglo - Arreglo final (response).
    * Return - Arreglo.
  --------------------------------CREACIÓN------------------------------------
	* Creado Por : Marlon Steven Lozano Montoya
	* Fecha creación: 10/11/2022*/

module.exports.problema = async (event, context, callback) => {
  let cuerpo = JSON.parse(event.body);
  let numeros = cuerpo.groups;
  let arr = numeros.split(",").map(Number);
  let mayor = Math.max(...arr);
  let suma = arr.reduce((a, b) => a + b, 0);

  let values = [];
  //Calcula la raiz cuadrada de la suma de los numero del arreglo.
  //Determina el fin de la iteracion del ciclo.
  const end = Math.floor(Math.sqrt(suma));

  for (let i = 1; i <= end; i++) {
    //Se obtienen los numeros cuyo modular sea 0.
    if (suma % i == 0) {
      //Se obtienen los numero los cuales sean mayores o iguales
      //al mayor numero del arreglo inicial.
      if (i >= mayor) {
        //Se inserta el numero en arreglo "values".
        values.push(i);
      }
      //Se determinan los divisores del numero mayor.
      if (i * i != suma) {
        values.push(suma / i);
      }
    }
  }
  //Variable de respuesta y retorno.
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Esta es la prueba del banco",
      resultado: values,
    }),
  };
  return callback(null, response);
};
