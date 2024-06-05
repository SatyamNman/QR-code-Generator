const qrImg = document.getElementById("qrImg");
const qrText = document.getElementById("qrText");
const imgBox = document.getElementById("imgBox");
const errorMsg = document.getElementById("errorMsg");

function generateQr(){
    // imgBox.classList.remove("show-img");
    // errorMsg.innerHTML = "";

    if (qrText.value.length > 0){
        qrImg.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data= " + qrText.value ;  
        imgBox.classList.add("show-img");
        errorMsg.innerHTML = "";
    }
    else {
        qrText.classList.add("error");
        imgBox.classList.remove("show-img");
        errorMsg.innerHTML = "Input field can't be empty. Please enter valid text or URL.";
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 500);
    }
}