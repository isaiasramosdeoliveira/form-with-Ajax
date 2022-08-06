export default function requeritionForm(action, display){
    let request = obj => {
        let xhr = new XMLHttpRequest()
        xhr.open(obj.method, obj.url)
        xhr.send(null)
        xhr.addEventListener("load", () =>{
            if(xhr.status >= 200 && xhr.status <=300){
                obj.success(xhr.response)
            }else{
                obj.error(xhr.status)
            }
        })
    }
    
    function requerition(){
        let href = action.getAttribute("href")
        let obj = {
            method: "GET",
            url:href,
            success(response){
                result(response)
            },
            error(error){
                console.log(error);
            }
        }
        request(obj)
    }
    function result(response){
        return display.innerHTML = response
    }
    requerition()
}