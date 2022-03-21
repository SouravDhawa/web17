var data = [
    {
        imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi1.jpg.pagespeed.ic.mkSk-Af1ka.webp",
        name:"LATEST MEN’S SNEAKER",
        price:"$25.00",
        strikedOffPrice:"$95.00"
    },{
        imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi2.jpg.pagespeed.ic.uBrpABaJqp.webp",
        name:"LATEST MEN’S SNEAKER",
        price:"$35.00",
        strikedOffPrice:"$100.00"
    },{
        imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi3.jpg.pagespeed.ic.iO_cFEPy2K.webp",
        name:"LATEST MEN’S SNEAKER",
        price:"$35.00",
        strikedOffPrice:"$100.00"
    },
    {
        imgUrl:"https://preview.colorlib.com/theme/eiser/img/product/inspired-product/xi4.jpg.pagespeed.ic.kmiQW8I5wx.webp",
        name:"LATEST MEN’S SNEAKER",
        price:"$35.00",
        strikedOffPrice:"$100.00"
    }
];

data.map(function (ele){
    var box=document.createElement("div")


    var image=document.createElement("img")
    image.src=ele.imgUrl
    var name=document.createElement("h4")
    name.innerText=ele.name

    mainbox=document.createElement("div")
    mainbox.setAttribute("id","mainbox")

    box1=document.createElement("div")
    box1.setAttribute("id","box1")

    var price=document.createElement("h3")
    price.innerText=ele.price

    box2=document.createElement("div")
    box2.setAttribute("id","box2")
    
    var strikedOffPrice=document.createElement("h5")
    strikedOffPrice.innerText=ele.strikedOffPrice

    mainbox.append(box1,box2)
    box2.append(strikedOffPrice)
    box1.append(price)
    box.append(image,name,mainbox)

    document.querySelector("#container").append(box)
});