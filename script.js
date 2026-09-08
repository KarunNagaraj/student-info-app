const form = document.getElementById('studentForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;
    const email = document.getElementById('email').value;

    const student = {
        name: name,
        id: id,
        email: email
    };

    document.getElementById('studentDetails').innerHTML = `
        <h2>Student Details</h2>
        <p><strong>Name:</strong> ${student.name}</p>
        <p><strong>ID:</strong> ${student.id}</p>
        <p><strong>Email:</strong> ${student.email}</p>
    `;
});