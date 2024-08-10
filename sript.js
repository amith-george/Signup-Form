
const form = document.querySelector("#signupform");

form.addEventListener("submit", function(event) {

    event.preventDefault();
    
    const first_name = document.querySelector("#first_name");
    const last_name = document.querySelector("#last_name");
    const email = document.querySelector("#email");
    const phone_number = document.querySelector("#phone_number");
    const password = document.querySelector("#password");
    const confirm_password = document.querySelector("#confirm_password");

    const fname = document.querySelector("#fname");
    const lname = document.querySelector("#lname");
    const address = document.querySelector("#address");
    const number = document.querySelector("#number");
    const pass = document.querySelector("#pass");
    const confirmpass = document.querySelector("#confirmpass");


    let errormessage = true;


    /* Removing the past invalid classes */

    [first_name, last_name, email, phone_number, password, confirm_password].forEach(input => {
        input.classList.remove("invalid");
    });

    /* Removing the past error texts */
    
    [fname,lname,address,number,pass,confirmpass].forEach(input =>{
        input.textContent = "";
    })



    if(first_name.value.trim() == ""){
        errormessage = false;
        first_name.classList.add("invalid");
        fname.textContent = "Enter a name!";
    }
    
    if(last_name.value.trim() == ""){
        errormessage = false;
        last_name.classList.add("invalid");
        lname.textContent = "Enter a name!";
    }
    
    if(email.value.trim() == ""){
        errormessage = false;
        email.classList.add("invalid");
        address.textContent = "Enter an email address!";
    }

    if(phone_number.value.trim() == ""){
        errormessage = false;
        phone_number.classList.add("invalid");
        number.textContent = "Enter a number!";
    }

    if(password.value.trim() == ""){
        errormessage = false;
        password.classList.add("invalid");
        pass.textContent = "Enter a valid password!";
    }

    if(confirm_password.value.trim() == ""){
        errormessage = false;
        confirm_password.classList.add("invalid");
        confirmpass.textContent = "Enter a valid password!";
    }

    if(errormessage == false)
    {
        return false;
    }
    
    
    if(password.value.trim() != confirm_password.value.trim())
    {
        pass.textContent = "Enter a valid password!";
        confirmpass.textContent = "Enter a valid password!";
        password.classList.add("invalid");
        confirm_password.classList.add("invalid");
        return false;
    }

    this.submit();
})