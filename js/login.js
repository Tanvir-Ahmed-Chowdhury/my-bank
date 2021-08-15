document.getElementById('login-submit').addEventListener('click', function(){
    //get user email
   const emailField = document.getElementById('user-email');
   const userEmail = emailField.value;
   //console.log(userEmail);

   //get user password
   const passwordField = document.getElementById('user-password');
   const userPassword = passwordField.value;
   //console.log(userPassword);

   //check email & password
   if(userEmail == 'tanvir@mail.com' && userPassword == 'secret'){
       //console.log('valid user');

       //go to anonther page by clicking button
       window.location.href = 'banking.html';
   }
});
