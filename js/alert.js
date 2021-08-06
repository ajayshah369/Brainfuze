function hideAlert() {
  const el = $('.alert');
  if (el) el.remove();
}

export function showAlert(type, msg, time = 7) {
  hideAlert();
  const alert = `<div class="alert alert--${type}">${msg}</div>`;
  $('body').prepend(alert);
  window.setTimeout(hideAlert, time * 1000);
}
