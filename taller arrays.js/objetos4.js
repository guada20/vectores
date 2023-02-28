class empresa{
}
let empleados=[];
let lugares=[];
let nomina=[];
for(var x=1;x<=5;x++){
    Nombre=prompt("ingrese el nombre");
    Cargo=prompt("ingrese el cargo de empleado");
    salario=parseFloat(prompt("ingrese el salario"));
    empleados[x]=Nombre;
    lugares[x]=Cargo;
    nomina[x]=salario;

}
const empleado1 = new empresa(empleados,lugares,nomina);
document.getElementById('informacion').innerHTML=("los empleados son : "+empleados+"<br>"+" sus cargos son :" +lugares+"<br>"+
"sus sueldos son: "+nomina);
