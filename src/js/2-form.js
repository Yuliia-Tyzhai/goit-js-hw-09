const formData = {
    email: "",
    message: "",
};

const formEl = document.querySelector('.feedback-form');
function saveFormData() {
    formData.email = formEl.querySelector('input[name="email"]').value.trim();
    formData.message = formEl.querySelector('textarea[name="message"]').value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function loadFormData() {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        const parsedData = JSON.parse(savedData);
        formEl.querySelector('input[name="email"]').value = parsedData.email || '';
        formEl.querySelector('textarea[name="message"]').value = parsedData.message || '';
        formData.email = parsedData.email || '';
        formData.message = parsedData.message || '';
    }
}


formEl.addEventListener('input', saveFormData);

document.addEventListener('DOMContentLoaded', loadFormData);

formEl.addEventListener('submit', (event) => {
    event.preventDefault(); 
    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }

    console.log(formData);

    localStorage.removeItem('feedback-form-state');

    formData.email = '';
    formData.message = '';

    formEl.querySelector('input[name="email"]').value = '';
    formEl.querySelector('textarea[name="message"]').value = '';
});


