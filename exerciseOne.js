function Pelicula(titulo, ano, actores){
   this.titulo = titulo;
   this.ano = ano;
   this.actores = actores;
}



function agregarPeliculas(){
  
  
  var peliculas = [];
  var index = 0;
  
  while(true){
    var titulo = prompt("Ingrese el título de la película: ");
    var ano = prompt("Ingrese el ano de filmación de la película");
    
    var actores = [];
    var indexActores = 0;
    
    while(true){
      var actorIngresado = prompt("Ingrese un actor, presione dos veces enter para terminar");  
      if(actorIngresado === ""){
        break;
      }else{
        actores[indexActores] = actorIngresado;
        indexActores++;
      }
    }
    
    
    
    
    
    
    var seguir = confirm("Seguir agregando?");
    var p = new Pelicula(titulo,ano, actores);
    
    peliculas[index]= p;
    index++;
    
    console.log("Se agregó " + p.titulo);
    
    if(!seguir){
      break;
    }
  }
  
  console.log(peliculas);
  
}


agregarPeliculas();

