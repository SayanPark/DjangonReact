import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

const PORT = 3000;

// Proxy /api requests to backend server
app.use('/api', createProxyMiddleware({
  target: 'http://localhost:8000',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '', // remove /api prefix when forwarding to backend
  },
  onProxyReq: (proxyReq, req, res) => {
    console.log(`Proxying request to backend: ${req.method} ${req.originalUrl}`);
  },
}));

// Proxy other requests to frontend dev server
app.use('/', createProxyMiddleware({
  target: 'http://localhost:5173',
  changeOrigin: true,
}));

app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
