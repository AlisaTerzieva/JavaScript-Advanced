function solve() {
    let inputUsername = $('input#username').val();
    let inputEmail = $('input#email').val();
    let inputPass = $('input#password').val();
    let inputPassConfirm = $('input#confirm-password').val();
    let inputCompanyNumber = $('input#companyNumber').val();
    let isValid = false;

    return function () {

        function isUsernameValid() {
            inputUsername = $('input#username').val();
            let usernameRegex = new RegExp('^([a-zA-Z\\d]{3,20})$');

            return usernameRegex.test(inputUsername);
        }

        function isEmailValid() {
            let isVaild = false;
            inputEmail = $('input#email').val();
            let emailRegex = new RegExp('^.*@.*?\\..*?$');
            if(inputEmail.match(emailRegex)){
                isVaild = true;
            }
            return isVaild;
        }

        function isPasswordValid() {
            let isValid = false;
            inputPass = $('input#password').val();
            inputPassConfirm = $('input#confirm-password').val();
            if(inputPass === inputPassConfirm){
                let passwordRegex = new RegExp('^([\\w]{5,15})$');
                isValid = passwordRegex.test(inputPass);
            }
            return isValid;
        }

        function isCompanyNumberValid() {
            inputCompanyNumber = $('input#companyNumber').val();
            let companyNumberRegex = new RegExp('^(\\d{4})$');

            return companyNumberRegex.test(inputCompanyNumber);
        }
        function validateInputFields() {
            if(!isUsernameValid()){
                $('#username').css('border-color', 'red');
                $('#valid').css('display', 'none');
            }
            else $('#username').css('border', '');

            if(!isEmailValid()){
                $('#email').css('border-color', 'red');
                $('#valid').css('display', 'none');
            }
            else $('#email').css('border', '');

            if(!isPasswordValid()){
                $('#password').css('border-color', 'red');
                $('#confirm-password').css('border-color', 'red');
                $('#valid').css('display', 'none');
            }
            else {
                $('#password').css('border', '');
                $('#confirm-password').css('border', '');
            }

            if ($("input[type=checkbox]").is(':checked')) {
                if (!isCompanyNumberValid()) {
                    $('#companyNumber').css('border-color', 'red');
                    $('#valid').css('display', 'none');
                }
                else $('#companyNumber').css('border', '');
            }
            else $('#companyNumber').css('border', '');

            if(isUsernameValid() && isEmailValid() && isPasswordValid()) {
                if ($("input[type=checkbox]").is(':checked')) {
                    isValid = isCompanyNumberValid();
                }
                else isValid = true;
            }
        }

        $('#submit').bind("click", function () {
            validateInputFields();
            if(isValid){
                $('#valid').css('display', 'block');
            }
            else $('#valid').css('display', 'none');

        });

        $('#company').bind("click", function () {
            $('#companyInfo').toggle();
        });
    }
}
