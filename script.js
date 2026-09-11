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

function validatePhone(phone) {
    return /^\d{10}$/.test(phone.trim());
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (!validateName(name)) {
        alert('Please enter a valid name using letters and spaces only.');
        return;
    }

    if (!validateId(id)) {
        alert('Please enter a valid numeric Student ID.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!validatePhone(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
    }

    const student = {
        name: name.trim(),
        id: id.trim(),
        email: email.trim(),
        phone: phone.trim()
    };

    const detailsDiv = document.getElementById('studentDetails');

    detailsDiv.innerHTML = `
        <h2>Student Details</h2>
        <p><strong>Name:</strong> ${student.name}</p>
        <p><strong>ID:</strong> ${student.id}</p>
        <p><strong>Email:</strong> ${student.email}</p>
        <p><strong>Phone:</strong> ${student.phone}</p>
        <button id="toggleDetails" type="button">
            Hide Details
        </button>
    `;

    const toggleBtn = document.getElementById('toggleDetails');
    const detailParagraphs = detailsDiv.querySelectorAll('p');

    toggleBtn.addEventListener('click', function() {
        const detailsAreHidden =
            detailParagraphs[0].style.display === 'none';

        detailParagraphs.forEach(function(paragraph) {
            paragraph.style.display = detailsAreHidden ? '' : 'none';
        });

        toggleBtn.textContent =
            detailsAreHidden ? 'Hide Details' : 'Show Details';
    });
});