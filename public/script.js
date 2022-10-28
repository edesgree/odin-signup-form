// app
const app = () => {
    const pwdInput1 = document.querySelector('#password1');
    const pwdInput2 = document.querySelector('#password2');
    const submitBtn = document.querySelector('#submit');
    const form = document.querySelector('#signup-form');

    submitBtn.addEventListener('click', (e) => {
        console.log(pwdInput1.value);
        console.log(pwdInput2.value);
    });
    pwdInput2.addEventListener('change', () => {
        if (pwdInput1.value !== pwdInput2.value) {
            pwdInput2.classList.add('error');
            submitBtn.classList.add('notvalid');
            submitBtn.preve
        }

    });
    console.log(form);
    // form.addEventListener("submit", (event) => {
    //     // if the email field is valid, we let the form submit
    //     if (!pwdInput2.validity.valid) {
    //         // If it isn't, we display an appropriate error message
    //         showError();
    //         // Then we prevent the form from being sent by canceling the event
    //         event.preventDefault();
    //     } else {
    //         console.log("click form")
    //     }
    // });
}

//play app
app();