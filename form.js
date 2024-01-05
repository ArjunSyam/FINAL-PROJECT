function checkfield(){
    console.log("hello");
    var name = document.getElementById("Name");
    var email = document.getElementById("email");


    var required = [name,email];
    var field = document.getElementById("not-all");
    let count = 0;

    for(let i=0;i<required.length;i++)
    {
        if(required[i].value.length == 0)
        {
            required[i].style.border = ".5px solid red";
            field.style.display = "block";
            count=1;

        }

        else
        {
            required[i].style.border = "0.5px solid green";
        }
    }

    if(count)
    {
        return false;
    }

    else{
        alert("Form Submited");
    }


}