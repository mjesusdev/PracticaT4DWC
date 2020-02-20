$(document).ready(function(){
    $("#instrucciones").click(function(event){
        event.preventDefault();
        cargarHTML();
    });

    $("#cargarJSON").click(function(event){
        event.preventDefault();
        cargarJSON();
    });
});

// Cargar el HTML instrucciones.html
function cargarHTML(){
    var info = $("#formulario").serialize();
    $.ajax({
        async: true,
        type: 'POST',
        dataType: 'html',
        contentType: 'application/x-www-form-urlencoded',
        url: 'instrucciones.html',
        data: info,
        beforeSend: inicioEnvio,
        success: llegadaEnvio,
        timeout: 4000,
        error: manejaErrores
    });
    return false;
}
function inicioEnvio(){
    $("#respuesta").html('Enviando...');
}
function llegadaEnvio(data){
    $("#respuesta").html(data);
}
function manejaErrores(jqXHR,textStatus,errorThrown){
    $("#respuesta").html("<div class='alert alert-danger'>Error al enviar los datos al servidor</div>");
    console.log(jqXHR);console.log(textStatus);console.log(errorThrown);
}

// Cargar el fichero JSON
function cargarJSON(){
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', './assets/pokedex.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText);
            let totalPokemon = $("#id").val();
            let respuesta = $("#respuesta");

            if (totalPokemon==''){
                $(respuesta).append(
                    `<div class='alert alert-danger'>
                        Indica id para mostrar los datos de varios pokemon
                    </div>`);
            }else{
                $("#tabla").html(`                            
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Tipos</th>
                    </tr>
                </thead>
                <tbody id="tbody">
                    
                </tbody>`);
                for (let i=0;i<totalPokemon; i++){
                    $("#tbody").append(`
                        <tr>
                            <td>${datos[i].id}</td>
                            <td>${datos[i].name.english}</td>
                            <td>${datos[i].type}</td>
                        </tr>`);
                }
            }
        }
    }
}