//console.log('Listado de Personas');

const personas = [ //Al estar estas clases dentro de la misma carpeta se pueden usar sin problemas
    new Persona('Juan','Perez'),
    new Persona('Karla','Lara'),
    new Persona('Cesar','Morales')
];

function mostrarPersonas(){
    //console.log('Mostrar Personas');
    let texto = '';
    
    

    for(let persona of personas){
        console.log(persona);
        texto +=`<li>${persona.nombre} ${persona.apellido}</li>`;
        
    }

    document.getElementById('personas').innerHTML = texto;
    
    
}

function agregarPersona(){
    const forma = document.forms['forma'];//Es otra forma de capturar lo que hay en las cajas de texto
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    if(nombre.value !='' && apellido.value !=''){
        const persona = new Persona(nombre.value,apellido.value);
        console.log(persona);
        personas.push(persona);
        
    }else{
        alert("No hay informacion que agregar");
    }
    mostrarPersonas();
    
}

