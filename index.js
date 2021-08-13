$("#buttonclick").on("click", function(event){
    var emailVal = $("#emailId").val();
    var passVal = $("#passId").val();
    var emailSuccess;
    var passSuccess;
    var validateEmail = emailVal.match(/\S+@\S+/)?emailSuccess=true:emailSuccess=false;
    var validatePass = (passVal.length>6)?passSuccess=true:passSuccess=false;
    console.log(validateEmail);
    console.log(validatePass);
    var validLogin = (validateEmail == true && validatePass == true)?alert("Login success!"):alert("Login failed");
    
})