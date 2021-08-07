var resAjx;
(function (resAjx) {
    resAjx[resAjx["datosGuardaos"] = 1] = "datosGuardaos";
    resAjx[resAjx["campoNombre"] = 2] = "campoNombre";
    resAjx[resAjx["edadIncompleto"] = 3] = "edadIncompleto";
    resAjx[resAjx["errorDataBase"] = 4] = "errorDataBase";
})(resAjx || (resAjx = {}));
var test = 1;
switch (test) {
    case resAjx.datosGuardaos:
        console.log('posicion 1');
        break;
    case resAjx.campoNombre:
        console.log('posicion 2');
        break;
    case resAjx.edadIncompleto:
        console.log('posicion 3');
        break;
    case resAjx.errorDataBase:
        console.log('posicion 4');
        break;
}
