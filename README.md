# AI4ALL Armenia Website

This repository contains the source code for the official AI4ALL Armenia website, a modern, responsive, and fully internationalized web application built with React. The project was developed based on a detailed blueprint with a mission to democratize AI education in Armenia.

---

### ✨ Core Features

*   **Fully Responsive Design:** A mobile-first approach ensures a seamless experience on all devices, from phones to desktops.
*   **Complete Internationalization (i18n):** Full support for Armenian (`hy`) and English (`en`), with Armenian set as the default language. Users can switch languages instantly with a flag-based switcher.
*   **Dynamic On-Scroll Animations:** Content gracefully fades and slides into view as the user scrolls, powered by the performant Intersection Observer API.
*   **Component-Based Architecture:** Built with React, promoting reusable, manageable, and scalable code.
*   **Client-Side Routing:** Utilizes `react-router-dom` for instant page navigation without full reloads, including dynamic routes for course detail pages.
*   **Simulated AI Features:** Includes a mock "AI Helper" chatbot to demonstrate the potential for AI-enhanced user experiences.
*   **Modern Development Environment:** Built with Vite for a fast and efficient development workflow.
*   **Professional Styling:** Styled with SASS/SCSS for organized, nested, and variable-driven stylesheets.

---

### 🚀 Technology Stack

*   **Frontend:** [React.js](https://reactjs.org/) (with Vite)
*   **Routing:** [React Router v6](https://reactrouter.com/)
*   **Styling:** [SASS / SCSS](https://sass-lang.com/)
*   **Internationalization:** [i18next](https://www.i18next.com/) with `react-i18next`
*   **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
*   **Animations:** Intersection Observer API via a custom React Hook

---

### 🔧 Setup and Installation

To run this project locally, follow these steps:

1.  **Prerequisites:** Make sure you have [Node.js](https://nodejs.org/) (v16 or higher) and `npm` or `yarn` installed on your machine.

2.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/ai4all-armenia-react.git
    ```

3.  **Navigate to the project directory:**
    ```bash
    cd ai4all-armenia-react
    ```

4.  **Install dependencies:**
    ```bash
    npm install
    ```
    *(or `yarn install` if you use Yarn)*

5.  **Run the development server:**
    ```bash
    npm run dev
    ```
    *(or `yarn dev`)*

6.  Open your browser and navigate to `http://localhost:5173` (or the address shown in your terminal).

---

### 📂 Project Structure

The project follows a logical and scalable folder structure:
```
/
├── public/ # Static assets (images, videos, flags)
├── src/
│ ├── assets/ # Global assets like SCSS files and images
│ ├── components/ # Reusable React components (Header, Footer, Cards)
│ │ ├── common/ # Components used across multiple pages
│ │ ├── home/ # Components specific to the HomePage
│ │ └── ...
│ ├── data/ # Mock data files (courses, success stories)
│ ├── hooks/ # Custom React hooks (useIntersectionObserver)
│ ├── i18n/ # Internationalization configuration and language files
│ │ ├── locales/
│ │ │ ├── en.json
│ │ │ └── hy.json
│ │ └── config.js
│ ├── pages/ # Page-level components (HomePage, AboutPage, etc.)
│ ├── App.jsx # Main application component with routing
│ └── main.jsx # Entry point of the React application
├── .gitignore
├── index.html # Main HTML template
├── package.json
├── README.md # You are here!
└── vite.config.js # Vite configuration

```
---

### 📜 Available Scripts

In the project directory, you can run:

*   `npm run dev`: Starts the application in development mode with hot-reloading.
*   `npm run build`: Bundles the app for production into the `dist` folder.
*   `npm run preview`: Serves the production build locally to preview it before deployment.

---

### 🌟 Future Enhancements

This project serves as a robust foundation. Future improvements could include:

*   **Headless CMS Integration:** Replace the local `data` files with API calls to a headless CMS like [Strapi](https://strapi.io/) or [Contentful](https://www.contentful.com/) to allow non-developers to manage content.
*   **Functional AI Chatbot:** Integrate a real NLP service like [Google Dialogflow](https://cloud.google.com/dialogflow) to make the FAQ chatbot fully functional.
*   **Backend for Registration:** Develop a backend service to handle user registration for courses and partner inquiries.
*   **Testing:** Implement a testing strategy with libraries like [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) to ensure code quality and reliability.
