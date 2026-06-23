let imgbox=document.getElementById("imgbox")
let qrimg=document.getElementById("qrimg")
let qrtext=document.getElementById("qrtext")

function generateQR(){
    if(qrtext.value.length > 0){
        qrimg.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
        qrimg.classList.add("class","showqr")

    }
    else{
        qrtext.classList.add("shake-animation")
        setTimeout(()=>{
            qrtext.classList.remove("shake-animation")
            
        },1000)
    }

}

let btn=document.querySelector("button")
btn.addEventListener("click",generateQR)