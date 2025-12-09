# ANC Platform - Frontend

Clean, working frontend for the Active Noise Cancellation (ANC) Platform with vanilla JavaScript implementations and reusable API clients.

## 📁 Repository Structure

```
anc-frontend/
├── index.html         # Main landing page
├── demo.html          # Basic demo interface
├── demo-premium.html  # Premium Apple-inspired UI
├── live-demo.html     # Live demonstration with full features
├── static/            # Vanilla JS implementation
│   ├── css/style.css  # Stylesheet
│   └── js/app.js      # Application logic
├── src/               # Reusable JavaScript modules
│   └── services/
│       ├── api.js       # REST API client
│       └── websocket.js # WebSocket/Socket.IO client
├── docs/              # API documentation
├── package.json       # Project dependencies and scripts
└── README.md          # This file
```

## 🎯 What's Included

### 1. Complete HTML Applications (Root)

Four production-ready HTML pages:

- **index.html** - Landing page with feature overview
- **demo.html** - Basic demo interface
- **demo-premium.html** - Premium UI with advanced features
- **live-demo.html** - Full-featured live demonstration

These are static files that can be served by any web server.

### 2. Vanilla JavaScript Application (`static/`)

Standalone JavaScript application:
- **app.js** - Complete ANC control interface
- **style.css** - Responsive, modern styling

### 3. Reusable API Clients (`src/services/`)

Framework-agnostic JavaScript modules:

**api.js** - REST API Client
- Process audio
- Classify noise
- Detect emergency sounds
- Manage sessions

**websocket.js** - WebSocket Client
- Real-time audio streaming
- Live metrics updates
- Session management

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Application
```bash
npm start
```
This runs `npx serve .` and opens the app at `http://localhost:3000`.

### 3. Access Pages
- **Home**: `http://localhost:3000/`
- **Premium Demo**: `http://localhost:3000/demo-premium.html`

## 📡 Backend Integration

The frontend assumes the ANC backend is running on `http://localhost:5000` by default.

To configure a different backend URL, you can set a global configuration object before loading the scripts:

```html
<script>
    window.ANC_CONFIG = {
        API_URL: 'http://your-backend:8080',
        WS_URL: 'ws://your-backend:8080'
    };
</script>
```

## 🔧 API Endpoints Used

### REST API
- `POST /api/audio/process` - Process audio data
- `POST /api/audio/classify` - Classify noise type
- `POST /api/audio/emergency-detect` - Detect emergency sounds
- `POST /api/sessions/` - Create session
- `GET /health` - Health check

### WebSocket Events
- `join_session` / `leave_session`
- `audio_chunk` - Send audio data
- `processed_audio` - Receive processed audio
- `metrics_update` - Receive metrics updates

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

**Requirements:**
- Web Audio API support
- WebSocket support
- ES6+ JavaScript support

## 🔗 Related Repositories

- **Backend Repository**: [https://github.com/Surya893/anc-with-ai](https://github.com/Surya893/anc-with-ai)

## 📝 License

MIT License.
