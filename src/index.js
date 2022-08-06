import requeritionForm from "./modules/requerition"
import Valid from "./modules/ValidForm"

let enviar = document.querySelector(".enviar")
let requisition = document.querySelector(".requerition")
let display = document.querySelector(".display")

document,addEventListener("click", e =>{
    let action = e.target;
    e.preventDefault()
    if(action.classList.contains("requerition")){
        enviar.style.display = "inline";
        let tag = action.tagName.toLowerCase()
        if(tag === "a"){
            let data =requeritionForm(action, display)
        }
    }
    // if(action.classList.contains("enviar")){
    //     let nome = document.querySelector("#nome")
    //     let sobrenome = document.querySelector("#sobrenome")
    //     let idade = document.querySelector("#idade")
    //     let valid = new Valid()
    //     valid.validData(nome.value, sobrenome.value, idade.value)
    // }
})