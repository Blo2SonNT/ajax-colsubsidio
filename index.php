<!doctype html>
<html lang="es">

<head>
    <title>Title</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="css/main.css">
</head>

<body>

    <div class="container">
        <div class="row">
            <div class="col-12 mt-5">
                <h3 class="text-center">Ingresa tus datos</h3>
            </div>
        </div>
        <div class="row justify-content-center mt-3">
            <div class="col-6">
                <form id="form_user_year">
                    <div class="form-group">
                        <label for="nom_form">Nombre</label>
                        <input type="text" class="form-control" id="nom_form" name="nom_form">
                    </div>
                    <div class="form-group">
                        <label for="edad_form">Edad</label>
                        <input type="number" class="form-control" id="edad_form" name="edad_form">
                    </div>
                    <img src="img/ico_carga.svg" id="ico-carga" class="ico-carga">
                    <div class="alert ico-carga" id="alerta-formulario" role="alert"></div>
                    <button type="submit" id="magia_btn" class="btn btn-primary">Enviar</button>
                    <div id="response"></div>
                </form>
            </div>
        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="js/jquery.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="js/code.js"></script>
</body>

</html>