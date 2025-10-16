function mostrarMensaje(){
    console.log("hola como estas")
}

function agregarTarea(){
    // 1. capturamos el elemento input
    let input=document.querySelector("#nuevaTarea")

    // 10. para comprobar si elinput esta vacio
    if (input.value=="")
    {
        alert("el input debe contener un texto")
        return
    }

    // 2. capturamos el valor de input
    let valorInput=input.value

    // 3. capturamos el elemento ul
    let ul=document.querySelector("#listaTareas")
    // 4. creamos un elemento li
    let li=document.createElement("li")
    // 5. le asignamos como contenido del li el valor capturado de input
    li.textContent=valorInput

    // 7. creamos un boton eliminar
    let button=document.createElement("button")
    button.textContent="Eliminar"

    // 8. para que permita eliminar la tarea que esta al costado del boton eliminar
    button.onclick=function(){li.remove()}

    // 7.
    li.appendChild(button)
    // 6. le agregamos como hijo el "li" al elemento padre "ul"
    ul.appendChild(li)
    
    // 9. para que elimine lo que esta en la barra de escritura cada que agregue algo. Limpia lo que tiene previamente escrito
    document.querySelector("#nuevaTarea").value=""
    // 11. funcion focus en el input: lo mantienen activo. Listo para ingresar cualquier otro texto. 
    input.focus()
}