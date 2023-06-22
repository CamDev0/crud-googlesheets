
//validation
const formValidation = document.getElementById('formValidation');

formValidation.addEventListener('submit', (v) => {
    v.preventDefault();

    let user = formValidation.user.value;
    console.log(user);
    let pass = formValidation.password.value;
    console.log(pass);

     if (formValidation.user.value == "admin" && formValidation.password.value == "admin")
     {
        location.href = './index.html';
     }

})
