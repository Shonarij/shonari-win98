const canvas = document.getElementById("introCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let progress = 0;
const radius = 250;
const centerX = canvas.width;
const centerY = canvas.height / 2;
const dustParticles = [];

function drawFrame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw arc
  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;
  const endAngle = Math.PI * (1 - progress);
  ctx.arc(centerX, centerY, radius, Math.PI, endAngle, true);
  ctx.stroke();

  // Add fairy dust particles at arc tip
  const dustX = centerX + radius * Math.cos(endAngle);
  const dustY = centerY + radius * Math.sin(endAngle);
  dustParticles.push({ x: dustX, y: dustY, alpha: 1 });

  // Draw dust
  for (let i = 0; i < dustParticles.length; i++) {
    const p = dustParticles[i];
    ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
    ctx.fill();
    p.y += 1; // fall
    p.alpha -= 0.01;
  }

  // Clean up old dust
  for (let i = dustParticles.length - 1; i >= 0; i--) {
    if (dustParticles[i].alpha <= 0) dustParticles.splice(i, 1);
  }

  if (progress < 1) {
    progress += 0.0025; // speed control
    requestAnimationFrame(drawFrame);
  }
}

drawFrame();
