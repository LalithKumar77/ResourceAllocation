// JavaScript to Toggle Profile Menu
function toggleProfileMenu() {
    const menu = document.getElementById('profileMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Close profile menu when clicking outside of it
document.addEventListener('click', function(event) {
    const menu = document.getElementById('profileMenu');
    if (!event.target.closest('.profile-container')) {
        menu.style.display = 'none';
    }
});
// Toggle Chatbot Popup
function toggleChatbot() {
    const chatbotPopup = document.getElementById('chatbotPopup');
    chatbotPopup.style.display = chatbotPopup.style.display === 'none' || chatbotPopup.style.display === '' ? 'flex' : 'none';
}

// Send Message
function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatWindow = document.getElementById('chatWindow');
    const userMessage = userInput.value.trim();

    if (userMessage) {
        // Append user message
        const userMessageElement = document.createElement('div');
        userMessageElement.className = 'message user-message';
        userMessageElement.textContent = userMessage;
        chatWindow.appendChild(userMessageElement);

        // Clear user input
        userInput.value = '';

        // Simulate chatbot response (replace with actual API call)
        setTimeout(() => {
            const botMessageElement = document.createElement('div');
            botMessageElement.className = 'message bot-message';
            botMessageElement.textContent = 'Chatbot response to: ' + userMessage;
            chatWindow.appendChild(botMessageElement);

            // Scroll to the bottom
            chatWindow.scrollTop = chatWindow.scrollHeight;
        }, 1000);
    }
}

