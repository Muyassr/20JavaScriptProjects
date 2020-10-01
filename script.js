const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function getFieldName(element) {
   return element.id.charAt(0).toUpperCase()+element.id.slice(1);
}

function showError(elemnt,message) {
    const parenty = elemnt.parentElement;
    parenty.className = 'form-control error';
    parenty.querySelector('small').innerText= message;
}

function showSuccess(element) {
    const parenty = element.parentElement;
    parenty.className = 'form-control success';
}

function checkRequired(filedsArr) {
    filedsArr.forEach(element => {
        if (element.value.trim() === "") {
            showError(element,`${getFieldName(element)} is required`);
        } else {
            showSuccess(element);
        }
    });
}

function checkLength(element, min, max) {
    const name = element.value;
    if (name.length < min) {
        showError(element,`${getFieldName(username)} must be more than `+min+` letters`);
    } else if (name.length > max) {
        showError(element,`${getFieldName(username)} must be less than `+max+` letters`);
    } else {
        showSuccess(element);
    }
}

function name(params) {
    

}

function checkEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
      } else {
        showError(input, 'Email is not valid');
      }
}

function checkPasswordsMatch(password, password2) {
    if (password.value===password2.value) {

    } else {
        showError(password2,`passwords dont match`);
    }
} 

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        checkRequired([username, email, password, password2]);
        checkLength(username, 3, 15);
        checkLength(password, 6, 25);
        checkEmail(email);
        checkPasswordsMatch(password, password2);
    });
    
 
