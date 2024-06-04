document.getElementById('convertBtn2').addEventListener('click', function() {
    const age = document.getElementById('ageInput').value;
    if (age) {
        const days = age * 365;
        document.getElementById('days').textContent = days;
    } else {
        document.getElementById('days').textContent = 'Please enter a valid age';
    }
});

document.getElementById('clearBtn2').addEventListener('click', function() {
    document.getElementById('ageInput').value = '';
    document.getElementById('days').textContent = '';
});




