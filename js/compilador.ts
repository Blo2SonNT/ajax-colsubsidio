enum resAjx {
    datosGuardaos = 1,
    campoNombre = 2,
    edadIncompleto = 3,
    errorDataBase = 4
}

let test: number = 1
switch (test) {
    case resAjx.datosGuardaos:
        console.log('posicion 1')
        break;
    case resAjx.campoNombre:
        console.log('posicion 2')
        break;
    case resAjx.edadIncompleto:
        console.log('posicion 3')
        break;
    case resAjx.errorDataBase:
        console.log('posicion 4')
        break;
}