let userName = document.querySelector(".user-name")
const editBtn = document.querySelector(".edit-btn")


let requestsTitle = document.querySelector(".requests-num")
let numOfConnections = document.querySelector(".num-of-connections")
let confirmBtn = document.querySelectorAll(".confirm")
let rejectBtn = document.querySelectorAll(".reject")
/* 
    Cuando se da click al boton de editar se muestra un prompt
    en el que escribir el nuevo nombre luego el nombre previo 
    se cambia por el nuevo
*/
const getNewName = () =>{
    let newName = prompt("Input the new name")
    return newName
}

editBtn.addEventListener("click", () => {
    let newUserName = getNewName()
    userName.innerText = newUserName
})

const removeDiv = () =>{
    
}

// Remueve el div de la solicitud
// podria hacer estos bloques en una funcion pero por ahora funciona
let currentRequests = 2;
let addedConnections = 0;
confirmBtn.forEach((btn) => {
    let userDiv = btn.closest(".user")
    btn.addEventListener("click", () =>{
        userDiv.remove()
        currentRequests -= 1
        addedConnections += 1
        requestsTitle.innerText = `Solicitudes de Conexion(${currentRequests})`
        numOfConnections.innerText = `${addedConnections}`
    })
})

// Remueve el div si se rechaza
rejectBtn.forEach((btn) => {
    let userDiv = btn.closest(".user")
    btn.addEventListener("click", () =>{
        userDiv.remove()
        currentRequests -= 1
        requestsTitle.innerText = `Solicitudes de Conexion(${currentRequests})`
    })
})
