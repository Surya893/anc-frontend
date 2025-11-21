# ANC Platform - Frontend

Clean, working frontend for the Active Noise Cancellation (ANC) Platform with vanilla JavaScript implementations and reusable API clients.

## 📁 Repository Structure

```
anc-frontend/
├── templates/              # Complete HTML applications
│   ├── index.html         # Main landing page
│   ├── demo.html          # Basic demo interface
│   ├── demo-premium.html  # Premium Apple-inspired UI
│   └── live-demo.html     # Live demonstration with full features
├── static/                # Vanilla JS implementation
│   ├── css/style.css      # Stylesheet (568 lines)
│   └── js/app.js          # Application logic (401 lines)
├── src/                   # Reusable JavaScript modules
│   └── services/
│       ├── api.js         # REST API client
│       └── websocket.js   # WebSocket/Socket.IO client
├── docs/                  # API documentation
│   ├── API_README.md      # REST API guide
│   └── api-spec.yaml      # OpenAPI specification
├── .env.example           # Environment configuration
├── .gitignore             # Git ignore patterns
└── README.md              # This file
```

## 🎯 What's Included

### 1. Complete HTML Applications (`templates/`)

Four production-ready HTML pages with embedded JavaScript:

- **index.html** (199 lines) - Landing page with feature overview
- **demo.html** (428 lines) - Basic demo interface
- **demo-premium.html** (1,121 lines) - Premium UI with advanced features
- **live-demo.html** (906 lines) - Full-featured live demonstration

These can be served directly by any web server or integrated into a backend framework.

### 2. Vanilla JavaScript Application (`static/`)

Standalone JavaScript application:
- **app.js** - Complete ANC control interface with real-time updates
- **style.css** - Responsive, modern styling

### 3. Reusable API Clients (`src/services/`)

Framework-agnostic JavaScript modules that work with both vanilla JS and modern frameworks (React, Vue, etc.):

**api.js** - REST API Client
- Process audio
- Classify noise
- Detect emergency sounds
- Manage sessions
- User management

**websocket.js** - WebSocket Client
- Real-time audio streaming
- Live metrics updates
- Session management
- Event-based architecture

## 🚀 Quick Start

### Option 1: Serve Static Files

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx serve .

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000/templates/demo-premium.html`

### Option 2: Integrate with Backend

If you have the ANC backend running on `http://localhost:5000`:

```html
<!-- Include the API clients -->
<script src="../src/services/api.js"></script>
<script src="../src/services/websocket.js"></script>

<script>
  // Use the API client
  api.processAudio({
    audio_data: base64Audio,
    sample_rate: 48000,
    algorithm: 'nlms'
  }).then(result => {
    console.log('Processed:', result);
  });

  // Use WebSocket client
  wsClient.connect();
  wsClient.joinSession('session-123');
  wsClient.on('processed_audio', (data) => {
    console.log('Received processed audio:', data);
  });
</script>
```

### Option 3: Build Your Own React/Vue App

The service modules (`src/services/`) can be imported into any modern JavaScript framework:

```javascript
import api from './src/services/api.js';
import wsClient from './src/services/websocket.js';

// Use in your React/Vue components
```

## 📡 Backend Integration

The frontend requires the ANC Platform backend API. Configure the backend URL:

**Method 1: Environment Variables**
```bash
# Create .env file
cp .env.example .env

# Edit .env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_WS_URL=ws://localhost:5000
```

**Method 2: Direct Configuration**
```javascript
// In your JavaScript
const API_URL = 'http://your-backend-url:5000';
```

## 🎨 Features

### Real-Time Audio Processing
- Microphone input capture via Web Audio API
- WebSocket streaming to backend
- Live ANC processing
- Processed audio playback

### Audio Visualization
- Time-domain waveform display using Canvas API
- Frequency spectrum analysis
- Before/After audio comparison
- Real-time updates

### Control Panel
- ANC on/off toggle
- Algorithm selection (NLMS, LMS, RLS)
- Intensity/step-size adjustment
- Emergency sound detection toggle

### Performance Metrics
- Noise reduction (dB)
- Processing latency (ms)
- Noise classification results
- Emergency sound alerts

## 🔧 API Endpoints Used

### REST API
- `POST /api/audio/process` - Process audio data
- `POST /api/audio/classify` - Classify noise type
- `POST /api/audio/emergency-detect` - Detect emergency sounds
- `POST /api/sessions/` - Create session
- `GET /api/sessions/{id}` - Get session details
- `GET /health` - Health check

### WebSocket Events
- `join_session` - Join processing session
- `leave_session` - Leave session
- `audio_chunk` - Send audio data
- `processed_audio` - Receive processed audio
- `metrics_update` - Receive metrics updates
- `request_metrics` - Request metrics update

See `docs/api-spec.yaml` for complete API documentation.

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

**Requirements:**
- Web Audio API support
- WebSocket support
- ES6+ JavaScript support
- Canvas API for visualizations

## 📖 Documentation

- **docs/API_README.md** - Comprehensive REST API documentation
- **docs/api-spec.yaml** - OpenAPI 3.0 specification
- Comments in source files for implementation details

## 🏗️ Building a Custom Frontend

Want to build your own React, Vue, or Angular frontend? The `src/services/` modules provide everything you need:

**1. Install dependencies**
```bash
npm install axios socket.io-client
```

**2. Use the service modules**
```javascript
import api from './src/services/api';
import wsClient from './src/services/websocket';
```

**3. Build your UI**
The services handle all backend communication. Focus on your UI components.

## 🔗 Related Repositories

This is the frontend-only repository. For the complete system including backend and firmware:
- **Backend Repository**: [https://github.com/Surya893/anc-with-ai](https://github.com/Surya893/anc-with-ai)

## 📝 License

MIT License - See original repository for details.

## 🤝 Contributing

Contributions welcome! This repository focuses on frontend implementations. For backend/API changes, see the main repository.

## 📞 Support

For issues related to:
- **Frontend/UI** - Create an issue in this repository
- **Backend/API** - Refer to the main repository
- **Integration** - Check docs/API_README.md first

---

**Note**: This frontend requires a compatible ANC Platform backend to function. The templates and static files are production-ready. The service modules can be used to build custom frontends in any framework.
