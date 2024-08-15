document.getElementById('form1').addEventListener('login',function(event)){
    event.preventDefault();
    const vaildemailid = 'aishwarya16@gmail.com';
    const vaildpassword = 'sweety16';
    const emailid = document.getElementById('emailid').Value;
    const password =document.getElementById('password').value;
    if(username === validname && password === vaildpassword){
       altert('login successful!');
       <a href = "home.html"></a>;
    } else {
        document.getElementById('error').innertext = 'invalid emailid or password.';
        document.getElementById('error').style.display = 'block';
    }

};