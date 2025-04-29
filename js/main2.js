const login =() => {
    let uname = document.forms.username.value;
    let password = document.forms.password.value;
    if(localStorage.getItem(uname) == null){
        document.getElementById("error1").innerHTML ="please enter vaild username";
        return false;
    }
    else{
        let uInfo = localStorage.getItem(uname);
        uInfoArray = uInfo.split(",");
        if (password != uInfoArray[0]){
            document.getElementById("error2").innerHTML = "incorrect password";
            return false;
        }
        else{
            document.getElementById("name").innerHTML = "Email:" + uInfoArray[1];
            // document.getElementById("error1").innerHTML ="";
            // document.getElementById("error2").innerHTML ="";
            return false;
        }
    }
}