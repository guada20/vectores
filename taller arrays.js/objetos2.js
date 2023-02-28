class persona{
    Id;
    Nombre;
    Edad;
    Pasatiempos;
     //valores
    hablar(){
        return "Amo cocinar 👩‍🍳"
     }
    bailar(){
        return "Yo puedo bailar 💃"
    }
 }
 const persona1 = new persona(Id=1033486731,Nombre="Guadalupe restrepo", Edad=18, Pasatiempos="leer, cocinar, bailar", hablar="Amo cocinar 👩‍🍳",  bailar="puedo bailar 💃");
 document.getElementById('valores').innerHTML= "Hola soy " +Nombre+ "<br>"+" mi identificación es: "+Id+ "<br>"+" mi edad es: " +Edad+"<br>"+" mis pasatiempos son :" +Pasatiempos+"<br>"+
 " yo puedo "+ hablar+ " y tambien  "+bailar;
