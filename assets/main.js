function Squad(nombre,edad,hobbies){
	this.nombre = nombre;
	this.edad = edad;
  	this.hobbies = hobbies;
}

var arr = [];
var Tanya = new Squad("Tanya Ramirez",29,["Gatos", "Viajar","Tomar tecito a las 4"]);
arr.push(Tanya);

var Paula = new Squad("Paula Ponce",28,["Música", "Aves","Heroes of the storm"]);
arr.push(Paula);

var Mariela = new Squad("Mariela Cubillos",36,["Tejer", "Comer Chocolate","Cocinar"]);
arr.push(Mariela);

var Valentina = new Squad("Valentina Amala Kamala",29,["Bordar", "Tejer","Dormir"]);
arr.push(Valentina);

var Marcela = new Squad("Marcela Cabello",31,["Cantar", "Yoga", "Cocinar"]);
arr.push(Marcela);

var Marcelissa = new Squad("Melissa Pacheco",25,["Dormir", "Comer", "Matilda"]);
arr.push(Marcelissa);

var Paulina = new Squad("Paulina Aros",28,["Hacer libretas", "Acariciar Gatos", "Manicure"]);
arr.push(Paulina);

var Karla = new Squad("Karla Jeria",35,["Comer Chocolates", "Viajar","Ir al Cine"]);
arr.push(Karla);


var escribir = document.getElementById('mi-squad');


var arrComentarios = [];

function comentario(){
	var input = document.getElementById("coment");
	var contComent = document.getElementsByClassName("coment");
	contComent[0].innerHTML += "<li>" + input.value + "</li>" + "<br>";
	input.value = " ";
}


arr.forEach(function(el){

    escribir.innerHTML +=  '<b>Nombre:</b> ' + el.nombre + '<br><b>Edad:</b> ' + el.edad + '<br><b>Hobbies:</b><br>';
    var lista = '<ul> ' + el.hobbies.forEach(function(h){return (escribir.innerHTML += "<li>" + h + "</li>")}) + '</ul>';
    escribir.innerHTML += '<br>';

})



function(likes)
var x = document.getElementById("myTextarea");

//arr.forEach(comentario){
//	escribir.innerHTML += "<b>Comentario:</b>" + "<textarea>";
//	}
