# Student Information App

## 1. Project Title

Student Information App

## 2. Team Members

- Ekta Singh — UI Developer
- Karun Nagaraj — Team Lead
- Rahul Mohan Gupta — JavaScript Developer

## 3. Project Description

A simple Student Information Web Application that accepts and displays a student's name, ID, email address, and phone number.

The project demonstrates collaborative development using Git branches, meaningful commits, pull requests, merging, and merge-conflict resolution.

## 4. Technologies Used

- HTML
- CSS
- JavaScript
- Git
- GitHub
- Visual Studio Code

## 5. Features

- Student information form
- Name validation
- Numeric student ID validation
- Email validation
- Ten-digit phone number validation
- Display submitted student information
- Show and hide student details
- Responsive card-style interface

## 6. Git Branching Strategy

The `main` branch contains the integrated application. Each feature was developed independently using a separate branch and merged into `main` through a pull request.

Branches used:

- `main`
- `feature/ui`
- `feature/javascript`
- `feature/js`
- `feature/contact`
- `feature/student-name`
- `feature/app-title`

## 7. Pull Requests Created

1. [PR #1 — Add student-details JavaScript functionality](https://github.com/KarunNagaraj/student-info-app/pull/1)
2. [PR #2 — Improve student information UI](https://github.com/KarunNagaraj/student-info-app/pull/2)
3. [PR #3 — Update project README](https://github.com/KarunNagaraj/student-info-app/pull/3)
4. [PR #4 — Improve JavaScript validation](https://github.com/KarunNagaraj/student-info-app/pull/4)
5. [PR #5 — Update application title](https://github.com/KarunNagaraj/student-info-app/pull/5)
6. [PR #6 — Resolve earlier application-title conflict](https://github.com/KarunNagaraj/student-info-app/pull/6)
7. [PR #7 — Add contact information](https://github.com/KarunNagaraj/student-info-app/pull/7)
8. [PR #8 — Update application heading](https://github.com/KarunNagaraj/student-info-app/pull/8)
9. [PR #9 — Update MCA portal title and resolve conflict](https://github.com/KarunNagaraj/student-info-app/pull/9)

## 8. Merge Conflict

A merge conflict was intentionally created using the `feature/student-name` and `feature/app-title` branches.

The `feature/student-name` branch changed the heading to:

```html
<h1>Student Management System</h1>
```

The `feature/app-title` branch changed the same heading to:

```html
<h1>MCA Student Information Portal</h1>
```

The `feature/student-name` branch was merged into `main` first. When `feature/app-title` was compared with the updated `main`, GitHub detected a conflict in `index.html`.

The conflict was resolved locally by merging `origin/main` into `feature/app-title`, removing the conflict markers, and combining the two headings as:

```html
<h1>Student Management System – MCA</h1>
```

The resolved file was committed with the message:

```text
Resolve merge conflict in application title
```

The branch was pushed to GitHub and successfully merged through Pull Request #9.

## 9. How to Run the Application

1. Clone the repository:

   ```bash
   git clone https://github.com/KarunNagaraj/student-info-app.git
   ```

2. Enter the project directory:

   ```bash
   cd student-info-app
   ```

3. Open the folder in Visual Studio Code.

4. Open `index.html` directly in a browser or use the VS Code Live Server extension.

5. Enter the student's name, ID, email address, and ten-digit phone number.

6. Click **Submit** to display the information.

7. Use **Show Details** or **Hide Details** to toggle the displayed information.

## 10. Conflict Evidence

Screenshots demonstrating pull requests, the merge conflict, conflict resolution, and successful merges are stored in the `screenshots` directory.