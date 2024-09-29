
function toggleProfileMenu() {
    const menu = document.getElementById('profileMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}


document.addEventListener('click', function(event) {
    const menu = document.getElementById('profileMenu');
    if (!event.target.closest('.profile-container')) {
        menu.style.display = 'none';
    }
});

function toggleChatbot() {
    const chatbotPopup = document.getElementById('chatbotPopup');
    chatbotPopup.style.display = chatbotPopup.style.display === 'none' || chatbotPopup.style.display === '' ? 'flex' : 'none';
}


function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatWindow = document.getElementById('chatWindow');
    const userMessage = userInput.value.trim();

    if (userMessage) {
        const userMessageElement = document.createElement('div');
        userMessageElement.className = 'message user-message';
        userMessageElement.textContent = userMessage;
        chatWindow.appendChild(userMessageElement);

    
        userInput.value = '';

        
        setTimeout(() => {
            const botMessageElement = document.createElement('div');
            botMessageElement.className = 'message bot-message';
            botMessageElement.textContent = 'Chatbot response to: ' + userMessage;
            chatWindow.appendChild(botMessageElement);

           
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }, 1000);
    }
}

