document.getElementById('jobForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    ['firstName', 'lastName'].forEach(id => {
        const input = document.getElementById(id);
        const error = input.nextElementSibling;
        if (input.value.trim() === '') {
            error.style.display = 'block';
            valid = false;
        } else error.style.display = 'none';
    });
    if (valid) alert('Form submitted!');
});
