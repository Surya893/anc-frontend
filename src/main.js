// ANC System Web App - Frontend JavaScript
import api from './services/api.js';
import wsClient from './services/websocket.js';

// State management
let appState = {
    ancEnabled: false,
    noiseIntensity: 0.8,
    currentNoiseClass: 'unknown',
    emergencyDetected: false,
    detectionConfidence: 0,
    prolongedDetection: {
        enabled: true,
        threshold_seconds: 5,
        current_duration: 0,
        detected_class: null
    }
};

// Update interval
const UPDATE_INTERVAL = 1000;
let updateTimer = null;

// Initialize app
document.addEventListener('DOMContentLoaded', function () {
    console.log('ANC System Web App initialized');
    startStatusUpdates();
    checkNotifications();
    setInterval(checkNotifications, 2000);
});

// Toggle ANC
async function toggleANC() {
    try {
        const data = await api.request('/api/toggle_anc', { method: 'POST' });
        if (data.success) {
            appState.ancEnabled = data.anc_enabled;
            updateANCUI();
            showToast(data.message, 'success');
        }
    } catch (error) {
        console.error('Toggle ANC error:', error);
        // Revert checkbox if failed
        document.getElementById('ancToggle').checked = !document.getElementById('ancToggle').checked;
        showToast('Failed to toggle ANC', 'error');
    }
}

// Update ANC UI
function updateANCUI() {
    const toggle = document.getElementById('ancToggle');
    const status = document.querySelector('.status-text');
    const dot = document.querySelector('.status-dot');

    toggle.checked = appState.ancEnabled;

    if (appState.ancEnabled) {
        status.textContent = 'ANC Active';
        status.style.color = 'var(--success-color, #4CAF50)';
        dot.style.background = 'var(--success-color, #4CAF50)';
    } else {
        status.textContent = 'Standby';
        status.style.color = '#666';
        dot.style.background = '#ccc';
    }
}

// Update intensity
async function updateIntensity(value) {
    const intensity = parseInt(value) / 100;
    document.getElementById('intensityValue').textContent = value + '%';

    try {
        const data = await api.request('/api/set_intensity', {
            method: 'POST',
            body: JSON.stringify({ intensity: intensity })
        });
        if (data.success) {
            appState.noiseIntensity = data.intensity;
        }
    } catch (error) {
        console.error('Update intensity error:', error);
    }
}

// Toggle prolonged detection
async function toggleProlonged(enabled) {
    try {
        const data = await api.request('/api/prolonged_detection', {
            method: 'POST',
            body: JSON.stringify({ enabled: enabled })
        });
        if (data.success) {
            appState.prolongedDetection = data.prolonged_detection;
            showToast(data.message, 'success');
        }
    } catch (error) {
        console.error('Toggle prolonged error:', error);
    }
}

// Update threshold
async function updateThreshold(value) {
    document.getElementById('thresholdValue').textContent = value + 's';
    try {
        const data = await api.request('/api/prolonged_detection', {
            method: 'POST',
            body: JSON.stringify({ threshold_seconds: parseInt(value) })
        });
        if (data.success) {
            appState.prolongedDetection = data.prolonged_detection;
        }
    } catch (error) {
        console.error('Update threshold error:', error);
    }
}

// Start status updates
function startStatusUpdates() {
    updateStatus();
    updateTimer = setInterval(updateStatus, UPDATE_INTERVAL);
}

// Update status from server
async function updateStatus() {
    try {
        const data = await api.request('/api/status');
        appState = { ...appState, ...data }; // Merge state

        updateANCUI();
        updateDetectionUI();
        updateStatsUI(data.stats);

        if (data.emergency_detected) {
            showEmergencyAlert(data.current_noise_class, data.detection_confidence);
        }
    } catch (error) {
        console.error('Status update error:', error);
    }
}

// Update detection UI
function updateDetectionUI() {
    const classEl = document.getElementById('detectionClass');
    const confidenceEl = document.getElementById('detectionConfidence');

    classEl.textContent = capitalize(appState.currentNoiseClass);
    confidenceEl.textContent = Math.round(appState.detectionConfidence * 100) + '%';
}

// Update statistics UI
function updateStatsUI(stats) {
    if (!stats) return;
    document.getElementById('statDetections').textContent = stats.total_detections || 0;

    const minutes = Math.floor((stats.anc_active_time || 0) / 60);
    document.getElementById('statUptime').textContent = `${minutes}m`;
}

// Show emergency alert
function showEmergencyAlert(noiseClass, confidence) {
    const alert = document.getElementById('emergencyAlert');
    alert.style.display = 'flex';
}

function dismissEmergency() {
    document.getElementById('emergencyAlert').style.display = 'none';
}

function acknowledgeEmergency() {
    showToast('Emergency acknowledged', 'warning');
    dismissEmergency();
}

// Check notifications (mocked for now or relying on API)
async function checkNotifications() {
    try {
        const data = await api.request('/api/notifications');
        if (data.notifications && data.notifications.length > 0) {
            data.notifications.forEach(n => showToast(n.message, 'info'));
        }
    } catch (e) {
        // Silent error
    }
}

// Clear notifications (unused in UI but kept for API completeness)
async function clearNotifications() {
    await api.request('/api/clear_notifications', { method: 'POST' });
}

async function resetStats() {
    if (!confirm('Reset stats?')) return;
    await api.request('/api/reset_stats', { method: 'POST' });
    showToast('Stats reset', 'success');
}

// Simulation (kept for internal testing via console)
async function simulateNoise(type, isEmergency) {
    await api.request('/api/simulate_noise', {
        method: 'POST',
        body: JSON.stringify({ noise_type: type, emergency: isEmergency })
    });
}

// Toast Notification
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

function capitalize(str) {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
}

// Expose globals
window.toggleANC = toggleANC;
window.updateIntensity = updateIntensity;
window.toggleProlonged = toggleProlonged;
window.updateThreshold = updateThreshold;
window.dismissEmergency = dismissEmergency;
window.acknowledgeEmergency = acknowledgeEmergency;
window.resetStats = resetStats;
window.simulateNoise = simulateNoise;

