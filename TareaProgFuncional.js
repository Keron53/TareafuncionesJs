/* 1) Se tiene un cadena de caracteres. Se pide diseñar la funcion que devuelva cadena sin consonantes
(devuelve solo las vocales) Ejem: "Hola
Esmeraldas" resultado esperado "oa Eeaa". Utilice filter.

const voc = "Hola Esmeraldas";
*/
const cadenacaracter = "Buenas Tardes, Señorita"
const vocales = function (cadena){
    const y = cadena.split("")
    return y.filter(items => items == "a"||items =="e"||items =="i"||items=="o"||items=="u")
}
console.log("texto original: ",cadenacaracter)
console.log("texto filtrado: ",vocales(cadenacaracter))

/* 2)Determine si todos los elementos de la siguiente matriz son positivos
const matrizNum=[[1,2,3,4],[4,5,6,7],[7,8,9,10]];
console.log(matrizNum);
*/
const matrizNum=[[1,2,3,4],[4,5,6,7],[7,8,9,10]];
const positivos = matrizNum.every(function(subArray) 
{
    return subArray.every(function(element) 
    {
      return element > 0;})
    })
console.log("La matriz solo tiene números positivos?", positivos)
