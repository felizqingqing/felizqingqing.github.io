function CheckForm(){
        var x= document.getElementById("name").value;
        var y=document.getElementById("email").value;
        if (x=="" && y!=""){
        document.getElementById("namename").style.display="block";
        return false
        }
        else if(y=="" && x!=""){
        document.getElementById("emailemail").style.display="block";
        return false
        }
        else if (x=="" && y==""){
        document.getElementById("namename").style.display="block";
        document.getElementById("emailemail").style.display="block";
        return false
        }
        else {
        document.getElementById("namename").style.display="none";
        document.getElementById("emailemail").style.display="none";
        return true       
        }
    }
