const form = document.getElementById('studentForm');

// Validation helper functions
function validateName(name) {
    return /^[a-zA-Z\s]+$/.test(name.trim());
}

function validateId(id) {
    return /^\d+$/.test(id.trim());
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;
    const email = document.getElementById('email').value;

    // Input validation
    if (!validateName(name)) {
        alert('Please enter a valid name (letters and spaces only).');
        return;
    }

    if (!validateId(id)) {
        alert('Please enter a valid Student ID (numbers only).');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    const student = {
        name: name.trim(),
        id: id.trim(),
        email: email.trim()
    };

    const detailsDiv = document.getElementById('studentDetails');

    detailsDiv.innerHTML = `
        <h2>Student Details</h2>
        <p><strong>Name:</strong> ${student.name}</p>
        <p><strong>ID:</strong> ${student.id}</p>
        <p><strong>Email:</strong> ${student.email}</p>
        <button id="toggleDetails" type="button">Hide Details</button>
    `;

    // Toggle show/hide for student details
    const toggleBtn = document.getElementById('toggleDetails');
    const detailParagraphs = detailsDiv.querySelectorAll('p');

    toggleBtn.addEventListener('click', function() {
        detailParagraphs.forEach(function(p) {
            if (p.style.display === 'none') {
                p.style.display = '';
                toggleBtn.textContent = 'Hide Details';
            } else {
                p.style.display = 'none';
                toggleBtn.textContent = 'Show Details';
            }
        });
    });
});