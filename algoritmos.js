function saludar(){
    console.log('Hola Mundo');
    alert('Hello world');
}
//Algoritmo que realice una suma entre dos valores ingresados por el usuario
function sumar(){
    //declarar las variables necesarias para la ejecucion del algoritmo
    let TotalSuma = 0;
    let N1 = 0;
    let N2 = 0;
    //solicitar y capturar los valores ingresados por el usuario
    N1 = parseInt(prompt('por favor ingrese el primer valor a sumar'));
    N2 = parseInt(prompt('por favor ingrese el segundo valor a sumar'));
    //realizar el procedimiento
    TotalSuma = N1 + N2;
    //mostrar el resultado en pantalla al usuario
    console.log('el resultado de la suma es: ' + TotalSuma)
    alert('el resultado de la suma es: ' + TotalSuma)
}
//algoritmo que realice una suma, resta, multiplicacion o division ingresados por el usuario
function operacionesBasicas(){
    let TotalOp = 0;
    let operacion = 0;
    let N1;
    let N2;
    let correcto = true;

    operacion = parseInt(prompt(' Escriba 1 para sumar\n Escriba 2 para restar\n Escriba 3 para multiplicar\n Escriba 4 para dividir'));

        if(operacion == 1  || operacion == 2 || operacion == 3 || operacion == 4 ){
            correcto = true;
            N1 = parseInt(prompt('por favor Ingrese el primer valor'));
            N2 = parseInt(prompt('por favor ingrese el segundo valor a sumar'));
        }else{
            correcto=true;
            console.log('error');
        }

        if(correcto = true){
            switch (operacion) {
                case 1:
                    TotalOp = N1 + N2;
                    console.log('el resultado de la suma es: ' + TotalOp);
                    alert('el resultado de la suma es: ' + TotalOp);
                    break;
                case 2:
                    TotalOp = N1 - N2;
                    console.log('el resultado de la resta es: ' + TotalOp);
                    alert('el resultado de la resta es: ' + TotalOp);
                    break;
                case 3:
                    TotalOp = N1 * N2;
                    console.log('el resultado de la multiplicacion es: ' + TotalOp);
                    alert('el resultado de la multiplicacion es: ' + TotalOp);
                    break;
                case 4:
                    TotalOp = N1 / N2;
                    console.log('el resultado de la division es: ' + TotalOp);
                    alert('el resultado de la division es: ' + TotalOp);
                    break;
                default:
                    alert('error');
                    console.log('error');
                    break;
            }
        }  
    }
    
function cuadradoNumero(){
    // algoritmo que determine el cuadrado de un numero ingresado por el usuario
    let NumCuadrado = 0;
    NumCuadrado = parseInt(prompt('Por favor ingrese el numero que desea elevar al cuadrado'));
    NumCuadrado = NumCuadrado * NumCuadrado;
    console.log('El resultado es: ' + NumCuadrado);
    alert('El resultado es: ' + NumCuadrado);
}
 

function areaTriangulo(){
    // determine el area de un triangulo a partir de la base y altura de un triangulo
    let areaTri = 0;
    baseTri = parseFloat(prompt('Por favor ingrese la base del triangulo'));
    ladoTri = parseFloat(prompt('Por favor ingrese el lado del triangulo'));
    areaTri = (baseTri * ladoTri)/2;
    console.log('El area del triangulo es: ' + areaTri);
    alert('El area del triangulo es: ' + areaTri); 
}

