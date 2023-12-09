import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
})

// reload kiosk every 10 minutes
window.setTimeout(() => {
  window.location.reload();
}, 1000 * 60 * 10);

export default app
