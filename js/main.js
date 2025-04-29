const submited =() => {
  let uname = document.forms.username.value;
  let password = document.forms.password.value;
  let cpassword = document.forms.confirmpassword.value;
  let email = document.forms.email.value;
  if(uname.length < 4){
      document.getElementById("error1").innerHTML = "please enter your Username..!";
      return false;
  }
  if(password.length < 6){
      document.getElementById("error2").innerHTML = "Please enter min 6 charaters";
      return false;
  }
  if(password != cpassword){
      document.getElementById("error3").innerHTML="Passwor doesn't match";
      return false;
  }
  if(email.length < 4){
      document.getElementById("error5").innerHTML="please enter your Fathername..!";
      return false;
  }
  if(uname.length >= 4 && password.length >= 6 && password.length == cpassword && 
       email.length >=4){
      const uInfo =[password, email];
      localStorage.setItem(uname, uInfo);
      document.forms.username.value="";
      document.forms.password.value="";
      document.forms.email.value="";
  }
}
