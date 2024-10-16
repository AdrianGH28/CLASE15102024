//definicion de una funcion;
/*

function hello(){
    console.log('Hola clase');
    console.log('5IV7');
}

//llamada a la funcion
hello();
hello();
hello();
hello();
hello();
*/
/*
function hello(){
    return 'Hola clase'
}

const result = hello()

console.log(result);
*/
//funcion que retorna otra funcion
/*
function hello(){
    return function(){
        return 'Hola soy la funcion 2';
    }
}

console.log(hello()());
*/
/*
function add(x){
    console.log(x);
}
    add(5)
    */
/*
    function add(x,y=0){
        if(y===undefined){
            y=0
        }
        console.log(x+y);
    }

    add(5,undefined)
    */

    /*
    //parametro de tipo cadena 
    function add(name){
        console.log('Hola' + name);
    }
    
    add("Clase 35");
    */

//OBJETOS
const user = {
    nombre:'Adrian',
    apellidoP:'Gonzalez',
    apellidoM:'Hernanz',
    edad:17,
    direccion:{
        calle:'Mar Mediterraneo',
        no:98,
        colonia:'Ignacio Zaragoza',
        delegacion:'Miguel HIgalgo'},
        amigos: ['Bruno','Jomita'],
        activo:true
        }
console.log(user);
        //consola nombre apellidoP apellidoM
        //alert activo;
        //console edad
        //alert calle no colonia delegacion
        //console amigos

const nombreCompleto = {
nombre:'Adrian',
    apellidoP:'Gonzalez',
    apellidoM:'Hernandez',
    
}
console.log(nombreCompleto);
alert('Estado: Activo')
const edad = {
edad:17
}
console.log(edad);
alert('Calle: Mar Mediterraneo, No:98, Colonia: Ignacio Zaragoza, Delegacion:Miguel HIgalgo')
const amigos={
amigo1:'Bruno',
amigo2:'Jomita'
}
console.log(amigos);