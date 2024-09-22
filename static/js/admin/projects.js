
  // Get the canvas elements
const projectProgressChartCanvas = document.getElementById('projectProgressChart');
const budgetChartCanvas = document.getElementById('budgetChart');

// Create the charts
const projectProgressChart = new Chart(projectProgressChartCanvas, {
  type: 'line',
  data: {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5'],
    datasets: [{
      label: 'Project Progress',
      data: [20, 40, 60, 80, 100],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Project Progress'
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

const budgetChart = new Chart(budgetChartCanvas, {
  type: 'bar',
  data: {
    labels: ['Jan-Mar', 'Apr-Jun', 'July-Sep', 'Oct-Dec'],
    datasets: [{
      label: 'Budget Allocation',
      data: [25000, 30000, 35000, 40000],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    title: {
      display: true,
      text: 'Budget Allocation'
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
    // Sidebar Navigation (Commented out placeholder logic)
    // const menuItems = document.querySelectorAll('.menu li a');
    // menuItems.forEach(item => {
    //     item.addEventListener('click', (event) => {
    //         event.preventDefault();
    //         alert(`${event.target.textContent} section coming soon!`);
    //     });
    // });

    // Adding New Projects
    const allProjectsContainer = document.querySelector('.all-project-cards');
    const newProjects = [
        { name: 'New Project 4', img: 'new-project4.jpg', description: 'Details about new project 4.' },
        { name: 'New Project 5', img: 'new-project5.jpg', description: 'Details about new project 5.' }
    ];

    newProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card', 'animate-fade-in');

        projectCard.innerHTML = `
            <img src="${project.img}" alt="${project.name}" class="project-img">
            <div class="project-info">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
            </div>
        `;

        allProjectsContainer.appendChild(projectCard);
    });

    // Initialize Flatpickr for Date Range Picker
    flatpickr("#dateRange", {
        mode: "range",
        dateFormat: "Y-m-d",
        onChange: (selectedDates) => {
            if (selectedDates.length === 2) {
                console.log(`Selected date range: ${selectedDates[0].toLocaleDateString()} - ${selectedDates[1].toLocaleDateString()}`);
                // Implement date filtering logic here
            }
        }
    });

    // Search Functionality
    const searchInput = document.getElementById('searchInput');
    const allProjectCards = document.querySelectorAll('.all-project-card');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        allProjectCards.forEach(card => {
            const projectName = card.querySelector('.project-info h3').textContent.toLowerCase();
            if (projectName.includes(query)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });

