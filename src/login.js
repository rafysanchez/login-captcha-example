import { validateCaptcha, generateCaptcha } from './captcha.js';

export function handleLogin(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const captchaInput = document.getElementById('captchaInput').value;
  
  if (!validateCaptcha(captchaInput)) {
    alert('Invalid captcha! Please try again.');
    generateCaptcha();
    document.getElementById('captchaInput').value = '';
    return;
  }
  
  // Here you would typically make an API call to verify credentials
  // For demo purposes, we'll just show a success message
  alert(`Login successful!\nUsername: ${username}`);
  
  // Reset form
  event.target.reset();
  generateCaptcha();
}