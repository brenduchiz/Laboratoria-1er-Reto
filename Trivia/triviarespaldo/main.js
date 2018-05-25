function alerta()
{
var mensaje;
var nombre = prompt("Introduzca su nombre:");
var rightAnswer = 0;
var wrongAnswer = 0;
if (nombre == null || nombre == "") {
        mensaje = "Bienvenida";
      } else {
        mensaje = "Bienvenida " + nombre;
        document.getElementById("usuario").innerHTML = mensaje;
var gameplay = prompt ("¿Quieres jugar ?\n1.si \n2.no");
if (gameplay == ("1")) {
  var firstQuestion = prompt ("¿Cuánto es 2+2?");
if (firstQuestion == ("4")) {
console.log("verdadero", rightAnswer = rightAnswer+1);
document.getElementById("tableFirstRight").innerHTML = ("¿Cuánto es 2+2? Tú respondiste: " + firstQuestion);
var secondQuestion = prompt("¿Cuánto es 5*1?");

}
else {
  firstQuestion !=("4")
  console.log("falso", wrongAnswer = wrongAnswer+1);
  document.getElementById("tablefirstWrong").innerHTML = ("¿Cuánto es 2+2? Tú respondiste: " + firstQuestion);
  secondQuestion = prompt("¿Cuánto es 5*1?");
}
if (secondQuestion == ("5")) {
  console.log("verdadero", rightAnswer = rightAnswer+1);
  document.getElementById("tableSecondRight").innerHTML = ("¿Cuánto es 5*1? Tú respondiste: " + secondQuestion);
  var thirdQuestion = prompt("¿Cuánto es 1,000-500?");
}
else {
  secondQuestion !=("5")
  console.log("falso", wrongAnswer = wrongAnswer+1);
  document.getElementById("tableSecondWrong").innerHTML = ("¿Cuánto es 5*1? Tú respondiste:" + secondQuestion);
  thirdQuestion = prompt("¿Cuánto es 1,000-500?");
}
if (thirdQuestion == ("500")) {
  console.log("verdadero", rightAnswer = rightAnswer+1);
  document.getElementById("tableThirdRight").innerHTML = ("¿Cuánto es 1,000-500? Tú respondiste: " + thirdQuestion);
}
else {
  thirdQuestion !=("500")
  console.log("falso", wrongAnswer = wrongAnswer+1);
  document.getElementById("tableThirdWrong").innerHTML = ("¿Cuánto es 1,000-500? Tú respondiste:" + thirdQuestion);
}
alert("Vamos a ver tus resultados")
document.getElementById("tableok").innerHTML = "¡¡¡Correctas!!!";
document.getElementById("tablewrong").innerHTML = "¡¡¡Incorrectas!!!";

}
else {
  document.getElementById("the_end").innerHTML = "JUGAREMOS PARA LA PROXIMA!!!!!";
}

}




}
