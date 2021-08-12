function mostrar() {

  /*Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
nombre,
carrera("Quimica";"Fisica";"Sistemas"),
sexo (masculino - femenino -no binario),
cantidad de materias(entre 1 y 5),
Nota promedio del alumno(entre 0 y 10),
edad (validar).
Se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.*/

let nombre,
carrera,
sexo,
cantidadMaterias,
notaProm,
edad,
flagFisica=1,
nombreMejorPromFisica,
mejorPromFisica,
flagJoven=1,
nombreAlumnaMasJoven,
edadAlumnaMasJoven,
contadorQuimica=0,
contadorFisica=0,
contadorSistemas=0,
totalCarreras,
porceQuimica,
porceFisica,
porceSistemas,
flagMasMaterias=1,
edadMasMaterias,
nombreMasMaterias,
mayorMaterias;

for(i=0 ; i<500 ; i++){ 
  nombre=prompt("Ingrese nombre");
  while(!isNaN(nombre || nombre.length==0)){
    nombre=prompt("ERROR. Ingrese nombre");
  }
  carrera=prompt("Ingrese carrera. quimica/fisica/sistemas").toLowerCase();
  while(carrera!="quimica" && carrera!="fisica" && carrera!="sistemas"){
    carrera=prompt("ERROR. Ingrese carrera. quimica/fisica/sistemas").toLowerCase();
  }
  sexo=prompt("Ingrese sexo. masculino / femenino /no binario").toLowerCase();
  while(sexo!="masculino" && sexo!="femenino" && sexo!="no binario"){
    sexo=prompt("ERROR. Ingrese sexo. masculino / femenino /no binario").toLowerCase();
  }
  cantidadMaterias=parseInt(prompt("Ingrese cantidad de materias"));
  while(cantidadMaterias<1 || cantidadMaterias>5){
    cantidadMaterias=parseInt(prompt("ERROR. Ingrese cantidad de materias"));
  }
  notaProm=parseInt(prompt("Ingrese nota promedio"));
  while(isNaN(notaProm) || notaProm<1 || notaProm>10){
    notaProm=parseInt(prompt("ERROR. Ingrese nota promedio"));
  }
  edad=parseInt(prompt("Ingrese edad"));
  while(edad<18 || edad>65){
    edad=parseInt(prompt("ERROR. Ingrese edad"));
  }

  switch(carrera){
    case "fisica":
      contadorFisica++;
    break;
      
    case "quimica":
      contadorQuimica++;
    break;

    case "sistemas":
      contadorSistemas++;
    break;
  }

  //PUNTO A
  if(flagFisica && carrera=="fisica"){
    mejorPromFisica=notaProm;
    nombreMejorPromFisica=nombre;
    flagFisica=0;
  }else if(notaProm>mejorPromFisica && carrera=="fisica"){
    mejorPromFisica=notaProm;
    nombreMejorPromFisica=nombre;
  }

  //PUNTO B
  if(flagJoven && sexo=="femenino"){
    nombreAlumnaMasJoven=nombre;
    edadAlumnaMasJoven=edad;
    flagJoven=0;
  }else if(edad<edadAlumnaMasJoven && sexo=="femenino"){
    nombreAlumnaMasJoven=nombre;
    edadAlumnaMasJoven=edad;
  }

  //PUNTO D

  if(flagMasMaterias && carrera!="quimica"){
    nombreMasMaterias=nombre;
    edadMasMaterias=edad;
    flagMasMaterias=0;
  }else if(cantidadMaterias>mayorMaterias && carrera!="quimica"){
    nombreMasMaterias=nombre;
    edadMasMaterias=edad;
  }
}

//PUNTO C
totalCarreras=contadorFisica+contadorQuimica+contadorSistemas;
porceFisica=100/totalCarreras*contadorFisica;
porceQuimica=100/totalCarreras*contadorQuimica;
porceSistemas=100/totalCarreras*contadorSistemas;


  alert(`Nombre del mejor promedio de los alumnos que estudian Fisica: ${nombreMejorPromFisica}\nEl nombre de la alumna mas joven es: ${edadAlumnaMasJoven}\nPorcentaje de estudiantes que estudia cada carrera: quimica %${porceQuimica}, fisica %${porceFisica}, sistemas %${porceSistemas}\nEdad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica: ${nombreMasMaterias}, edad ${edadMasMaterias} años`);
}
