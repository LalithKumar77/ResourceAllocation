const ctx = document.getElementById('skillsChart').getContext('2d');
const skillsChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Communication', 'Teamwork', 'Problem Solving', 'Technical Skills', 'Leadership'],
        datasets: [{
            label: 'Skill Level',
            data: [80, 70, 90, 75, 85], // Example skill levels
            backgroundColor: [
                'rgba(0, 102, 204, 0.6)', // Blue
                'rgba(51, 153, 255, 0.6)', // Lighter Blue
                'rgba(0, 204, 204, 0.6)', // Cyan
                'rgba(102, 204, 0, 0.6)', // Green
                'rgba(204, 0, 204, 0.6)'  // Purple
            ],
            borderColor: [
                'rgba(0, 102, 204, 1)', // Blue
                'rgba(51, 153, 255, 1)', // Lighter Blue
                'rgba(0, 204, 204, 1)', // Cyan
                'rgba(102, 204, 0, 1)', // Green
                'rgba(204, 0, 204, 1)'  // Purple
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});
