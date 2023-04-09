const loginForm = document.querySelector('.login-form');
const submitBtn = document.querySelector('button');


function onSubmit(event) {
    event.preventDefault();
    /*const formData = new FormData(event.currentTarget);
    console.log(formData);

    formData.forEach((input, name) => {
        console.log(name + ':' + input);
    })*/

    const formElems = event.currentTarget.elements;
    const email = formElems.email.value;
    const password = formElems.password.value;

    if(email === '' || password === '') {
        alert('Please fill in the necessary fields');
    } 
    const form = {
        email: email,
        password: password
    }

    console.log(form);
    event.currentTarget.reset();

}

loginForm.addEventListener('submit', onSubmit);