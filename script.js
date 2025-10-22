// Time updater for Profile Card
const timeSpan = document.querySelector('[data-testid="test-user-time"]');
if (timeSpan) {
  const setTime = () => (timeSpan.textContent = Date.now());
  setTime();
  setInterval(setTime, 1000);
}

// Avatar upload (Profile page)
const avatarInput = document.getElementById('avatarInput');
const avatarImage = document.getElementById('avatarImage');
if (avatarInput && avatarImage) {
  avatarInput.addEventListener('change', (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => (avatarImage.src = ev.target.result);
    reader.readAsDataURL(file);
  });
}

// Contact form validation
const form = document.getElementById('contact-form');
if (form) {
  const successMsg = document.getElementById('success');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    const showError = (id, msg) => {
      const el = document.getElementById(`error-${id}`);
      el.textContent = msg;
      if (msg) valid = false;
    };

    showError('name', name.value.trim() ? '' : 'Full name is required.');
    showError('email', /^[^@]+@[^@]+\.[^@]+$/.test(email.value.trim()) ? '' : 'Enter a valid email.');
    showError('subject', subject.value.trim() ? '' : 'Subject is required.');
    showError('message', message.value.trim().length >= 10 ? '' : 'Message must be at least 10 characters.');

    if (valid) {
      successMsg.hidden = false;
      form.reset();
    } else {
      successMsg.hidden = true;
    }
  });
}
