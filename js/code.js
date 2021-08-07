const boton_magia = document.getElementById('magia_btn');
console.log(boton_magia)

boton_magia.onclick = function(e) {
    e.preventDefault()
    let info_form = new FormData($('#form_user_year')[0])
    var resAjx;
    (function(resAjx) {
        resAjx[resAjx["datosGuardaos"] = 1] = "datosGuardaos";
        resAjx[resAjx["campoNombre"] = 2] = "campoNombre";
        resAjx[resAjx["edadIncompleto"] = 3] = "edadIncompleto";
        resAjx[resAjx["errorDataBase"] = 4] = "errorDataBase";
    })(resAjx || (resAjx = {}));


    $.ajax({
        type: "POST",
        url: "http://localhost:8080/repaso-modulo3/clase-06-08/datos.php",
        data: info_form,
        cache: false,
        contentType: false,
        processData: false,
        beforeSend: function() {
            $('#magia_btn').hide('fast')
            $('#ico-carga').show('fast')
            $('#alerta-formulario').hide('fast').text('').removeClass('alert-success')
        },
        success: function(response) {
            // $('#response').html(response)
            $('#ico-carga').hide('fast')
            $('#magia_btn').show('fast')
            $('#alerta-formulario').show('fast')
            res = parseInt(response)
            switch (res) {
                case resAjx.datosGuardaos:
                    console.log('todo bien, todo correcto');
                    $('#form_user_year').trigger('reset');
                    // $('#alerta-formulario').text('Datos guardados').addClass('alert-success')
                    Swal.fire({
                        icon: 'success',
                        title: 'Datos guardados',
                        text: ':D',
                    })
                    break;
                case resAjx.campoNombre:
                    console.log('entro en el caso 2');
                    //$('#alerta-formulario').text('Alerta: hacen falta datos').addClass('alert-warning')
                    Swal.fire({
                        icon: 'warning',
                        title: 'Faltan datos',
                        text: '>:|',
                    })
                    break;
                case resAjx.edadIncompleto:
                    console.log('posicion 3');
                    break;
                case resAjx.errorDataBase:
                    console.log('posicion 4');
                    break;
            }
        }
    })
}





// setTimeout(function() {
//     $('#magia_btn').show('slow')
//     $('#ico-carga').hide('fast')
//     $('#alerta-formulario').text('Datos guardados').addClass('alert-success').show('fast')
// }, 3000)