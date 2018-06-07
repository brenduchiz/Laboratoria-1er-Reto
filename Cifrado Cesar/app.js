
men = document.getElementById("mensaje");
salt = document.getElementById("num_salt");
function cifrar()
{

let cifrado = "";
let mensa = men.value;
let saltos = parseInt(salt.value);
for (i = 0; i < mensa.length; i++) {
let no_ascii = mensa.charCodeAt(i);

if (no_ascii >= 65 && no_ascii <= 90){

let resultado =  String.fromCharCode((no_ascii - 65 + saltos) % 26 + 65);
console.log(resultado);
}
}

 }
