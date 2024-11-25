document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('login-error');

    if (username === "admin" && password === "admin123") {
        window.location.href = 'account.html';
    } else {
        errorElement.style.display = 'block';
    }
});
