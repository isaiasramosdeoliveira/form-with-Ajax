import resultForm from "./result"
export default class Valid{
    validData(nome, sobrenome, idade){
        if(nome, sobrenome, idade === ""){
            error.style.display = "block";
        }
        if(nome, sobrenome, idade !== ""){
            error.style.display = "none";
            success.style.display = "block";
            resultForm(nome,sobrenome, idade)
        }
    }
}