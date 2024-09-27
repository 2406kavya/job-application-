// Handle Profile Creation
const form = document.getElementById('profileForm');
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const type = document.getElementById('type').value;

    const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, type })
    });

    if (response.ok) {
        alert('Profile Created!');
    }
});

// Fetch Jobs
async function fetchJobs() {
    const response = await fetch('http://localhost:5000/jobs');
    const jobs = await response.json();
    const jobsList = document.getElementById('jobsList');

    jobs.forEach(job => {
        const li = document.createElement('li');
        li.textContent = `${job.title}: ${job.description}`;
        jobsList.appendChild(li);
    });
}

if (document.getElementById('jobsList')) {
    fetchJobs();
}
