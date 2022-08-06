export default class Valid{
    validData(nome, sobrenome, senha, idade, msg){
        if(nome==="" || sobrenome==="" || senha === "" || idade === ""){
            msg.style.backgroundColor = "#D85050"
            msg.style.color = "#8C1313"
            msg.innerText = "Preencha os campos."
        }
        if(nome === ""){
            msg.innerText = "Preencha os campos."
        }
        if(nome !=="" && sobrenome!=="" && senha !== "" && idade !== ""){
            msg.style.backgroundColor = "#3EC18F"
            msg.style.color = "#8C1313"
            msg.innerText = "Cadastrado."
        }
    }
}