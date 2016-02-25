window.onload = function()
{
    var mathSquare = [];
    var operadores = ["+", "-", "*"]; //"/"
    //Para cargar el select...
    
    var select = nom_div("dimenEscenario");
    for (var i = 3; i<= 31; i+=2)
    {
        var opt = document.createElement('option');
        opt.value = i;
        opt.innerHTML = i;
        select.appendChild(opt);
    }

    nom_div("dimenEscenario").addEventListener('change', function(event)
	{
		crearEscenario(Number(this.value));
	});

    //Para validar si la respuesta dada es válida o no...
    /*
    Validar que los valores dados sean igual a la respuesta de la Matriz...
    */
    var validaRespuesta = function(id)
    {
      //  alert("a");
        var valInput = Number(nom_div(id).value);
        var partId = id.split("_");
        var str="";
                var strv = strh = ""

       /* for(i = 0; i <= nom_div("dimenEscenario").value-1; i++)
            {
                
                if(i % 2 === 0 ){

                    for(c = 0; c <= nom_div("dimenEscenario").value-1; c++)
                    {   
                    strh += nom_div([c]+"_"+[i]).value;
                    strv += nom_div([i]+"_"+[c]).value;
                }

                    }else{
                      //  alert(mathSquare[0][i]);
                         strh += mathSquare[c][i];
                       // alert(mathSquare[i][0]);
                         strv += mathSquare[i][c];
                         
                    }
                    
            
            }alert("h"+strh);
            alert("v"+strv);
            
                    /*for(c = 0; c <= nom_div("dimenEscenario").value; c++)
                    {
                        alert(id);
                        strh += nom_div(partId[0]+"_"+partId[1]).value;
                        //strv += nom_div([c]+"_"+[i]).value;
                       // alert(partId[1]);
                        //alert(c);
                        //alert(i);
                        //alert(strv);
                        // alert(c);
                        alert(strh);

                    }*/
                     
                    //mathSquare[i][c] = eval(realizaOperacion.horizontal);
                    //mathSquare[c][i] = eval(realizaOperacion.vertical);
                
                
            
        //alert(partid);
        /* for(i = 0;i < nom_div("dimenEscenario").value ;i++){
            for(c = 0;i < nom_div("dimenEscenario").value ;c++){
             if(i % 2 === 0){
                alert(i);                    
                str = str + nom_div( [c]+"_"+[i]).value;
                alert(str);

             }
               else {
                alert(i);
                 str = str + mathSquare[c][i];
                 alert(str);
             }

          //  alert(mathSquare[i],0);
        //alert(id);
          //alert(partid);
          
          //str = str + nom_div( 0+"_"+[i]).value;
            
          } 
         }
         alert(str);*/


        var respustaMatriz = {
                  //            for(i=0;i<mathSquare.length - 1;i++){

                                horizontal : mathSquare[Number(partId[0])][mathSquare.length - 1],
                                vertical : mathSquare[mathSquare.length - 1][Number(partId[1])]
                              //  alert(horizontal);
                    //        }
        };

        var respuesta = {
                            horizontal : {
                                            ecuacion : "",
                                            valor : 0,
                                            div : "div_" + partId[0] + "_" + (mathSquare.length - 1)

                            },
                            vertical :
                            {
                                ecuacion : "",
                                valor : 0,
                                div : "div_" + (mathSquare.length - 1) + "_" + partId[1]

                            }
        };
        for(var i = 0; i < mathSquare.length - 1; i++)
{
    if(i % 2 === 0)
    {
        respuesta.horizontal.ecuacion += nom_div(partId[0]+"_"+i).value.length !== 0 ? nom_div(partId[0]+"_"+i).value : 0;
        respuesta.vertical.ecuacion += nom_div(i+"_"+partId[1]).value.length !== 0 ? nom_div(i+"_"+partId[1]).value : 0;
       //alert(respuesta.horizontal.ecuacion);
    }
    else
    {
        respuesta.horizontal.ecuacion += mathSquare[Number(partId[0])][i];
        respuesta.vertical.ecuacion += mathSquare[i][Number(partId[1])];
    }
}
//alert(id);
//valida horizontales

if (eval(respuesta.horizontal.ecuacion) == mathSquare[partId[0]][mathSquare.length-1]){
  // alert("ok");
    //alert(respuesta.horizontal.ecuacion +"="+ mathSquare[partId[0]][mathSquare.length-1])
    str = "div_"+[partId[0]]+"_"+[mathSquare.length-1];
    //alert(str);
   nom_div(str).style = 'background:green';
    //document.getElementById([partId[1]]+"_"+[mathSquare.length-1]).style.backgroundColor="#2EFE2E";

}
else{
    //alert("mal");
    //alert(partId[0]);
    str = "div_"+[partId[0]]+"_"+[mathSquare.length-1];
    //alert(str);
   nom_div(str).style = 'background:red';
}

//valida Verticales
if (eval(respuesta.vertical.ecuacion) == mathSquare[mathSquare.length-1][partId[1]]){
   //alert("ok");
    //alert(respuesta.horizontal.ecuacion +"="+ mathSquare[partId[0]][mathSquare.length-1])
    str = "div_"+[mathSquare.length-1]+"_"+[partId[1]];
    //alert(str);
   nom_div(str).style = 'background:green';
    //document.getElementById([partId[1]]+"_"+[mathSquare.length-1]).style.backgroundColor="#2EFE2E";

}
else{
    //alert("mal");
    //alert(partId[1]);
    str = "div_"+[mathSquare.length-1]+"_"+[partId[1]];
    //alert(str);
   nom_div(str).style = 'background:red';
}

// alert(eval(respuesta.horizontal.ecuacion)+"="+mathSquare[partId[0]][mathSquare.length-1]);
 //alert(eval(respuesta.vertical.ecuacion));
//alert();
//alert(partId[1]);
    };

    var eventosInputs = function()
    {
        //Para establecer los eventos de los inputs...
        var inputs = document.getElementsByTagName('input');

        var h = [];
        var v =[];
        for (var i = 0; i < inputs.length; i++)
        {

            nom_div(inputs[i].id).addEventListener("change", function(e)
            {

                validaRespuesta(this.id);
              //  alert(str);

            });

        }
    };

    var crearEscenario = (function crearEscenario(dimension)
    {
        if(dimension % 2 !== 0)
        {
            mathSquare = [];
            var valorCelda = "";
            var i = c = 0;
            for(i = 0; i <= dimension; i++)
            {
                mathSquare.push([]);
                for(c = 0; c <= dimension; c++)
                {
                    if(i !== dimension && c !== dimension)
                    {
                        if(i % 2 === 0)
                        {
                            valorCelda = c % 2 === 0 ? Math.floor(Math.random() * 9) + 1 : operadores[Math.floor(Math.random() * operadores.length)];
                        }
                        else
                        {
                            valorCelda = c % 2 === 0 ? operadores[Math.floor(Math.random() * operadores.length)] : 0;
                        }
                        mathSquare[i][c] = valorCelda;
                    }
                    else
                    {
                        mathSquare[i][c] = 0;
                    }
                }
            }
            //Recorrer el array para crearlo en el escenario...
            var realizaOperacion = {horizontal : "", vertical : ""};
            var tabla = "<table id = 'chess_board' width = '50%' border = '0' align = 'center' cellpadding = '0' cellspacing = '0'>";
            for(i = 0; i <= dimension; i++)
            {
                if(i % 2 === 0)
                {
                    realizaOperacion.vertical = realizaOperacion.horizontal = "";
                    for(c = 0; c < dimension; c++)
                    {
                        realizaOperacion.horizontal += mathSquare[i][c];
                        realizaOperacion.vertical += mathSquare[c][i];
                    }
                    mathSquare[i][c] = eval(realizaOperacion.horizontal);
                    mathSquare[c][i] = eval(realizaOperacion.vertical);
                }
                //Para crear las celdas en el escenario...
                tabla += "<tr>";
                for(c = 0; c < dimension; c++)
                {
                    if(i % 2 === 0)
                    {
                        tabla += "<td>";
                        if(c % 2 === 0)
                        {
                            tabla += "<input type = 'number' id = '"+(i)+"_"+(c)+"' min = '1' max = '9'/>";
                            //mathSquare[i][c] = 0;
                        }
                        else
                        {
                            tabla += mathSquare[i][c];
                        }
                        tabla += "</td>";
                    }
                    else
                    {
                        if(c % 2 === 0)
                        {
                            tabla += "<td id = 'div_"+(i)+"_"+(c)+"'>" + mathSquare[i][c] + "</td>";
                        }
                        else
                        {
                            tabla += "<td style = 'background:black'>&nbsp;&nbsp;&nbsp;</td>";
                        }
                    }
                    tabla += "</td>";
                }
                if(i % 2 === 0)
                {
                    tabla += "<td id = 'div_"+(i)+"_"+(c)+"'>"+(mathSquare[i][c])+"</td>";
                }
                else
                {
                    tabla += "<td style = 'background:black'>&nbsp;&nbsp;&nbsp;</td>";
                }
                tabla += "</tr>";
            }
            tabla += "</tabla>";
            nom_div("escenario").innerHTML = tabla;
            eventosInputs();
            console.table(mathSquare);
        }
        else
        {
            alert("El valor para la matriz debe ser impar");
        }
        return crearEscenario;
    })(3);

    function nom_div(div)
    {
    	return document.getElementById(div);
    }


};
