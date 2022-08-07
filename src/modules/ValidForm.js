
export default class Valid{
    validData(nome, sobrenome, senha, idade, msg){
        return new Promise((resolve, reject)=>{
            if(nome==="" || sobrenome==="" || senha === "" || idade === ""){
                msg.style.backgroundColor = "#D85050"
                msg.style.color = "#8C1313"
                reject(msg.innerText = "Preencha todos os campos.")
            }
            if(nome !=="" && sobrenome!=="" && senha !== "" && idade !== ""){
                msg.style.backgroundColor = "#3EC18F"
                msg.style.color = "#1B895C"
                resolve(msg.innerText = "Cadastrado.")
            }
        })
    }
}


