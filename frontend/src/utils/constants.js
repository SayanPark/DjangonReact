const localBackend = "http://127.0.0.1:8000";
const productionBackend = "https://your-production-backend-url.com"; // Replace with your actual production backend URL

let apiBaseUrl = process.env.REACT_APP_API_BASE_URL || process.env.VITE_API_BASE_URL || productionBackend + "/api/v1/";
let serverUrl = process.env.REACT_APP_SERVER_URL || process.env.VITE_SERVER_URL || productionBackend;
export const CLIENT_URL = process.env.REACT_APP_CLIENT_URL || process.env.VITE_CLIENT_URL || "http://localhost:5173";

// For local development, override if hostname is localhost or 127.0.0.1 and no env vars set
if (!process.env.REACT_APP_API_BASE_URL && !process.env.VITE_API_BASE_URL) {
  if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
    apiBaseUrl = localBackend + "/api/v1/";
    serverUrl = localBackend;
  }
}

export const API_BASE_URL = apiBaseUrl;
export const SERVER_URL = serverUrl;
