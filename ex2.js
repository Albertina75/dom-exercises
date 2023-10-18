function boton1() {
  document.querySelector("#panel").style.backgroundColor = "green";
}

function boton2() {
  document.querySelector("#panel").style.backgroundColor = "rgb(0, 0, 255)";
document.getElementById('panel').backgroundColor.style.backgroundColor = 0, 0, 255
}
function asociamePorFavor() {
  document.querySelector("#panel").textContent =
    "Gracias por asociar la función al botón 3!";
}
document.getElementById("boton3").addEventListener("click", asociamePorFavor);

function calcularLetrasTitulo() {
  // 1. Accede a la propiedad textContent del nodo h1. Guarda esa información en una variable
  // 2. Usa el método adecuado para obtener el número de carácteres del string en textContent. Pon ese valor en el textContent del #panel

//const h1Element = document.querySelector('h1');
//const numeroCaracteres = h1Element.textContent.length;
//document.getElementById('panel').text,content =  numeroCaracteres

document.getElementById('panel').textContent = document.querySelector('h1').textContent.length;
}