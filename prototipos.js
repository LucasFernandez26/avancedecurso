//Array.prototype.mayoresQueTres = function (){
//    var arregloModificado =[];
 //   for (let i =0 ; i < this.length; i++){
 //       if (this[i]> 3 ){
   //         arregloModificado.push(false);
     //   }else {
       //     arregloModificado.push(this[i]);
     //   }
    //}
  //  return arregloModificado;
//};

//var arreglo =[1, 2, 3, 4, 5];
//var nuevoArreglo = arreglo.mayoresQueTres();

//console.log(nuevoArreglo);

class latinoAmerica{
    constructor(){
        this.paises =[];
    }
}
latinoAmerica.prototype.agregarPais = function (pais){
    this.paises.push(pais);
};
var continente = new latinoAmerica();
continente.agregarPais("Mexico");
continente.agregarPais("Argentina");
console.log(continente.paises);