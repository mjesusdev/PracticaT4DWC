Realizar una página web que use la tecnología AJAX. La página tendrá 2 botones y un campo de entrada input.

Al pulsar el primer botón (llamado "Instrucciones"), se cargará asíncronamente un archivo llamado instrucciones.html.
Al pulsar el segundo botón (llamado "Cargar JSON), se recorrerá un archivo json y se mostrarán en formato tabla.
El archivo JSON será el adjunto pokedex.json, que previamente tendremos en el servidor.
Al pulsar el botón, si hay algo escrito en el input, sólo se mostrarán los objetos cuyo id sea menor o igual que el especificado.
La tabla no incluirá todos los campos, sólo el id, el campo english de name y el campo type como un string separados por comas.
Es decir, que si el primer objeto del JSON es:

{
    "id": 1,
    "name": {
      "english": "Bulbasaur",
      "japanese": "フシギダネ",
      "chinese": "妙蛙种子"
    },
    "type": [
      "Grass",
      "Poison"
    ],
    "base": {
      "HP": 45,
      "Attack": 49,
      "Defense": 49,
      "Sp. Attack": 65,
      "Sp. Defense": 65,
      "Speed": 45
    }
  }
La tabla empezará de la siguiente manera:

Id	Nombre	Tipos
1	Bulbasaur	Grass, Poison