import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <BrowserRouter>
            <App />
            <footer className="bg-white shadow mt-4">
                <div className="container mx-auto p-4 text-center">
                    <p className="text-gray-600">
                        &copy; 2023 JobBoard. All rights reserved.
                    </p>
                </div>
            </footer>
        </BrowserRouter>
    </StrictMode>
);
