// Chat-Style Character Selection Logic
document.addEventListener('DOMContentLoaded', () => {
    const characterOptions = document.querySelectorAll('.character-option');
    const startButton = document.getElementById('start-btn');
    const chatMessages = document.getElementById('chat-messages');
    let selectedCharacter = null;

    characterOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove selected class from all options
            characterOptions.forEach(o => o.classList.remove('selected'));

            // Add selected class to clicked option
            option.classList.add('selected');

            // Store selected character
            selectedCharacter = option.getAttribute('data-character');
            const characterName = option.getAttribute('data-name');

            // Add a chat message showing the selection
            const messageDiv = document.createElement('div');
            messageDiv.className = 'message system';
            messageDiv.innerHTML = `<div class="message-content">You chose <strong>${characterName}</strong>! Ready to begin?</div>`;
            chatMessages.appendChild(messageDiv);

            // Auto-scroll to bottom of chat
            chatMessages.scrollTop = chatMessages.scrollHeight;

            // Enable start button
            startButton.disabled = false;
            startButton.textContent = `Start Game as ${characterName}`;
        });
    });

    startButton.addEventListener('click', () => {
        if (selectedCharacter) {
            // Store selected character in localStorage
            localStorage.setItem('selectedCharacter', selectedCharacter);

            // Show game starting message
            alert(`Game starting with: ${selectedCharacter}!\n\n(You can connect game logic here!)`);

            // Future: redirect to game page
            // window.location.href = 'game.html';
        }
    });
});
