let userName = document.querySelector(".user-name")
const editBtn = document.querySelector(".edit-btn")

let requestNum = document.querySelector(".requests-num")
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



confirmBtn.forEach((btn) => {
    let userDiv = btn.closest(".user")
    btn.addEventListener("click", () => {
        userDiv.remove()
    })
})
