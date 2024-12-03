import { generateCaptcha } from './captcha.js';
import { handleLogin } from './login.js';

// Initialize captcha
generateCaptcha();

// Add event listeners
document.getElementById('refreshCaptcha').addEventListener('click', generateCaptcha);
document.getElementById('loginForm').addEventListener('submit', handleLogin);