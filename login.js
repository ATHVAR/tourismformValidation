
var em=document.getElementById('em')
var pass=document.getElementById('pass');
var progressBar=document.getElementById('progressBar');
var mob=document.getElementById('mob');
var error1=document.getElementById('err1');
var error2=document.getElementById('err2');
var error3=document.getElementById('err3');
var regexNumber = /^\d{10}$/;
var spclFormat = /^([0-9]{3}[\-. ][0-9]{3}[\-. ][0-9]{4})$/;
var regexEmail=/^([A-Za-z0-9\-#_.]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
 var regexPwd=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
 var regexPwdmed=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{5,7}$/;
var regexPwdpoor=/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{1,4}$/;
 var isValid = true;

function validate(){

//  email validation
    if(regexEmail.test(em.value)){
        isValid = true;
    }
    else{
        error1.innerHTML="Enter proper Email Id";
        error1.style.color = "white";
        error1.style.backgroundColor='red'
        em.style.border='1px solid red';
        isValid =  false;
    }
 // password verification
    if(regexPwd.test(pass.value)){
      error3.innerHTML="Password is Strong";
      error3.style.color = "green";
      progressBar.style.width = "100%";
      progressBar.classList.add("bg-success");
      progressBar.classList.remove("bg-danger");
      progressBar.classList.remove("bg-warning");
      isValid = true;
  }
  else if( regexPwdmed.test(pass.value)){
    error3.innerHTML="Password is too Weak";
      error3.style.color = "orange";
      progressBar.style.width = "75%";
      progressBar.classList.add("bg-warning");
      progressBar.classList.remove("bg-danger");
      progressBar.classList.remove("bg-success");

      isValid = false;
  }
  else if( regexPwdpoor.test(pass.value)){
    error3.innerHTML="Password is too poor";
      error3.style.color = "red";
      progressBar.style.width = "25%";
      progressBar.classList.add("bg-danger");
      progressBar.classList.remove("bg-warning");
      progressBar.classList.remove("bg-success");
      isValid = false;
  }
  else{
    error3.innerHTML="Enter min.8 chara, at least one uppercase,one lower case, must contain at least one number";
    error3.style.color = "white";
    pass.style.border="1px solid red";
    error3.style.backgroundColor='red'
    isValid = false;
  }
// mob num validation
if (spclFormat.test(mob.value)) {
  isValid = true;
}
 else if (regexNumber.test(mob.value)) {
 
  isValid = true;
} 
else {
  error2.innerHTML = "Accept numbers only & should contain 10 digits or be in the format XXX-XXX-XXXX or XXX.XXX-.XXX or XXX XXX XXXX";
  error2.style.color = "white";
  error2.style.backgroundColor = 'red';
  mob.style.border = '1px solid red';
  isValid = false;
}
   
     return isValid;
  }
   
    
   