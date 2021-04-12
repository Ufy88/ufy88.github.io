var audio = new Audio();
audio.preload = 'auto';
audio.src = 'https://www.dropbox.com/s/fxd6yudjhdlh0jh/ÏÓÊ.mp3';
var timestamp = null;
var lastMouseX = null;
var lastMouseY = null;
document.body.addEventListener("mousemove", function (e) {
  if (timestamp === null) {
    timestamp = Date.now();
    lastMouseX = e.screenX;
    lastMouseY = e.screenY;
    return;
  }
  var now = Date.now();
  var dt = now - timestamp;
  var dx = e.screenX - lastMouseX;
  var dy = e.screenY - lastMouseY;
  var speedX = Math.round(dx / dt * 100);
  var speedY = Math.round(dy / dt * 100);
  timestamp = now;
  lastMouseX = e.screenX;
  lastMouseY = e.screenY;
  if ((Math.abs(speedX) > 400) || (Math.abs(speedY) > 400)) { audio.play(); };
});