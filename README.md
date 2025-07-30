# Resume Builder Web App

## Overview

The Resume Builder is a web-based application that allows users to create, preview, and export professional-looking resumes with ease. Built using **React.js** and **Redux Toolkit**, this tool provides multiple templates, dynamic sections, and a real-time preview system to help users craft the perfect résumé for job applications.

---

## Features

-   🔧 Live resume editing with auto-update preview
-   🧠 Smart section ordering via templates (Projects first, Skills first, etc.)
-   📄 Multiple customizable templates to choose from
-   🖨️ "Save as PDF" (print-to-pdf) functionality (coming soon)
-   🌐 Responsive and clean UI using **Tailwind CSS**
-   🌟 Built with scalability and performance in mind using **Redux Toolkit**
-   🧪 Friendly for developers to extend with new sections/templates

---

## Folder Structure

```
src/
│
├── components/         // Reusable UI components (Navbar, TemplateCards, etc.)
├── pages/              // Main app pages (Home, Templates, ResumeBuilder, NotFound)
├── slices/             // Redux slices for managing state
├── utils/              // Template configurations and helpers
├── App.jsx             // Root component and route handling
├── index.js            // App entry point
```

---

## Technologies Used

-   **React.js**
-   **Redux Toolkit**
-   **React Router DOM**
-   **Tailwind CSS**
-   **react-to-print** (for export to PDF)
-   **FontAwesome** (for icons via CDN)

---

## Pages and Routes

-   `/` → Home page (Hero, Features, Testimonials, Footer)
-   `/templates` → Browse and select from available templates
-   `/resume/:id` → Build your resume with selected template
-   `/404` or any wrong path → Not Found page

---

## State Management

All resume data (personal info, skills, education, experience, projects) is handled via **Redux Toolkit** slices. The selected template is also stored globally to allow switching easily between pages.

---

## How to Use

1. Start at the home page (`/`)
2. Click "Get Started" or go to `/templates` to choose a template
3. Fill in your personal and professional details
4. Preview your resume in real-time
5. Click "Download" (coming soon) to save your resume as a PDF

---

## Installation

1. Clone this repo
2. Run `npm install` to install dependencies
3. Start the app with `npm run dev` or `npm start`

---

## Future Enhancements

-   [ ] Save and load resumes from local storage or cloud
-   [ ] PDF export with better style rendering
-   [ ] Dark mode support
-   [ ] Add more resume templates
-   [ ] User authentication and resume history

---

## Credits

Built with 💻 by Bhargab using React and Tailwind.

---

## Contact

Feel free to connect:

-   GitHub: [https://github.com/bhargablinx](https://github.com/bhargablinx)
-   LinkedIn: [https://linkedin.com/in/bhargabb](https://linkedin.com/in/bhargabb)
-   Email: [bhargabbhuyan001@gmail.com](mailto:bhargabbhuyan001@gmail.com)

---
