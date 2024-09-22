document.addEventListener('DOMContentLoaded', () => {
    // Bar Chart
    const ctxBar = document.getElementById('barChart').getContext('2d');
    new Chart(ctxBar, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'Projects Completed',
                data: [5, 10, 15, 8, 12],
                backgroundColor: 'rgba(52, 152, 219, 0.5)',
                borderColor: 'rgba(41, 128, 185, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Line Chart
    const ctxLine = document.getElementById('lineChart').getContext('2d');
    new Chart(ctxLine, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'New Projects',
                data: [3, 7, 2, 6, 9],
                backgroundColor: 'rgba(46, 204, 113, 0.5)',
                borderColor: 'rgba(39, 174, 96, 1)',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Pie Chart
    const ctxPie = document.getElementById('pieChart').getContext('2d');
    new Chart(ctxPie, {
        type: 'pie',
        data: {
            labels: ['Project A', 'Project B', 'Project C'],
            datasets: [{
                data: [300, 150, 200],
                backgroundColor: ['rgba(231, 76, 60, 0.7)', 'rgba(46, 204, 113, 0.7)', 'rgba(52, 152, 219, 0.7)'],
                borderColor: ['rgba(231, 76, 60, 1)', 'rgba(46, 204, 113, 1)', 'rgba(52, 152, 219, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    // Major Products Example Data
    const products = [
        {
            name: 'Product A',
            data: [10, 20, 30, 40, 50]
        },
        {
            name: 'Product B',
            data: [15, 25, 35, 45, 55]
        }
    ];

    products.forEach((product, index) => {
        const ctxProduct = document.getElementById(`productChart${index}`).getContext('2d');
        new Chart(ctxProduct, {
            type: 'doughnut',
            data: {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                datasets: [{
                    data: product.data,
                    backgroundColor: ['rgba(231, 76, 60, 0.7)', 'rgba(46, 204, 113, 0.7)', 'rgba(52, 152, 219, 0.7)', 'rgba(155, 89, 182, 0.7)'],
                    borderColor: ['rgba(231, 76, 60, 1)', 'rgba(46, 204, 113, 1)', 'rgba(52, 152, 219, 1)', 'rgba(155, 89, 182, 1)'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    });
});
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

