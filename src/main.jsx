import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ErrorBoundary from "./components/ErrorBoundary";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './assets/css/bootstrap.min.css';
import './assets/css/style-dark.css';
import './assets/css/style.css';


ReactDOM.createRoot(document.getElementById("root")).render( 
    <React.StrictMode>
        <ErrorBoundary>
        <App />
        </ErrorBoundary>
    </React.StrictMode>
);