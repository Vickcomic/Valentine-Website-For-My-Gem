// Add interactivity to the buttons
document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('response').textContent = "Yayyyyy! ❤️";
    document.getElementById('response').classList.remove('hidden');
    document.getElementById('yesButton').style.display = 'none';
    document.getElementById('noButton').style.display = 'none';
});

document.getElementById('noButton').addEventListener('click', function() {
    document.getElementById('response').textContent = "Please click on Yes 😢";
    document.getElementById('response').classList.remove('hidden');
});
