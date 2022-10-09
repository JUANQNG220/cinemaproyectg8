function traerInformacion(){
    $.ajax({
        url:"https://g23253d9d339104-jorgeapexbd.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/cinema/cinema",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta.items)
        }


    });

}

function pintarRespuesta(items){

    let myTable ="<table>";
    for(i=0;i<items.length;i++){
        myTable+="<tr>";
        myTable+="<td>"+items[i].id+"</td>";
        myTable+="<td>"+items[i].owner+"</td>";
        myTable+="<td>"+items[i].capacity+"</td>";
        myTable+="<td>"+items[i].category_id+"</td>";
        myTable+="<td>"+items[i].name+"</td>";
        myTable+="<td> <button onclick='borrarInformacion("+items[i].id+")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable);
}

function guardarInformacion(){
    let myData={
        id:$("#id").val(),
        owner:$("#owner").val(),
        capacity:$("#capacity").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g23253d9d339104-jorgeapexbd.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/cinema/cinema",
        type:"POST",
        data:myData,
        datatype:"JSON",
        success:function(respuesta){
            $("resultado").empty();
            $("#id").val("");
            $("#owner").val("");
            $("#capacity").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("Se ha guardado la informacion")
        }
    });
}

function editarInformacion(){
    let myData={
        id:$("#id").val(),
        owner:$("#owner").val(),
        capacity:$("#capacity").val(),
        category_id:$("#category_id").val(),
        name:$("#name").val(),
    };
    console.log(myData);
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g23253d9d339104-jorgeapexbd.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/cinema/cinema",
        type:"PUT",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("resultado").empty();
            $("#id").val("");
            $("#owner").val("");
            $("#capacity").val("");
            $("#category_id").val("");
            $("#name").val("");
            traerInformacion();
            alert("Hemos actualizado")
        }
    });
}
function borrarInformacion(idInformacion){
    let myData={
        id:idInformacion
    };
    let dataToSend=JSON.stringify(myData);
    $.ajax({
        url:"https://g23253d9d339104-jorgeapexbd.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/cinema/cinema",
        type:"DELETE",
        data:dataToSend,
        contentType:"application/JSON",
        datatype:"JSON",
        success:function(respuesta){
            $("resultado").empty();
            traerInformacion();
            alert("Eliminado completamente")
        }
    });

}
