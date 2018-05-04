var boton = document.getElementById("botoncito");
var boton1 = document.getElementById("botoncito1");
var boton2 = document.getElementById("botoncito2");
document.addEventListener("mousedown", comenzarDibujo);
document.addEventListener("mousemove", dibujarAhora);
document.addEventListener("mouseup", pararDibujar);
boton.addEventListener("click", dibujoRojo);
boton1.addEventListener("click", dibujoMoradito);
boton2.addEventListener("click", dibujoAzul);
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var verificar;
var x;
var y;
var pinchecolor;


dibujarLinea("orange", 0, 0, 300, 0, papel);
dibujarLinea("orange", 300, 0, 300, 300, papel);
dibujarLinea("orange", 300, 300, 0, 300, papel);
dibujarLinea("orange", 0, 300, 0, 0, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(xinicial,yinicial);
  lienzo.lineTo(xfinal,yfinal);
  lienzo.stroke();
  lienzo.closePath();
}


function dibujoRojo()
{
  pinchecolor = 1
}

function dibujoMoradito()
{
  pinchecolor = 2
}

function dibujoAzul()
{
  pinchecolor = 3
}

function comenzarDibujo(evento)
{
  verificar = 1;

}

function pararDibujar(evento1)
{
  verificar = 0;
}

function dibujarAhora(evento3)
{
  if (verificar == 1)
  {

    switch(pinchecolor)
    {
      case 1:
        dibujarLinea("red", x, y, evento3.offsetX, evento3.offsetY, papel);
      break;
      case 2:
        dibujarLinea("purple", x, y, evento3.offsetX, evento3.offsetY, papel);
      break;
      case 3:
        dibujarLinea("blue", x, y, evento3.offsetX, evento3.offsetY, papel);
      break;
      default:
        console.log("Otra tecla");
      break;
    }

  }
  x = evento3.offsetX;
  y = evento3.offsetY;
}
