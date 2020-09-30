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

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        checkRequired([username, email, password, password2]);
        
    });
    
 
