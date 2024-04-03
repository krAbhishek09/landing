function sendMail() {

    var params={
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        massage: document.getElementById("massage").value,
    }
    emailjs.send("service_t906a18","template_jkv7h59",params).then((res)=>{
        console.log(res);
        alert("Your  massage sent Successfully!")
    })
    .catch(err => console.log(err))

    
}