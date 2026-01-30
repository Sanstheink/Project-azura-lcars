let idle;

function startIdle() {
  idle = setTimeout(() => {
    document.querySelectorAll('.panel').forEach((p, i) => {
      setTimeout(() => {
        p.classList.add('glow');
        setTimeout(() => p.classList.remove('glow'), 600);
      }, i * 200);
    });
  }, 90000);
}

function resetIdle() {
  clearTimeout(idle);
  startIdle();
}

document.onmousemove = resetIdle;
document.onclick = resetIdle;
startIdle();
