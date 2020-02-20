Realizar una página web que use la tecnología AJAX. La página tendrá 2 botones y un campo de entrada input.

1. Al pulsar el primer botón (llamado "Instrucciones"), se cargará asíncronamente un archivo llamado instrucciones.html.
2. Al pulsar el segundo botón (llamado "Cargar JSON), se recorrerá un archivo json y se mostrarán en formato tabla.
3. El archivo JSON será el adjunto pokedex.json, que previamente tendremos en el servidor.
4. Al pulsar el botón, si hay algo escrito en el input, sólo se mostrarán los objetos cuyo id sea menor o igual que el especificado.
5. La tabla no incluirá todos los campos, sólo el id, el campo english de name y el campo type como un string separados por comas.