document.addEventListener('DOMContentLoaded', () => {
    const characterOptions = document.querySelectorAll('.character-option');
    const startButton = document.getElementById('start-btn');
    const chatMessages = document.getElementById('chat-messages');
    let selectedCharacter = null;

    const characterGreetings = {
        engineer: "Hey there! I can build anything you need. Choose me and we'll create something amazing with my gadgets!",
        hipster: "Yo! Music and style are my weapons. Pick me if you want the most stylish adventure ever!",
        shadow: "...psst. Need someone who moves in silence? I'm your ghost. No one will see us coming.",
        speedster: "ZOOOM! Whoa, sorry I'm always too fast. Pick me and we'll finish this game in record time! ⚡"
    };

    characterOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove selected class from all
            characterOptions.forEach(o => o.classList.remove('selected'));
            
            // Add selected class to clicked
            option.classList.add('selected');
            
            // Store selected character
            selectedCharacter = option.getAttribute('data-character');
            const characterName = option.getAttribute('data-name');
            
            // Add character greeting to chat
            const greeting = characterGreetings[selectedCharacter] || 'Hello, choose me!';
            
            chatMessages.innerHTML = `
                <div class="message system">
                    <div class="message-content">Welcome to MyHouses! Which hero would you like to play as? Click on a character to chat with them.</div>
                </div>
                <div class="message">
                    <img src="${option.querySelector('img').src}" alt="${characterName}" style="width:35px;height:35px;border-radius:50%;object-fit:cover;flex-shrink:0;">
                    <div class="message-content" style="background:rgba(0,255,136,0.15);color:#00ff88;border-radius:10px 10px 10px 0;">
                        <strong>${characterName}:</strong> ${greeting}
                    </div>
                </div>
            `;
            
            // Enable start button
            startButton.disabled = false;
            startButton.textContent = `Start Game as ${characterName}`;
        });
    });

    startButton.addEventListener('click', () => {
        if (selectedCharacter) {
            localStorage.setItem('selectedCharacter', selectedCharacter);
            alert(`Game starting with: ${selectedCharacter}\n\n(You can add game logic here!)`);
        }
    });
});
