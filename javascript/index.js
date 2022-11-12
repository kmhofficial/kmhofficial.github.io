var x = document.getElementById('login');
var y = document.getElementById('register');
var z = document.getElementById('btn');
var pay = document.getElementById('payment');
function register() {
    x.style.left = "-450px";
    y.style.left = "50px";
    z.style.left = "110px";
    pay.style.left = "10px";
    pay.style.display = "none";
}
function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
    pay.style.left = "450px"
}

function pswcheck() {
    
    if (/[A-Z]/g.test(registerform.psw1.value)) {
        document.getElementById("pswerror").innerHTML = "";
    } else {
        document.getElementById("pswerror").innerHTML = "<img src='media/cross.svg' width ='11px' height='11px'> At least 1 uppercase letters";
        document.getElementById("pswerror").style.color = "#FF0000";
        return false;
    }
    if (/[0-9]/g.test(registerform.psw1.value)) {
        document.getElementById("pswerror").innerHTML = "";

    } else {
        document.getElementById("pswerror").innerHTML = "<img src='media/cross.svg' width ='11px' height='11px'> At least 1 number";
        document.getElementById("pswerror").style.color = "#FF0000";
        return false;
    }
    if (registerform.psw1.value.length >= 8) {
        document.getElementById("pswerror").innerHTML = "";

    } else {
        document.getElementById("pswerror").innerHTML = "<img src='media/cross.svg' width ='11px' height='11px'> At least 8 characters";
        document.getElementById("pswerror").style.color = "#FF0000";
        return false;
    }
    if (registerform.psw1.value == registerform.psw2.value) {
        document.getElementById("pswcheckerror").innerHTML = "";

    } else {
        document.getElementById("pswcheckerror").innerHTML = "<img src='media/cross.svg' width ='11px' height='11px'> Passwords don't match";
        document.getElementById("pswcheckerror").style.color = "#FF0000";
        return false;
    }
    document.getElementById('payment').style.display = "block";
    y.style.left = "450px";
    return false;
}

var sidemenubox = document.getElementById('menuitems');
var menueicon = document.getElementById('bars');
function sidemenu() {
    if (document.getElementById('menucheck').checked == true) {
        menueicon.classList.remove('fa-bars');
        menueicon.classList.add('fa-xmark');
        sidemenubox.style.width = "140px";
        document.getElementById('login-form').style.display = 'none';
    } else {
        menueicon.classList.remove('fa-xmark');
        menueicon.classList.add('fa-bars');
        sidemenubox.style.width = "0";
    }
}

var w = window.matchMedia("(max-width: 964px)")
myFunction(w)
w.addListener(myFunction)
function myFunction(w) {
    if (w.matches) {
        menueicon.classList.remove('fa-xmark');
        menueicon.classList.add('fa-bars');
        document.getElementById('menucheck').checked = false;
    } else {
        sidemenubox.style.width = "100%";
    }
}

var Password = document.getElementById('psw');
var showpass = document.getElementById('showpsw');
document.getElementById('pswshow').style.color = 'red';
function showhide() {
    if (showpass.checked == true) {
        Password.setAttribute('type', 'text');
        document.getElementById('pswshow').classList.add('fa-solid', 'fa-eye');
        document.getElementById('pswshow').style.color = 'green';
    } else {
        Password.setAttribute('type', 'password');
        document.getElementById('pswshow').classList.remove('fa-solid', 'fa-eye');
        document.getElementById('pswshow').classList.add('fa-solid', 'fa-eye-slash');
        document.getElementById('pswshow').style.color = 'red';
    }
}
var cardtype=document.getElementById('cardnumber');
var cardicon =document.getElementById('card-logo');

function checkcardtype(){
    
    if (/^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/g.test(cardtype.value)) {
        cardicon.classList.add('fa-brands','fa-cc-mastercard');
        cardicon.style.color="green";
        return true;
    } else {
        cardicon.classList.remove('fa-brands','fa-cc-mastercard');
        cardicon.classList.add('fa-regular','fa-credit-card');
        cardicon.style.color="red";
    }

    if (/3[47][0-9]{13}$/g.test(cardtype.value)) {
        cardicon.classList.add('fa-brands','fa-cc-amex');
        cardicon.style.color="green";
        return true;
    } else {
        cardicon.classList.remove('fa-brands','fa-cc-amex');
        cardicon.classList.add('fa-regular','fa-credit-card');
        cardicon.style.color="red";
    }
    
    if (/(4\d{3})((-\d{4}){3}|(\s\d{4}){3}|\d{12})/g.test(cardtype.value)) {
        cardicon.classList.add('fa-brands','fa-cc-visa');
        cardicon.style.color="green";
        return true;
    } else {
        cardicon.style.color="red";
        cardicon.classList.remove('fa-brands','fa-cc-visa');
        cardicon.classList.add('fa-regular','fa-credit-card');
    }
    
    if (/^(?:2131|1800|35[0-9]{3})[0-9]{11}$/g.test(cardtype.value)) {
        cardicon.classList.add('fa-brands','fa-cc-jcb');
        cardicon.style.color="green";
        return true;
    } else {
        cardicon.classList.remove('fa-brands','fa-cc-jcb');
        cardicon.classList.add('fa-regular','fa-credit-card');
        cardicon.style.color="red";
    }

    if (/^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/g.test(cardtype.value)) {
        cardicon.classList.add('fa-brands','fa-cc-discover');
        cardicon.style.color="green";
        return true;
    } else {
        cardicon.classList.remove('fa-brands','fa-cc-discover');
        cardicon.classList.add('fa-regular','fa-credit-card');
        cardicon.style.color="red";
    }
}