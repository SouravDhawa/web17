document.querySelector("form").addEventListener("submit",todolist)

function todolist(){
    event.preventDefault()
    var name=document.querySelector("#name").value
    var itmqty=document.querySelector("#qty").value
    var itmpriority=document.querySelector("#priority").value

    console.log(name,itmqty,itmpriority);

    var tr=document.createElement("tr")

    var td1=document.createElement("td")
    td1.innerText=name
    var td2=document.createElement("td")
    td2.innerText=itmqty

    var td3=document.createElement("td")
    td3.innerText=itmpriority

    tr.append(td1,td2,td3);
    document.querySelector("tbody").append(tr)
}