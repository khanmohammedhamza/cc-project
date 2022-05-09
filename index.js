//Function for validation of the form
function formValidation()
{
    
    var uname = document.registration.username;
    var uemail = document.registration.email;
    var sugg = document.registration.sugg;   
    if(allLetter(uname))
    {
        if(ValidateEmail(uemail))
        {
            if (alphanumeric(sugg))
            { 
         
            }     
        } 
    }

    return false;
}

//Function for validation of Name
function allLetter(uname)
{ 
    var letters = /^[A-Za-z]+$/;
    if(uname.value.match(letters))
    {
        return true;
    }
    else
    {
        alert('Username must have alphabet characters only');
        uname.focus();
        return false;
    }
}



//Function for validation of Suggestion
function alphanumeric(sugg)
{ 
    var letters = /^[0-9a-zA-Z]+$/;
    if(!sugg.value.match(letters))
    {
        alert('Please Fill your suggestions!!');
        sugg.focus();
        return false;
        
    }
    else
    {
        alert('Your Suggestions has been Successfully Submitted');
        window.location.reload()
        return true;
    }
}



//Function for validation of Email
function ValidateEmail(uemail)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.value.match(mailformat))
    {
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
}

