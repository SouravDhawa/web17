// write code here, dont change anything in HTML and css files 
// refer to id's mentioned in html files carefully
// Follow the exact column order for tables,for eg: name should be filled under "name" column 
// we are using form here, make sure you are using "submit" eventListener , or else you will get 0 marks

document.querySelector("form").addEventListener("submit",report)

function report(){
    event.preventDefault()
    var tr=document.createElement("tr")

    var td1=document.createElement("td")
    var images=document.createElement("img")
    var image=document.querySelector("#image").value
    console.log(image)
    images.src=image;
    td1.append(images)

    var td2=document.createElement("td")
    var name=document.querySelector("#name").value
    td2.innerText=name

  var td3=document.createElement("td")
    var batch=document.querySelector("#batch").value
    td3.innerText=batch

    var td4=document.createElement("td")
    var dsa=document.querySelector("#dsa").value
    td4.innerText=dsa

    var td5=document.createElement("td")
    var skillathon=document.querySelector("#cs").value
    td5.innerText=skillathon


    var td6=document.createElement("td")
    var coding=document.querySelector("#coding").value
    td6.innerText=coding
    
    var td7=document.createElement("td")
    var total=(((Number(dsa)+Number(skillathon)+Number(coding))/30)*100)
    // console.log(total)
    td7.innerText=total
    
    console.log(name,batch,dsa,skillathon,coding,total)
    var td8=document.createElement("td")
    if(total>=50){
        td8.innerText="regular"
        td8.style.backgroundColor="green"
    }else{
        td8.innerText="async"
        td8.style.backgroundColor="red"
    }

    tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
    document.querySelector("tbody").append(tr)
}