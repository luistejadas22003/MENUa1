class Numeros{
    ejer1(){
        // 1. Grados Celsius a Fahrenheit.
        // Proceso ejer1
        //     Definir celsius como real
        //     Escribir "Ingrese grados Celsius:"
        //     Leer celsius
        //     fahrenheit = (celsius * 9 / 5) + 32
        //     Escribir los grados celcius en grados fahrenheit
        // FinProceso
        let num = document.getElementById("num").value;
        let resp = document.getElementById("resp")
        let fahrenheit = (num* 9/5) + 32;
         resp.textContent=`${num} grados celsius a grados fahrenheit son: ${fahrenheit}`;
    }
    
    ejer2(){
        // 2. Un número entero, obtener y presentar el doble y el triple del número.
        // Proceso ejer2    
        //     Definir num, doble, triple como enteros
        //     Escribir "Ingrese un numero entero:"
        //     Leer num
        //     doble = num * 2
        //     triple = num * 3
        //     Escribir "El doble de ", num, " es ", doble, "."
        //     Escribir "El triple de ", num, " es ", triple, "."
        // FinProceso
        let num = parseInt(document.getElementById("num").value);
        let resp = document.getElementById("resp");
        let resp2 = document.getElementById("resp2");
        let doble = num * 2;
        let triple = num * 3;
        resp.textContent = ` El doble de ${num} es ${doble}.`  
        resp2.textContent= ` El triple de ${num} es ${triple}.`;
        

    }
    
    ejer3(){
        // 3. Lee 4 variables y calcula e imprime su producto, su suma y su media aritmética.    
        // Proceso ejer3
        //     Definir v1, v2, v3, v4, producto, suma, media como reales
        //     Escribir "Ingrese la variable 1:"
        //     Leer v1
        //     Escribir "Ingrese la variable 2:"
        //     Leer v2
        //     Escribir "Ingrese la variable 3:"
        //     Leer v3
        //     Escribir "Ingrese la variable 4:"
        //     Leer v4
        //     producto = v1 * v2 * v3 * v4
        //     suma = v1 + v2 + v3 + v4
        //     media = suma / 4
        //     Escribir "El producto es de: ", producto
        //     Escribir "La suma es de: ", suma
        //     Escribir "El media es de: ", media
        // FinProceso
        let v1 = parseInt(document.getElementById("v1").value);
        let v2 = parseInt(document.getElementById("v2").value);
        let v3 = parseInt(document.getElementById("v3").value);
        let v4 = parseInt(document.getElementById("v4").value);
        let resp = document.getElementById("resp")
        let resp2 = document.getElementById("resp2")
        let resp3 = document.getElementById("resp3")

        let producto = v1*v2*v3*v4;
        let suma = v1+v2+v3+v4
        let media = suma/4;
         resp.textContent=`El producto es de: ${producto}`;
         resp2.textContent=`La suma es de: ${suma}`;
         resp3.textContent=`El media es de: ${media}`;
  
    }
    
    ejer4(){
        // Lee el peso de un hombre en libras y devuelve el peso en kilogramos y gramos.
        // Proceso ejer4
        //     Definir pesoLibras, kilogramos, gramos como reales
        //     Escribir "Ingrese su peso en libras:"
        //     Leer pesoLibras
        //     kilogramos = pesoLibras * 0.453592
        //     gramos = pesoLibras * 453.592
        //     Escribir "El peso en kilogramos es: ", kilogramos
        //     Escribir "El peso en gramos es: ", gramos
        // FinProceso
        let pesoLibras = document.getElementById('pesoLibras').value;
        let resp = document.getElementById("resp")
        let resp2 = document.getElementById("resp2")
        let kilogramos = pesoLibras * 0.453592; 
        let gramos = pesoLibras * 453.592;
        resp.textContent=(`El peso en kilogramos es: ${kilogramos}`);
        resp2.textContent=(`El peso en gramos es: ${gramos}`);
    }
    
    ejer5(){
        // Resuelve x=((sen(a)+cos(b))*(trunc(a) mod 2))+(raiz(a^3)/(a*b+c))
        //     Proceso ejer5
        //     Definir a,b,c,x como reales
        //     Escribir "Ingrese el valor de a:"
        //     Leer a
        //     Escribir "Ingrese el valor de b:"
        //     Leer b
        //     Escribir "Ingrese el valor de c:"
        //     Leer c
        //     x = ((sen(a) + cos(b)) * (trunc(a) mod 2)) + (raiz(a^3) / (a * b + c))
        //     Escribir "El valor de x es: ", x
        // FinProceso
        let a = document.getElementById("a").value;
        let b = document.getElementById("b").value;
        let c = document.getElementById("c").value;
        let resp = document.getElementById("resp")
        let x = ((Math.sin(a) + Math.cos(b)) * (Math.trunc(a) % 2)) + (Math.sqrt(Math.pow(a, 3)) / (a * b + c));
        resp.textContent=`El valor de x es: ${x}`;
    }
    
    ejer6(){
        // Un empleado trabaja 40 horas en jornada normal en la semana a razón $5 la hora.
        // Si trabaja más de 40 horas, estas serán considerados horas de sobretiempo que se pagan al doble de la hora de la jornada normal.
        // El porcentaje del seguro social(iess) es del 10% del ingreso total. Se desea saber cuál es el valor del sueldo,
        // sobretiempo, ingreso total, seguro social y el neto a recibir.
        // Proceso ejer6
        //     Definir horasNormales, horasTrabajadas como enteros
        //     Definir tarifaHora, sueldoNormal, sueldoExtra, ingresoTotal, seguroSocial, netoRecibir, netoRecibir como reales
        //     horasNormales = 40
        //     tarifaHora = 5
        //     Escribir "Ingrese las horas trabajadas en la semana:"
        //     Leer horasTrabajadas
        //     sueldoNormal = 0
        //     sueldoExtra = 0
        //     ingresoTotal = 0
        //     seguroSocial = 0
        //     netoRecibir = 0
        //     Si horasTrabajadas <= horasNormales Entonces
        //         sueldoNormal = horasTrabajadas * tarifaHora
        //     Sino
        //         sueldoNormal = horasNormales * tarifaHora
        //         sueldoExtra = (horasTrabajadas - horasNormales) * tarifaHora * 2
        //     FinSi
        //     ingresoTotal = sueldoNormal + sueldoExtra
        //     seguroSocial = ingresoTotal * 0.10
        //     netoRecibir = ingresoTotal - seguroSocial
        //     Escribir "Sueldo normal: ", sueldoNormal
        //     Escribir "Sueldo extra: ", sueldoExtra
        //     Escribir "Ingreso total: ", ingresoTotal
        //     Escribir "Seguro social: ", seguroSocial
        //     Escribir "Neto recibir: ", netoRecibir
        // FinProceso
        let horasNormales = 40;
        let horasTrabajadas = document.getElementById("horasTrabajadas").value;
        let resp = document.getElementById("resp");
        let resp2 = document.getElementById("resp2");
        let resp3 = document.getElementById("resp3");
        let resp4 = document.getElementById("resp4");
        let resp5 = document.getElementById("resp5");
        
        let tarifaHora = 5;
        let sueldoNormal = 0;
        let sueldoExtra = 0;
        let ingresoTotal = 0;
        let seguroSocial = 0;
        let netoRecibir = 0;
        if (horasTrabajadas <= horasNormales) {
            sueldoNormal = horasTrabajadas * tarifaHora;
        } else {
            sueldoNormal = horasNormales * tarifaHora;
            sueldoExtra = (horasTrabajadas - horasNormales) * tarifaHora * 2;
        }
        ingresoTotal = sueldoNormal + sueldoExtra;
        seguroSocial = ingresoTotal * 0.10;
        netoRecibir = ingresoTotal - seguroSocial;
         resp.textContent=`Sueldo normal: ${sueldoNormal}`;
         resp2.textContent=`Sueldo extra: ${sueldoExtra}`;
         resp3.textContent=`Ingreso total: ${ingresoTotal}`;
         resp4.textContent=`Seguro social: ${seguroSocial}`;
         resp5.textContent=`Neto recibir: ${netoRecibir}`;
    }
    
    ejer7(){
        // Lee dos números y presenta el mayor de los dos siempre y cuando el primero sea par y el segundo impar.
        // Proceso ejer7
        //     Definir num1, num2 como enteros
        //     Escribir "Ingrese un número:"
        //     Leer num1
        //     Escribir "Ingrese otro número:"
        //     Leer num2
        //     Si num1 % 2 = 0 Y num2 % 2 = 1 Entonces
        //         Si num1 > num2 Entonces
        //             Escribir num1, " es mayor que ", num2
        //         Sino
        //             Escribir num2, " es mayor que ", num1
        //         FinSi
        //     Sino
        //         Escribir "Los números ingresados no cumplen con lo requerido."
        //     FinSi
        // FinProceso
        let num1 = document.getElementById("num1").value;
        let num2 = document.getElementById("num2").value;
        let resp = document.getElementById("resp")
        if (num1 % 2 == 0 && num2 % 2 == 1) {
            if (num1 > num2) {
                 resp.textContent=`${num1} es mayor que ${num2}`;
            } else {
                resp.textContent=`${num2} es mayor que ${num1}`;
            }
        } else {
             resp.textContent="Los números ingresados no cumplen con lo requerido.";
        }
    }
    
    ejer8(){
        // Lee un carácter y deduce si está o no comprendido entre las letras a y z ambas inclusive y sino
        // verificar si es un signo de puntuacion  , . ; :  y si no presentar solo el carácter.
        // Proceso ejer8
        //     Definir caracter como caracter
        //     Escribir "Ingrese un caracter:"
        //     Leer caracter
        //     Si caracter >= 'a' Y caracter <= 'z' Entonces
        //         Escribir caracter, " está comprendido entre las letras a y z."
        //     Sino
        //         Si caracter = ',' O caracter = ';' O caracter = '.' O caracter = ':' Entonces
        //             Escribir caracter, " es un signo de puntuación."
        //         Sino
        //             Escribir "El caracter es ", caracter
        //         FinSi
        //     FinSi
        // FinProceso
        // let caracter = document.getElementById('caracter').value;
        // let resp = document.getElementById("resp")
    
        // if(caracter >= 'a' && caracter <= 'z'){
        //     console.log(`${caracter} está comprendido entre las letras a y z.`);
        // } else if(caracter == ',' || caracter == ';' || caracter == '.' || caracter == ':'){
        //     resp.textContent=`${caracter} es un signo de puntuación.`;
        // } else{
        //    resp.textContent=`El caracter es ${caracter}`;
        //}
            let caracter = document.getElementById('caracter').value;
            let resp = document.getElementById("resp");
            
            if (caracter >= 'a' && caracter <= 'z') {
                resp.textContent = `${caracter} está comprendido entre las letras a y z.`;
            } else if (caracter == ',' || caracter == ';' || caracter == '.' || caracter == ':') {
                resp.textContent = `${caracter} es un signo de puntuación.`;
            } else {
                resp.textContent = `${caracter} no es una letra minúscula ni un signo de puntuación reconocido.`;
            }
    }
    
    ejer9(){
        // Determina cuánto se debe pagar por x cantidad de colas, considerando que si son menos de 12 colas, el costo
        // por unidad es de $0,25 caso contrario el precio será 10% menos.
        // Proceso ejer9
        //     Definir cola como entero
        //     Definir precio, descuento como reales
        //     Escribir "Ingrese la cantidad de colas que va a llevar:"
        //     Leer cola
        //     precio = cola * 0.25
        //     Si cola > 12 Entonces
        //         descuento = precio * 0.10
        //         precio = precio - descuento
        //     FinSi
        //     Escribir "El precio total a pagar es de ", precio
        // FinProceso
        let cola = parseInt(document.getElementById("cola").value);
        let resp = document.getElementById("resp")
        let precio = cola * 0.25;
        if (cola > 12){
        let descuento = precio * 0.10;
        precio = precio - descuento; 
        }
         resp.textContent=`El precio total a pagar es de ${precio}`;
    }
    
    ejer10(){
        // El almacén “AlgoritmoX” tiene una promoción: a todos los trajes que tienen un precio superior a 200,
        // se les aplicará un descuento del 10% y al resto tendrán un descuento de solo $10 dólares.
        // Presenta el valor de cada traje con su respectivo valor, descuento y pago considerando el iva del 15%.
        // Proceso ejer10
        //     Definir precioTraje, descuento, iva, precioFinal, descuentoNuevo, pago como reales
        //     Escribir "Ingrese el precio de su traje:"
        //     Leer precioTraje
        //     descuento = 0
        //     iva = 0.15
        //     precioFinal = 0
        //     descuentoNuevo = 0
        //     pago = 0
        //     Si precioTraje > 200 Entonces
        //         descuento = 0.10
        //         descuentoNuevo = precioTraje * descuento
        //         precioFinal = precioTraje - descuentoNuevo
        //     Sino
        //         descuentoNuevo = 10
        //         precioFinal = precioTraje - descuentoNuevo
        //     FinSi
        //     pago = precioFinal + (precioFinal * iva)
        //     Escribir "El precio original del traje es de: ", precioTraje
        //     Escribir "El descuento nuevo es de: ", descuentoNuevo
        //     Escribir "El precio con descuento es de: ", precioFinal
        //     Escribir "El pago final con IVA es: ", pago
        // FinProceso
        let precioTraje = document.getElementById('precioTraje').value;
        let resp = document.getElementById("resp")
        let resp2 = document.getElementById("resp2")
        let resp3 = document.getElementById("resp3")
        let resp4 = document.getElementById("resp4")
        let descuento = 0;
        let iva = 0.15;
        let precioFinal = 0;
        let descuentoNuevo = 0;
        let pago = 0;
        if (precioTraje > 200){
            descuento = 0.10;
            descuentoNuevo = precioTraje * descuento;
            precioFinal = precioTraje - descuentoNuevo;
        } else{
            descuentoNuevo = 10;
            precioFinal = precioTraje - descuentoNuevo;
        }
        pago = precioFinal + (precioFinal * iva);
         resp.textContent=`El precio original del traje es de: ${precioTraje}`;
         resp2.textContent=`El descuento nuevo es de: ${descuentoNuevo}`;
         resp3.textContent=`El precio con descuento es de: ${precioFinal}`;
         resp4.textContent=`El pago final con IVA es: ${pago}`;
    }
    
    ejer11(){
        // Dado un día en número, presentar el nombre de ese día. Solución con arreglos.
        // Proceso ejer11
        //     Definir dias como caracter
        //     dias[1] = "lunes"
        //     dias[2] = "martes"
        //     dias[3] = "miércoles"
        //     dias[4] = "jueves"
        //     dias[5] = "viernes"
        //     dias[6] = "sábado"
        //     dias[7] = "domingo"
        //     Definir dia como entero
        //     Escribir "Ingrese un número del día de la semana del 1 al 7:"
        //     Leer dia
        //     Si dia < 1 O dia > 7 Entonces
        //         Escribir "El número ingresado no es válido. Por favor, ingrese un número entre 1 y 7."
        //     Sino
        //         Definir nombreDia como caracter
        //         nombreDia = dias[dia]
        //         Escribir "El número que ha seleccionado corresponde a: ", nombreDia
        //     FinSi
        // FinProceso
        let dias = ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"];
        let dia = document.getElementById("dia").value;
        let resp = document.getElementById("resp")
        if (dia < 1 || dia > 7){
             resp.textContent="El número ingresado no es válido. Por favor, ingrese un número entre 1 y 7.";
        } else {
            let nombreDia = dias[dia - 1];
             resp.textContent=`El número que ha seleccionado corresponde a: ${nombreDia}`;
        }
    }
    
    ejer12(){
        // Dado un mes en número, presentar el nombre de ese mes. Solución con arreglos.
        // Proceso ejer12
        //     Definir meses como caracter
        //     meses[1] = "enero"
        //     meses[2] = "febrero"
        //     meses[3] = "marzo"
        //     meses[4] = "abril"
        //     meses[5] = "mayo"
        //     meses[6] = "junio"
        //     meses[7] = "julio"
        //     meses[8] = "agosto"
        //     meses[9] = "septiembre"
        //     meses[10] = "octubre"
        //     meses[11] = "noviembre"
        //     meses[12] = "diciembre"
        //     Definir mes como entero
        //     Escribir "Ingrese un número del mes del 1 al 12:"
        //     Leer mes
        //     Si mes < 1 O mes > 12 Entonces
        //         Escribir "El número ingresado no es válido. Por favor, ingrese un número entre 1 y 12."
        //     Sino
        //         Definir nombreMes como caracter
        //         nombreMes = meses[mes]
        //         Escribir "El número que ha seleccionado corresponde a: ", nombreMes
        //     FinSi
        // FinProceso
        let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
        let mes = document.getElementById("mes").value;
        let resp = document.getElementById("resp")
    
        if (mes < 1 || mes > 12){
            resp.textContent="El número ingresado no es válido. Por favor, ingrese un número entre 1 y 12.";
        } else {
            let nombreMes = meses[mes - 1];
            resp.textContent=`El número que ha seleccionado corresponde a: ${nombreMes}`;
        }
    }
    
    ejer13(){
        // Dado 5 nombres, almacenarlos en un arreglo y luego presentar cada nombre del arreglo desde el último al primero sin usar ciclos.
        // Proceso ejer13
        //     Definir nombre como caracter
        //     Definir n1,n2,n3,n4,n5 Como Caracteres
        //     Escribir "Ingrese un nombre:"
        //     Leer n1
        //     Escribir "Ingrese otro nombre:"
        //     Leer n
        //     Escribir "Ingrese otro nombre:"
        //     Leer n3
        //     Escribir "Ingrese otro nombre:"
        //     Leer n4
        //     Escribir "Ingrese otro nombre:"
        //     Leer n5
        //     nombre = [n5, n4, n3, n2, n1]
        //     Escribir "Los nombres ingresados son: ", nombre
        // FinProceso
        let nombre= [];
        let n1 = document.getElementById("n1").value;
        let n2 = document.getElementById("n2").value;
        let n3 = document.getElementById("n3").value;
        let n4 = document.getElementById("n4").value;
        let n5 = document.getElementById("n5").value;
        let resp = document.getElementById("resp")
        nombre.push(n5,n4,n3,n2,n1);
         resp.textContent=`Los nombres ingresados son: ${nombre}`;
    }
    
    ejer14(){
        // Dado una dirección cualquiera presentar la dirección, el primer carácter, el del medio y el último de dicha dirección.
        // Proceso ejer14
        //     Definir direccion como caracter
        //     Escribir "Ingrese una dirección:"
        //     Leer direccion
        //     Definir primerCar como caracter
        //     Definir carEnmedio como entero
        //     Definir ultimoCar como caracter
        //     Definir caracterEnMedio como caracter
        //     primerCar = direccion[1]
        //     carEnmedio = Redondear(Longitud(direccion) / 2)
        //     ultimoCar = direccion[Longitud(direccion)]
        //     caracterEnMedio = direccion[carEnmedio]
        //     Escribir "El primer caracter es: ", primerCar
        //     Escribir "El caracter del medio es: ", caracterEnMedio
        //     Escribir "El ultimo caracter es: ", ultimoCar
        // FinProceso
        let direccion = document.getElementById("direccion").value
        let resp = document.getElementById("resp")
        let resp2 = document.getElementById("resp2")
        let resp3 = document.getElementById("resp3")
        let primerCar = direccion[0];
        let carEnmedio = Math.floor(direccion.length / 2);
        let ultimoCar = direccion[direccion.length - 1];
        let caracterEnMedio = direccion[carEnmedio];
         resp.textContent=`El primer caracter es: ${primerCar}`;
         resp2.textContent=`El caracter del medio es: ${caracterEnMedio}`;
         resp3.textContent=`El ultimo caracter es: ${ultimoCar}`;
    }
    
    ejer15(){
        // Almacena 5 valores aleatorios en un arreglo e imprimir el primero valor si es par positivo y el ultimo si es impar negativo.
        // Proceso ejer15
        //     Definir valores Como Arreglo de Enteros
        //     Para i = 1 Hasta 5 Con Paso 1 Hacer
        //         valores[i] = EnteroAleatorioEntre(0, 100)
        //     FinPara
        //     Si valores[1] Mod 2 = 0 Y valores[1] > 0 Entonces
        //         Escribir "El número ", valores[1], " es par y positivo"
        //     FinSi
        //     Si valores[5] Mod 2 = 1 O valores[5] Mod 2 = -1 Y valores[5] < 0 Entonces
        //         Escribir "El número ", valores[5], " es impar y negativo"
        //     FinSi
        // FinProceso
        let valores = [];
        let resp = document.getElementById("resp")
        for (let i = 0; i < 5 ; i++){
            let valor = parseInt(Math.random()*100);
            valores.push(valor);
        }
        if (valores[0] % 2 == 0 && valores[0] > 0){
            resp.textContent=`El número ${valores[0]} es par y positivo`;
        }
        if (valores[4] % 2 == 1 || valores[4] % 2 == -1 && valores[4] < 0){
            resp.textContent=`El número ${valores[4]} es impar y negativo`;
        }
    }
    
    ejer16(){
        // Dado un arreglo vacío, añadir 3 nombres y presentar el primer y el último carácter de cada nombre desde el arreglo.
        // Proceso ejer16
        //     Definir nombres como caracter
        //     nombres = []
        //     Escribir "Ingrese nombre 1:"
        //     Leer n1
        //     Escribir "Ingrese nombre 2:"
        //     Leer n2
        //     Escribir "Ingrese nombre 3:"
        //     Leer n3
        //     nombres.push(n1, n2, n3)
        //     Para i = 1 Hasta Longitud(nombres) Con Paso 1 Hacer
        //         Definir nombre como caracter
        //         nombre = nombres[i]
        //         Si Longitud(nombre) > 0 Entonces
        //             Definir primerCaracter, ultimoCaracter como caracteres
        //             primerCaracter = nombre[1]
        //             ultimoCaracter = nombre[Longitud(nombre)]
        //             Escribir "Nombre: ", nombre, ", primer carácter: ", primerCaracter, ", último carácter: ", ultimoCaracter
        //         FinSi
        //     FinPara
        // FinProceso
        let nombres = [];
        let n1 = document.getElementById('n1').value;
        let n2 = document.getElementById('n2').value;
        let n3 = document.getElementById('n3').value;
        let resp = document.getElementById("resp")
        nombres.push(n1, n2, n3);
        for (let i = 0; i < nombres.length; i++) {
            let nombre = nombres[i];
            if (nombre.length > 0) {
                let primerCaracter = nombre[0];
                let ultimoCaracter = nombre[nombre.length - 1];
                 resp.textContent=`Nombre: ${nombre}, primer carácter: ${primerCaracter}, último carácter: ${ultimoCaracter}`;
            }
        }
    }
    
    ejer17(){
        // Dada una cadena presentar el primer carácter siempre y cuando sea un dígito.
        // Proceso ejer17
        //     Definir cadena como caracter
        //     Escribir "Ingrese una cadena:"
        //     Leer cadena
        //     Definir primerCaracter como caracter
        //     primerCaracter = cadena[1]
        //     Si NoEsNumero(primerCaracter) Entonces
        //         Escribir "El primer carácter de la cadena no es un dígito."
        //     Sino
        //         Escribir "El primer carácter de la cadena es un dígito: ", primerCaracter
        //     FinSi
        // FinProceso
        let cadena = document.getElementById("cadena");
        let resp = document.getElementById("resp");
        let primerCaracter = cadena.value[0];
        if (!isNaN(primerCaracter) && primerCaracter !== ' ' && primerCaracter !== undefined) {
            resp.textContent = `El primer carácter de la cadena es un dígito: ${primerCaracter}`;
        } else {
            resp.textContent = `El primer carácter de la cadena no es un dígito.`;
        }


    
    }


    ejer18(){
        // Dada una cadena presentar el último carácter siempre y cuando sea una letra.
        // Proceso ejer18
        //     Definir cadena como caracter
        //     Escribir "Ingrese una cadena:"
        //     Leer cadena
        //     Definir ultimoCaracter como caracter
        //     ultimoCaracter = cadena[Longitud(cadena)]
        //     Si (ultimoCaracter >= 'a' Y ultimoCaracter <= 'z') O (ultimoCaracter >= 'A' Y ultimoCaracter <= 'Z') Entonces
        //         Escribir "El último carácter de la cadena es una letra: ", ultimoCaracter
        //     Sino
        //         Escribir "El último carácter de la cadena no es una letra."
        //     FinSi
        // FinProceso
        let cadena = document.getElementById("cadena").value;
        let resp = document.getElementById("resp")
        let ultimoCaracter = cadena[cadena.length - 1];
        if ((ultimoCaracter >= 'a' && ultimoCaracter <= 'z') || (ultimoCaracter >= 'A' && ultimoCaracter <= 'Z')) {
            resp.textContent=`El último carácter de la cadena es una letra: ${ultimoCaracter}`;
        } else {
            resp.textContent=`El último carácter de la cadena no es una letra.`;
        }
    }



    ejer19(){
        // Dada una cadena presentar el primer carácter siempre y cuando sea una vocal.
        // Proceso ejer19
        //     Definir caracter como caracter
        //     Escribir "Ingrese una palabra:"
        //     Leer caracter
        //     Definir n como caracter
        //     n = caracter[1]
        //     Si n == "a" O n == "A" O n == "e" O n == "E" O n == "i" O n == "I" O n == "o" O n == "O" O n == "u" O n =="U" Entonces
        //         Escribir "La palabra ", caracter, " tiene la vocal ", n, " al inicio"
        //     Sino
        //         Escribir "La palabra ", caracter, " no tiene vocal"
        //     FinSi
        // FinProceso
        
        let caracter = document.getElementById("caracter").value;
        let resp = document.getElementById("resp");
        let n = caracter[0];

        if (n === "a" || n === "A" || n === "e" || n === "E" || n === "i" || n === "I" || n === "o" || n === "O" || n === "u" || n === "U") {
             resp.textContent = `La palabra ${caracter} tiene la vocal ${n} al inicio`;
        } else {
            resp.textContent = `La palabra ${caracter} no tiene vocal al inicio`;
        }

    }
    
    ejer20(){
        // Dada una cadena presentar el carácter de en medio, siempre y cuando sea un carácter de puntuación: ; : . ,
        // Proceso ejer20
        //     Definir cadena como caracter
        //     Escribir "Ingrese una cadena:"
        //     Leer cadena
        //     Definir indiceMedio Como Entero
        //     Definir caracterMedio como caracter
        //     indiceMedio = RedondeoAbajo(Longitud(cadena) / 2)
        //     caracterMedio = cadena[indiceMedio]
        //     Si caracterMedio == ';' O caracterMedio == ':' O caracterMedio == '.' O caracterMedio == ',' Entonces
        //         Escribir "El carácter de en medio es un carácter de puntuación: ", caracterMedio
        //     Sino
        //         Escribir "El carácter de en medio no es un carácter de puntuación."
        //     FinSi
        // FinProceso
        let cadena = document.getElementById("cadena").value;
        let resp = document.getElementById("resp")
        let indiceMedio = Math.floor(cadena.length / 2);
        let caracterMedio = cadena[indiceMedio];
        if (caracterMedio === ';' || caracterMedio === ':' || caracterMedio === '.' || caracterMedio === ',') {
            resp.textContent=`El carácter de en medio es un carácter de puntuación: ${caracterMedio}`;
        } else {
            resp.textContent=`El carácter de en medio no es un carácter de puntuación.`;
        }
    }
    
    ejer21(){
        // Dado dos caracteres indicar si son iguales o si el primero es menor que el segundo o mayor que el segundo.
        // Proceso ejer21
        //     Definir car1, car2 como caracteres
        //     Escribir "Ingrese una palabra:"
        //     Leer car1
        //     Escribir "Ingrese otra palabra:"
        //     Leer car2
        //     Si car1 == car2 Entonces
        //         Escribir "La palabra ", car1, " se repite."
        //     Sino
        //         Si car1 > car2 Entonces
        //             Escribir "La palabra ", car1, " es mayor que ", car2
        //         Sino
        //             Escribir "La palabra ", car2, " es mayor que ", car1
        //         FinSi
        //     FinSi
        // FinProceso
        let car1 = document.getElementById("car1").value;
        let car2 = document.getElementById("car2").value;
        let resp = document.getElementById("resp")
        if(car1 == car2){
            resp.textContent=`La palabra ${car1} se repite.`;
        }else{
            if(car1 > car2){
                 resp.textContent=`La palabra ${car1} es mayor que ${car2}`;
            }else{
                 resp.textContent=`La palabra ${car2} es mayor que ${car1}`;
            }
        }
    }
    
    ejer22(){
        // Dado dos nombres indicar si son iguales o si el primero es menor que el segundo o mayor que el segundo.
        // Proceso ejer22
        //     Definir nombre1 y nombre2 como caracteres
        //     Escribir "Ingrese el primer nombre:"
        //     Leer nombre1
        //     Escribir "Ingrese el segundo nombre:"
        //     Leer nombre2
        //     Si nombre1 == nombre2 Entonces
        //         Escribir "Los nombres son iguales."
        //     SinoSi nombre1 < nombre2 Entonces
        //         Escribir "El primer nombre es menor que el segundo nombre."
        //     Sino
        //         Escribir "El primer nombre es mayor que el segundo nombre."
        //     FinSi
        // FinProceso
        let nombre1 = document.getElementById("nombre1").value;
        let nombre2 = document.getElementById("nombre2").value;
        let resp = document.getElementById("resp")
        
        if (nombre1 == nombre2) {
            resp.textContent=`Los nombres son iguales.`;
        } else if (nombre1 < nombre2) {
           resp.textContent=`El primer nombre es menor que el segundo nombre.`;
        } else {
            resp.textContent=`El primer nombre es mayor que el segundo nombre.`;
        }
    }
    
    ejer23(){
        // Dado una cadena indicar cuántos elementos tiene, sin usar ciclos.
        // Proceso ejer23
        //     Definir cadena como caracter
        //     cadena = Leer("Ingrese algo:")
        //     Escribir "La cantidad de elementos que tiene es de ", Longitud(cadena)
        // FinProceso
        let cadena = [];
        cadena = document.getElementById("cadena").value;
        let resp = document.getElementById("resp");
         resp.textContent=`La cantidad de elementos que tiene es de ${cadena.length}`;
    }
    
    ejer24(){
        // Dado un arreglo indicar cuántos elementos tiene, sin usar ciclos.
        // Proceso ejer24
        //     Definir un arreglo
        //     arreglo = [1, 2, 3, 4, 5]
        //     Escribir "El arreglo tiene ", Longitud(arreglo), " elementos."
        // FinProceso
        let arreglo = [1, 2, 3, 4, 5];
        let resp = document.getElementById("resp")
         resp.textContent=`El arreglo tiene ${arreglo.length} elementos.`;
    }
    
 }
const numero = new Numeros();




