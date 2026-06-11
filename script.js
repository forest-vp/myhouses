// Character Selection Logic
document.addEventListener('DOMContentLoaded', () => {
    const characterCards = document.querySelectorAll('.character-card');
    const startButton = document.getElementById('start-btn');
    let selectedCharacter = null;

    characterCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove selected class from all cards
            characterCards.forEach(c => c.classList.remove('selected'));
            
            // Add selected class to clicked card
            card.classList.add('selected');
            
            // Store selected character
            selectedCharacter = card.getAttribute('data-character');
            
            // Enable start button
            startButton.disabled = false;
            startButton.textContent = `Start as ${card.querySelector('.character-name').textContent}`;
        });
    });

    startButton.addEventListener('click', () => {
        if (selectedCharacter) {
            // Store selected character in localStorage
            localStorage.setItem('selectedCharacter', selectedCharacter);
            
            // For now, show alert - you can replace this with actual game transition
            alert(`Game starting with: ${selectedCharacter}\n\n(You can add game logic here!)`);
            
            // Future: redirect to game page
            // window.location.href = 'game.html';
        }
    });
});
