class persona{
   Id;
   Nombre;
   Edad;
   Pasatiempos;
}
const persona1 = new persona(Id=1033486731,Nombre="Guadalupe restrepo", Edad=18, Pasatiempos="leer, cocinar, bailar");
document.getElementById('mostrar').innerHTML= "Hola soy " +Nombre+ " mi identificación es: "+Id+ " mi edad es: " +Edad+" mis pasatiempos son :" +Pasatiempos;
