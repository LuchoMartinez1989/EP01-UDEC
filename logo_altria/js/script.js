window.onload = function()
{
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d");
    context.translate(135, 10);//Posición central del canvas...
    //Crear el código necesario para mostrar el logo de Altria
    //El cual consiste en una grilla de 5x5 con diferentes colores.
    //Hacer uso de la función randomColor()
    //Para crear un cuadrado puede hacer uso de la función
    //context.rect(x, y, ancho, alto);
    var x = 50;
    var y = 50;

    for (var i = 0; i < 5; i++){
      for (var j =0 ;j < 5; j++){

        context.beginPath();
        context.fillStyle = randomColor();
        context.rect(x, y, 50, 50);
        context.fill();
        y += 50;

  }
  y = 50;
  x += 50;

}

    context.fillStyle = "#323465";
    context.font = "120px times new roman";
    context.fillText("Altria", 40, 420);

    context.fillStyle = "#323465";
    context.font = "120px times new roman";
  /*  var x =20;
    var Y = 160;*/



    /*for (var i=0;i<5;i++){
    context.fillText("A", x, y);
    x = x +20;

}*/
    function randomColor()
    {


        // from http://www.paulirish.com/2009/random-hex-color-code-snippets/
        return '#'+(function lol(m,s,c){return s[m.floor(m.random() * s.length)] +
       (c && lol(m,s,c-1));})(Math,'0123456789ABCDEF',4);


    };
};
