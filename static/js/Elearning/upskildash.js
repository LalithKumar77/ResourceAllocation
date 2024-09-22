// Progress Chart
const ctxProgress = document.getElementById('progressChart').getContext('2d');
const progressChart = new Chart(ctxProgress, {
    type: 'doughnut',
    data: {
        labels: ['Completed', 'In Progress'],
        datasets: [{
            data: [60, 40],
            backgroundColor: ['#2980b9', '#bdc3c7'],
            borderWidth: 0,
        }]
    },
    options: {
        cutout: '70%',
        responsive: true,
    }
});

// Analytics Chart
const ctxAnalytics = document.getElementById('analyticsChart').getContext('2d');
const analyticsChart = new Chart(ctxAnalytics, {
    type: 'bar',
    data: {
        labels: ['Skill 1', 'Skill 2', 'Skill 3'],
        datasets: [{
            label: 'Skill Development',
            data: [50, 75, 60],
            backgroundColor: ['#2980b9', '#2ecc71', '#e74c3c'],
        }]
    },
    options: {
        responsive: true,
    }
});
