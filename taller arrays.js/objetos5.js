class tienda{}
let Nombre;
let presentacion;
let valor;
let producto
for(x=1; x<=3;x++){
    Nombre=prompt("Ingrese el nombre del producto");
    presentacion=parseInt(prompt("ingrese la presentacion en ml "));
    valor=parseFloat(prompt("Ingrese el valro del producto"));
    producto= x;
    
}
const producto1=new tienda(Nombre,presentacion,valor);
const producto2=new tienda(Nombre,presentacion,valor);
const producto3=new tienda(Nombre,presentacion,valor);
document.getElementById(prod1).innerHTML(producto);
document.getElementById(Npro).innerHTML(Nombre);
document.getElementById(prepro).innerHTML(presentacion);
document.getElementById(valorpro).innerHTML(valor);