/*evento que espera a que se cargue */
jQuery(document).ready(function(){
	alert("probando jQuery");
});

/*nota: no olvidar en ejemplos de js, llamar funcion desde html*/

/*ejemplo 1, boton*/

/*con js*/

/*
function saludar(){
	document.getElementById("saludo").innerHTML ="HOLA SOY UNA SALUDO CON JS"	
}
*/

/*con jQuery*/
/*esperamos a que cargue , luego trabajas con etiqueta boton al que le da click y dentro imprimira u nsaludo*/


$(document).ready(function(){
	$("button").click(function(){
		$("#saludo").append("Hola son un saludo con js")
		
	});
});


/*ejemplo 2, lista*/


/*crea hijos a las listas:

con js:*/
/*
function agregarLista(){
	var node =  document.createElement("li");
	var textNode = document.createTextNode("mas comida");
	node.appendChild(textNode);
	
var lista = document.getElementById("lista");
	lista.appendChild(node);

	}
*/


/*con jQuery*/

$("button").click(function agregarComida(){
	$("ul").append("<li>Mas comida con jQuery</li>")
});


/* elemplo 3,cambiar estilo */
/*con js:*/

/*function cambiarEstilo(){
	document.getElementById("resaltar").style.color="red";
	
}*/


/*con jQuery:*/
$("#cambiarColor").click(function(){
	$("#resaltar").css("color","pink");
	$("#resaltar").css("background","blue");
});

