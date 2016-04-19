window.onload = function()
{
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d");

    //Circulo...
  /*  context.fillStyle = "white";
    context.beginPath();
    context.arc(300, 250, 200, 0, Math.PI * 2);
    context.fill();
    context.lineWidth = 10;
    context.strokeStyle = "black";
    context.stroke();
    context.fillStyle = "black";*/

    //Líneas guía, no se deben mostrar una vez este el logo terminado...
  /*   context.beginPath();
    context.moveTo(300, 50);
    context.lineTo(300, 450);
    context.strokeStyle = "red";
    context.stroke();

   context.beginPath();
    context.moveTo(100, 250);
    context.lineTo(500, 250);
    context.strokeStyle = "red";
    context.stroke();*/
    //Fin de las líneas Guía...
    //primer ciculo
    context.beginPath();
    context.arc(300, 250, 200, 0, Math.PI * 2);
    context.fill();
    context.lineWidth = 15;
    context.strokeStyle = "black";
    context.stroke();
    context.fillStyle = "#9DA274";
    //segundo Circulo

    context.fill();
    context.stroke();
    context.beginPath();
    context.arc(300, 250, 150, 0, Math.PI * 2);
    context.fill();
    context.lineWidth = 40;
    context.strokeStyle = "white";
    context.stroke();
    context.fillStyle = "#D62132";
    context.fill();
    //Crear el símbolo de Mercedes-Benz,
    //haciendo uso de lineTo();
    //Para establecer el relleno de la figura se hace uso de context.fill(),
    //Para cambiar el color de relleno se ha ce uso de context.fillStyle = "black";
    //Para dar color a una línea se hace uso de context.strokeStyle = color;
    //Para mostrar la línea se hace uso de context.stroke(), si no se establece, no se moestrará línea...

    context.fillStyle = "BLACK";
    context.font = "bold 65px times new roman";
    context.fillText("LUCKY", 185, 240);
    context.fillStyle = "BLACK";
    context.font = "bold 65px times new roman";
    context.fillText("STRIKE", 185, 290);
    context.fillStyle = "BLACK";
    context.font = "20px times new roman";
    context.fillText("IT´S TOASTED ", 235, 320);
  //  context.fill();
};
