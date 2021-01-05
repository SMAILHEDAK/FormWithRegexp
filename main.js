//Email checking function

function checkEmail(){
let mail = document.registrationForm.email.value;
reg = mail.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/i);
if(mail!=reg){
    document.getElementById("errorMail").innerHTML = "Please enter a valid mail address. <br>";
}
else{
    document.getElementById("errorMail").innerHTML = "";
}
}


//Password checking function

function checkPsw(){
    let pwd = document.registrationForm.psw.value;
    reg = pwd.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
    if(pwd!=reg){
        document.getElementById("errorPass").innerHTML = "Please enter a password that contains minimum 8 characters with atleast 1 capital letter, 1 minimal letter and 1 number. <br>";
    }
    else{
        document.getElementById("errorPass").innerHTML = "";
    }
    }


 //Password matching checking function

function passMatch(){
    let pwd = document.registrationForm.psw.value;
    let repPsw = document.registrationForm.pswRep.value;
    if(pwd != repPsw){
        document.getElementById("errorPass2").innerHTML = "The passwords don't match. <br>";
    }
    else{
        document.getElementById("errorPass2").innerHTML = "";
    }
    }
