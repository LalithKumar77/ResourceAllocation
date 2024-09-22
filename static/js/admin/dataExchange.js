document.addEventListener('DOMContentLoaded', () => {
    // Initialize date picker (using a library like flatpickr or similar)
    flatpickr("#dateInput", {
        mode: "range",
        dateFormat: "Y-m-d",
        onChange: (selectedDates) => {
            console.log("Selected dates:", selectedDates);
        }
    });

    // Sample data setup for charts using Chart.js
    const dataExchangeCtx = document.getElementById('dataExchangeChart').getContext('2d');
    const dataExchangeChart = new Chart(dataExchangeCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
            datasets: [{
                label: 'Data Exchange Requests',
                data: [120, 150, 170, 200, 180],
                backgroundColor: '#4c6ef5',
                borderColor: '#003c8f',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true,
                    grid: {
                        color: '#ddd'
                    }
                },
                y: {
                    beginAtZero: true,
                    grid: {
                        color: '#ddd'
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top'
                },
                tooltip: {
                    enabled: true
                }
            }
        }
    });

    const discussionTrendsCtx = document.getElementById('discussionTrendsChart').getContext('2d');
    const discussionTrendsChart = new Chart(discussionTrendsCtx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Discussion Trends',
                data: [30, 45, 55, 70],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: true
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    grid: {
                        color: '#ddd'
                    }
                },
                y: {
                    grid: {
                        color: '#ddd'
                    }
                }
            },
            plugins: {
                legend: {
                    position: 'top'
                },
                tooltip: {
                    enabled: true
                }
            }
        }
    });

    // Sidebar navigation logic (for demo)
    // const menuItems = document.querySelectorAll('.menu li a');
    // menuItems.forEach(item => {
    //     item.addEventListener('click', (event) => {
    //         event.preventDefault();
    //         alert(`${event.target.textContent} section coming soon!`);
    //     });
    // });

    // Chatbot functionality
    const chatbotBtn = document.getElementById('chatbot-btn');
    chatbotBtn.addEventListener('click', () => {
        alert('Chatbot feature coming soon!');
    });
});
