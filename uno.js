function mostrar() {
  /*Se necesita llevar la gestión de una veterinaria. Para ello se podrán registrar los datos de cada mascota mientras el usuario quiera.
De cada mascota se solicita:
-nombre (entre 3 y 8 caracteres)
-tipo (“mamifero”, “ave”, “reptil”)
-sangre ( "fria", "calida")
Si es de tipo reptil solo puede tener sangre fria
-edad ( mayor a cero)
-sexo( “m” de macho o “h” de hembra )
Informar:
a- Promedio de edad de los reptiles
b- tipo y sexo de la mascota mas joven
c- Del total de mascotas que porcentaje son aves
d- De que tipo de mascota hay mas cantidad*/

//declaro variables
let respuesta,
nombre,
tipo,
sangre,
edad,
sexo,
promEdadReptil,
acumuladorEdadReptil=0,
totalMascotas=0,
contadorAves=0,
contadorMamiferos=0,
contadorReptiles=0,
edadJoven,
sexoJoven,
tipoJoven,
porcentajeAves,
dominante,
flagJoven=1;
    
  do{
    nombre=prompt("Ingrese nombre");
    while(!isNaN(nombre) || nombre.length<3 || nombre.length>8){
      nombre=prompt("ERROR. Ingrese nombre");
    }
    tipo=prompt("Ingrese tipo. mamifero/ave/reptil").toLowerCase();
    while(tipo!="mamifero" && tipo!="ave" && tipo!="reptil"){
      tipo=prompt("ERROR. Ingrese tipo. mamifero/ave/reptil").toLowerCase();
    }
    sangre=prompt("Ingrese tipo de sangre. fria/calida").toLowerCase();
    while(sangre!="fria" && sangre!="calida"){
      sangre=prompt("ERROR. Ingrese tipo de sangre. fria/calida").toLowerCase();
    }
    edad=parseInt(prompt("Ingrese edad"));
    while(isNaN(edad) || edad<=0){
      edad=parseInt(prompt("ERROR. Ingrese edad"));
    }
    sexo=prompt("Ingrese sexo. m/h").toLowerCase();
    while(sexo!="m" && sexo!="h"){
      sexo=prompt("ERROR. Ingrese sexo. m/h").toLowerCase();
    }
    respuesta=prompt("¿Desea seguir ingresando datos?").toLowerCase();
    while(respuesta!="si" && respuesta!="no"){
      respuesta=prompt("ERROR. ¿Desea seguir ingresando datos?").toLowerCase();
    }

    switch(tipo){
      case "ave":
        contadorAves++;
      break;

      case "mamifero":
        contadorMamiferos++;
      break;

      case "reptil":
        contadorReptiles++;
        acumuladorEdadReptil+=edad;
      break;
    }

  }while(respuesta=="si");

  //PUNTO A
  totalMascotas=contadorAves+contadorMamiferos+contadorReptiles;
  promEdadReptil=acumuladorEdadReptil/contadorReptiles;
  if(isNaN(promEdadReptil)){
    promEdadReptil="no se registraron reptiles"
  }

  //PUNTO B
  if(flagJoven){
    edadJoven=edad;
    sexoJoven=sexo;
    tipoJoven=tipo;
    flagJoven=0;
  }else if(edad<edadJoven){
    edadJoven=edad;
    sexoJoven=sexo;
    tipoJoven=tipo;
  }

  //PUNTO C
  porcentajeAves=100/totalMascotas*contadorAves;

  //PUNTO D
  if(contadorAves>contadorMamiferos && contadorAves>contadorReptiles){
    dominante="aves";
  }else if(contadorMamiferos>contadorAves && contadorMamiferos>contadorReptiles){
    dominante="mamiferos";
  }else{
    dominante="reptiles";
  }



  alert(`Promedio de edad de los reptiles: ${promEdadReptil}\nTipo y sexo de la mascota mas joven: ${tipoJoven}, ${sexoJoven}\nPorcentaje que son aves sobre el total: %${porcentajeAves}\nTipo de mascota que hay mas cantidad: ${dominante}`);
}
