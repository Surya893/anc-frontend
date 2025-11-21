# ANC Platform - Frontend Repository

This repository contains all frontend components for the Active Noise Cancellation (ANC) Platform, including the React application, static assets, and HTML templates.

## 📁 Repository Structure

```
anc-frontend/
├── frontend/               # Main React application
│   ├── public/            # Static assets for React app
│   │   ├── index.html
│   │   └── styles.css
│   ├── src/               # React source code
│   │   └── services/      # API and WebSocket clients
│   │       ├── api.js     # REST API client
│   │       └── websocket.js # WebSocket client
│   ├── package.json       # Dependencies and scripts
│   ├── Dockerfile         # Docker configuration for frontend
│   └── README.md          # Detailed frontend documentation
├── static/                # Static assets (standalone demos)
│   ├── css/
│   │   └── style.css     # Standalone CSS
│   └── js/
│       └── app.js        # Standalone JavaScript
├── templates/             # HTML templates
│   ├── index.html        # Main landing page
│   ├── demo.html         # Basic demo page
│   ├── demo-premium.html # Premium demo page
│   └── live-demo.html    # Live demonstration page
├── .env.example          # Environment variables template
├── .gitignore            # Git ignore patterns
└── README.md             # This file
```

## 🎯 What's Included

### 1. React Application (`frontend/`)

Modern React 18+ application with:
- Real-time audio processing
- WebSocket integration for live streaming
- Audio visualization (waveforms, frequency spectrum)
- Control panel for ANC settings
- Metrics display and monitoring

**Technology Stack:**
- React 18.2.0
- Socket.IO Client for WebSocket
- Axios for REST API calls
- Chart.js for visualizations
- Web Audio API

### 2. Static Assets (`static/`)

Standalone CSS and JavaScript files for simpler demos or integration into other applications.

### 3. HTML Templates (`templates/`)

Pre-built HTML pages:
- **index.html** - Main landing page
- **demo.html** - Basic demo interface
- **demo-premium.html** - Premium Apple-inspired design
- **live-demo.html** - Live demonstration with full features

## 🚀 Quick Start

### React Application

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Set up environment variables
cp ../.env.example .env
# Edit .env with your backend API URL

# Start development server
npm start

# Application will open at http://localhost:3000
```

### Production Build

```bash
cd frontend
npm run build

# Serve the build
npm run serve
```

### Docker Deployment

```bash
cd frontend
docker build -t anc-frontend .
docker run -p 3000:3000 anc-frontend
```

## 📡 Backend Integration

The frontend requires a backend API server. By default, it connects to:
- **REST API**: `http://localhost:5000`
- **WebSocket**: `ws://localhost:5000`

Configure these in your `.env` file:

```bash
REACT_APP_API_URL=http://localhost:5000
REACT_APP_WS_URL=ws://localhost:5000
REACT_APP_ENV=development
```

## 🎨 Features

### Real-Time Audio Processing
- Microphone input capture
- WebSocket streaming to backend
- Live ANC processing
- Processed audio playback

### Audio Visualization
- Time-domain waveform display
- Frequency spectrum analysis
- Before/After audio comparison
- Real-time updates

### Control Panel
- ANC on/off toggle
- Algorithm selection (NLMS, LMS, RLS)
- Intensity/step-size adjustment
- Session management

### Metrics Display
- Noise reduction (dB)
- Processing latency (ms)
- Noise classification results
- Emergency sound alerts

## 🔧 API Endpoints Used

### REST API
- `POST /api/process` - Process audio data
- `GET /api/metrics` - Get system metrics
- `GET /api/health` - Health check

### WebSocket Events
- `join_session` - Join processing session
- `audio_chunk` - Send audio data
- `processed_audio` - Receive processed audio
- `metrics_update` - Receive metrics updates

## 📦 Dependencies

See `frontend/package.json` for complete list. Key dependencies:

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "socket.io-client": "^4.5.4",
  "axios": "^1.6.2",
  "chart.js": "^4.4.0",
  "react-chartjs-2": "^5.2.0"
}
```

## 🌐 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

**Requirements:**
- Web Audio API support
- WebSocket support
- ES6+ JavaScript support

## 📖 Additional Documentation

- **FRONTEND_README.md** - Detailed frontend architecture and API documentation
- **ORIGINAL_README.md** - Complete ANC platform documentation from original repository
- **frontend/README.md** - React application specific documentation

## 🔗 Related Repositories

This is the frontend-only repository for the ANC Platform. For the complete system including backend and firmware:
- Original Repository: [https://github.com/Surya893/anc-with-ai](https://github.com/Surya893/anc-with-ai)

## 📝 License

MIT License - See original repository for details.

## 🛠️ Development

### Project Structure

The React application follows a standard structure:
- **Components** - Reusable UI components
- **Services** - API clients and external integrations
- **Utils** - Helper functions and utilities
- **Styles** - CSS and styling

### Adding New Features

1. Create components in `frontend/src/components/`
2. Add services in `frontend/src/services/`
3. Update App.jsx to integrate new features
4. Test thoroughly with the backend API

### Testing

```bash
cd frontend
npm test                # Run tests
npm run test:coverage   # Run with coverage
```

## 🤝 Contributing

This repository contains frontend code extracted from the main ANC platform. Contributions are welcome!

## 📞 Support

For issues related to:
- **Frontend** - Create an issue in this repository
- **Backend/API** - Refer to the original repository
- **Overall Platform** - Refer to the original repository

---

**Note**: This frontend requires a compatible backend server to function. Refer to the original repository for complete setup instructions including backend deployment.
