function sendMail(params){
    var tempParams = {
        from_name:document.getElementById("fromName").value,
        from_email:document.getElementById("fromEmail").value,
        message:document.getElementById("msg").value,
    };


    /* Check ERRORS */
    const errorNodes = document.querySelectorAll(".error");

    if(document.getElementById("fromName").value.length <1){
        errorNodes[0].innerText = "Please fill in this field";
        from_name.classList.add("error-border");
        errorFlag = true;
    }

    if(!emailIsValid(document.getElementById("fromEmail").value)) {
        errorNodes[1].innerText = "Invalid email address";
        from_email.classList.add("error-border");
        errorFlag = true;
    }

    if(document.getElementById("msg").value.length <1) {
        errorNodes[2].innerText = "Please enter message";
        message.classList.add("error-border");
        errorFlag = true;
    }

    //Check if email valid
    function emailIsValid(email){
        let pattern = /\S+@\S+\.\S+/; 
        return pattern.test(email);
    }

    /* Send email with emailJS */
    emailjs.send('service_u1cv2rl','template_muvgl6e',tempParams,'GrkSeRXgiVa62PC1P')
    .then(function(res){
    console.log("success", res.status);
    location.reload();
    })
}
