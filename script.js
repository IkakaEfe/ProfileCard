// Elements
const timeSpan = document.querySelector('[data-testid="test-user-time"]');
const avatarInput = document.getElementById('avatarInput');
const avatarImage = document.getElementById('avatarImage');

// Update time immediately with Date.now() and then every 1s
function setTime() {
  // Date.now() in ms required by tests
  timeSpan.textContent = Date.now();
}
setTime();
const tick = setInterval(setTime, 1000);

// Avatar upload handler: reads file and sets image src to data URL
avatarInput.addEventListener('change', (e) => {
  const file = e.target.files && e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function(ev) {
    avatarImage.src = ev.target.result;
    // after upload, tests that check image src will see a blob/data url
  };
  reader.readAsDataURL(file);
});