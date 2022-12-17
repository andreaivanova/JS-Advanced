function validate() {
    let btn = document.getElementById('submit');

    //validating the input data
    let regexUsername = /[A-Za-z0-9]{3,20}/;
    let regexEmail = /.+@.*(\.{1,}).*/;
    let regexPassword = /[A-Za-z0-9_]{5,15}/;
    let regexCompanyNum = /^[1-9]\d{3}$/;

    //reading the input
    let username = document.getElementById('username');
    let email = document.getElementById('email');
    //the password and the confirm-password must match
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirm-password');
    let isACompany = document.getElementById('company');
    let companyInfo = document.getElementById('companyInfo');
    let companyNumber = document.getElementById('companyNumber');
    let output = document.getElementById('valid');

    //adding event listeners to the submit button and the checkbox
    btn.addEventListener('click', onClick);
    
    isACompany.addEventListener('change', onChange);
    
    
    
    let usernameValidity;
    let passwordValidity;
    let confirmPassValidity;
    let emailValidity; 
    let companyNumberValidity;
    //let usernameValidity = false;
    function onClick(event) {
        event.preventDefault();
        // output.style.display = 'block';

        //testing the username
        if (!regexUsername.test(username.value)) {
            username.style.borderColor = 'red';
            usernameValidity = false;

        } else if (regexUsername.test(username.value)) {
            username.style.borderColor = '';
            usernameValidity = true;
           
        }

        //testing the email 
        if (!regexEmail.test(email.value)) {
            email.style.borderColor = 'red';
            emailValidity = false;
        } else if (regexEmail.test(email.value)) {
            email.style.borderColor = '';
            emailValidity = true;
        }

        //testing the password
        if (!regexPassword.test(password.value) ) {
            //&& password.value !== confirmPassword.value)
          
            password.style.borderColor = 'red';
            passwordValidity = false;
        } else if (regexPassword.test(password.value)) {
            password.style.borderColor = '';
            passwordValidity = true;
            if (password.value === '' || confirmPassword.value === ''){
                password.style.borderColor = 'red';
                confirmPassword.style.borderColor = 'red';
                passwordValidity = false;
            }
            if (password.value !== confirmPassword.value){
                password.style.borderColor = 'red';
                confirmPassword.style.borderColor = 'red';
                passwordValidity = false
            }
        }

        // if (password.value === '' || confirmPassword.value === ''){
        //     password.style.borderColor = 'red';
        //     confirmPassword.style.borderColor = 'red';
        //     passwordValidity = false;
        // }
        // if (password.value !== confirmPassword.value){
        //     password.style.borderColor = 'red';
        //     confirmPassword.style.borderColor = 'red';
        //     passwordValidity = false
        // }

        //testing the confirm password

        if (!regexPassword.test(confirmPassword.value) ) {
            confirmPassword.style.borderColor = 'red';
            confirmPassValidity = false;
        } else if (regexPassword.test(confirmPassword.value)) {
            confirmPassword.style.borderColor = '';
            confirmPassValidity = true;
            if (password.value !== confirmPassword.value){
                password.style.borderColor = 'red';
                confirmPassword.style.borderColor = 'red';
                passwordValidity = false
            }
            if (password.value === '' || confirmPassword.value === ''){
                password.style.borderColor = 'red';
                confirmPassword.style.borderColor = 'red';
                passwordValidity = false;
            }
        }

        //testing the company number

        if (!regexCompanyNum.test(companyNumber.value)) {
            companyNumber.style.borderColor = 'red';
            companyNumberValidity = false;
        } else if (regexCompanyNum.test(companyNumber.value)) {
            companyNumber.style.borderColor =  'none';
            companyNumberValidity = true;
        }
        if (usernameValidity && emailValidity && passwordValidity && confirmPassValidity ){

            //&& companyNumberValidity
            if( !companyNumberValidity){
                output.style.display = 'none';
            }
            
            output.style.display = 'block';
        } else {
            output.style.display = 'none';
        }

    }
    function onChange(event) {

        if (event.target.checked) {
            companyInfo.style.display = 'block';
            if (usernameValidity && emailValidity && passwordValidity && confirmPassValidity && companyNumberValidity ){

                //&& companyNumberValidity
                output.style.display = 'block';
            } else {
                output.style.display = 'none';
            }
        } else {
            companyInfo.style.display = 'none';
            output.style.display = 'none';
        }
        
        

    }

}
//THE 1ST SOLUTION GIVES 66/100, THERE IS A PROBLEM WITH THE COMPANYINFO 
//THE CORRECT SOLUTION:

// function validate() {
//     document.querySelector("#submit").type = "button";
//     document.querySelector("#company").addEventListener("change", (e) => {
//       console.log(e.target);
//       if (document.querySelector("#company").checked) {
//         document.querySelector("#companyInfo").style.display = "block";
//       } else {
//         document.querySelector("#companyInfo").style.display = "none";
//       }
//     });
   
//     document.querySelector("#submit").addEventListener("click", (e) => {
//       let validOut = [];
//       let userName = document.querySelector("#username");
//       let email = document.querySelector("#email");
//       let passWord = document.querySelector("#password");
//       let confirmPass = document.querySelector("#confirm-password");
//       let checkBox = document.querySelector("#company");
//       let userTest = /^[A-Za-z0-9]{3,20}$/;
//       let emailTest = /^[^@.]+@[^@]*\.[^@]*$/;
//       let passTest = /^[\w]{5,15}$/;
   
//       //console.log(checkBox.checked);
   
//       if (userTest.exec(userName.value) === null) {
//         userName.style.borderColor = "red";
//         validOut.push(false);
//       } else {
//         userName.style.borderColor = "";
//         validOut.push(true);
//       }
   
//       if (emailTest.exec(email.value) === null) {
//         email.style.borderColor = "red";
//         validOut.push(false);
//       } else {
//         email.style.borderColor = "";
//         validOut.push(true);
//       }
   
//       if (
//         passWord.value === confirmPass.value &&
//         passTest.exec(confirmPass.value) != null &&
//         passTest.exec(passWord.value) != null
//       ) {
//         confirmPass.style.borderColor = "";
//         passWord.style.borderColor = "";
//         validOut.push(true);
//       } else {
//         confirmPass.style.borderColor = "red";
//         passWord.style.borderColor = "red";
//         validOut.push(false);
//       }
   
//       if (checkBox.checked) {
//         let company = document.querySelector("#companyNumber");
//         if (company.value < 1000 || company.value > 9999) {
//           company.style.borderColor = "red";
//           validOut.push(false);
//         } else {
//           company.style.borderColor = "";
//           validOut.push(true);
//         }
//       }
   
//       if (!validOut.includes(false)) {
//         document.querySelector("#valid").style.display = "block";
//       } else {
//         document.querySelector("#valid").style.display = "none";
//       }
//     });
//   }
   