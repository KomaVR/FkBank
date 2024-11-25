document.getElementById('transfer-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const successElement = document.getElementById('transfer-success');
    const errorElement = document.getElementById('transfer-error');

    if (amount > 0) {
        successElement.style.display = 'block';
        errorElement.style.display = 'none';
    } else {
        successElement.style.display = 'none';
        errorElement.style.display = 'block';
    }
});
