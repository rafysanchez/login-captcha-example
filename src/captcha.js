let captchaText = '';

export function generateCaptcha() {
  const canvas = document.getElementById('captchaCanvas');
  const ctx = canvas.getContext('2d');
  
  // Set canvas size
  canvas.width = 150;
  canvas.height = 40;
  
  // Generate random text
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  captchaText = Array(6).fill().map(() => chars[Math.floor(Math.random() * chars.length)]).join('');
  
  // Clear canvas
  ctx.fillStyle = '#f8f9fa';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  
  // Add noise
  for (let i = 0; i < 50; i++) {
    ctx.strokeStyle = `rgba(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255},0.5)`;
    ctx.beginPath();
    ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
    ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
    ctx.stroke();
  }
  
  // Draw text
  ctx.font = 'bold 24px Arial';
  ctx.fillStyle = '#000';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(captchaText, canvas.width / 2, canvas.height / 2);
}

export function validateCaptcha(input) {
  return input === captchaText;
}