function conversionPulgadas(){
    //relizar un algoritmo que determine la medida  en kilometros, metros y centimetros de un valor dado en pulgadas
    let Conversion = 0;
    let pulgadas = 0;
    let unidadIngreso = 0;
    let correcto = true;

    Conversion = parseInt(prompt('Escriba 1 para convertir a Kilometros\n Escriba 2 para convertir a Metros\n Escriba 3 para convertir a centimetros'));
        if(Conversion == 1  || Conversion == 2 || Conversion == 3){
            correcto = true;
            pulgadas = parseFloat(prompt('por favor Ingrese la cantidad de pulgadas'));
        }else{
            correcto=true;
            console.log('error');
        }
        if(correcto = true){
            switch (Conversion) {
                case 1:
                    pulgadas = pulgadas * 0.0000254;
                    console.log('La conversion es de: ' + pulgadas + ' Kilometros');
                    alert('La conversion es de: ' + pulgadas + ' Kilometros');
                    break;
                case 2:
                    pulgadas = pulgadas * 0.0254;
                    console.log('La conversion es de: ' + pulgadas + ' Metros');
                    alert('La conversion es de: ' + pulgadas + ' Metros');
                    break;
                case 3:
                    pulgadas = pulgadas * 2.54;
                    console.log('La conversion es de: ' + pulgadas + ' Centimetros');
                    alert('La conversion es de: ' + pulgadas + ' Centimetros');
                    break;
                default:
                    alert('error');
                    console.log('error');
                    break;
            }
        }  
}

function conversionUnidad(){
    //relizar un algoritmo que determine la medida  en kilometros, metros y centimetros de un valor dado en pulgadas
    let Conversion = 0;
    let unidadMedida = 0;
    let medida = 0;
    let unidadIngreso = 0;
    let correcto = true;

    unidadMedida = parseInt(prompt('Escriba 1 para convertir a Kilometros\n Escriba 2 para convertir a Metros\n Escriba 3 para convertir a centimetros'));
        if(unidadMedida == 1  || unidadMedida == 2 || unidadMedida == 3){
            correcto = true;
            if (unidadMedida == 1) {
                medida = parseInt(prompt('por favor Ingrese la medida que desea convertir'));
                unidadIngreso = parseInt(prompt('Escriba 1 si ingreso la medida en metros\n Escriba 2 si ingreso la medida en centimetros'));
                if (unidadIngreso == 1  || unidadIngreso == 2) {
                    correcto = true;
                }else{
                    correcto=true;
                    console.log('error');
                }
            }
            else if(unidadMedida == 2 ){
                medida = parseInt(prompt('por favor Ingrese la medida que desea convertir'));
                unidadIngreso = parseInt(prompt('Escriba 1 si ingreso la medida en Kilometros\n Escriba 2 si ingreso la medida en Centimetros'));
                if (unidadIngreso == 2  || unidadIngreso == 2) {
                    correcto = true;
                }else{
                    correcto=true;
                    console.log('error');
                }
            }
            else if(unidadMedida == 3){
                medida = parseInt(prompt('por favor Ingrese la medida que desea convertir'));
                unidadIngreso = parseInt(prompt('Escriba 1 si ingreso la medida en kilometros\n Escriba 2 si ingreso la medida en Metros'));
                if (unidadIngreso == 1  || unidadIngreso == 2) {
                    correcto = true;
                }else{
                    correcto=true;
                    console.log('error');
                }
            }  
        }else{
            correcto=true;
            console.log('error');
        }
        if(correcto = true){
            switch (unidadMedida) {
                case 1:
                    if (unidadIngreso == 1) {
                        medida = medida/1000;
                    }else if (unidadIngreso == 2){
                        medida = medida/100000;
                    }
                    console.log('La conversion es de: ' + medida + ' Kilometros');
                    alert('La conversion es de: ' + medida + ' Kilometros');
                    break;
                case 2:
                    if (unidadIngreso == 1) {
                        medida = medida*1000;
                    }else if (unidadIngreso == 2){
                        medida = medida/100;
                    }
                    console.log('La conversion es de: ' + medida + ' Metros');
                    alert('La conversion es de: ' + medida + ' Metros');
                    break;
                case 3:
                    if (unidadIngreso == 1) {
                        medida = medida/100000;
                    }else if (unidadIngreso == 2){
                        medida = medida/100;
                    }
                    console.log('La conversion es de: ' + medida + ' Centimetros');
                    alert('La conversion es de: ' + medida + ' Centimetros');
                    break;
                default:
                    alert('error');
                    console.log('error');
                    break;
            }
        }  
}