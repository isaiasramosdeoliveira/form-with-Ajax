export default class Valid{
    validData(nome, sobrenome, senha, idade, msg){
        if(nome==="" && sobrenome==="" && senha === "" && idade === ""){
            msg.style.backgroundColor = "#D85050"
            msg.style.color = "#8C1313"
            msg.innerText = "Preencha os campos."
        }
        if(nome === ""){msg.innerText = "Preencha com seu nome."} 
        if(idade === ""){msg.innerText = "Preencha com sua idade."}
        if(sobrenome === ""){msg.innerText = "Preencha com seu sobrenome."}
        if(senha === ""){msg.innerText = "Preencha com sua senha"}
        if(nome !=="" && sobrenome!=="" && senha !== "" && idade !== ""){
            msg.style.backgroundColor = "#3EC18F"
            msg.style.color = "#1B895C"
            msg.innerText = "Cadastrado."
        }
    }
}