const loginForm = document.querySelector('.login-form');
const submitBtn = document.querySelector('button');


function onSubmit(event) {
    event.preventDefault();
    /*const formData = new FormData(event.currentTarget);
    console.log(formData);

    formData.forEach((input, name) => {
        console.log(name + ':' + input);
    })*/
    const {elements: {email, password}} = event.currentTarget;

    //const formElems = event.currentTarget.elements;
    //const email = formElems.email.value;
    //const password = formElems.password.value;

    if(email.value === '' || password.value === '') {
        alert('Please fill in the necessary fields');
        return;
    } 
    const form = {
        email,
        password
    }    
    console.log(form);
    
    //console.log(`Email: ${email.value}, Password: ${password.value}`);
    event.currentTarget.reset();
}

loginForm.addEventListener('submit', onSubmit);