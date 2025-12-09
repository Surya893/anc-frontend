# ANC Platform - Frontend

Modern, responsive frontend for the Active Noise Cancellation (ANC) Platform, built with Vanilla JS and Vite.

## 📁 Repository Structure

```
anc-frontend/
├── index.html         # Main entry point (Vite)
├── demo.html          # Basic demo interface
├── demo-premium.html  # Premium Apple-inspired UI
├── live-demo.html     # Live demonstration with full features
├── src/               # Source code
│   ├── main.js        # Main application logic
│   ├── styles/        # CSS Modules
│   │   ├── main.css   # Entry CSS
│   │   ├── base.css   # Resets & typography
│   │   ├── components.css # Reusable components
│   │   └── layout.css # Grid & Container
│   └── services/      # API Clients
│       ├── api.js     # REST Client
│       └── websocket.js # WebSocket Client
├── public/            # Static assets
├── dist/              # Production build output
├── vite.config.js     # Build configuration
└── package.json       # Dependencies
```

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Development Server
Start the Vite development server with hot reload:
```bash
npm start
# OR
npm run dev
```
Open `http://localhost:5173` (or the port shown in terminal).

### 3. Production Build
Build for production (outputs to `dist/`):
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

### 4. Docker Deployment
Build and run with Docker:
```bash
# Build image
docker build -t anc-frontend .

# Run container (port 8080)
docker run -p 8080:80 anc-frontend
```
Access at `http://localhost:8080`.

## 📡 Backend Integration

The frontend assumes the ANC backend is running on `http://localhost:5000` by default.

Configure via global object if needed:
```html
<script>
    window.ANC_CONFIG = {
        API_URL: 'http://your-backend:8080',
        WS_URL: 'ws://your-backend:8080'
    };
</script>
```

## 🛠️ Architecture

- **Build Tool**: Vite (Lightning fast dev server & bundling)
- **CSS**: Modular vanilla CSS with variables using `@import`
- **JS**: ES Modules
- **Linting**: ESLint + Prettier

## 📝 License

MIT License.
