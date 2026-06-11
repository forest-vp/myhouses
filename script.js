document.addEventListener('DOMContentLoaded', function() {
    var cards = document.querySelectorAll('.character-card');
    var startBtn = document.getElementById('start-game');
    var selectedInfo = document.getElementById('selected-info');
    var selectedChar = null;

    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            cards.forEach(function(c) {
                c.classList.remove('selected');
            });

            card.classList.add('selected');
            selectedChar = card.getAttribute('data-character');
            var name = card.getAttribute('data-name');

            selectedInfo.innerHTML = '<p>You selected <strong>' + name + '</strong></p>';

            startBtn.disabled = false;
            startBtn.textContent = 'START GAME AS ' + name.toUpperCase();
        });
    });

    startBtn.addEventListener('click', function() {
        if (selectedChar) {
            localStorage.setItem('myhouses_character', selectedChar);
            alert('Game starting with: ' + selectedChar + '\n\nMore game features coming soon!');
        }
    });
});
