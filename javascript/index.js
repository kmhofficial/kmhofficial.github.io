            var x=document.getElementById('login');
            var y=document.getElementById('register');
            var z=document.getElementById('btn');
            var pay=document.getElementById('payment');
            function register(){
                x.style.left="-450px";
                y.style.left="50px";
                z.style.left="110px";
                pay.style.left="10px";
                pay.style.display="none";
            }
            function login(){
                x.style.left="50px";
                y.style.left="450px";
                z.style.left="0px";
                pay.style.left="450px"
            }
           
            function pswcheck(){
                if (/[A-Z]/g.test(registerform.psw1.value)) {
                    document.getElementById("pswerror").innerHTML="";
                } else {
                    document.getElementById("pswerror").innerHTML="<img src='media/cross.svg' width ='11px' height='11px'> At least 1 uppercase letters";
                    document.getElementById("pswerror").style.color="#FF0000";
                    return false;
                }
                if (/[0-9]/g.test(registerform.psw1.value)) {
                    document.getElementById("pswerror").innerHTML="";
                    
                } else {
                    document.getElementById("pswerror").innerHTML="<img src='media/cross.svg' width ='11px' height='11px'> At least 1 number";
                    document.getElementById("pswerror").style.color="#FF0000";
                    return false;
                }
                if (registerform.psw1.value.length>=8) {
                    document.getElementById("pswerror").innerHTML="";
                    
                } else {
                    document.getElementById("pswerror").innerHTML="<img src='media/cross.svg' width ='11px' height='11px'> At least 8 characters";
                    document.getElementById("pswerror").style.color="#FF0000";
                    return false;
                }
                if (registerform.psw1.value==registerform.psw2.value) {
                    document.getElementById("pswcheckerror").innerHTML="";
                    
                } else {
                    document.getElementById("pswcheckerror").innerHTML="<img src='media/cross.svg' width ='11px' height='11px'> Passwords don't match";
                    document.getElementById("pswcheckerror").style.color="#FF0000";
                    return false;
                }
                document.getElementById('payment').style.display="block";
                y.style.left="450px";
                return false;
            }
            
            var sidemenubox=document.getElementById('menuitems');
            var icon=document.getElementById('bars');
            function sidemenu(){
                if (document.getElementById('menucheck').checked==true) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                    sidemenubox.style.left="300px";
                    document.getElementById('login-form').style.display='none';
                } else {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                    sidemenubox.style.left="-300px";
                }
            }
            
            var w = window.matchMedia("(max-width: 964px)")
            myFunction(w) 
            w.addListener(myFunction) 
            function myFunction(w) {
                if (w.matches) { 
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                    sidemenubox.style.left="-300px";
                    document.getElementById('menucheck').checked=false;
                } else {
                    sidemenubox.style.display="block";
                    sidemenubox.style.transition="0s";
                }
              }
              var Password=document.getElementById('psw');
              var showpass=document.getElementById('showpsw');
              document.getElementById('pswshow').style.color='red';
              function showhide(){
                if (showpass.checked == true) {
                    Password.setAttribute('type','text');
                    document.getElementById('pswshow').classList.add('fa-solid','fa-eye');
                    document.getElementById('pswshow').style.color='green';
                } else {
                    Password.setAttribute('type','password');
                    document.getElementById('pswshow').classList.remove('fa-solid','fa-eye');
                    document.getElementById('pswshow').classList.add('fa-solid','fa-eye-slash');
                    document.getElementById('pswshow').style.color='red';
                }
              }
              $(function() {
                var sw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                var sh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
                $("html, body").css({"width":sw,"height":sh});
            });