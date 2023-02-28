let frutas=new Array();
for(var x=1; x<=5; x++){
    ingreso=prompt("ingrese una fruta");
    frutas.push(ingreso);
}
document.getElementById('ver').innerHTML=("las frutas son :" + frutas);
