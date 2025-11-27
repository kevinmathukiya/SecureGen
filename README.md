# SecureGen - Secure Password Generator

SecureGen is a modern, secure, and client-side password generator application. It allows users to generate strong, uncrackable passwords instantly within their browser, ensuring maximum privacy and security.

![SecureGen Logo](./frontend/public/logo192.png)

## 🚀 Features

*   **Secure Generation:** Uses cryptographically strong random number generation (CSPRNG) for maximum entropy.
*   **Client-Side Only:** All passwords are generated locally in the browser. No data is ever sent to a server.
*   **Customizable:**
    *   Adjustable password length (4-64 characters).
    *   Toggle Uppercase, Lowercase, Numbers, and Symbols.
*   **Strength Meter:** Real-time visual feedback on password strength.
*   **One-Click Copy:** Easy copy-to-clipboard functionality with toast notifications.
*   **Responsive Design:** Fully responsive UI optimized for mobile, tablet, and desktop.
*   **Dark Mode:** Built-in dark mode support.
*   **SEO Optimized:** Includes meta tags, sitemap, and structured data for better search visibility.

## 🛠️ Tech Stack

*   **Frontend:** React.js (Create React App)
*   **Styling:** Tailwind CSS, Shadcn UI (Radix Primitives)
*   **Icons:** Lucide React
*   **Routing:** React Router DOM
*   **SEO:** React Helmet Async
*   **Build Tool:** Webpack (via CRA)

## 📂 Project Structure

```
/app
├── frontend/               # React Frontend Application
│   ├── public/             # Static assets (index.html, robots.txt, sitemap.xml)
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── layout/     # Header, Footer, Logo
│   │   │   ├── password/   # Password generator logic & UI
│   │   │   ├── seo/        # SEO component
│   │   │   └── ui/         # Shadcn UI primitives
│   │   ├── lib/            # Utility functions (password logic, styling)
│   │   ├── pages/          # Page components (Home, About, Privacy, Terms)
│   │   ├── App.js          # Main App component
│   │   └── index.css       # Global styles & Tailwind directives
│   ├── package.json        # Frontend dependencies
│   └── tailwind.config.js  # Tailwind configuration
└── README.md               # Project Documentation
```

## ⚡ Getting Started

### Prerequisites

*   Node.js (v14 or higher)
*   Yarn or npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/yourusername/securegen.git
    cd securegen
    ```

2.  Navigate to the frontend directory:
    ```bash
    cd frontend
    ```

3.  Install dependencies:
    ```bash
    yarn install
    ```

4.  Start the development server:
    ```bash
    yarn start
    ```

    The app will run at `http://localhost:3000`.

## 🚢 Deployment

This project is ready for deployment on platforms like Vercel, Netlify, or any static site host.

### Build for Production

To create an optimized production build:

```bash
cd frontend
yarn build
```

The output will be in the `frontend/build` directory.

## 🔒 Security

*   **Zero-Knowledge:** We do not store or transmit any passwords.
*   **Entropy:** Uses `window.crypto.getRandomValues()` for cryptographic randomness.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
