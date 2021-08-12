function mostrar() {

/*Este fin de semana se festeja el día del niño y se deben gestionar las ventas de una jugueteria
Obviamente se registran las ventas producidas ese día. De cada venta se registra:
-tipo de juguete ("muñeca", “rompecabezas”, “pelota”)
-origen ("nacional", "importado")
-precio ( entre 1000 y 5000 pesos)
Informar:
a- El tipo de juguete mas vendido
b- El promedio de precio de los juguetes importados
c- La recaudacion total
d- Cual es el precio del rompecabezas nacional mas barato
e- Cuanto se percibio de iva en total (es el 21% de las ventas)*/

let respuesta,
tipo,
origen,
precio,
promImportados,
cuentaImportados=0,
acumPrecioImportado=0,
acumRecaudacion=0,
flagRompecabezas=1,
cuentaMuñecas=0,
cuentaRompecabezas=0,
cuentaPelotas=0
masVendido="",
ivaTotal=0,
precioRompeBarato="no se vendieron rompecabezas";

do{


  tipo=prompt("Ingrese tipo de juguete. muñeca/rompecabezas/pelota").toLowerCase();
  while(tipo!="muñeca" && tipo!="rompecabezas" && tipo!="pelota"){
    tipo=prompt("ERROR. Ingrese tipo de juguete. muñeca/rompecabezas/pelota").toLowerCase();
  }

  origen=prompt("Ingrese origen. nacional/importado").toLowerCase();
  while(origen!="nacional" && origen!="importado"){
    origen=prompt("ERROR. Ingrese origen. nacional/importado").toLowerCase();
  }

  precio=parseInt(prompt("Ingrese precio"));
  while(isNaN(precio) || precio<1000 || precio>5000){
    precio=parseInt(prompt("ERROR. Ingrese precio"));
  }

  respuesta=prompt("¿Desea continuar ingresando datos?");
  while(respuesta!="si" && respuesta!="no"){
    respuesta=prompt("ERROR. ¿Desea continuar ingresando datos?");
  }

  switch(tipo){
    case "muñeca":
      cuentaMuñecas++;
    break;
    
    case "rompecabezas":
      cuentaRompecabezas++;
    break;

    case "pelota":
      cuentaPelotas++;
    break;
  }
  
  //PUNTO B.1
  if(origen == "importado"){
    cuentaImportados++;
    acumPrecioImportado+=precio;
  }

  //PUNTO C
  acumRecaudacion+=precio;

  //PUNTO D
  if(flagRompecabezas && tipo=="rompecabezas" && origen=="nacional"){
    precioRompeBarato=`$${precio}`;
    flagRompecabezas=0;
  }else if(precio<precioRompeBarato && origen=="nacional"){
    precioRompeBarato=`$${precio}`;
  }

}while(respuesta == "si");

//PUNTO A
if(cuentaMuñecas>cuentaPelotas && cuentaMuñecas>cuentaRompecabezas){
  masVendido="muñeca";
}else if(cuentaPelotas>cuentaMuñecas && cuentaPelotas>cuentaRompecabezas){
  masVendido="pelota";
}else{
  masVendido="rompecabezas";
}

//PUNTO B.2
promImportados=acumPrecioImportado/cuentaImportados;

if(isNaN(promImportados)){
  promImportados="no se vendieron importados";
}else{
  promImportados=`$${promImportados}`
}

//PUNTO E
ivaTotal=acumRecaudacion*0.21;

  alert(`El tipo de juguete mas vendido es: ${masVendido}\nEl promedio de precio de los juguetes importados es: ${promImportados}\nLa recaudacion total es: $${acumRecaudacion}\nEl precio del rompecabezas nacional mas barato es: ${precioRompeBarato}\nCuanto se percibio de iva en total: $${ivaTotal}`);
}
