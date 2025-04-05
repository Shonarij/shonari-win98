document.addEventListener("DOMContentLoaded", () => {
  const arc = document.createElement("div");
  arc.style.position = "fixed";
  arc.style.top = "0";
  arc.style.left = "100%";
  arc.style.width = "4px";
  arc.style.height = "4px";
  arc.style.borderRadius = "50%";
  arc.style.background = "white";
  arc.style.zIndex = "1000";
  document.body.appendChild(arc);

  const fairyDust = [];

  const createDust = (x, y) => {
    const dust = document.createElement("div");
    dust.className = "fairy-dust";
    dust.style.position = "absolute";
    dust.style.left = `${x}px`;
    dust.style.top = `${y}px`;
    dust.style.width = "3px";
    dust.style.height = "3px";
    dust.style.borderRadius = "50%";
    dust.style.background = "white";
    dust.style.opacity = "0.8";
    dust.style.pointerEvents = "none";
    document.body.appendChild(dust);
    fairyDust.push(dust);

    setTimeout(() => {
      dust.remove();
    }, 1000);
  };

  let x = window.innerWidth;
  let y = 0;
  let interval = setInterval(() => {
    x -= 5;
    y += 1.5;
    arc.style.left = `${x}px`;
    arc.style.top = `${y}px`;
    createDust(x, y);
    if (x <= window.innerWidth / 2) {
      clearInterval(interval);
      document.getElementById("name-reveal").style.opacity = 1;
    }
  }, 20);
});
